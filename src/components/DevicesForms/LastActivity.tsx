import { Alert } from '@mui/material'
import { useAppSelector} from '../../redux/store/hooks'
import { ApplicationState } from '../../interfaces/ApplicationState'

export const LastActivity = () => {

  const azureDevice = useAppSelector((state: ApplicationState) => state.dev.azureDevice);
  
  return (
    <Alert severity="info" sx={{marginBottom:"2%"}} >Ultima Actividad:  {azureDevice.lastActivityTime} </Alert>
  )
}
