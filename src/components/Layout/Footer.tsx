import { Link, Typography } from '@mui/material';

function Footer() {
    return (

        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.xm.com.co">
            XM
            </Link>{' Todos los derechos reservados XM '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}


export default Footer;