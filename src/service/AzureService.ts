import { HttpClient } from "./HttpClient";

export class AzureService {
    private API_Endpoint;
    private API_Second_Endpoint;
    constructor(private http: HttpClient) {
        this.API_Endpoint= process.env.REACT_APP_API_DEVICE_MANAGEMENT;
        this.API_Second_Endpoint= process.env.REACT_APP_API_CORE;
    }
    
    async getIotHubs(accessToken: string) {
        const response = await this.http.get(`${this.API_Endpoint}/api/IoTHubManager`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.json();
    }

    async getDevices(accessToken: string, resourseGroupName:any, iotHubName:any ) {
        const response = await this.http.get(`${this.API_Second_Endpoint}/api/Devices/${resourseGroupName}/${iotHubName}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.json();  
    }

    async getGuid(accessToken: string) {
        const response = await this.http.get(`${this.API_Second_Endpoint}/api/Devices/GetGuid`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.text();  
    }

    async postDevice(accessToken: string, body:any) {
        const response = await this.http.post(`${this.API_Second_Endpoint}/api/Devices`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${accessToken}`
            }, 
        },{
            body: body
        }
         );
         return response.json(); 
    }

    async postAzureDevice(accessToken: string,resourseGroupName:any, iotHubName:any, body:any) {
        const response = await this.http.post(`${this.API_Endpoint}/api/Device/${resourseGroupName}/${iotHubName}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${accessToken}`
            }, 
        },{
            body: body
        }
         );
         return response; 
    }

    async getDeviceById(accessToken: string, guid:any) {
        const response = await this.http.get(`${this.API_Second_Endpoint}/api/Devices/${guid}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.json();  
    }

    async getAzureDeviceById(accessToken: string, resourseGroupName:any, iotHubName:any,  guid:any) {
        const response = await this.http.get(`${this.API_Endpoint}/api/Device/${resourseGroupName}/${iotHubName}/${guid}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.json();  
    }

    async putDevice(accessToken: string, guid:any, body:any) {

        const response = await this.http.put(`${this.API_Second_Endpoint}/api/Devices/${guid}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${accessToken}`
            }, 
        },{
            body: body
        }
         );
         return response; 
    }
    async changeDeviceStatus(accessToken: string,resourseGroupName:any, iotHubName:any, guid:any) {
        const response = await this.http.putNoBody(`${this.API_Endpoint}/api/Device/${resourseGroupName}/${iotHubName}/ChangeStatus/${guid}
        `, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${accessToken}`
            }, 
        }
         );
         return response; 
    }

    async putKeysAzureDevice(accessToken: string, resourseGroupName:any, iotHubName:any,  guid:any, body:any) {
        const response = await this.http.put(`${this.API_Endpoint}/api/Device/${resourseGroupName}/${iotHubName}/ChangeKeys/${guid}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${accessToken}`
            }, 
        },{
            body: body
        }
         );
         return response; 
    }

    async deleteDevice(accessToken: string, guid:any) {
        const response = await this.http.delete(`${this.API_Second_Endpoint}/api/Devices/${guid}
        `, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${accessToken}`
            }, 
        }
         );
         return response; 
    }
    async deleteAzureDevice(accessToken: string, resourseGroupName:any, iotHubName:any, guid:any) {
        const response = await this.http.delete(`${this.API_Endpoint}/api/Device/${resourseGroupName}/${iotHubName}/${guid}
        `, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${accessToken}`
            }, 
        }
         );
         return response; 
    }

    async exportDevices(accessToken: string, resourseGroupName:any, iotHubName:any, type:any ) {
        const response = await this.http.get(`${this.API_Second_Endpoint}/api/Devices/${resourseGroupName}/${iotHubName}/export/${type}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.blob();  
    }
    async getOwnerCompanyList(accessToken: string) {
        const response = await this.http.get(`${this.API_Second_Endpoint}/api/Business/GetOwnerCompany`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.json();  
    }

    async getOrOperator(accessToken: string) {
        const response = await this.http.get(`${this.API_Second_Endpoint}/api/Business/GetOROperator`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.json();  
    }
   

    async getSubstation(accessToken: string) {
        const response = await this.http.get(`${this.API_Second_Endpoint}/api/Business/GetSubstation/example`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.json();  
    }
    async getTecnologies(accessToken: string) {
        const response = await this.http.get(`${this.API_Second_Endpoint}/api/Business/GetTechnologies`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.json();  
    }
    
}