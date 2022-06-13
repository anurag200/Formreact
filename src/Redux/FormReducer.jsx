import { createSlice } from '@reduxjs/toolkit'
const FormReducer = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload)
    },
    remove(state, action) {
      return state.filter((cur, index) => index != action.payload)
    },
    upd(state, action) {
      console.log(action.payload.id)
      console.log(action.payload.data)
      state[action.payload.id] = action.payload.data
    },
  },
})

export const { add, remove, upd } = FormReducer.actions
export default FormReducer.reducer
