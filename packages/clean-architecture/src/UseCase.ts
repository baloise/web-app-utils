import { Result } from './Result'

export interface UseCase<Context, TValue, TError = string> {
  execute(context: Context): Promise<Result<TValue, TError>>
}
