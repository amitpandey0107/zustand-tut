import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// export type TodoType = {
//     id: number,
//     todo: string,
//     isDone: boolean
// }

// type States = {
//     todos: Array<TodoType> | []
// }

// type Actions = {
//     addTodo: (todo: TodoType) => void
// }

export const todoStore = create(
    devtools(
        persist(
            (set) => ({
                todos: [],
                addTodo: (todo) => set((state) => ({ todos: [todo, ...state.todos] })),

                toggleTodo: (id, isChecked) => set((state) => ({
                    todos: state.todos.map((item) => {
                        if (item.id === id) {
                            item.isDone = isChecked
                        }
                        return item;
                    })
                })),

                deleteToDo: (id) => set((state) => ({
                    todos: state.todos.filter((item) => {
                        return item.id !== id
                    })
                }))

            }),
            { name: "toDoStore" }
        )
    )
)