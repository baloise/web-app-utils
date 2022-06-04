export type ValidationMessageValues<TValue = unknown, TArg = unknown> = {
  value: TValue
  arg: TArg
}

export type ValidationMessage<TValue = unknown, TArg = unknown> = {
  key: string
  values: ValidationMessageValues<TValue, TArg>
}
