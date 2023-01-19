import { Dispatch } from "@reduxjs/toolkit";
import { RECEIVE_PROFILE_PICTURE } from "../reducers/authReducer";
import { HttpClient } from "../../service/HttpClient";
import { ProfileService } from '../../service/ProfileService';

export const getProfilePicture = () => {
    return async (dispatch: Dispatch<any>, getstate: any) => {
        try {
            let store = getstate();
            const httpClient = new HttpClient();
            const profileService = new ProfileService(httpClient);
            let res = await profileService.getGraphToken(store.auth.accessToken || '');
            let blob = await profileService.getProfilePhoto(res)
            dispatch(RECEIVE_PROFILE_PICTURE(URL.createObjectURL(blob)));

        } catch (error) {

        }
    };
};

