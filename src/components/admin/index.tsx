import React, { useState } from 'react';
import { 
  Tabs, Tab, Box, Typography, Button, Badge, Avatar, 
  IconButton, Stack, Switch, Drawer, useMediaQuery, useTheme 
} from '@mui/material';
import '../admin/admin.scss';

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  
  // Set drawer to closed by default on mobile
  React.useEffect(() => {
    if (isMobile) {
      setDrawerOpen(false);
    } else {
      setDrawerOpen(true);
    }
  }, [isMobile]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    // Close drawer automatically on mobile after selection
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerWidth = 256; // Fixed width for drawer

  return (
    <div className="admin_panel flex w-full h-screen">
      {/* App Bar for Mobile - Only shown when drawer is closed */}
      {(!drawerOpen || isMobile) && (
        <Box 
          sx={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            zIndex: 1100,
            background: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            padding: '12px 16px',
            justifyContent: 'space-between'
          }}
        >
          <div className="logo_image">
            <img src="images/Retryl.png" alt="Retryl" className="h-8" />
          </div>
          <IconButton onClick={toggleDrawer}>
          <img src="images/switcher.png"/>
          </IconButton>
        </Box>
      )}
      
      {/* Persistent Drawer */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          position:'absolute',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <div className="admin_left bg-white flex flex-col shadow-md h-full">
          <Box>
          <Box className="logo flex items-center justify-between p-4 border-b"
          sx={{
            justifyContent:'space-between'
          }}>
            <div className="logo_image">
              <img src="images/Retryl.png" alt="Retryl" className="h-8" />
            </div>
            <IconButton onClick={toggleDrawer} className="drawer-toggle">
            <img src="images/switcher.png"/>
            </IconButton>
          </Box>
              
          <Box className="left_links flex-grow" mt={5}>
            <Tabs
              orientation="vertical"
              value={selectedTab}
              onChange={handleTabChange}
              className="tab_sec w-full"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab 
                className="create_link tab_list_itm"
                icon={<img src="images/Star.png" alt="Star" className="w-5 h-5" />}
                label="Create" 
                iconPosition="start"
              />
              <Tab 
                className="home_link tab_list_itm"
                icon={<img src="images/Home.png" alt="Home" className="w-5 h-5" />}
                label={
                  <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                    <Typography>Home</Typography>
                    <Badge badgeContent={5} color="primary" className="number ml-2" />
                  </Box>
                }
                iconPosition="start"
              />
              <Tab 
                className="home_link tab_list_itm"
                icon={<img src="images/Home.png" alt="Collections" className="w-5 h-5" />}
                label="Collections" 
                iconPosition="start"
              />
              <Tab 
                className="home_link tab_list_itm"
                icon={<img src="images/Home.png" alt="Downloads" className="w-5 h-5" />}
                label="Downloads" 
                iconPosition="start"
              />
              <Tab 
                className="home_link tab_list_itm"
                icon={<img src="images/Home.png" alt="Chat" className="w-5 h-5" />}
                label="Chat" 
                iconPosition="start"
              />
              <Tab 
                className="home_link tab_list_itm"
                icon={<img src="images/Home.png" alt="History" className="w-5 h-5" />}
                label="History" 
                iconPosition="start"
              />
            </Tabs>
          </Box>
          </Box>
          <div className="admin_left_footer border-t p-4">
            <Box className="admin_left_footer_wrapper flex items-center justify-between"
            component={'div'} justifyContent={'space-between'}>
              <Stack direction="row" gap={2}>
                <Avatar className="f_image" src="/api/placeholder/40/40" alt="Profile" />
                <div className="f_name ml-2 flex-grow">
                  <Typography variant="body2" className="text-gray-400">Hi</Typography>
                  <Typography variant="subtitle2" className="font-medium">Sunanda</Typography>
                </div>
              </Stack>
              <IconButton className="f_icon" sx={{ml:'auto'}}>
                <img src="images/Icon.png" alt="Icon" className="h-5 w-5" />
              </IconButton>
            </Box>
          </div>
        </div>
      </Drawer>
      
      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1, p:2,
          marginLeft:{xs: 0 , md: drawerOpen ? `${drawerWidth}px` : 0} ,
          width: {xs:'100%', md: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)` },
          minHeight:'100vh',
          marginTop: (!drawerOpen || isMobile) ? '64px' : 0,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
        className="admin_right bg-gray-50 p-6"
      >
        {/* Create Tab Content */}
        {selectedTab === 0 && (
          <div className="home_chat_content">
            <Typography variant="h4" className="title font-medium mb-6"
            color='textPrimary' fontWeight={600} my={2}>Egreg's Brain Workspace</Typography>
            <div className="chatbox bg-white rounded-lg shadow-sm">
              <form>
                <div className="box_top flex items-center p-4 border-b">
                  <label className="mr-3" htmlFor="msg">
                    <img src="images/Group%20427320615.png" alt="Message" className="h-5 w-5" />
                  </label>
                  <input 
                    type="text" 
                    id="msg" 
                    name="msg" 
                    placeholder="What's on your mind today?" 
                    className="flex-grow outline-none border-none"
                  />
                </div>
                <div className="box_botom flex justify-between p-3 flex-wrap">
                  <div className="left flex flex-wrap" style={{gap:10}}>
                    <Button variant="outlined" className="text-sm"
                      sx={{
                        height:38,
                        color: 'black', 
                        fontSize:'.8rem'
                      }}>Product </Button>
                    <Button variant="outlined" className="text-sm"
                      sx={{
                        height:38,
                        color: 'black', 
                        fontSize:'.8rem'
                      }}>Product Description</Button>
                  </div>
                  <div className="right mt-2 sm:mt-0">
                    <Button variant="outlined" className="flex items-center text-sm"
                      sx={{
                        maxWidth:103,
                        gap:0
                      }}
                    >
                      <div className="line flex space-x-1"
                        style={{
                          gap:.1
                        }}>
                        {[1, 2, 3, 4, 5].map((i) => (
                          <span key={i} className="w-0.5 h-3 bg-gray-400 rounded-full"></span>
                        ))}
                      </div>
                      Voice
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Home Tab Content */}
        {selectedTab === 1 && (
          <div className="tab_home_wrapper">
            <div className="icons grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
              <div className="icon_item flex-col items-center active">
                <div className="icon_image bg-gray-100 rounded-lg p-2 mb-2">
                  <img src="images/image%20122.png" alt="App icon" className="w-12 h-12" />
                </div>
                <Typography variant="subtitle2" className="text-center">1Soshie</Typography>
              </div>
              {Array(14).fill(0).map((_, i) => (
                <div key={i} className="icon_item flex-col items-center">
                  <div className="icon_image bg-gray-100 rounded-lg p-2 mb-2">
                    <img src="images/image%20122.png" alt="App icon" className="w-12 h-12" />
                  </div>
                  <Typography variant="subtitle2" className="text-center">Soshie</Typography>
                </div>
              ))}
            </div>
            
            <div className="icon_txt_block grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="icon_txt_block_item flex bg-white rounded-lg p-4 shadow-sm">
                  <div className="icon mr-4">
                    <img src="images/Group%20427320672.png" alt="Feature icon" className="w-12 h-12" />
                  </div>
                  <div className="text">
                    <Typography variant="subtitle1" className="font-medium mb-1">Image Generation</Typography>
                    <Typography variant="body2" color="textSecondary">Generate images for your social media posts.</Typography>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="home_chat_content">
              <Typography variant="h4" className="title font-medium mb-6"
              color='textPrimary' fontWeight={600} my={2}>Egreg's Brain Workspace</Typography>
              <div className="chatbox bg-white rounded-lg shadow-sm">
                <form>
                  <div className="box_top flex items-center p-4 border-b">
                    <label className="mr-3" htmlFor="msg">
                      <img src="images/Group%20427320615.png" alt="Message" className="h-5 w-5" />
                    </label>
                    <input 
                      type="text" 
                      id="msg" 
                      name="msg" 
                      placeholder="What's on your mind today?" 
                      className="flex-grow outline-none border-none"
                    />
                  </div>
                  <div className="box_botom flex justify-between p-3 flex-wrap">
                    <div className="left flex flex-wrap" style={{gap:10}}>
                      <Button variant="outlined" className="text-sm"
                        sx={{
                          height:38,
                          color: 'black', 
                          fontSize:'.8rem'
                        }}>Product </Button>
                      <Button variant="outlined" className="text-sm"
                        sx={{
                          height:38,
                          color: 'black', 
                          fontSize:'.8rem'
                        }}>Product Description</Button>
                    </div>
                    <div className="right mt-2 sm:mt-0">
                      <Button variant="outlined" className="flex items-center text-sm"
                        sx={{
                          maxWidth:103,
                          gap:0
                        }}
                      >
                        <div className="line flex space-x-1"
                          style={{
                            gap:.1
                          }}>
                          {[1, 2, 3, 4, 5].map((i) => (
                            <span key={i} className="w-0.5 h-3 bg-gray-400 rounded-full"></span>
                          ))}
                        </div>
                        Voice
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Collections Tab Content */}
        {selectedTab === 2 && (
          <div className="collection_tabcontent">
            <Stack direction="row" gap={1} alignItems="center" mb={2}>
              <Typography variant="h4" className="font-medium" color='textPrimary' fontWeight="bold" 
              mb={0}>Automations</Typography>
              <Stack alignItems="center">
                <img src="images/info-circle.png" alt="Info" className="ml-2 h-5 w-5" />
              </Stack>
            </Stack>
         
            <div className="collection_item_wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="collection_item flex bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="text p-4 flex-grow">
                    <Typography variant="h6" className="font-medium">Buddy</Typography>
                    <Typography variant="body2" color="textSecondary" className="mb-4" 
                    sx={{
                      color:'white'
                    }}>Business Development</Typography>
                    <Switch {...label} />
                  </div>
                  <div className="image w-1/3 bg-gray-100">
                    <img src="images/Mask%20group.png" alt="Collection" className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Downloads Tab Content */}
        {selectedTab === 3 && (
          <Typography variant="h5">Downloads</Typography>
        )}

        {/* Chat Tab Content */}
        {selectedTab === 4 && (
          <div className="tabcontent_chat_main flex-col h-full">
            <div className="chat_top mb-6">
              <div className="title flex items-center mb-4">
                <div className="title_img mr-3">
                  <img src="images/chat2.png" alt="Chat icon" className="w-10 h-10" />
                </div>
                <div className="title_txt">
                  <Typography variant="h6" className="font-medium" color='textPrimary'>Buddy</Typography>
                  <Typography variant="body2" color="textSecondary">Business Development</Typography>
                </div>
              </div>
              
              <div className="chat_description bg-white rounded-lg p-6 mb-4 shadow-sm">
                <div className="chat_desc_item mb-6">
                  <Typography variant="h6" className="mb-2" color='textPrimary'>1. Generate images for your social media posts.</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.
                    Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis 
                    tristique. Nam vel iaculis mauris.
                  </Typography>
                </div>
                
                <div className="chat_desc_item">
                  <Typography variant="h6" className="mb-2" color='textPrimary'>2. Generate images for your social media posts.</Typography>
                  <ul className="list-disc pl-5">
                    <li className="mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li className="mb-1">Etiam laoreet enim sed nulla porta finibus.</li>
                    <li className="mb-1">Suspendisse ac libero a mi feugiat tristique.</li>
                    <li>Donec quis ligula elementum, semper orci sed, condimentum urna.</li>
                  </ul>
                </div>
              </div>
              
              <div className="chat_top_bottom flex gap-4">
                <IconButton>
                  <img src="images/chat_icon_1.png" alt="Chat icon 1" className="w-6 h-6" />
                </IconButton>
                <IconButton>
                  <img src="images/chat_icon_2.png" alt="Chat icon 2" className="w-6 h-6" />
                </IconButton>
                <IconButton>
                  <img src="images/chat_icon_3.svg" alt="Chat icon 3" className="w-6 h-6" />
                </IconButton>
              </div>
            </div>
            
            <Box className="home_chat_content" sx={{maxWidth:'100%', width:'100%'}}>
              <Box className="chatbox bg-white rounded-lg shadow-sm" sx={{maxWidth:'100% !important', width:'100%'}}>
                <form>
                  <div className="box_top flex items-center p-4 border-b">
                    <label className="mr-3" htmlFor="msg">
                      <img src="images/Group%20427320615.png" alt="Message" className="h-5 w-5" />
                    </label>
                    <input 
                      type="text" 
                      id="msg" 
                      name="msg" 
                      placeholder="What's on your mind today?" 
                      className="flex-grow outline-none border-none"
                    />
                  </div>
                  <div className="box_botom flex justify-between p-3 flex-wrap">
                    <div className="left flex flex-wrap" style={{gap:10}}>
                      <Button variant="outlined" className="text-sm"
                        sx={{
                          height:38,
                          color: 'black', 
                          fontSize:'.8rem'
                        }}>Product </Button>
                      <Button variant="outlined" className="text-sm"
                        sx={{
                          height:38,
                          color: 'black', 
                          fontSize:'.8rem'
                        }}>Product Description</Button>
                    </div>
                    <div className="right mt-2 sm:mt-0">
                      <Button variant="outlined" className="flex items-center text-sm"
                        sx={{
                          maxWidth:103,
                          gap:0
                        }}
                      >
                        <div className="line flex space-x-1"
                          style={{
                            gap:.1
                          }}>
                          {[1, 2, 3, 4, 5].map((i) => (
                            <span key={i} className="w-0.5 h-3 bg-gray-400 rounded-full"></span>
                          ))}
                        </div>
                        Voice
                      </Button>
                    </div>
                  </div>
                </form>
              </Box>
            </Box>
          </div>
        )}

        {/* History Tab Content */}
        {selectedTab === 5 && (
          <Box className="tab_content_history flex flex-col lg:flex-row"
          component={'div'}
          flexDirection={{xs:'column', lg:'row'}}>
            <Box className="history_left w-full lg:w-1/3 pr-0 lg:pr-6 mb-6 lg:mb-0"
            component={'div'}
          
            sx={{
              width:{xs:'100%', lg:300}
            }}>
              <Typography variant="h6" className="mb-4" mb={1} color='textPrimary'>History</Typography>
              <Box className="left_item_wrapper space-y-4"
              sx={{
                display:{xs:'flex', lg:'block'},
                overflowX:'hidden', gap:1,
                '&:hover':{
                  overflowX:'auto'
                }
              }}>
                {Array(12).fill(0).map((_, i) => (
                  <Box key={i} className="left_item bg-white rounded-lg p-4 shadow-sm"
                  sx={{
                    minWidth:200
                  }}>
                    <Typography variant="subtitle1" color='textPrimary' className="font-medium mb-1">Develop strategic</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            
            <Box className="history_right w-full lg:w-2/3"
            sx={{
              width:{xs:'100%', lg:'calc(100% - 300px);'}
            }}>
              <div className="right_content">
                <div className="home_chat_content">
                  <Typography variant="h4" className="title font-medium mb-6"
                  color='textPrimary' fontWeight={600} my={2}>Egreg's Brain Workspace</Typography>
                  <div className="chatbox bg-white rounded-lg shadow-sm">
                    <form>
                      <div className="box_top flex items-center p-4 border-b">
                        <label className="mr-3" htmlFor="msg">
                          <img src="images/Group%20427320615.png" alt="Message" className="h-5 w-5" />
                        </label>
                        <input 
                          type="text" 
                          id="msg" 
                          name="msg" 
                          placeholder="What's on your mind today?" 
                          className="flex-grow outline-none border-none"
                        />
                      </div>
                      <div className="box_botom flex justify-between p-3 flex-wrap">
                        <div className="left flex flex-wrap" style={{gap:10}}>
                          <Button variant="outlined" className="text-sm"
                            sx={{
                              height:38,
                              color: 'black', 
                              fontSize:'.8rem'
                            }}>Product </Button>
                          <Button variant="outlined" className="text-sm"
                            sx={{
                              height:38,
                              color: 'black', 
                              fontSize:'.8rem'
                            }}>Product Description</Button>
                        </div>
                        <div className="right mt-2 sm:mt-0">
                          <Button variant="outlined" className="flex items-center text-sm"
                            sx={{
                              maxWidth:103,
                              gap:0
                            }}
                          >
                            <div className="line flex space-x-1"
                              style={{
                                gap:.1
                              }}>
                              {[1, 2, 3, 4, 5].map((i) => (
                                <span key={i} className="w-0.5 h-3 bg-gray-400 rounded-full"></span>
                              ))}
                            </div>
                            Voice
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Admin;