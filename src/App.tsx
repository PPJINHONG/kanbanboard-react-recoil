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
  const dragend = ({draggableId,destination,source}:DropResult) => {
    if (destination?.index === undefined) return;    
    //   settodo((oldtodo) => {
    //     const copy = [...oldtodo];
    //     copy.splice(source.index,1);
    //     copy.splice(destination?.index,0,draggableId);
    //     console.log(copy);
    //     return copy;
    
    // });
    console.log(destination.index);
  };
 

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
