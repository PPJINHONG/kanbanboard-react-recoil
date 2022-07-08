import {selector,atom} from "recoil";

export const minutestate = atom({
    key: "minutes",
    default : 0
});
export const hourselector = selector<number>({
    key : "hour",
    get : ({get}) => {
        const minutes =get(minutestate);
        return minutes /60;
    },
    set : ({set},newvalue)=>{
        const hour = +newvalue * 60;
        set(minutestate,hour);
       
    }
});