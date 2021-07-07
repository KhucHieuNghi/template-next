import { createSlice } from '@reduxjs/toolkit';

export const demoSlice = createSlice({
    name: 'demo',
    initialState: { value: 1 },
    reducers: {
        fetchApi(state, action) {
            const value = action.payload;
            return { ...state, value };
        },
        updateTime(state, action) {
            return { ...state, value: action.payload };
        },
    },
});

export default demoSlice.reducer;
