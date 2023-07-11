import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { DEFAULT_DATA_FOR_REVIEW, POSITIVE_RATING_MIN_VALUE, RATING_INPUT_COUNT, RequestStatus, TEXT_REVIEW_MAX_LENGTH, TEXT_REVIEW_MIN_LENGTH } from '../../consts';
import { ReviewFormData } from '../../types/reviews';
import InputWrapper from '../form-input/input-wrapper';
import StarRatingInput from '../star-rating-input/star-rating-input';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getReviewsPublishStatus } from '../../store/reviews-data/selectors';
import { getNoun } from '../utils';
import { addReviewAction } from '../../store/api-actions';

type ReviewFormProps = {
  productId: string;
}

function ReviewForm({productId}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const publishReviewsStatus = useAppSelector(getReviewsPublishStatus);

  const [formData, setFormData] = useState<ReviewFormData>(DEFAULT_DATA_FOR_REVIEW);

  const getMessageAndValid = (length: number, required: boolean): string[] => {
    let message = '';
    let valid = '';

    const messageCount = TEXT_REVIEW_MAX_LENGTH - length;
    if (length === 0 && required) {
      message = 'заполните поле';
      valid = 'is-invalid';
    } else if (length > 0 && length < TEXT_REVIEW_MIN_LENGTH) {
      message = `минимум ${TEXT_REVIEW_MIN_LENGTH} символов`;
      valid = 'is-invalid';
    } else if (length > 0 && length > TEXT_REVIEW_MAX_LENGTH) {
      message = `максимум ${TEXT_REVIEW_MAX_LENGTH} символов`;
      valid = 'is-invalid';
    } else if (length > 0) {
      message = `осталось ${messageCount} ${getNoun(messageCount, 'символ', 'символа', 'символов')}`;
      valid = 'is-valid';
    }

    return [message, valid];
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;

    if (name === 'rating') {
      const [positiveMessage, positiveValid] = getMessageAndValid(
        formData.positive.value.toString().length, Number(value) >= POSITIVE_RATING_MIN_VALUE
      );
      const [negativeMessage, negativeValid] = getMessageAndValid(
        formData.negative.value.toString().length, Number(value) < POSITIVE_RATING_MIN_VALUE
      );

      setFormData((prevState) => ({
        rating: { ...prevState.rating, value },
        positive: { ...prevState.positive, valid: positiveValid, message: positiveMessage },
        negative: { ...prevState.negative, valid: negativeValid, message: negativeMessage },
      }));
    } else {
      const [message, valid] = getMessageAndValid(value.length, evt.target.required);

      setFormData((prevState) => ({
        ...prevState,
        [name]: { ...prevState[name], value, message, valid }
      }));
    }
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formData.positive.valid !== 'is-invalid' && formData.negative.valid !== 'is-invalid' && formData.rating.value !== 0) {
      dispatch(addReviewAction({
        id: productId,
        positive: formData.positive.value.toString(),
        negative: formData.negative.value.toString(),
        rating: Number(formData.rating.value),
      }));
    }
  };

  useEffect(() => {
    if (publishReviewsStatus === RequestStatus.Fulfilled) {
      setFormData(DEFAULT_DATA_FOR_REVIEW);
    }
  }, [productId, publishReviewsStatus]);

  return (
    <section className="review-form">
      <div className="container">
        <div className="review-form__wrapper">
          <h2 className="review-form__title">оставить отзыв</h2>
          <div className="review-form__form">
            <form action="#" method="post" autoComplete="off" onSubmit={handleFormSubmit} noValidate>
              <div className="review-form__inputs-wrapper">
                <InputWrapper label="Достоинства" className={formData.positive.valid} message={formData.positive.message}>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    value={formData.positive.value}
                    name="positive"
                    placeholder="Достоинства"
                    required={Number(formData.rating.value) >= POSITIVE_RATING_MIN_VALUE}
                    disabled={publishReviewsStatus === RequestStatus.Pending}
                  />
                </InputWrapper>
                <InputWrapper label="Недостатки" className={formData.negative.valid} message={formData.negative.message}>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    value={formData.negative.value}
                    name="negative"
                    placeholder="Недостатки"
                    required={Number(formData.rating.value) < POSITIVE_RATING_MIN_VALUE}
                    disabled={publishReviewsStatus === RequestStatus.Pending}
                  />
                </InputWrapper>
              </div>
              <div className="review-form__submit-wrapper">
                <div className="review-form__rating-wrapper" style={{ position: 'relative' }}>
                  <div className="input-star-rating">
                    {[...Array(RATING_INPUT_COUNT).keys()].map((rating, _, arr) => (
                      <StarRatingInput
                        key={rating}
                        rating={arr.length - rating}
                        currRating={Number(formData.rating.value)}
                        onChange={handleInputChange}
                      />
                    ))}
                  </div>
                </div>
                <div className="review-form__button-wrapper">
                  <button
                    className="btn review-form__button"
                    type="submit"
                    disabled={
                      publishReviewsStatus === RequestStatus.Pending ||
                      formData.positive.valid === 'is-invalid' ||
                      formData.negative.valid === 'is-invalid' ||
                      formData.rating.value === 0
                    }
                  >
                    {publishReviewsStatus === RequestStatus.Pending ? 'Отправка' : 'Отправить отзыв'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewForm;
