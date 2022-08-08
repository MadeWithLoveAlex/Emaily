import axios from 'axios'
import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: null,
    reducers: {
        fetchUser: (state, action) => {
            return action.payload || false
        }
    }
})

export const { fetchUser } = authSlice.actions

export const fetchUserAsync = () => async (dispatch) => {
    const user = await axios.get('/api/current_user')
    dispatch(fetchUser(user.data))
}

export const getUser = (state) => state.auth

export default authSlice.reducer