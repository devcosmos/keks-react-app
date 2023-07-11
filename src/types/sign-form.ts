type SignFieldProps = {
  value: string;
  error: string;
  valid: string;
  message: string;
  regex: RegExp;
}

export type SignFormProps = {
  [key: string]: SignFieldProps;
}
