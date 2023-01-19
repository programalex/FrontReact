import { Drawer, Toolbar } from '@mui/material';
import MenuOptions from './MenuOptions';

const drawerWidth: number = 240;

interface Props {
    window?: () => Window;
}

function Menu(props: Props) {
    return (
        <Drawer sx={{ width: drawerWidth, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }} variant='permanent' anchor='left'>
            <Toolbar />
            <div>
                <MenuOptions />
            </div>
        </Drawer>
    )
}

export default Menu;