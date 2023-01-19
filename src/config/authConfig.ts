import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId:process.env.REACT_APP_CLIENT_ID || '' ,
        authority: process.env.REACT_APP_AUTH_AUTHORITY,
        redirectUri: process.env.REACT_APP_REDIRECT_URI 
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false, 
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level: any, message:any, containsPii:any) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {		
                    case LogLevel.Error:		
                        console.error(message);		
                        return;		
                    case LogLevel.Info:		
                        console.info(message);		
                        return;		
                    case LogLevel.Verbose:		
                        console.debug(message);		
                        return;		
                    case LogLevel.Warning:		
                        console.warn(message);		
                        return;		
                }	
            }	
        }	
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};

export const apiScope = {
    scopes: [process.env.REACT_APP_API_SCOPE || '']
};

export const graphConfig = {
    graphMeEndpoint: process.env.REACT_APP_GRRAPH_ME
};
