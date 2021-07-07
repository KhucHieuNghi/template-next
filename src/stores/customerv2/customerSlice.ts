import {
    createSlice, PayloadAction, createAsyncThunk,
} from '@reduxjs/toolkit';
import { IInitState, IInfo } from '~/models/customerInterface';
import { customerApi } from '~/services';

export const getCustomerByIdThunk = createAsyncThunk(
    'customer/getCustomerByIdThunk',
    async (userId: string, { rejectWithValue }) => {
        try {
            const response = await customerApi.getInfo(userId);
            return response.data.data as IInfo;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

const initialState: IInitState = {
    info: {},
    loading: false,
};

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        updateInfo: (state, action: PayloadAction<Partial<IInfo>>):IInitState => ({
            ...state,
            info: { ...state.info, ...action.payload } as IInfo,
        }),
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCustomerByIdThunk.rejected, (state) => state)
            .addCase(getCustomerByIdThunk.fulfilled, (state, action: PayloadAction<IInfo>) => ({
                ...state,
                loading: false,
                info: action.payload,
            }))
            .addCase(getCustomerByIdThunk.pending, (state) => ({
                ...state,
                loading: true,
            }));
    },
});

export default customerSlice.reducer;
