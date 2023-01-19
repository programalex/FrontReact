import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IotHubState } from '../../interfaces/IotHubState';


const INIT_STATE: IotHubState = {
    iotHubsList: [],
    iotHubsSelected:{},
    isLoading:true
};

export const iotSlice = createSlice({
    name: 'iotHubs',
    initialState: INIT_STATE,
    reducers: {

        RECEIVE_IOTHUBSLIST: (state, action: PayloadAction<Array<object>>) => {
            state.iotHubsList = action.payload;
        },
        RECEIVE_IOTHUBSSELECTED: (state, action: PayloadAction<object>) => {
            state.iotHubsSelected = action.payload;
            state.isLoading = false;
        },
    }
});

export const { RECEIVE_IOTHUBSLIST, RECEIVE_IOTHUBSSELECTED} = iotSlice.actions

export default iotSlice.reducer