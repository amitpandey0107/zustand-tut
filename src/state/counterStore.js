import { create } from 'zustand';
import { devtools, persist } from "zustand/middleware";

export const counterStore = create(
    devtools(
        persist(
            (set) => ({
                counter: 0,
                incrementAction: () => set((state) => ({
                    ...state,
                    counter: state.counter + 1
                })),
                decrementAction: () => set((state) => {
                    if (state.counter === 0) return state;
                    return {
                        ...state,
                        counter: state.counter - 1
                    }
                }),
                resetAction: () =>
                    set((state) => ({
                        ...state,
                        counter: 0
                    }))
            }),
            { name: "counterStore" }
        )
    )
)