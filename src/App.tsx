import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {hourselector, minutestate} from './atom';

function App() {

  const [minutes,setminutes] = useRecoilState(minutestate);
  const [hour,sethour] = useRecoilState(hourselector);
  const setminutesfn =(event:React.FormEvent<HTMLInputElement>) => {
    setminutes(+event.currentTarget.value);
  };
  const sethourfn =(event:React.FormEvent<HTMLInputElement>) => {
    sethour(+event.currentTarget.value);
  };

  return (
    <>
    <input value={minutes} onChange={setminutesfn} type="number" placeholder='minutes'></input>
    <input value={hour} onChange={sethourfn} type="number" placeholder='hour'></input>
    </>
  );
}

export default App;
