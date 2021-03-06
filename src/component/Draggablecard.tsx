import { memo } from "react";
import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { todostate } from "../atom";

const Card = styled.div<{isDragging : Boolean}>`
background-color: ${prop=>prop.isDragging ? "red" : "white"};
padding: 10px;
text-align: center;
margin-bottom:10px;
display: flex;
justify-content: space-between;
`;
const Button = styled.button`

border-radius: 100%;
border-style: none;
background-color:transparent;

`;
const Span = styled.span`
width: 50%;

`;

interface Idraggablecard{
    todoid: number,
    todotext:string,
    index : number,
    boardid : string;
}





function Draggablecard({boardid,todotext,todoid,index} : Idraggablecard){
     
    const settodo = useSetRecoilState(todostate);
    console.log(index);

    const deletefn = (e:React.MouseEvent) =>{
    settodo((all)=>{
        
        const clickcard = [...all[boardid]];
        clickcard.splice(index, 1);
        
        return {
            ...all,
            [boardid]: clickcard,
            
          };

    })
}
    return(
       
        <Draggable key={todoid} draggableId={todoid+""} index={index}>
        {(magic,snapshot)=>
        <Card 
        isDragging={snapshot.isDragging}
        ref={magic.innerRef}
         {...magic.dragHandleProps}  
         {...magic.draggableProps}>  
                 <Span>{todotext}</Span>
                 <Button onClick={deletefn}>X</Button>
         </Card>}
          </Draggable>
        
    );
    
}
export default React.memo(Draggablecard); //react memo 랜더링 제한