import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'currentUser',
  initialState: null,
  reducers: {
    setCurrentUser: (state, action) => {
      return state = action.payload
    }
  }
})

export const { setCurrentUser } = user.actions
export default user