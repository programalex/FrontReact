import { Dispatch } from "@reduxjs/toolkit";
import { HttpClient } from "../../service/HttpClient";
import { AzureService } from "../../service/AzureService";
import {
  RECEIVE_DEVICESELECTED,
  RECEIVE_DEVICESLIST,
  RECEIVE_GUID,
  RECEIVE_AZURE_DEVICE,
} from "../reducers/devicesReducer";

export const getDevicesList = () => {
  return async (dispatch: Dispatch<any>, getstate: any) => {
    try {
      let store = getstate();
      const httpClient = new HttpClient();
      const azureService = new AzureService(httpClient);
      let res = await azureService.getDevices(
        store.auth.accessToken || "",
        store.iot.iotHubsSelected.resourceGroupName || "",
        store.iot.iotHubsSelected.ioTHubName || ""
      );
      dispatch(RECEIVE_DEVICESLIST(res));
    } catch (error) {}
  };
};

export const getGuid = () => {
  return async (dispatch: Dispatch<any>, getstate: any) => {
    try {
      let store = getstate();
      const httpClient = new HttpClient();
      const azureService = new AzureService(httpClient);
      let res = await azureService.getGuid(store.auth.accessToken || "");
      dispatch(RECEIVE_GUID(res));
    } catch (error) {}
  };
};

export const saveNewDevices = (values: any) => {
  return async (dispatch: Dispatch<any>, getstate: any) => {
    try {
      let store = getstate();
      const httpClient = new HttpClient();
      const azureService = new AzureService(httpClient);
      const res = await azureService.postDevice(store.auth.accessToken || "", values);
      if(res.status){
        await azureService.postAzureDevice(
          store.auth.accessToken || "",
          store.iot.iotHubsSelected.resourceGroupName || "",
          store.iot.iotHubsSelected.ioTHubName || "",
          {
            id: values.guid,
            status: values.validity ? 0 : 1,
          }
        );
      }
      return res;
    } catch (error) {}
    
  };
};

export const getDeviceById = (guid: any) => {
  return async (dispatch: Dispatch<any>, getstate: any) => {
    try {
      let store = getstate();
      const httpClient = new HttpClient();
      const azureService = new AzureService(httpClient);
      let res = await azureService.getDeviceById(
        store.auth.accessToken || "",
        guid || ""
      );
      dispatch(RECEIVE_DEVICESELECTED(res));
    } catch (error) {}
  };
};

export const getAzureDeviceById = (guid: any) => {
  return async (dispatch: Dispatch<any>, getstate: any) => {
    try {
      let store = getstate();
      const httpClient = new HttpClient();
      const azureService = new AzureService(httpClient);
      let res = await azureService.getAzureDeviceById(
        store.auth.accessToken || "",
        store.iot.iotHubsSelected.resourceGroupName || "",
        store.iot.iotHubsSelected.ioTHubName || "",
        guid
      );
      dispatch(RECEIVE_AZURE_DEVICE(res));
    } catch (error) {}
  };
};

export const editDevice = (guid: any, values: any) => {
  return async (dispatch: Dispatch<any>, getstate: any) => {
    try {
      let store = getstate();
      let status = values.validity ? 0 : 1;
      const httpClient = new HttpClient();
      const azureService = new AzureService(httpClient);
      await azureService.putDevice(store.auth.accessToken, guid, values);
      if (values.guid === store.dev.azureDevice.id) {
        if (status !== store.dev.azureDevice.status) {
          await azureService.changeDeviceStatus(
            store.auth.accessToken || "",
            store.iot.iotHubsSelected.resourceGroupName,
            store.iot.iotHubsSelected.ioTHubName,
            guid
          );
        }
      } else {
        if (values.validity) {
          await azureService.postAzureDevice(
            store.auth.accessToken,
            store.iot.iotHubsSelected.resourceGroupName,
            store.iot.iotHubsSelected.ioTHubName,
            {
              id: values.guid,
              status: values.validity ? 0 : 1,
            }
          );
        }
      }
      dispatch(RECEIVE_DEVICESELECTED({}))
    } catch (error) {
      console.log(error);
    }
  };
};

export const editAzureDevice = (guid: any, values: any) => {
  return async (dispatch: Dispatch<any>, getstate: any) => {
    try {
      let store = getstate();
      const httpClient = new HttpClient();
      const azureService = new AzureService(httpClient);
      await azureService.putKeysAzureDevice(
        store.auth.accessToken || "",
        store.iot.iotHubsSelected.resourceGroupName || "",
        store.iot.iotHubsSelected.ioTHubName || "",
        guid,
        values
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteDevice = (guid: any) => {
  return async (dispatch: Dispatch<any>, getstate: any) => {
    try {
      let store = getstate();
      const httpClient = new HttpClient();
      const azureService = new AzureService(httpClient);
      await azureService.deleteDevice(store.auth.accessToken || "", guid);
      await azureService.deleteAzureDevice(
        store.auth.accessToken || "",
        store.iot.iotHubsSelected.resourceGroupName || "",
        store.iot.iotHubsSelected.ioTHubName || "",
        guid
      );
      dispatch(RECEIVE_AZURE_DEVICE({}))
      dispatch(RECEIVE_DEVICESELECTED({}))
    } catch (error) {
      console.log(error);
    }
  };
};

export const exportDevices = (type:string) => {
  return async (dispatch: Dispatch<any>, getstate: any) => {
    try {
      let store = getstate();
      const httpClient = new HttpClient();
      const azureService = new AzureService(httpClient);
      let res = await azureService.exportDevices(
        store.auth.accessToken || "",
        store.iot.iotHubsSelected.resourceGroupName || "",
        store.iot.iotHubsSelected.ioTHubName || "",
        type
      );
      var url = window.URL.createObjectURL(res);
      var anchor = document.createElement('a');
      anchor.href = url;
      var fileName = `Dispositivos-${Date.now()}.csv`;
      anchor.download = fileName;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();

    } catch (error) {
      console.log(error);
    }
  };
};

