import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DragDropContext, Droppable,Draggable, DropResult} from 'react-beautiful-dnd';
import styled from 'styled-components';
import { todostate } from './atom';
import Draggablecard from './component/Draggablecard';
import Boards from './component/Boards';

const Wrapper = styled.div`
display: flex;
max-width: 500px;
margin: 0 auto;
justify-items: center;
align-items: center;
height: 100vh;

`;
const Boardwrapper =styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
width: 100%;

`;

function App() {
  
  
  const [todos,settodo] = useRecoilState(todostate)
  const dragend = ({draggableId,source,destination}:DropResult) => {//보드안에서 이동
   
    if (!destination) return;
    if(destination?.droppableId===source.droppableId){ 
      settodo((allboard) => {
        const boardcopy = [...allboard[source.droppableId]]
        boardcopy.splice(source.index,1);
        boardcopy.splice(destination?.index, 0,draggableId);
        return {
          ...allboard,[source.droppableId]:boardcopy
        };
    });
  }  
  if(destination?.droppableId!==source.droppableId){//다른보드이동

    settodo((allboard) => {
      const sourceboard = [...allboard[source.droppableId]];
      const targetboard = [...allboard[destination.droppableId]];

      sourceboard.splice(source.index,1);
      targetboard.splice(destination?.index, 0,draggableId);
      return {
        ...allboard,[source.droppableId]:sourceboard,[destination.droppableId]:targetboard
      };
  });

  }
    
}
 

  return (
    <>
    <DragDropContext onDragEnd={dragend}>
      <Wrapper>
        <Boardwrapper>
         
          {Object.keys(todos).map((arrayid)=>(
             
            <Boards key={arrayid} todos={todos[arrayid]} boardid={arrayid} />
          ))}
    </Boardwrapper>
    </Wrapper>
    </DragDropContext>
  </>
  );
}

export default App;
