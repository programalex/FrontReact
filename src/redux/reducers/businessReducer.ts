import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BusinessState } from '../../interfaces/BusinessState';

const INIT_STATE: BusinessState = {
    ownersCompanyList: [],
    orOperator: [],
    tecnologies: [],
    substation:[]
};

export const businessSlice = createSlice({
    name: 'business',
    initialState: INIT_STATE,
    reducers: {

        RECEIVE_OWNERS_COMPANY: (state, action: PayloadAction<Array<object>>) => {
            state.ownersCompanyList = action.payload;
        },
        RECEIVE_OR_OPERATOR: (state, action: PayloadAction<Array<object>>) => {
            state.orOperator = action.payload;
        },
       
        RECEIVE_SUBSTATION: (state, action: PayloadAction<Array<object>>) => {
            state.substation = action.payload;
        },
        RECEIVE_TECNOLOGIES: (state, action: PayloadAction<Array<object>>) => {
            state.tecnologies = action.payload;
        },
        
    }
});

export const { RECEIVE_OWNERS_COMPANY, RECEIVE_OR_OPERATOR, RECEIVE_TECNOLOGIES, RECEIVE_SUBSTATION} = businessSlice.actions

export default businessSlice.reducer