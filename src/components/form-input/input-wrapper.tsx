type InputWrapperProps = {
  label: string;
  className: string;
  children: JSX.Element;
}

function InputWrapper({label, className, children}: InputWrapperProps) {
  return (
    <div className={`custom-input ${className}`}>
      <label>
        <span className="custom-input__label">{label}</span>
        {children}
      </label>
    </div>
  );
}

export default InputWrapper;
