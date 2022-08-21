import { safeGet } from "./safeGet/safeGet";

const nestedObj = { nest1: { nest2: 2 } };
const arr = [nestedObj, nestedObj, { hoge: 666 }] as const;
const obj = { top: nestedObj, topNest2: "4", arr };

const value = safeGet(obj, "arr.2.hoge");

document.getElementById("app")!.innerHTML = `
<h1>${value}</h1>
`;
