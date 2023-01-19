import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeviceState } from '../../interfaces/DeviceState';

const INIT_STATE: DeviceState = {
    devicesList: [],
    deviceSelected:{},
    guid: undefined,
    azureDevice:{},
    creationStatus: {}, 
    isLoading:true
};

export const devicesSlice = createSlice({
    name: 'devices',
    initialState: INIT_STATE,
    reducers: {

        RECEIVE_DEVICESLIST: (state, action: PayloadAction<Array<object>>) => {
            state.devicesList = action.payload;
            state.isLoading = false
        },
        RECEIVE_DEVICESELECTED: (state, action: PayloadAction<any>) => {
            state.deviceSelected = action.payload;
        
        },
        RECEIVE_GUID: (state, action: PayloadAction<string>) => {
            state.guid = action.payload;
        
        },
        RECEIVE_AZURE_DEVICE: (state, action: PayloadAction<any>) => {
            state.azureDevice = action.payload;
        
        },
        RECEIVE_CREATION_STATUS: (state, action: PayloadAction<any>) => {
            state.creationStatus = action.payload;
        
        },
    }
});

export const { RECEIVE_DEVICESLIST,  RECEIVE_DEVICESELECTED, RECEIVE_GUID, RECEIVE_AZURE_DEVICE,  RECEIVE_CREATION_STATUS} = devicesSlice.actions

export default devicesSlice.reducer