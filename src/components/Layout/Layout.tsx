import { InteractionType } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal, useMsalAuthentication } from '@azure/msal-react';
import { Box} from '@mui/material';
import React from 'react';
import { apiScope } from '../../config/authConfig';
import { ApplicationState } from '../../interfaces/ApplicationState';
import { getProfilePicture } from '../../redux/actions/authAction';
import { RECEIVE_AUTHINFO, RECEIVE_ACCESSTOKEN,RECEIVE_IDTOKEN } from '../../redux/reducers/authReducer';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';
import Footer from './Footer';
import NavBar from './Menu';
import MenuAppBar from './MenuAppBar';
import { getIotHubsList } from '../../redux/actions/iotHubAction';
import { getGuid } from '../../redux/actions/devicesListAction';
import { getOrOperator, getOwnerCompanyList, getSubstation, getTecnologies } from '../../redux/actions/businessAction';

const Layout = (props: { children?: React.ReactNode }) => {
    
    const isAuthenticated = useIsAuthenticated();
    const { instance, accounts, inProgress } = useMsal();
    useMsalAuthentication(InteractionType.Redirect, { scopes: ["User.Read"] });

    const accessToken = useAppSelector((state: ApplicationState) => state.auth?.accessToken);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (inProgress === "none" && accounts.length > 0) {

            dispatch(RECEIVE_AUTHINFO({
                userName: accounts[0].username,
                name: accounts[0].name
            }));
            instance.acquireTokenSilent({
                account: accounts[0],
                scopes: apiScope.scopes
            }).then(response => {
                if (response.accessToken) {
                    dispatch(RECEIVE_ACCESSTOKEN(response.accessToken));
                }
                if (response.idToken) {
                    dispatch(RECEIVE_IDTOKEN(response.idToken));
                }
            });
        }
    }, [inProgress, accounts, dispatch,instance]);

    React.useEffect(() => {
        if (!accessToken)
            return;
            
        dispatch(getProfilePicture());
        dispatch(getIotHubsList());
        dispatch(getGuid());
        dispatch(getOwnerCompanyList())
        dispatch(getOrOperator())
        
        dispatch(getSubstation())
        dispatch(getTecnologies())
        
    }, [accessToken, dispatch]);  

    return (
        <React.Fragment>
            {isAuthenticated &&
                <div>
                    <MenuAppBar />
                    <Box sx={{ display: 'flex' }}>
                        <Box>
                            <NavBar />
                        </Box>

                        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                            {props.children}
                        </Box>
                    </Box>

                    <Footer />
                </div>
            }
        </React.Fragment>
    );
}

export default Layout;