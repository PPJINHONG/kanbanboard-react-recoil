import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DragDropContext, Droppable,Draggable, DropResult} from 'react-beautiful-dnd';
import styled from 'styled-components';
import { todostate } from './atom';
import Draggablecard from './component/Draggablecard';

const Wrapper = styled.div`
display: flex;
max-width: 500px;
margin: 0 auto;
justify-items: center;
align-items: center;
height: 100vh;
`;
const Boards =styled.div`
display: grid;
grid-template-columns: repeat(1,1fr);
width: 100%;

`;
const Board = styled.div`
background-color:white;
min-height: 300px;
padding: 30px;
border-radius: 10px;
border: 0.5px solid gray;
`;

function App() {
  const [todos,settodo] = useRecoilState(todostate)
  const dragend = ({draggableId,destination,source}:DropResult) => {
    if (destination?.index === undefined) return;    
      settodo((oldtodo) => {
        const copy = [...oldtodo];
        copy.splice(source.index,1);
        console.log("ASdasd");
        copy.splice(destination?.index,0,draggableId);
        console.log(copy);
        return copy;
    
    });
    console.log(destination.index);
  };
 

  return (
    <>
    <DragDropContext onDragEnd={dragend}>
      <Wrapper>
        <Boards>
    <Droppable droppableId='one'>
      {(magic) => <Board ref={magic.innerRef}{...magic.droppableProps}>
      {todos.map((todo,index)=>(
        <Draggablecard key={todo} todo={todo} index={index} />
          ))}
          {magic.placeholder}
        </Board>}
    </Droppable>
    </Boards>
    </Wrapper>
    </DragDropContext>
  </>
  );
}

export default App;
