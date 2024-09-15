// dependencies
import { Button, Drawer, Sidebar, Modal} from "flowbite-react";
import { useState } from "react";
import { FaSearch, FaPen, FaCalendarAlt, FaHashtag } from "react-icons/fa";
import { IoIosJournal } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";

export function DrawerNavigation({isOpen, setIsOpen}) {
  const handleClose = () => setIsOpen(false);
  return (
    <>
        <div className = "hidden md:block max-h-screen overflow-y-scroll">
            <Sidebar className = "bg-white">
              <div className="flex flex-col justify-between py-2 bg-white">
                <h4>Health Diary</h4>
                <div>
                  <Sidebar.Items>
                    <Sidebar.ItemGroup className = "pt-0 mt-0 px-0">                    
                      <Sidebar.Item icon={FaPen} className="no-underline cursor-pointer">
                        <Button className = 'text-black no-underline border-0' size="sm">Write Posts</Button>
                      </Sidebar.Item>

                      <Sidebar.Item icon={IoIosJournal} className="no-underline cursor-pointer">
                        <Button className = 'text-black no-underline border-0' size="sm">Latest Entries</Button>                    
                      </Sidebar.Item>

                      <Sidebar.Item icon={FaCalendarAlt} className="no-underline cursor-pointer">                      
                        <Button className = 'text-black no-underline border-0' size="sm">My Entries</Button>
                      </Sidebar.Item>
                      
                      <Sidebar.Item icon={FaHashtag} className="no-underline cursor-pointer">                      
                        <Button className = 'text-black no-underline border-0' size="sm">Tagged Entries</Button>
                      </Sidebar.Item>

                      <Sidebar.Item icon={FaSearch} className="no-underline cursor-pointer">                      
                        <Button className = 'text-black no-underline border-0' size="sm">Search</Button>
                      </Sidebar.Item>

                      <Sidebar.Collapse icon={HiUsers} label = "Friends" className = "text-left font-bold">
                          <Sidebar.Item className="no-underline cursor-pointer">                            
                              My Friends
                          </Sidebar.Item>
                          <Sidebar.Item className="no-underline cursor-pointer">                            
                              Friend Requests
                          </Sidebar.Item>
                          <Sidebar.Item className="no-underline cursor-pointer">                            
                              Invites
                          </Sidebar.Item>
                      </Sidebar.Collapse>
                      
                    </Sidebar.ItemGroup>
                    
                    <Sidebar.ItemGroup>
                      <Sidebar.Item icon={FcAbout} className="no-underline cursor-pointer">                      
                        <Button className = 'text-black no-underline border-0' size="sm">About</Button>
                      </Sidebar.Item>                
                    </Sidebar.ItemGroup>

                  </Sidebar.Items>
                </div>
              </div>
            </Sidebar>
        </div>

        {/* drawer for small screens */}
        <div className = "md:hidden">
          <Drawer open={isOpen} onClose={handleClose} className="md:hidden">
          <Drawer.Header title="MENU" titleIcon={() => <></>} />
          <Drawer.Items>
            <Sidebar
              aria-label="Sidebar with multi-level dropdown example"
              className="[&>div]:bg-transparent [&>div]:p-0"
            >
              <div className="flex h-full flex-col justify-between py-2">
                <div>
                <Sidebar.Items>
                      <Sidebar.ItemGroup className = "pt-0 mt-0">                    
                        <Sidebar.Item icon={FaPen} className="no-underline cursor-pointer">
                          <Button className = 'text-black no-underline border-0' size="sm">Write Posts</Button>
                        </Sidebar.Item>

                        <Sidebar.Item icon={IoIosJournal} className="no-underline cursor-pointer">
                          <Button className = 'text-black no-underline border-0' size="sm">Latest Entries</Button>                    
                        </Sidebar.Item>

                        <Sidebar.Item icon={FaCalendarAlt} className="no-underline cursor-pointer">                      
                          <Button className = 'text-black no-underline border-0' size="sm">My Entries</Button>
                        </Sidebar.Item>
                        
                        <Sidebar.Item icon={FaHashtag} className="no-underline cursor-pointer">                      
                          <Button className = 'text-black no-underline border-0' size="sm">Tagged Entries</Button>
                        </Sidebar.Item>

                        <Sidebar.Item icon={FaSearch} className="no-underline cursor-pointer">                      
                          <Button className = 'text-black no-underline border-0' size="sm">Search</Button>
                        </Sidebar.Item>

                        <Sidebar.Collapse icon={HiUsers} label = "Friends" className = "text-left font-bold">
                            <Sidebar.Item className="no-underline cursor-pointer">                            
                                My Friends
                            </Sidebar.Item>
                            <Sidebar.Item className="no-underline cursor-pointer">                            
                                Friend Requests
                            </Sidebar.Item>
                            <Sidebar.Item className="no-underline cursor-pointer">                            
                                Invites
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        
                      </Sidebar.ItemGroup>
                      
                      <Sidebar.ItemGroup>
                        <Sidebar.Item icon={FcAbout} className="no-underline cursor-pointer">                      
                          <Button className = 'text-black no-underline border-0' size="sm">About</Button>
                        </Sidebar.Item>                
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