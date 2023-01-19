import AuthReducer from './authReducer';
import businessReducer from './businessReducer';
import DevicesReducer from './devicesReducer';
import IotHubReducer from './iotHubReducer';

const reducers = {
     auth: AuthReducer,
     iot:IotHubReducer,
     dev: DevicesReducer,
     bus:businessReducer
};

export default reducers;