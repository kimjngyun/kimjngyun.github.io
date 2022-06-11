---
title: Property Attribute
authors: [jngyun]
tags: [Javascript]
---

> ### TL;DR

자바스크립트의 프로퍼티 어트리뷰트에 대해서 알아봅시다.

<!--truncate-->

### 내부 슬롯과 내부 메서드

이중 대괄호 **\[\[]]** 로 감싼 이름들이 내부 슬롯과 내부 메서드입니다. 내부 슬롯과 내부 메서드는 ECMAScript 사양에 정의된 대로 구현되어 자바스크립트 엔진 내에서 동작하지만 개발자가 직접 접근할 수 있도록 외부에 공개된 객체의 프로퍼티는 아닙니다. 원칙적으로 자바스크립트는 내부 슬롯과 내부 메서드에 직접적으로 접근하거나 호출할 수 있는 방법을 제공하지 않습니다. 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 합니다. 그 예시로 **\[\[Prototype\]\]** 는 모든 객체가 가지는 내부 슬롯이고 이것은 `__proto__` 를 통해 간접적으로 접근할 수 있습니다.

<!--truncate-->

### 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의합니다. `Object.getOwnPropertyDescriptor` 메서드에 객체의 참조와 프로퍼티 키를 전달하여 호출하면 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환합니다. 만약 존재하지 않는 프로퍼티나 상속받은 프로퍼티에 대한 프로퍼티 디스크립터를 요구하면 `undefined` 가 반환됩니다. `Object.getOwnPropertyDescriptors` 메서드는 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환합니다.

### 데이터 프로퍼티와 접근자 프로퍼티

프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있습니다.

- **데이터 프로퍼티**: 키와 값으로 구성된 일반적인 프로퍼티
- **접근자 프로퍼티**: 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티

```javascript
const person = {
  firstName: "Jngyun",
  lastName: "Kim",

  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // setter
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(person.firstName, person.lastName);
// Jngyun Kim

person.fullName = "Changha Lee";
console.log(person);
// { firstName: "Changha", lastName: "Lee", fullName: [Getter/Setter] }

console.log(person.fullName);
// Changha Lee

console.log(Object.getOwnPropertyDescriptors(person));
/**
 *{
 *  firstName: { value: "Changha", writable: true, enumerable: true, configurable: true },
 *  lastName: { value: "Lee", writable: true, enumerable: true, configurable: true },
 *   fullName: {
 *     get: [Function: get fullName],
 *     set: [Function: set fullName],
 *     enumerable: true,
 *     configurable: true
 *   }
 * }
 */
```

위의 예시를 통해 자세히 알아봅시다. `person` 객체는 `firstName`과 `lastName` 2개의 데이터 프로퍼티를 가진다. `Object.getOwnPropertyDescriptors` 를 통해 프로퍼티 어트리뷰트를 확인해봅시다. 각각의 데이터 프로퍼티는 4개의 프로퍼티 어트리뷰트를 가지게 됩니다. 이 프로퍼티 어트리뷰트는 자바스크립트 엔진이 프로퍼티를 생성할 때 기본값으로 자동 정의 됩니다.

- **\[\[Value\]\]** : 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값입니다. 프로퍼티 키를 통해 값을 변경하면 해당 프로퍼티 어트리뷰트에 값을 재할당 합니다. 프로퍼티가 없으면 프로퍼티를 동적 생성하고 생성된 프로퍼티의 **\[\[Value\]\]** 에 값을 저장합니다.
- **\[\[Writable\]\]** : 프로퍼티 값의 변경 가능 여부를 나타냅니다.
- **\[\[Enumerable\]\]** : 프로퍼티의 열거 가능 여부를 나타내며 불리언 값을 가집니다.
- **\[\[Configurable\]\]** : 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 가집니다. 이 값이 `false`인 경우 해당 프로퍼티의 삭제 및 프로퍼티 어트리뷰트 값의 변경이 금지됩니다. 단 **\[\[Writable\]\]** 이 `true` 인 경우 **\[\[Value\]\]** 값의 변경과 **\[\[Writable\]\]** 을 false`로 변경하는 것은 가능합니다.

다음으로 접근자 프로퍼티인 `fullName` 을 봅시다. 여기서는 데이터 프로퍼티와는 다르게 `value`와 `writable` 항목이 없고 대신에 `get` 과 `set` 이 있습니다.

- **\[\[Get\]\]** : 접근자 프로퍼티를 통해 프로퍼티 값에 접근하면 **\[\[Get\]\]** 의 값인 `getter` 함수가 호출되고 그 결과가 프로퍼티 값으로 반환됩니다.
- **\[\[Set\]\]** : 접근자 프로퍼티를 통해 값을 저장할 때 **\[\[Set\]\]** 의 값이 `setter` 함수가 호출되고 그 결과가 프로퍼티 값으로 저장됩니다.

접근자 함수는 `getter/setter` 함수라고도 부릅니다. 접근자 프로퍼티는 두 함수를 모두 정의할 수도 있고 둘 중 하나만 정의할 수도 있습니다.

### 프로퍼티 정의

`Object.defineProperty` 메서드를 사용하면 프로퍼티의 어트리뷰트를 정의할 수 있습니다. 인수로는 객체의 참조와 데이터 프로퍼티의 키인 문자열, 프로퍼티 디스크립터 객체를 전달합니다.

```javascript
const person = {};
const descriptor = {
  value: "Kim",
  writable: true,
  enumerable: true,
  configurable: true,
};
Object.defineProperty(person, "lastName", descriptor);

