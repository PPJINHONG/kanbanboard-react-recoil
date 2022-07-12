import { memo } from "react";
import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{isDragging : Boolean}>`
background-color: ${prop=>prop.isDragging ? "red" : "white"};
padding: 10px;
text-align: center;
margin-bottom:10px;
`;

interface Idraggablecard{
    todo:string;
    index : number;
}

function Draggablecard({todo,index} : Idraggablecard){
     
    return(
       
        <Draggable key={todo} draggableId={todo} index={index}>
        {(magic,snapshot)=>
        <Card 
        isDragging={snapshot.isDragging}
        ref={magic.innerRef}
         {...magic.dragHandleProps}  
         {...magic.draggableProps}>  
                 {todo}
         </Card>}
          </Draggable>
        
    );
    
}
export default React.memo(Draggablecard); //react memo 랜더링 제한