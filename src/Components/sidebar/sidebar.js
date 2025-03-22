import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Task';
import ScheduleIcon from '@mui/icons-material/Schedule';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
const drawerWidth = 240;

function Sidebar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const logo = require('../../assets/Progressify2.jpeg');

    const drawer = (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                {/* <img
                     src="src/assets/progressify.jpeg"
                    
                    alt="Logo"
                    style={{ marginRight: 10, borderRadius: '50%' }}
                /> */}
              
                <img src={logo} alt="Logo" style={{
    width: '35%',
    height: 'auto',
    borderRadius: '08%',
    objectFit: 'cover',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    }, }} />
            </Box>

            <Divider />

            {/* <Toolbar /> */}
            <Divider />
            <List>
                {['Overview', 'My Tasks', 'Schedule', 'Team Members', 'Reports'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 && <DashboardIcon />}
                                {index === 1 && <TaskIcon />}
                                {index === 2 && <ScheduleIcon />}
                                {index === 3 && <GroupIcon />}
                                {index === 4 && <BarChartIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >

            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    slotProps={{
                        root: {
                            keepMounted: true, // Better open performance on mobile.
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

Sidebar.propTypes = {
    window: PropTypes.func,
};

export default Sidebar;
