import { Droppable  } from "react-beautiful-dnd";
import styled from "styled-components";
import Draggablecard from "./Draggablecard";



const Wrapper = styled.div`
background-color:white;
min-height: 300px;
margin: 5px;
padding: 30px;
border-radius: 10px;
border: 0.5px solid gray;
`;
interface Iboards{
    todos:string[];
    boardid:string;
}

function Boards({todos,boardid}:Iboards){
    return(
         <Droppable droppableId={boardid}>
      {(magic) => <Wrapper ref={magic.innerRef}{...magic.droppableProps}>
      {todos.map((todo,index)=>(
        <Draggablecard key={todo} todo={todo} index={index} />
          ))}
          {magic.placeholder}
        </Wrapper>}
    </Droppable>
    )
}
export default Boards;