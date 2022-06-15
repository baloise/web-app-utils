# @baloise/web-app-clean-architecture

[![Continuous](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/continuous.yml)
[![Release](https://github.com/baloise/web-app-utils/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/baloise/web-app-utils/actions/workflows/release.yml)
![npm](https://img.shields.io/npm/v/@baloise/web-app-clean-architecture)
![npm bundle size](https://img.shields.io/bundlephobia/min/@baloise/web-app-clean-architecture)
![npm](https://img.shields.io/npm/dt/@baloise/web-app-clean-architecture)
![GitHub](https://img.shields.io/github/license/baloise/web-app-utils)
![GitHub issues](https://img.shields.io/github/issues/baloise/web-app-utils)

## Installation

A small TypeScript library to follow the clean architecture pattern.

```bash
npm install @baloise/web-app-clean-architecture
```

## Domain

In the domain layer a DomainError can be thrown.
Use the DomainError to improve debugging and the stack trace.

Define a custom error with extends the imported DomainError.

```typescript
import { DomainError } from '@baloise/web-app-clean-architecture'

export class MaxShoppingCartItemAmountError extends DomainError {
  constructor(...params: any[]) {
    super('MaxShoppingCartItemAmountError', ...params)
  }
}
```

In the domain file import the custom domain error and throw it like a normal error.

```typescript
import { CartItem, createCartItem } from './CartItem'
import { MaxShoppingCartItemAmountError } from './error/MaxShoppingCartItemAmountError'
import { Pizza } from './Pizza'

export class Cart {
  constructor(public readonly items: CartItem[] = []) {}
}

export function createCart(cart?: Partial<Cart>): Cart {
  const { items } = { ...new Cart(), ...cart }
  return new Cart(items)
}

export function addPizza(cart: Cart, pizza: Pizza): Cart {
  const newCart = createCart(cart)
  const index = findIndex(newCart, pizza)

  if (index >= 0) {
    const { amount } = newCart.items[index]
    const newAmount = amount + 1

    if (newAmount > 10) {
      throw new MaxShoppingCartItemAmountError()
    }

    newCart.items[index] = createCartItem({ pizza, amount: newAmount })
  } else {
    newCart.items.push(createCartItem({ pizza, amount: 1 }))
  }

  return newCart
}
```

## Service

### UseCase

The UseCase `Context` is what is passed in the execute method. The second generic type `Pizza[]` defines the value of the returned `Result` object.

```typescript
interface Context {
  pizza: Pizza
}

export class AddPizzaUseCase implements UseCase<Context, Pizza[]> {
  async execute(context): Promise<Result<Pizza[], string>> {
    console.log(context.pizza)
    ...
    return Result.ok([])
  }
}
```

To inject adapters or ports use the constructor of the UseCase.

```typescript
interface Context {}

export class FetchAllPizzasUseCase implements UseCase<Context, Pizza[]> {
  constructor(private readonly api: PizzaApi) {}

  async execute(): Promise<Result<Pizza[], string>> {
    const result = await this.api.getAll()

    if (result.isSuccess) {
      const json = await result.value()
      const pizzas = json.map((item: Pizza) => createPizza(item))
      return Result.ok(pizzas)
    } else {
      return Result.fail('Could not load pizzas form server')
    }
  }
}
```

### Result

Result is used to identify if a function was successful or failed.
And most importantly, do not throw errors.

First we have a function to load some pizza objects form the server.
In the function we return a Result instance.

```typescript
export async function fetchAllPizzas() {
  const response = await fetch('/api/pizzas')

  if (response.status === 200) {
    const data = await response.json()
    return Result.ok(data)
  }

  return Result.fail('Could not load pizzas form server')
}
```

Now we call the defined `fetchAllPizzas` function, which return a instance of Result.

With result.isSuccess we can easily check if the process was successful.

```typescript
const result = await fetchAllPizzas()

if (result.isSuccess) {
  // continue with the happy flow
} else {
  // do some error handling
}
```
