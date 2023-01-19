export interface DeviceState
{
   devicesList: Array<object> ;
   deviceSelected: any;
   guid: string | undefined;
   azureDevice: any;
   creationStatus:any;
   isLoading: boolean;
}
