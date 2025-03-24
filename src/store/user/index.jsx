import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  users: [],
  loading: false,
  error: null,
  isAuthenticated: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
      state.isAuthenticated = !!action.payload
    },
    setUsers: (state, action) => {
      state.users = action.payload
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id)
      if (index !== -1) {
        state.users[index] = action.payload
      }
      if (state.currentUser?.id === action.payload.id) {
        state.currentUser = action.payload
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload)
      if (state.currentUser?.id === action.payload) {
        state.currentUser = null
        state.isAuthenticated = false
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    logout: (state) => {
      state.currentUser = null
      state.isAuthenticated = false
    }
  }
})

export const {
  setCurrentUser,
  setUsers,
  updateUser,
  deleteUser,
  setLoading,
  setError,
  logout
} = userSlice.actions

export default userSlice.reducer 