import { AppBar, Toolbar, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import CartWidget from "./CartWidget"
    
const Navbar = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                <CartWidget/>
                </Toolbar>
            </AppBar>
        </>
        
    )
}

export default Navbar