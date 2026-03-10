import type React from "react";
import { useDispatch, useSelector} from "react-redux"
import { type AppDispatch, type RootState} from "../App/store"
import { addTodo, removeTodo } from "../features/todos/todoActions";
import { useState } from "react";

const TodoList:React.FC = () => {
    const [todoText, setTodoText] = useState("")
    const dispatch: AppDispatch = useDispatch();
    const todos = useSelector((state:RootState)=>state.todos)

    const emojiMap:{[key:string]: string} = {
        eat: "🍔",
        sleep: "🌑",
        exercise: "🏋️‍♂️"
    }

    const handleAddTodo = () => {
        const mappedText = emojiMap[todoText.toLowerCase()] || todoText;
        if(mappedText.trim()){
            dispatch(addTodo(mappedText));
            setTodoText("")
        }
    }

    const handleRemoveTodo = (id:number) => {
        dispatch(removeTodo(id));
    }

    return(
        <div>
            <em>hecho con redux</em>
            <h1>emoji todo list</h1>
            <input type="text" name="" id="" 
            value={todoText}
            onChange={(e)=>setTodoText(e.target.value)}
            onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    handleAddTodo();
                }
            }}
            placeholder="add todo"
            />
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id} onClick={()=>handleRemoveTodo(todo.id)}>
                            {todo.text}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;