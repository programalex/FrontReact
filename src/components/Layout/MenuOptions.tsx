import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SchemaIcon from '@mui/icons-material/Schema';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import PolicyIcon from '@mui/icons-material/Policy';
import { useNavigate } from 'react-router-dom';

function MenuOptions() {
    let navigate = useNavigate();
    const menuItems=[
        {text:'Dashboard', icon:<MonitorHeartIcon />, path:'/'},
        {text:'Dispositivos', icon:<SettingsRemoteIcon />, path:'/devices'},
        {text:'Servidores', icon:<SchemaIcon />, path:'/servers'},
        {text:'Auditoria', icon:<PolicyIcon />, path:'/auditLogs'},
    ]
    return (
        <List>
            {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                    <ListItemButton onClick={()=>navigate(item.path)}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}

export default MenuOptions;