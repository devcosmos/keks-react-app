import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSingInRequestStatus } from '../../store/user-process/selectors';
import { loginAction } from '../../store/api-actions';
import { DEFAULT_DATA_FOR_SIGN_IN, RequestStatus } from '../../consts';
import InputWrapper from '../form-input/input-wrapper';
import { SignFormData } from '../../types/users';

function SignInForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<SignFormData>(DEFAULT_DATA_FOR_SIGN_IN);

  const singInRequestStatus = useAppSelector(getSingInRequestStatus);

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
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

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formData.email.valid === 'is-valid' && formData.password.valid === 'is-valid') {
      dispatch(loginAction({
        email: formData.email.value,
        password: formData.password.value,
      }));
    }
  };

  return (
    <form action="#" method="post" autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="login-page__fields">
        <InputWrapper
          label="Введите вашу почту"
          className={formData.email.valid}
          message={formData.email.message}
          isSignInPage
        >
          <input
            onChange={handleFieldChange}
            value={formData.email.value}
            type="email"
            name="email"
            placeholder="Почта"
            disabled={singInRequestStatus === RequestStatus.Pending}
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
            onChange={handleFieldChange}
            value={formData.password.value}
            type="password"
            name="password"
            placeholder="Пароль"
            autoComplete="on"
            disabled={singInRequestStatus === RequestStatus.Pending}
            required
          />
        </InputWrapper>
      </div>
      <button
        className="btn login-page__btn btn--large"
        type="submit"
        disabled={
          singInRequestStatus === RequestStatus.Pending ||
          formData.email.valid !== 'is-valid' ||
          formData.password.valid !== 'is-valid'
        }
      >
        Войти
      </button>
    </form>
  );
}

export default SignInForm;
