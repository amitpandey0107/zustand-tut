import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";

const initialState = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorData: null,
};

export const useGetData = create(
    devtools (
        persist (
            (set, get) => ({
                ...initialState,
              
                execute: async () => {
                  set({ ...initialState, loading: true });
                  try {
                    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                    set({ ...initialState, success: true, data: res.data });
                  } catch (err) {
                    console.error("Error in data fetch:", err);
                    set({ ...initialState, error: true, errorData: err.message });
                  }
                },
              }),
              {name:"useGetData"}
        )
    )
);

// export const ApiStore = create(
//     devtools(
//         persist(
//             (set) => ({
//                 userData: [],

//                 getApiData: () => set((state) => ({
                    
//                     userData: [data, ...state.userData]
//                 }))

//             }),
//             { name: "ApiStore" }
//         )
//     )
// )