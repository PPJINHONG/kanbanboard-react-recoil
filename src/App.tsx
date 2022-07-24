import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { todostate } from './atom';
import Draggablecard from './component/Draggablecard';
import Boards from './component/Boards';

const Wrapper = styled.div`
display: flex;
max-width: 800px;
margin: 0 auto;
justify-items: center;
align-items: center;
height: 100vh;
border: 0px;

`;
const Boardwrapper = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
width: 100%;
border: 0px;
`;

function App() {


  const [todos, settodo] = useRecoilState(todostate)
  const dragend = (info: DropResult) => {

    const { destination, draggableId, source } = info;
    console.log(info);
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) { //보드안에서 이동

      settodo((allboard) => {
        const boardcopy = [...allboard[source.droppableId]];
        const taskobj = boardcopy[source.index];
        boardcopy.splice(source.index, 1);
        boardcopy.splice(destination?.index, 0, taskobj);
        return {
          ...allboard, [source.droppableId]: boardcopy
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {//다른보드이동

      settodo((allboard) => {
        const sourceboard = [...allboard[source.droppableId]];
        const taskobj = sourceboard[source.index];
        const targetboard = [...allboard[destination.droppableId]];

        sourceboard.splice(source.index, 1);
        targetboard.splice(destination?.index, 0, taskobj);
        return {
          ...allboard, [source.droppableId]: sourceboard, [destination.droppableId]: targetboard
        };
      });
    }
    console.log(todos);
  }


  return (
    <>
      <DragDropContext onDragEnd={dragend}>
        <Wrapper>
          <Boardwrapper>

            {Object.keys(todos).map((arrayid) => (
              
              <Boards key={arrayid} todos={todos[arrayid]} boardid={arrayid} />
            ))}
          </Boardwrapper>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
