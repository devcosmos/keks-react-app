import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSingUpRequestStatus } from '../../store/user-process/selectors';
import { registrationAction } from '../../store/api-actions';
import { DEFAULT_DATA_FOR_SIGN_UP, RequestStatus } from '../../consts';
import InputWrapper from '../form-input/input-wrapper';
import { SignFormData } from '../../types/users';

function SignUpForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<SignFormData>(DEFAULT_DATA_FOR_SIGN_UP);

  const singUpRequestStatus = useAppSelector(getSingUpRequestStatus);

  const hanldeFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;

    let message = '';

    if (value.length === 0) {
      message = 'заполните поле';
    } else if (!formData[name].regex.test(value)) {
      message = formData[name].error;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        message,
        valid: message.length ? 'is-invalid' : 'is-valid',
      }
    }));
  };

  const hanldeFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formData.name.valid === 'is-valid' &&
        formData.email.valid === 'is-valid' &&
        formData.password.valid === 'is-valid') {
      dispatch(registrationAction({
        name: formData.name.value,
        email: formData.email.value,
        password: formData.password.value,
      }));
    }
  };

  useEffect(() => {
    if (singUpRequestStatus === RequestStatus.Fulfilled) {
      setFormData(DEFAULT_DATA_FOR_SIGN_UP);
    }
  }, [singUpRequestStatus]);

  return (
    <form method="post" autoComplete="off" onSubmit={hanldeFormSubmit} noValidate>
      <div className="register-page__fields">
        <InputWrapper
          label="Введите ваше имя"
          className={formData.name.valid}
          message={formData.name.message}
          isSignUpPage
        >
          <input
            onChange={hanldeFieldChange}
            value={formData.name.value}
            type="text"
            name="name"
            placeholder="Имя"
            disabled={singUpRequestStatus === RequestStatus.Pending}
            required
          />
        </InputWrapper>
        <InputWrapper
          label="Введите вашу почту"
          className={formData.email.valid}
          message={formData.email.message}
          isSignUpPage
        >
          <input
            onChange={hanldeFieldChange}
            value={formData.email.value}
            type="email"
            name="email"
            placeholder="Почта"
            disabled={singUpRequestStatus === RequestStatus.Pending}
            required
          />
        </InputWrapper>
        <InputWrapper
          label="Введите ваш пароль"
          className={formData.password.valid}
          message={formData.password.message}
          isSignUpPage
        >
          <input
            onChange={hanldeFieldChange}
            value={formData.password.value}
            type="password"
            name="password"
            placeholder="Пароль"
            autoComplete="on"
            disabled={singUpRequestStatus === RequestStatus.Pending}
            required
          />
        </InputWrapper>
      </div>
      <button
        className="btn register-page__btn btn--large"
        type="submit"
        disabled={
          singUpRequestStatus === RequestStatus.Pending ||
          formData.name.valid !== 'is-valid' ||
          formData.email.valid !== 'is-valid' ||
          formData.password.valid !== 'is-valid'
        }
      >
        Зарегистрироваться
      </button>
    </form>
  );
}

export default SignUpForm;
