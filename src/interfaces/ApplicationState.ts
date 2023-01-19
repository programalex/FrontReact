import {AuthState} from './AuthState';
import { BusinessState } from './BusinessState';
import { DeviceState } from './DeviceState';
import { IotHubState } from './IotHubState';

export interface ApplicationState {
    auth: AuthState | undefined ;
    iot: IotHubState;
    dev:DeviceState;
    bus: BusinessState;
}