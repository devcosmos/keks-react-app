import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { AuthData } from '../../types/users';
import { loginAction } from '../../store/api-actions';
import InputWrapper from '../form-input/input-wrapper';

function SignInForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<AuthData>({
    email: '',
    password: '',
  });

  const hanldeFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const hanldeFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction(formData));
  };

  return (
    <form action="#" method="post" autoComplete="off" onSubmit={hanldeFormSubmit}>
      <div className="login-page__fields">
        <InputWrapper label="Введите вашу почту" className="login-page__field">
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
      </div>
      <button className="btn login-page__btn btn--large" type="submit">Войти</button>
    </form>
  );
}

export default SignInForm;
