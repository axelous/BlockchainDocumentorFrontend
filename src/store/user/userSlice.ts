import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface User {
    id: number;
    email: string;
    username: string;
    is_superuser: boolean;
}

interface UserSchema {
    data: User;
    auth: boolean;
}

const initialState: UserSchema = { auth: false, data: {} as User };

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.auth = true;
            state.data = action.payload;
        },
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.auth = action.payload;
        },
        logout: () => initialState,
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
