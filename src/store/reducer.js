import {data} from '../data/data'
import { createSlice } from '@reduxjs/toolkit'

const initialState = data

export const stateSlice = createSlice({
	name: 'state',
	initialState,
	reducers: {}
})

export default stateSlice.reducer