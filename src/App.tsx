import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DragDropContext, Droppable,Draggable} from 'react-beautiful-dnd';

function App() {
  const dragend = () => {

  };

  return (
    <>
    <DragDropContext onDragEnd={dragend}>
      <div>
    <Droppable droppableId='one'>
      {(magic) => <ul ref={magic.innerRef}{...magic.droppableProps}>
        <Draggable draggableId='first' index={0}>
          {(magic)=>
          <li ref={magic.innerRef}
          // {...magic.dragHandleProps}  특정부분 움직임허용
          {...magic.draggableProps}>  
           <span{...magic.dragHandleProps}>ooooo</span>
           helllo
           </li>}
            </Draggable>
        <Draggable draggableId='second' index={1}> 
         {(magic)=>
          <li ref={magic.innerRef}
          {...magic.draggableProps}//전체부분 허용
          {...magic.dragHandleProps}>
            fuck</li>}
            </Draggable>
        </ul>}
    </Droppable>
    </div>
    </DragDropContext>
  </>
  );
}

export default App;
