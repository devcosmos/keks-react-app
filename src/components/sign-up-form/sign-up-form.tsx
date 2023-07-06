import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { RegistrationData } from '../../types/users';
import { registrationAction } from '../../store/api-actions';
import InputWrapper from '../form-input/input-wrapper';

function SignUpForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<RegistrationData>({
    name: '',
    email: '',
    password: '',
  });

  const hanldeFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const hanldeFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(registrationAction(formData));
  };

  return (
    <form action="#" method="post" autoComplete="off" onSubmit={hanldeFormSubmit}>
      <div className="register-page__fields">
        <InputWrapper label="Введите ваше имя" className="register-page__field">
          <input
            onChange={hanldeFieldChange}
            value={formData.name}
            type="text"
            name="name"
            placeholder="Имя"
            required
          />
        </InputWrapper>
        <InputWrapper label="Введите вашу почту" className="register-page__field">
          <input
            onChange={hanldeFieldChange}
            value={formData.email}
            type="email"
            name="email"
            placeholder="Почта"
            required
          />
        </InputWrapper>
        <InputWrapper label="Введите ваш пароль" className="login-page__field">
          <input
            onChange={hanldeFieldChange}
            value={formData.password}
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />
        </InputWrapper>
        <InputWrapper label="Добавьте ваш аватар" className="login-page__field">
          <input
            type="file"
            name="avatar"
            data-text="Аватар"
            accept="image/jpeg"
          />
        </InputWrapper>
      </div>
      <button className="btn register-page__btn btn--large" type="submit">Зарегистрироваться</button>
    </form>
  );
}

export default SignUpForm;
