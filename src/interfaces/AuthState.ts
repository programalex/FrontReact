
export interface AuthState
{
    isAuthenticated: boolean;
    userName: string |  undefined;
    name: string |  undefined;
    profilePicture: string |  undefined;
    accessToken: string |  undefined;
    idToken: string |  undefined;
}