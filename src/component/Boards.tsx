import { useForm } from "react-hook-form";
import { Droppable  } from "react-beautiful-dnd";
import styled from "styled-components";
import Draggablecard from "./Draggablecard";
import {Itodo, todostate} from "../atom";
import { useSetRecoilState } from "recoil";


const Wrapper = styled.div`
min-height: 400px;
margin: 5px;
border-radius: 10px;
border: 0.3px solid gray;
background-color: whitesmoke;
display: flex;
flex-direction: column;

`;
const Cardname =styled.div`
text-align: center;
font-size: 20px;
padding-top: 30px;
padding-bottom: 30px;
`
const Area = styled.div<Iarea>`
background-color: ${prop => prop.isDraggingOver ? "pink" : prop.isDraggingFromThis ?  "gray": "whitesmoke"};
flex-grow: 1;
transition:background-color 0.3s ease-in-out;

padding: 10px;
`;

const Form = styled.form`
width: 100%;
input {
  width: 100%;
}
`;
const Button =styled.button`
width: 100%;
border: 1px solid gray;
background-color: transparent;
`;

interface Iboards{
    todos:Itodo[];
    boardid:string;
}
interface Iarea{
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}
interface Iform{
  todo : string;
}

function Boards({todos,boardid}:Iboards){
  const settodo = useSetRecoilState(todostate);
  const {register,setValue,handleSubmit} = useForm<Iform>();
  const onvalid = ({todo}: Iform)=>{
    console.log(todo);
    const newtodo = {
      id : Date.now(),
      text: todo,
    };
    settodo((allboard) => {
      return {
        ...allboard,
        [boardid]:[newtodo,...allboard[boardid]],
      };
    });
    setValue("todo","")
  };
  
  
    return(
        <Wrapper>
          <Cardname>{boardid}</Cardname>
          <Form onSubmit={handleSubmit(onvalid)}>
          <input 
          {...register("todo",{required:true})}
          type="text" placeholder={`add task ${boardid}`} />
          <Button>add</Button>
          </Form>
        
         <Droppable droppableId={boardid}>
      {(magic,snapshot) => 
        <Area isDraggingOver={snapshot.isDraggingOver} 
              isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                ref={magic.innerRef}
                {...magic.droppableProps}>
               
             {todos.map((todo,index)=>(
               <Draggablecard 
               key={todo.id} 
               todoid={todo.id} 
               boardid = {boardid}
               index={index} 
               todotext={todo.text}/>
            ))}
          {magic.placeholder}
        </Area>}
    </Droppable>
    </Wrapper>
    )
}
export default Boards;