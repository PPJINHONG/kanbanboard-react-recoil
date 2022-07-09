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
export default Draggablecard;