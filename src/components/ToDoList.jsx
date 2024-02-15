import react, { useState } from 'react';
import './style.css';

export default function ToDoList()
{
    const editing = null;

    const [todos,setTodos] = useState([]);
    const [task,setTask] = useState('');
    const [editingIndex,setEditingIndex] = useState(null);

    const handleInputChange = (e) =>
    {
        console.log(e.target.value);
        setTask(e.target.value);

    };

    // //add
    // const handleAddToDo = () =>
    // {
        
    //     if (task.trim() !== "")
    //     {
    //         if(editingIndex !== null)
    //         {
    //             const updatedToDos = [...todos];
    //             updatedToDos[editingIndex] = task;
    //             setTodos(updatedToDos);
    //             setEditingIndex(null);
    //         }else
    //         setTodos([...todos, task]);
        
    //     }
    //     setTask("");
    // };

    const handleAddToDo=()=>{
        if(task.trim() !==""){
            if(editingIndex !==null){
                const updatedTodos=[...todos];
                updatedTodos[editingIndex]=task;
                setTodos(updatedTodos);
                setEditingIndex(null);
    
            }else{
                setTodos([...todos,task])
            }
          }
        setTask("");
    
      }

    //edit func
    const handleEditToDo = (index) =>
    {
        setTask(todos[index]);
        setEditingIndex(index);
    };

    //delete func
    const handleDeleteToDO = (index) =>
    {
        const updatedToDos =[...todos];
        updatedToDos.splice(index,1);
        setTodos(updatedToDos);

    };

    return (
        <>
        <h2>Hi,Asmaa</h2>
        <div className='ToDoList'>
            <h1 className='heading'>ToDo List App 🗒️</h1>
         <input type='text' value={task} onChange={handleInputChange}></input>
         <button className ='Btn1'onClick={handleAddToDo}>
             {editingIndex !== null ? '✏️' : '➕'}
             </button>
         <ul className='ul'>
            {todos.map((todo,idx) =>
             {
                return (
                 <li key={idx}>
                    {todo}
                    <div className='div2'>
                <button className='btn2' onClick={() =>handleEditToDo(idx)}>
                        📝</button>
                     <button className='btn3' onClick={() => handleDeleteToDO(idx)}>
                         ❌</button>
                         </div>
                 </li>
                );
            })}
        </ul>

        </div>
        </>
    );
}

    // return(
    //     <>
    //     <h1 className='heading'>ToDo List App</h1>
    //     <input type='text' value={task} onChange={handleInputChange}></input>
    //     <button onClick={handleAddToDo}>
    //         {editingIndex !== null ? 'Edit' : 'Add'}
    //         </button>
    //     <ul>
    //         {todos.map((todo,idx) =>
    //         {
    //             return (
    //             <li key={idx}>
    //                 {todo}
    //                 <button onClick={() =>handleEditToDo(idx)}>
    //                     Edit</button>
    //                 <button onClick={() => handleDeleteToDO(idx)}>
    //                     Delete</button>
    //             </li>
    //             );
    //         })}
    //     </ul>
    //     </>
    // );
    //     }

