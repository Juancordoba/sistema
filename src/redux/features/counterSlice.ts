import { createSlice } from "@reduxjs/toolkit"

interface CounterState {
  counter: number
}

const initialState: CounterState = {
  counter: 10, // valor inicial
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    reset: (state) => {
      state.counter = 0
    },
  },
})

// Exportá las acciones
export const { increment, decrement, reset } = counterSlice.actions

// Exportá el reducer por defecto
export default counterSlice.reducer