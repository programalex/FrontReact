import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AuthState} from '../../interfaces/AuthState';


const INIT_STATE: AuthState = {
    isAuthenticated: false,
    userName: undefined,
    name: undefined,
    accessToken: undefined,
    profilePicture: undefined,
    idToken: undefined
};

export const authSlice = createSlice({
    name: 'items',
    initialState: INIT_STATE,
    reducers: {
        RECEIVE_AUTHINFO: (state, action: PayloadAction<any>) => {            
            state.isAuthenticated = true;
            state.userName = action.payload.userName;
            state.name = action.payload.name;
        },
        RECEIVE_ACCESSTOKEN: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },
        RECEIVE_IDTOKEN: (state, action: PayloadAction<string>) => {
            state.idToken = action.payload
        },
        RECEIVE_PROFILE_PICTURE: (state, action: PayloadAction<string>) => {
            state.profilePicture = action.payload
        }
    }
});

export const { RECEIVE_AUTHINFO, RECEIVE_ACCESSTOKEN, RECEIVE_IDTOKEN, RECEIVE_PROFILE_PICTURE } = authSlice.actions

export default authSlice.reducer