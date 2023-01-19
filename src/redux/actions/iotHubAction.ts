import { Dispatch } from "@reduxjs/toolkit";
import { HttpClient } from "../../service/HttpClient";
import { AzureService } from "../../service/AzureService";
import { RECEIVE_IOTHUBSLIST, RECEIVE_IOTHUBSSELECTED} from "../reducers/iotHubReducer";

export const getIotHubsList = () => {
    return async (dispatch: Dispatch<any>, getstate: any) => {
        try {
            let store = getstate();
            const httpClient = new HttpClient();
            const azureService = new AzureService(httpClient);
            let res = await azureService.getIotHubs(store.auth.accessToken || '');
            dispatch(RECEIVE_IOTHUBSLIST(res)); 
            dispatch(RECEIVE_IOTHUBSSELECTED(res[0]));
        } catch (error) {

        }
    };
};


