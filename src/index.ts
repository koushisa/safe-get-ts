import { safeGet } from "./safeGet/safeGet";

const nestedObj = { key: "nestedObj", nest1: { nest2: 2 } };
const arr = [nestedObj, nestedObj, { hoge: "hoge" }] as const;

const obj = { root: nestedObj, root2: "root2", arr };

const value = safeGet(obj, "arr.2.hoge");

document.getElementById("app")!.innerHTML = `
<h1>${value}</h1>
`;
