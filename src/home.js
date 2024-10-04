import React, { useState } from 'react'
import { Trash2 } from 'lucide-react';
import { todoStore } from './state/todoStore';
import Navbar from './navbar';


function App() {
    const [todo, setTodo] = useState("");

    const todoState = todoStore()

    const generateID = () => {
        const min = 1000;
        const max = 9999;
        return Math.round(Math.random() * (max - min + 1)) + min
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo.length > 0) {
            todoState.addTodo({
                id: generateID(),
                todo: todo,
                isDone: false
            })

            setTodo("")
        }
    }
    return (
        <>
        <Navbar />
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='w-[500px] bg-[#222222] p-5'>
                <h1 className='text-4xl font-bold mb-5'>Todos</h1>

                <div className='mb-5'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className='p-2 rounded-xl w-full bg-black text-white'
                            placeholder='Enter your todos'
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                        />
                    </form>
                </div>

                <div className="relative">
                    <h2 className='mb-5 text-lg font-semibold underline'>Todos List</h2>

                    {
                        todoState.todos.length > 0 ?
                        todoState.todos.map((item, index) => (
                            <div key={index} className='bg-zinc-700 mb-2 p-2 w-full text-white rounded-xl flex justify-between items-center'>
                                <span className={`${item.isDone ? 'line-through' : ''}`}>{item.todo}</span>
                                <div className='flex justify-center items-center'>
                                    <input
                                        type="checkbox"
                                        className='mr-2 scale-125'
                                        onChange={(e) => todoState.toggleTodo(item.id, e.target.checked)}
                                        checked={item.isDone}
                                    />
                                    <button onClick={()=>todoState.deleteToDo(item.id)}>
                                        <Trash2 color="#FFFFFF" size={19} strokeWidth={2} />
                                    </button>
                                </div>
                            </div>
                        ))
                        :
                        <span>No list found!!</span>
                    }

                </div>

            </div>
        </div>
        </>
    );
}

export default App;
