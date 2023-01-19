import { Dispatch } from "@reduxjs/toolkit";
import { HttpClient } from "../../service/HttpClient";
import { AzureService } from "../../service/AzureService";
import { RECEIVE_OR_OPERATOR, RECEIVE_OWNERS_COMPANY, RECEIVE_SUBSTATION, RECEIVE_TECNOLOGIES } from "../reducers/businessReducer";

export const getOwnerCompanyList = () => {
    return async (dispatch: Dispatch<any>, getstate: any) => {
      try {
        let store = getstate();
        const httpClient = new HttpClient();
        const azureService = new AzureService(httpClient);
        let res = await azureService.getOwnerCompanyList(
          store.auth.accessToken || "",
        );
        dispatch(RECEIVE_OWNERS_COMPANY(res));
      } catch (error) {}
    };
  };

  export const getOrOperator = () => {
    return async (dispatch: Dispatch<any>, getstate: any) => {
      try {
        let store = getstate();
        const httpClient = new HttpClient();
        const azureService = new AzureService(httpClient);
        let res = await azureService.getOrOperator(
          store.auth.accessToken || "",
        );
        dispatch(RECEIVE_OR_OPERATOR(res));
      } catch (error) {}
    };
  };

 

  export const getSubstation = () => {
    return async (dispatch: Dispatch<any>, getstate: any) => {
      try {
        let store = getstate();
        const httpClient = new HttpClient();
        const azureService = new AzureService(httpClient);
        let res = await azureService.getSubstation(
          store.auth.accessToken || "",
        );
        dispatch(RECEIVE_SUBSTATION(res));
      } catch (error) {}
    };
  };
  
  export const getTecnologies = () => {
    return async (dispatch: Dispatch<any>, getstate: any) => {
      try {
        let store = getstate();
        const httpClient = new HttpClient();
        const azureService = new AzureService(httpClient);
        let res = await azureService.getTecnologies(
          store.auth.accessToken || "",
        );
        dispatch(RECEIVE_TECNOLOGIES(res));
      } catch (error) {}
    };
  };
  