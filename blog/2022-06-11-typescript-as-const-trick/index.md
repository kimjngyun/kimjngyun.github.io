---
title: The Typescript "as const" trick
description: 타입스크립트의 const assertions에 대해서 알아봅시다.
authors: [jngyun]
tags: [Typescript]
---

> ## TL;DR

```typescript
const numbers = [1, 2, 3, 4, 5] as const;
type Numbers = typeof numbers[number];
// type Numbers = 1 | 2 | 3 | 4 | 5
```

<!--truncate-->

### 배열을 `as const`으로 하면 뭐가 달라질까?

[type-challenges 18](https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.ko.md)을 하던 중 궁금한 점이 생겼습니다. 문제는 다음과 같습니다.

> 배열(튜플)을 받아 길이를 반환하는 제네릭 `Length<T>`를 구현하세요.

저는 다음과 같이 `Length<T>`를 구현하였습니다.

```typescript
type Length<T extends { [x: number]: any; readonly length: number }> =
  T["length"];
```

그런데 배열을 `as const`로 단언한 경우에만 테스트를 통과합니다.

```typescript
import type { Equal, Expect } from "@type-challenges/utils";

const numbersAsConst = [1, 2, 3, 4, 5] as const;
const numbers = [1, 2, 3, 4, 5];

type cases = [
  Expect<Equal<Length<typeof numbersAsConst>, 5>>,
  // @ts-expect-error
  Expect<Equal<Length<typeof numbers>, 5>>
];
```

tsc는 `numbersAsConst`는 `readonly [1, 2, 3, 4, 5]` 라는 타입으로, `numbers`는 `numbers[]`로 가집니다. 이 둘의 차이는 무엇일까요?

`numbersAsConst` 와 같이 배열을 `const`로 단언하면 타입스크립트는 해당 배열에 들어갈 수 있는 항목의 종류를 쉽게 추론할 수 있습니다. 또한 모든 것들이 상수가 되고 _readonly_ 플래그를 가지게 됩니다. 그리고 우리는 배열에 넣은 것을 정확한 순서와 타입으로 볼 수 있지요.

### The Problem

이것은 언제 유용할까요? 다음 상황을 봅시다.

```typescript
const animals = ["cat", "dog", "mouse"];

function getAnimal(name: string) {
  return animals.find((a) => a === name);
}

// getAnimal('cat')      // OK
// getAnimal('dog')      // OK
// getAnimal('mouse')    // OK
// getAnimal('elephant') // undefined
```

`animals` 배열에 있는 문자열을 제외한 다른 입력값을 제한하고 싶습니다. 다음과 같이 할 수 있겠네요.

```typescript
const animals = ["cat", "dog", "mouse"];
type Animal = "cat" | "dog" | "mouse";

function getAnimal(name: Animal) {
  return animals.find((a) => a === name);
}

// getAnimal('cat')      // OK
// getAnimal('dog')      // OK
// getAnimal('mouse')    // OK
// getAnimal('elephant') // '"elephant"' 형식의 인수는 'Animal' 형식의 매개 변수에 할당될 수 없습니다.
```

그런데 우리가 원하는 것은 `animals` 배열의 값들을 일일히 유니온 타입으로 복제하는 것이 아닙니다. 배열에서 타입을 만들어봅시다.

### Inferred Array Types

```typescript
const animals = ["cat", "dog", "mouse"];

// const animals: string[]
```

위에서 `animals`는 스트링의 배열로 초기화했기 때문에 `string[]` 타입으로 추론되었습니다. 만약 `const animals = ["cat", "dog", 5];` 라고 초기화 했다면 `const animals: (string | number)[]` 타입으로 추론되었겠죠.

### Const Assertion

`string[]` 타입이 되는 것을 강요하지 않기 위해서 다음과 같은 작업을 할 수 있습니다.

```typescript
const animals = ["cat", "dog", "mouse"] as ["cat", "dog", "mouse"];

// const animals: ['cat', 'dog', 'mouse']
```

여기서 중복을 줄이기 위해 TypeScript 3.4에 도입된 [`const assertions`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)를 사용할 수 있습니다.

```typescript
const animals = ["cat", "dog", "mouse"] as ["cat", "dog", "mouse"];

// const animals: readonly['cat', 'dog', 'mouse']
```

### Getting a type from our array

이제 `typeof`를 통해 `aniamls`의 타입을 얻을 수 있습니다.

```typescript
const animals = ["cat", "dog", "mouse"] as const;
type Animal = typeof animals[number];

// type Animal = 'cat' | 'dog' | 'mouse'
```

### Array of Objects

인덱스 시그니처와 프로퍼티 키를 제공하여 다음과 같이 사용할 수 있습니다.

```typescript
const animals = [
  { species: "cat", name: "Fluffy" },
  { species: "dog", name: "Fido" },
  { species: "mouse", name: "Trevor" },
] as const;

type Animal = typeof animals[number]["name"];

/// type Animal = "Fluffy" | "Fido" | "Trevor"
```

### 결론

`const assertions`을 이용하면

1. 리터럴 타입은 넓게 추론되지 않습니다. (예시. `"hello"` 가 `string`이 되지 않습니다.)
2. 객체 리터럴은 _readonly_ 프로퍼티를 가집니다.
3. 배열 리터럴은 _readonly_ 튜플이 됩니다.

### 참고

[types from array](https://steveholgado.com/typescript-types-from-arrays/)

[typescript as const](https://www.bscotch.net/post/typescript-as-const)

[const assertion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)
