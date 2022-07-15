import {selector,atom} from "recoil";



export interface Itodo{
    text : string,
    id : number;
}

interface Itodostate {
    [key:string] : Itodo[];
}

export const todostate = atom<Itodostate>({
    key: "todo",
    default : {
        "to do":[],
        doing:[],
        done:[]
    }
});