Object.defineProperty(person, "firstName", {
  ...descriptor,
  value: "Jngyun",
  enumerable: false,
});

console.log(person);
// { lastName: "Kim" }

console.log(Object.getOwnPropertyDescriptors(person));
/**
 *{
 *  lastName: { value: "Kim", writable: true, enumerable: true, configurable: true },
 *  firstName: { value: "Jngyun", writable: true, enumerable: false, configurable: true }
 *}
 */
```

디스크립터 객체의 프로퍼티를 생략했을때의 기본값은 `false`로 적용됩니다. `Object.defineProperty` 를 사용하면 여러개의 프로퍼티를 한 번에 정의할 수 있습니다.

```javascript
const person2 = {};
Object.defineProperties(person2, {
  name: {
    value: "jngyun",
    writable: true,
  },
  age: {
    value: 25,
    writable: true,
  },
  information: {
    get() {
      return `name: ${this.name}, age: ${this.age}`;
    },
    enumerable: false,
    configurable: false,
  },
});

console.log(person2.information);
// name: jngyun, age: 25

console.log(person2);
// { name: "jngyun", age: 25 }
```

### 객체 변경 감지

객체는 변경 가능한 값이므로 재할당 없이 프로퍼티를 추가하거나 삭제할 수 있고, 프로퍼티 값을 갱신할 수 있으며 `Object.defineProperty` 또는 `Object.defineProperties` 를 통해 프로퍼티 어트리뷰트 또한 재정의할 수 있습니다. 자바스크립트는 객체의 변경을 방지하는 다양한 메서드를 제공합니다. 편의상 서술하는 다음 메서드들은 위쪽에 있는 메서드의 변경 금지 강도를 상속합니다.

- `Object.preventExtensions` : 프로퍼티 추가 방지
- `Object.seal` : 프로퍼티 삭제 방지, 프로퍼티 어트리뷰트 재정의 방지
- `Object.freeze` : 프로퍼티 값 쓰기 방지

`Object.preventExtensions` 메서드는 객체의 확장을 금지합니다. 객체가 확장이 가능한지의 여부는 `Object.isExtensible` 메서드로 확인가능합니다. 프로퍼티 삭제는 가능합니다.

```javascript
const person = { name: "jngyun" };
console.log(Object.isExtensible(person)); // true
Object.preventExtensions(person);
console.log(Object.isExtensible(person)); // false

person.age = 20;
// error: Uncaught TypeError: Cannot add property age, object is not extensible
```

`Object.seal` 은 객체를 밀봉합니다. 밀봉된 객체는 읽기와 쓰기만 가능합니다. 이 여부는 `Object.isSealed` 메서드로 확인가능합니다. 프로퍼티 삭제가 금지되고 어트리뷰트 재정의가 금지됩니다.

```javascript
person = { name: "jngyun" };
console.log(Object.isSealed(person)); // false
Object.seal(person);
console.log(Object.isSealed(person)); // true

Object.defineProperty(person, "name", { value: "jngyun", enumerable: false });
// error: Uncaught TypeError: Cannot redefine property: name
```

`Object.freeze` 메서드는 객체를 동결합니다. 동결된 객체는 읽기만 가능합니다. 동결된 객체인지 여부는 `Object.isFrozen` 으로 확인할 수 있습니다.

```javascript
person = { name: "jngyun" };
console.log(Object.isFrozen(person)); // false
Object.freeze(person);
console.log(Object.isFrozen(person)); // true

person.name = "changha";
// error: Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
```

위 메서드들은 얕은 변경 감지로 직속 프로퍼티만 변경이 방지되고 중첩 객체까지 영향을 주진 못합니다. 따라서 `Object.freeze` 메서드로 객체를 동결하여도 중첩 객체까지 동결할 수 없습니다.

```javascript
const person2 = {
  favor: { food: ["apple", "chicken"], movie: ["spiderman"] },
  name: "jngyun",
};
Object.freeze(person2);
console.log(Object.isFrozen(person2.favor)); // false

try {
  person2.favor.food = ["chicken", "pizza"];
  console.log(person2);
} catch (e) {
  console.log(e);
}
// { favor: { food: [ "chicken", "pizza" ], movie: [ "spiderman" ] }, name: "jngyun" }

try {
  person2.name = "changha";
  console.log(person2);
} catch (e) {
  console.log(e);
}
// TypeError: Cannot assign to read only property 'name' of object '#<Object>'
```

---

#### 참고

이웅모, **『모던 자바스크립트 Deep Dive』**, 위키북스(2020), p219-233.

[Property attributes: an introduction](https://exploringjs.com/deep-js/ch_property-attributes-intro.html)

[Object - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)
