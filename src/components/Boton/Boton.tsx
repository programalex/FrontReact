import Box from '@mui/material/Box';
import Button from '@mui/material/Button/Button';
const Boton = () => {
   // const handleSendData = () => {alert("Este es un Alert");}   
    return(

         <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
                 <Button  type='submit'              
                  variant="contained" color="info"
               //  onClick={handleSendData}
                 >Enviar</Button>
               </Box>
         
    )

};
export default Boton;