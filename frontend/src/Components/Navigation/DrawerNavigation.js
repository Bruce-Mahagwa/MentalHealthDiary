// dependencies
import { Button, Drawer, Sidebar, Modal} from "flowbite-react";
import { FaSearch, FaPen, FaCalendarAlt, FaHashtag } from "react-icons/fa";
import { IoIosJournal } from "react-icons/io";
import { HiUsers } from "react-icons/hi";

export function DrawerNavigation({isOpenMenu, setIsOpenMenu, setOpenFriends, setOpenInvites, setOpenRequests, setOpenTaggedEntries, setOpenSearch, setOpenWriteEntry, setOpenLatestPosts, setOpenMyEntries, setShowLogo}) {
  const handleClose = () => setIsOpenMenu(false); // closes drawer navigation
  
  const textContents = {"Write Entry": setOpenWriteEntry, 
  "Latest Entries": setOpenLatestPosts, 
  "My Entries": setOpenMyEntries, 
  "Tagged Entries": setOpenTaggedEntries, 
  "Search": setOpenSearch,
  "My Friends": setOpenFriends, 
  "Friend Requests": setOpenRequests,
  "Invites": setOpenInvites
}
  const handleNavigation = (e) => {
    const value = e.currentTarget.textContent;
    // close other open tabs
    for (let i in textContents) {
      setShowLogo(false); // remove logo
      if (i === value) {
        continue;
      }
      else {
           textContents[i](false);
      }
    }

    switch(value) {
      case "Write Entry":
        setOpenWriteEntry(true);
        break;
      case "Latest Entries":
        setOpenLatestPosts(true);
        break;
      case "My Entries":
        setOpenMyEntries(true);
        break;
      case "Tagged Entries":
        setOpenTaggedEntries(true);
        break;
      case "Search":
        setOpenSearch(true);
        break;
      case "My Friends":
        setOpenFriends(true);
        break;
      case "Friend Requests":        
        setOpenRequests(true);
        break;
      case "Invites":
        setOpenInvites(true);
        break;
    }
  }

  return (
    <>
        <div className = "hidden md:block max-h-screen overflow-y-scroll">
            <Sidebar className = "bg-white">
              <div className="flex flex-col justify-between py-2 bg-white">
                <h4>Health Diary</h4>
                <div>
                  <Sidebar.Items>
                    <Sidebar.ItemGroup className = "pt-0 mt-0 px-0">                    
                     
                      <Sidebar.Item icon={FaPen} className="no-underline cursor-pointer" onClick = {handleNavigation}>
                        <Button className = 'text-black no-underline border-0' size="sm">Write Entry</Button>
                      </Sidebar.Item>

                      <Sidebar.Item icon={IoIosJournal} className="no-underline cursor-pointer" onClick = {handleNavigation}>
                        <Button className = 'text-black no-underline border-0' size="sm">Latest Entries</Button>                    
                      </Sidebar.Item>

                      <Sidebar.Item icon={FaCalendarAlt} className="no-underline cursor-pointer" onClick = {handleNavigation}>                      
                        <Button className = 'text-black no-underline border-0' size="sm">My Entries</Button>
                      </Sidebar.Item>
                      
                      <Sidebar.Item icon={FaHashtag} className="no-underline cursor-pointer" onClick = {handleNavigation}>                      
                        <Button className = 'text-black no-underline border-0' size="sm">Tagged Entries</Button>
                      </Sidebar.Item>

                      <Sidebar.Item icon={FaSearch} className="no-underline cursor-pointer" onClick = {handleNavigation}>                      
                        <Button className = 'text-black no-underline border-0' size="sm">Search</Button>
                      </Sidebar.Item>

                      <Sidebar.Collapse icon={HiUsers} label = "Friends" className = "text-left font-bold">
                          <Sidebar.Item className="no-underline cursor-pointer" onClick={handleNavigation}>                            
                              My Friends
                          </Sidebar.Item>
                          <Sidebar.Item className="no-underline cursor-pointer" onClick = {handleNavigation}>                            
                              Friend Requests
                          </Sidebar.Item>
                          <Sidebar.Item className="no-underline cursor-pointer" onClick = {handleNavigation}>                            
                              Invites
                          </Sidebar.Item>
                      </Sidebar.Collapse>
                      
                    </Sidebar.ItemGroup>                                        
                  </Sidebar.Items> 
                </div>
              </div>
            </Sidebar>
        </div>
 
        {/* drawer for small screens */}
        <div className = "md:hidden">
          <Drawer open={isOpenMenu} onClose={handleClose} className="md:hidden">
          <Drawer.Header title="MENU" />
          <Drawer.Items>
            <Sidebar
              aria-label="Sidebar with multi-level dropdown example"
              className="[&>div]:bg-transparent [&>div]:p-0"
            >
              <div className="flex h-full flex-col justify-between py-2">
                <div>
                <Sidebar.Items>
                      <Sidebar.ItemGroup className = "pt-0 mt-0">                    
                        <Sidebar.Item icon={FaPen} className="no-underline cursor-pointer" onClick = {handleNavigation}>
                          <Button className = 'text-black no-underline border-0' size="sm">Write Entry</Button>
                        </Sidebar.Item>

                        <Sidebar.Item icon={IoIosJournal} className="no-underline cursor-pointer" onClick = {handleNavigation}>
                          <Button className = 'text-black no-underline border-0' size="sm">Latest Entries</Button>                    
                        </Sidebar.Item>

                        <Sidebar.Item icon={FaCalendarAlt} className="no-underline cursor-pointer" onClick = {handleNavigation}>                      
                          <Button className = 'text-black no-underline border-0' size="sm">My Entries</Button>
                        </Sidebar.Item>
                        
                        <Sidebar.Item icon={FaHashtag} className="no-underline cursor-pointer" onClick = {handleNavigation}>                      
                          <Button className = 'text-black no-underline border-0' size="sm">Tagged Entries</Button>
                        </Sidebar.Item>

                        <Sidebar.Item icon={FaSearch} className="no-underline cursor-pointer" onClick = {handleNavigation}>                      
                          <Button className = 'text-black no-underline border-0' size="sm">Search</Button>
                        </Sidebar.Item>

                        <Sidebar.Collapse icon={HiUsers} label = "Friends" className = "text-left font-bold">
                            <Sidebar.Item className="no-underline cursor-pointer" onClick = {handleNavigation}>                            
                                My Friends
                            </Sidebar.Item>
                            <Sidebar.Item className="no-underline cursor-pointer" onClick = {handleNavigation}>                            
                                Friend Requests
                            </Sidebar.Item>
                            <Sidebar.Item className="no-underline cursor-pointer" onClick = {handleNavigation}>                            
                                Invites
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        
                      </Sidebar.ItemGroup>                                            

                    </Sidebar.Items>
                </div>
              </div>
            </Sidebar>
          </Drawer.Items>
        </Drawer>
      </div>
        {/* end of drawer for small screens */}
      </>
  );
}
export default DrawerNavigation;