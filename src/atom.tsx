import {selector,atom} from "recoil";
interface Itodostate {
    [key:string] : string[];
}

export const todostate = atom<Itodostate>({
    key: "todo",
    default : {
        todo:["a", "b", "c", "d", "e", "f"],
        doing:["q"],
        done:["w"]
    }
});
