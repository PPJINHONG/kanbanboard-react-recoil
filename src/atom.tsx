import {selector,atom} from "recoil";


export const todostate = atom({
    key: "todo",
    default : ["a", "b", "c", "d", "e", "f"]
});
