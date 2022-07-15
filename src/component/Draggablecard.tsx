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
    todoid: number,
    todotext:string,
    index : number;
}

function Draggablecard({todotext,todoid,index} : Idraggablecard){
     
    return(
       
        <Draggable key={todoid} draggableId={todoid+""} index={index}>
        {(magic,snapshot)=>
        <Card 
        isDragging={snapshot.isDragging}
        ref={magic.innerRef}
         {...magic.dragHandleProps}  
         {...magic.draggableProps}>  
                 {todotext}
         </Card>}
          </Draggable>
        
    );
    
}
export default React.memo(Draggablecard); //react memo 랜더링 제한