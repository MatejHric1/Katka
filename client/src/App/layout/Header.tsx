import { ShoppingCart } from "@mui/icons-material";
import { AppBar, ListItem, Switch, Toolbar, Typography, List, IconButton, Badge, Box } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";

const midLinks = [
    {title: 'collection', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'kontak', path: '/contact'},
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]

const navStyle = {
    
        color: 'inherit', 
        textDecoration:'none',
        typography: 'h7',
        '&:hover': {
            color: 'grey.500'
        },
        '&.active':{
            color: 'text.secondary'
        }
    
}

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props) {
    const {basket} = useAppSelector(state => state.basket);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)

    return(
        <AppBar position = 'static' sx={{mb: 4}} >
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                
               <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' component={NavLink} 
                        to='/'
                        sx={navStyle}
                        >
                            ReByLean
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange}/>
                </Box>

                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyle}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                    <IconButton component={Link} to='/basket' size='large' edge='start' color= 'inherit' sx={{mr: 2}}>
                        <Badge badgeContent={itemCount} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>

                    <List sx={{display: 'flex'}}>
                        {rightLinks.map(({title, path}) => (
                            <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyle}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}