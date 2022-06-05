---
slug: mdx-blog-post
title: Understanding Weak Reference In Javascript
authors: [jngyun]
tags: [Javascript]
---

원문

[Understanding Weak Reference In JavaScript](https://www.smashingmagazine.com/2022/05/understanding-weak-reference-javascript/)

요약

본문에서 Frank Joseph은 도달 가능성(reachability)와 Javascript에서 weak, strong references에 대해서 설명합니다. Let's dig in!

메모리와 성능 관리는 소프트웨어 개발 측면에서 중요하고 모든 소프트웨어 개발자들은 주의를 기울여야 합니다. Weak references는 그 유용성에도 불구하고 Javascript에서 자주 쓰이지 않습니다. `WeakSet`과 `WeakMap`은 Javascript ES6에 도입되었습니다.

## Weak Reference

명확히 하자면, 강한 참조와 달리 약한 참조는 참조된 개체가 메모리의 개체에 대한 유일한 참조인 경우에도 가비지 컬렉터에 의해 회수되거나 수집되는 것을 방지하지 않습니다. strong reference, WeakSet, Set, WeakMap, 그리고 Map에 대해 논하기에 앞서 다음 코드 조각을 통해 weak reference에 대해 설명하겠습니다.

```javascript
// Create an instance of the WeakMap object.
let human = new WeakMap():

// Create an object, and assign it to a variable called man.
let man = { name: "Joe Doe" };

// Call the set method on human, and pass two arguments (key and value) to it.
human.set(man, "done")

console.log(human)
```

위 코드의 결과는 다음과 같은 것입니다.

```javascript
WeakMap {{...} => 'done'}

man = null;
console.log(human)
```

`man` 인수는 `WeakMap` 객체로 설정됩니다. `man` 변수를 `null`로 재할당하는 순간, 메모리에 있는 원본 객체에 대한 유일한 참조는 약한 참조였으며 이전에 만든 `WeakMap`에서 가져왔습니다. Javascript 엔진이 가비지 컬렉션 프로세스를 실행할 때 `man` 객체는 메모리와 우리가 할당한 `WeakMap`에서 제거됩니다. 약한 참조이고 가비지 컬렉션을 방지하지 않기 때문입니다.

강한 참조에 대해 이야기한 다음 모든 것을 하나로 묶겠습니다.

## Strong Reference

Javascript에서의 강한 참조는 객체가 가비지 컬렉터에 의해 메모리 해제되는 것을 막는 참조입니다. 이것은 객체를 메모리에 유지합니다.

다음 코드 조각은 강한 참조의 개념에 대해 보여줍니다.

```javascript
let man = { name: "Joe Doe" };

let human = [man];

man = null;
console.log(human);
```

결과는 다음과 같습니다.

```javascript
// An array of objects of length 1.
[{…}]
```

`human` 배열과 객체 사이에 존재하는 강한 참조때문에 `dog` 변수를 통해 객체에 접근할 수 없게 됩니다. 개체는 메모리에 유지되며 다음 코드로 접근할 수 있습니다:

```javascript
console.log(human[0]);
```

여기서 주목할점은 약한 참조는 객체가 가비지 컬렉터에 의해 메모리 해제되는 것을 막지 못하는 반면, 강한 참조는 막아줍니다.

## Garbage Collection In Javascript

모든 프로그래밍 언어에서와 같이, 메모리 관리는 Javascript를 작성할때 고려해야하는 중요한 요소입니다. C와 다르게, Javascript는 객체가 생성될때 자동으로 메모리를 할당하고, 더 이상 필요하지 않을때 자동으로 메모리를 해제하는 고급 프로그래밍 언어입니다. 객체가 더이상 사용되지 않을 때 메모리를 해제하는 과정을 가비지 컬렉션이라고 합니다. 도달 가능성에 대한 개념 없이 자바스크립트에서 가비지 컬렉션에 대해 논하는 것은 거의 불가능합니다.

## Reachability

특정 범위 내에 있거나 범위 내에서 사용 중인 모든 값은 해당 범위 내에서 "도달 가능"하다고 하며 "도달 가능한 값"이라고 합니다. 도달 가능한 값은 항상 메모리에 저장됩니다.

만약 다음과 같다면 도달 가능한 값으로 여겨집니다:

- 프로그램의 root에 있는 값이나 root에서 참조되는 값들, 예를 들어 전역 변수나 현재 실형중인 함수와 그것의 컨텍스트 혹은 콜백;
- 참조 또는 참조 체인을 통해 루트에서 액세스할 수 있는 값(예: 다른 객체를 참조하는 전역 변수의 객체, 다른 객체도 참조하는 이러한 객체는 모두 도달 가능한 값으로 간주됩니다).

다음 코드 조각은 도달 가능성에 대한 개념을 설명합니다:

```javascript
let languages = { name: "Javascript" };
```

여기 전역 변수 `languages`를 참조하는 키-값 쌍을 가진 객체가 있습니다. 만약 우리가 `languages`의 값에 `null`을 할당하며 덮어쓰게 된다면...

```javascript
languages = null;
```

...그러면 객체는 가비지 컬렉션에 의해 메모리 해제될 것이고, `Javascript` 값은 다시 접근하지 못하게 됩니다. 다른 예시를 봅시다.

```javascript
let languages = { name: "Javascript" };

let programmer = languages;
```

위의 코드 조각에서 우리는 `languages` 변수와 `programmer` 변수 모두를 통해서 객체의 프로퍼티에 접근할 수 있습니다. 하지만, 만약 우리가 `languages`를 `null`로 설정한다면...

```javascript
languages = null;
```

...그러면 객체는 `programmer` 변수를 통해서 접근할 수 있기 때문에 여전히 메모리에 존재합니다. 이것이 가비지 컬렉션이 작동하는 방식입니다.

Note: 기본적으로 JavaScript는 참조에 대해 강한 참조를 사용합니다. JavaScript에서 약한 참조를 구현하려면 WeakMap, WeakSet 또는 WeakRef를 사용합니다.

## Comparing Set And WeakSet

set 객체는 한번만 등장하는 유일한 값들의 집합입니다. set은 array와 비슷하게 키-값 쌍을 가지지 않습니다. 우리는 배열의 집합을 array 메서드인 `for ... of`와 `.forEach`를 이용하여 순회할 수 있습니다.

다음은 `for ... of`를 통해 순회하는 예시입니다.

```javascript
let setArray = new Set(["Joseph", "Frank", "John", "Davies"]);
for (let names of setArray) {
  console.log(names);
} // Joseph Frank John Davies
```

마찬가지로 `.forEach`를 이용할 수 있습니다.

```javascript
setArray.forEach((name, nameAgain, setArray) => {
  console.log(names);
});
```

WeakSet은 유일한 객체들의 집합입니다. 이름에서 암시하듯이 `WeakSet`은 약한 참조를 사용합니다. 다음은 `WeakSet()`의 특징입니다:

- 오직 객체만 포함한다.
- 집합 내부의 객체들은 다른곳 어딘가에서 접근 가능하다.
- It cannot be looped through.
- `Set()`처럼, `WeakSet()`은 `add`, `has`, 그리고 `delete` 메서드를 가집니다.

아래 코드는 `WeakSet()`과 사용가능한 일부 메서드에 대해 소개합니다.

```javascript
const human = new WeakSet();

let paul = { name: "Paul" };
let mary = { gender: "Mary" };

// Add the human with the name paul to the classroom.
const classroom = human.add(paul);

console.log(classroom.has(paul)); // true

paul = null;

// The classroom will be cleaned automatically of the human paul.

console.log(classroom.has(paul)); // false
```

첫번재 라인에서 `WeakSet()`의 인스터스를 만들었습니다. 3, 4번째 라인에서 객체를 만들고 각각의 변수에 할당했습니다. 7번째 라인에서 `paul`을 `WeakSet()`에 넣고, 그것을 `classroom` 변수에 할당해주었습니다. 11번 라인에서 우리는 `paul`이 `null`을 참조하게 해주었습니다. 15번째 라인에서 `WeakSet()`이 자동으로 제거되기 때문에 `false` 을 출력합니다; `WeakSet()`은 가비지 컬렉션을 방지하지 않습니다.

## Comparing Map And WeakMap

위의 가비지 컬렉션 섹션에서 알 수 있듯이 JavaScript 엔진은 값이 도달할 수 있는 한 메모리에 그 값을 유지합니다. 몇 가지 예시를 봅시다.

```javascript
let smashing = { name: "magazine" };
// The object can be accessed from the reference.

// Overwrite the reference smashing.
smashing = null;
// The object can no longer be accessed.
```

데이터 구조의 속성은 데이터 구조가 메모리에 있는 동안 도달 가능한 것으로 간주되며 일반적으로 메모리에 유지됩니다. 배열에 객체를 저장하면 배열이 메모리에 있는 한 다른 참조가 없더라도 객체에 계속 접근할 수 있습니다.

```javascript
let smashing = { name: "magazine" };

let arr = [smashing];

// Overwrite the reference.
smashing = null;
console.log(array[0]); // {name: 'magazine'}
```

객체가 배열에 저장되었기 때문에 참조를 덮어쓴 경우에도 여전히 이 객체에 액세스할 수 있습니다; 그러므로 배열이 여전히 메모리에 있는 한 객체는 메모리에 저장되었습니다.
Therefore, it was not garbage-collected. As we’ve used an array in the example above, we can use map too. While the map still exists, the values stored in it won’t be garbage-collected.

```javascript
let map = new Map();

let smashing {name: "magazine"};

map.set(smashing, "blog");

// Overwrite the reference.
smashing = null;

// To access the object.
console.log(map.keys());
```

Like an object, maps can hold key-value pairs, and we can access the value through the key. But with maps, we must use the .get() method to access the values.

According to Mozilla Developer Network, the Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either key or value.

Unlike a map, WeakMap holds a weak reference; hence, it doesn’t prevent garbage collection from removing values that it references if those values are not strongly referenced elsewhere. Apart from this, WeakMap is the same as map. WeakMaps are not enumerable due to weak references.

With WeakMap, the keys must be objects, and the values may be a number or a string.

The snippets below illustrate how WeakMap works and the methods in it:

```javascript
// Create a weakMap.
let weakMap = new WeakMap();

let weakMap2 = new WeakMap();

// Create an object.
let ob = {};

// Use the set method.
weakMap.set(ob, "Done");

// You can set the value to be an object or even a function.
weakMap.set(ob, ob);

// You can set the value to undefined.
weakMap.set(ob, undefined);

// WeakMap can also be the value and the key.
weakMap.set(weakMap2, weakMap);

// To get values, use the get method.
weakMap.get(ob); // Done

// Use the has method.
weakMap.has(ob); // true

weakMap.delete(ob);

weakMap.has(ob); // false
```

One major side effect of using objects as keys in a WeakMap with no other references to it is that they will be automatically removed from memory during garbage collection.

## Areas Of Application Of WeakMap

WeakMap can be used in two areas of web development: caching and additional data storage.

## CACHING

This a web technique that involves saving (i.e. storing) a copy of a given resource and serving it back when requested. The result from a function can be cached so that whenever the function is called, the cached result can be reused.

Let’s see this in action. Create a file, name it cachedResult.js, and write the following in it:

```javascript
let cachedResult = new WeakMap();
// A function that stores a result.
function keep(obj){
if(!cachedResult.has(obj){
let result = obj;
cachedResult.set(obj, result);
}
return cachedResult.get(obj);
}

let obj = {name: "Frank"};

let resultSaved = keep(obj)

obj = null;

// console.log(cachedResult.size); Possible with map, not with WeakMap
```

If we had used Map() instead of WeakMap() in the code above, and there were multiple invocations on the function keep(), then it would only calculate the result the first time it was called, and it would retrieve it from cachedResult the other times. The side effect is that we’ll need to clean cachedResult whenever the object is not needed. With WeakMap(), the cached result will be automatically removed from memory as soon as the object is garbage-collected. Caching is a great means of improving software performance — it could save the costs of database usage, third-party API calls, and server-to-server requests. With caching, a copy of the result from a request is saved locally.

## ADDITIONAL DATA

Another important use of WeakMap() is additional data storage. Imagine we are building an e-commerce platform, and we have a program that counts visitors, and we want to be able to reduce the count when visitors leave. This task would be very demanding with Map, but quite easy to implement with WeakMap():

```javascript
let visitorCount = new WeakMap();
function countCustomer(customer) {
  let count = visitorCount.get(customer) || 0;
  visitorCount.set(customer, count + 1);
}
```

Let’s create client code for this:

```javascript
let person = { name: "Frank" };

// Taking count of person visit.
countCustomer(person);

// Person leaves.
person = null;
```

With Map(), we will have to clean visitorCount whenever a customer leaves; otherwise, it will grow in memory indefinitely, taking up space. But with WeakMap(), we do not need to clean visitorCount; as soon as a person (object) becomes unreachable, it will be garbage-collected automatically.

## Conclusion

In this article, we learned about weak reference, strong reference, and the concept of reachability, and we tried to connect them to memory management as best we could.
