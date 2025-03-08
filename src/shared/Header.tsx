
import { Box, Drawer, IconButton, Link, List, ListItem } from "@mui/material";
import RippleButton from "./button";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
    {/* <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
      </Toolbar>
    </AppBar> */}
    <header className="site_header">
    <div className="container">
   <div className="site_header_wrapper">
     <div className="logo"><h1>Retryl</h1></div>  


    <Box className="header_menu" 
    sx={{
      display:{xs:'none', lg:'inline-block'}
    }}>
        <ul>
        <li><a href="#">Home</a></li>
            <li><a href="/about">AI Employees</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Brain AI</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
        </ul>
        </Box>
        <Box className="header_icon"
        sx={{
          display:{xs:'Flex', lg:'inline-block'},
          gap:1
        }}
        >
          <div className="animated-border-box">  
           <RippleButton text="Explore More" link="/about" />
        
           </div>
           <IconButton
           onClick={toggleDrawer(true)}
           sx={{
            display:{xs:'inline-block', lg:'none'}, color:'white'
           }}>
            o
           </IconButton>
          </Box>   
    </div>
    </div>


    </header>

    <Drawer open={open} onClose={toggleDrawer(false)} 
    sx={{ "& .MuiDrawer-paper": { backgroundColor: "#000510", color: "#ffffff", width:250, p:2 } }}>
    <Box className="logo"mb={2}><h1>Retryl</h1></Box>  

    <List>
      <ListItem>
        <Link sx={{
          color:'white', textDecoration:'none'
        }}> Home </Link>
      </ListItem>

      <ListItem>
      <Link sx={{
          color:'white', textDecoration:'none'
        }}> AI Employees </Link>
      </ListItem>

      <ListItem>
      <Link sx={{
          color:'white', textDecoration:'none'
        }}> Features </Link>
      </ListItem>

      <ListItem>
      <Link sx={{
          color:'white', textDecoration:'none'
        }}> Brain AI </Link>
      </ListItem>

      <ListItem>
      <Link sx={{
          color:'white', textDecoration:'none'
        }}>Pricing </Link>
      </ListItem>

      <ListItem>
      <Link sx={{
          color:'white', textDecoration:'none'
        }}> Resources </Link>
      </ListItem>
    </List>
      </Drawer>
    </>
  );
};

export default Header;
