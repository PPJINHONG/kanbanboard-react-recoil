import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DragDropContext, Droppable,Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

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
const Card = styled.div`
background-color: whitesmoke;
padding: 10px;
text-align: center;
margin-bottom:10px;
`;

function App() {
  const dragend = () => {
  };
  const todos =["a","b","c","d","e","f"];
  
  return (
    <>
    <DragDropContext onDragEnd={dragend}>
      <Wrapper>
        <Boards>
    <Droppable droppableId='one'>
      {(magic) => <Board ref={magic.innerRef}{...magic.droppableProps}>
      {todos.map((todo,index)=>(
        <Draggable draggableId={todo} index={index}>
        {(magic)=>
        <Card ref={magic.innerRef}
         {...magic.dragHandleProps}  
         {...magic.draggableProps}>  
                 {todo}
         </Card>}
          </Draggable>
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
