import classNames from 'classnames';

type InputWrapperProps = {
  label: string;
  className: string;
  isSignUpPage?: boolean;
  isSignInPage?: boolean;
  message?: string;
  children: JSX.Element;
}

function InputWrapper({label, className, message, isSignUpPage = false, isSignInPage = false, children}: InputWrapperProps) {
  return (
    <div
      className={classNames(
        'custom-input',
        className,
        {'register-page__field': isSignUpPage},
        {'login-page__field': isSignInPage},
      )}
    >
      <label>
        <span className="custom-input__label">
          {label}
        </span>
        {children}
      </label>
      {message &&
        <span className="custom-input__message">
          {message}
        </span>}
    </div>
  );
}

export default InputWrapper;
