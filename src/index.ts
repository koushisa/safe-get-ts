import { safeGet } from "./safeGet/safeGet";
import { createSelector, select } from "./safeGet/selector";

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
 * 
 */
const value = safeGet(obj, "root.nest1.nest2");

const selectObj = createSelector(obj);

const selectedObj = selectObj((s) => {
  return {
    selectedHoge: s.arr[2].hoge
  };
});

const rootKey = select(obj, (s) => s.root.key);

document.getElementById("app")!.innerHTML = `
<h1>${value}</h1>
<h2>${JSON.stringify(selectedObj)}</h1>
<h2>${rootKey}</h1>
`;
