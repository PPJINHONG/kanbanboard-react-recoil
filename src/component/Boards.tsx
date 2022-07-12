import { Droppable  } from "react-beautiful-dnd";
import styled from "styled-components";
import Draggablecard from "./Draggablecard";



const Wrapper = styled.div`
min-height: 300px;
margin: 5px;

border-radius: 10px;
border: 0.5px solid gray;
background-color: whitesmoke;
display: flex;
flex-direction: column;

`;
const Cardname =styled.div`
text-align: center;
font-size: 20px;
margin-bottom: 50px;
`
const Area = styled.div<Iarea>`
background-color: ${prop => prop.isDraggingOver ? "pink" : prop.isDraggingFromThis ?  "black": "blue"};
flex-grow: 1;
transition:background-color 0.3s ease-in-out;
border-radius: 10px;
padding: 10px;
`

interface Iboards{
    todos:string[];
    boardid:string;
}
interface Iarea{
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}


function Boards({todos,boardid}:Iboards){
    return(
        <Wrapper>
          <Cardname>{boardid}</Cardname>
         <Droppable droppableId={boardid}>
      {(magic,snapshot) => 
        <Area isDraggingOver={snapshot.isDraggingOver} 
              isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                ref={magic.innerRef}
                {...magic.droppableProps}>
               
             {todos.map((todo,index)=>(
               <Draggablecard key={todo} todo={todo} index={index} />
            ))}
          {magic.placeholder}
        </Area>}
    </Droppable>
    </Wrapper>
    )
}
export default Boards;