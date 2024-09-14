// dependencies
import { Button, Drawer, Sidebar} from "flowbite-react";
import { useState } from "react";
import { FaSearch, FaPen, FaCalendarAlt } from "react-icons/fa";
import { IoIosJournal } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";

export function DrawerNavigation() {
  return (
        <div className = "border border-black border-2 h-max">
            <Sidebar>
              <div className="flex h-full flex-col justify-between py-2">
                <div>
                  <Sidebar.Items>
                    <Sidebar.ItemGroup>                    
                      <Sidebar.Item icon={FaPen} className="no-underline cursor-pointer">
                        <Button className = 'text-black no-underline border-0' size="sm">Write Posts</Button>
                      </Sidebar.Item>

                      <Sidebar.Item icon={IoIosJournal} className="no-underline cursor-pointer">
                        <Button className = 'text-black no-underline border-0' size="sm">Latest Entries</Button>                    
                      </Sidebar.Item>

                      <Sidebar.Item icon={FaCalendarAlt} className="no-underline cursor-pointer">                      
                        <Button className = 'text-black no-underline border-0' size="sm">My Entries</Button>
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
  );
}
export default DrawerNavigation;