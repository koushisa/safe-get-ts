# safe-get-ts
Created with CodeSandbox

## SafeGet

```ts
import { safeGet } from "./safeGet/safeGet";

const nestedObj = { key: "nestedObj", nest1: { nest2: 2 } };
const arr = [nestedObj, nestedObj, { hoge: "hoge" }] as const;

const obj = { root: nestedObj, root2: "root2", arr };

/**
 * {
    key: string;
    nest1: {
        nest2: number;
    };
  } 
 */
safeGet(obj, "root");

// 'nestedObj'
safeGet(obj, "root.key");

// 2
safeGet(obj, "root.nest1.nest2");

// 'hoge'
safeGet(obj, "arr.2.hoge");

// Argument of type '"root.key.hoge"' is not assignable to parameter of type '"root2" | "root" | "arr" | "root.key" | "root.nest1" | "root.nest1.nest2" | "arr.0" | "arr.1" | "arr.2" | "arr.0.key" | "arr.0.nest1" | "arr.0.nest1.nest2" | "arr.1.key" | "arr.1.nest1" | "arr.1.nest1.nest2" | "arr.2.hoge"'.ts(2345)
safeGet(obj, "root.key.hoge");

```

## Selector

```ts
import { createSelector, select } from "./safeGet/selector";

const nestedObj = { key: "nestedObj", nest1: { nest2: 2 } };
const arr = [nestedObj, nestedObj, { hoge: "hoge" }] as const;

const obj = { root: nestedObj, root2: "root2", arr };

const selectObj = createSelector(obj);

const selectedObj = selectObj((s) => {
  return {
    selectedHoge: s.arr[2].hoge
  };
});

const rootKey = select(obj, (s) => s.root.key);
```
