import { ChangeEvent, FormEvent, RefObject, useEffect, useRef, useState } from 'react';
import { POSITIVE_RATING_MIN_VALUE, RATING_INPUT_COUNT, RequestStatus, TEXT_REVIEW_MAX_LENGTH, TEXT_REVIEW_MIN_LENGTH } from '../../consts';
import { ReviewData } from '../../types/reviews';
import InputWrapper from '../form-input/input-wrapper';
import StarRatingInput from '../star-rating-input/star-rating-input';
import { addReviewAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getNoun } from '../utils';
import { getReviewsPublishStatus } from '../../store/reviews-data/selectors';

type ReviewFormProps = {
  productId: string;
}

function ReviewForm({productId}: ReviewFormProps): JSX.Element {
  const baseFormData = {
    id: productId,
    positive: '',
    negative: '',
    rating: 0,
  };
  const baseInputData = {
    positive: '',
    negative: '',
    rating: '',
  };

  const dispatch = useAppDispatch();

  const publishReviewsStatus = useAppSelector(getReviewsPublishStatus);

  const [formData, setFormData] = useState<ReviewData>(baseFormData);
  const [messageData, setMessageData] = useState(baseInputData);
  const [errorData, setErrorData] = useState(baseInputData);

  const refPositive = useRef<HTMLInputElement>(null);
  const refNegative = useRef<HTMLInputElement>(null);

  const validateInput = (ref: RefObject<HTMLInputElement>) => {
    const input = ref.current;

    if (input !== null) {
      let message = '';

      if (input.value.length || input.required) {

        if (input.value.length === 0) {
          message = 'заполните поле';
        } else if (input.value.length < TEXT_REVIEW_MIN_LENGTH) {
          message = `минимум ${TEXT_REVIEW_MIN_LENGTH} символов`;
        } else if (input.value.length > TEXT_REVIEW_MAX_LENGTH) {
          message = `максимум ${TEXT_REVIEW_MAX_LENGTH} символов`;
        }
      }

      setMessageData((prevState) => ({ ...prevState, [input.name]: message}));
      setErrorData((prevState) => ({ ...prevState, [input.name]: message.length ? 'is-invalid' : 'is-valid'}));

      return message.length === 0;
    }

    return false;
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;

    if (name === 'positive' || name === 'negative') {
      const messageCount = TEXT_REVIEW_MAX_LENGTH - value.length;
      const message = value.length > 0
        ? `осталось ${messageCount} ${getNoun(messageCount, 'символ', 'символа', 'символов')}`
        : '';

      setMessageData({...messageData, [name]: message});
    }

    setFormData({...formData, [name]: name === 'rating' ? Number(value) : value});
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formData.rating === 0) {
      setMessageData((prevState) => ({...prevState, 'rating': 'Обязательное поле'}));
    } else {
      setMessageData((prevState) => ({...prevState, 'rating': ''}));
      const positive = validateInput(refPositive);
      const negative = validateInput(refNegative);
      if (positive && negative) {
        dispatch(addReviewAction(formData));
      }
    }
  };

  useEffect(() => {
    if (publishReviewsStatus === RequestStatus.Fulfilled) {
      setFormData({id: productId, positive: '', negative: '', rating: 0});
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
                <InputWrapper label="Достоинства" className={errorData.positive} message={messageData.positive}>
                  <input
                    ref={refPositive}
                    onChange={handleInputChange}
                    type="text"
                    value={formData.positive}
                    name="positive"
                    placeholder="Достоинства"
                    required={formData.rating >= POSITIVE_RATING_MIN_VALUE}
                    disabled={publishReviewsStatus === RequestStatus.Pending}
                  />
                </InputWrapper>
                <InputWrapper label="Недостатки" className={errorData.negative} message={messageData.negative}>
                  <input
                    ref={refNegative}
                    onChange={handleInputChange}
                    type="text"
                    value={formData.negative}
                    name="negative"
                    placeholder="Недостатки"
                    required={formData.rating < POSITIVE_RATING_MIN_VALUE}
                    disabled={publishReviewsStatus === RequestStatus.Pending}
                  />
                </InputWrapper>
              </div>
              <div className="review-form__submit-wrapper">
                <div className="review-form__rating-wrapper" style={{ position: 'relative' }}>
                  {messageData.rating &&
                    <span
                      className="custom-input__message"
                      style={{ left: '0', top: '-20px' }}
                    >
                      {messageData.rating}
                    </span>}
                  <div className="input-star-rating">
                    {[...Array(RATING_INPUT_COUNT).keys()].map((rating, _, arr) => (
                      <StarRatingInput
                        key={rating}
                        rating={arr.length - rating}
                        currRating={formData.rating}
                        onChange={handleInputChange}
                      />
                    ))}
                  </div>
                </div>
                <div className="review-form__button-wrapper">
                  <button
                    className="btn review-form__button"
                    type="submit"
                    disabled={publishReviewsStatus === RequestStatus.Pending}
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
