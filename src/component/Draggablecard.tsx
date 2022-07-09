import { memo } from "react";
import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
background-color: whitesmoke;
padding: 10px;
text-align: center;
margin-bottom:10px;
`;

interface Idraggablecard{
    todo:string;
    index : number;
}

function Draggablecard({todo,index} : Idraggablecard){
      console.log(todo, "has been rendered")
    return(
       
        <Draggable key={todo} draggableId={todo} index={index}>
        {(magic)=>
        <Card ref={magic.innerRef}
         {...magic.dragHandleProps}  
         {...magic.draggableProps}>  
                 {todo}
         </Card>}
          </Draggable>
        
    );
    
}
export default React.memo(Draggablecard); //react memo 랜더링 제한