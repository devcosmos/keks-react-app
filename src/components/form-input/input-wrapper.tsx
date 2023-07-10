type InputWrapperProps = {
  label: string;
  className: string;
  message?: string;
  children: JSX.Element;
}

function InputWrapper({label, className, message, children}: InputWrapperProps) {
  return (
    <div className={`custom-input ${className}`}>
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
