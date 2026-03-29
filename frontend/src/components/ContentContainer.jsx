import { useChatStore } from "../store/useChatStore";

import TopNavigation from './TopNavigation';
import ProfileHeader from "./ProfileHeader";
import ActiveTabSwitch from "./ActiveTabSwitch";
import ChatsList from "./ChatsList";
import ContactList from "./ContactList";
import GroupsList from "./GroupsList";
import ChatContainer from "./ChatContainer";
import NoConversationPlaceholder from "./NoConversationPlaceholder";
import { BsPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import { MessageCircleIcon } from "lucide-react";

const ContentContainer = () => {

  const { activeTab, selectedUser } = useChatStore();

  return (
      <div className="grid sm:grid-cols-2">
        <div className="z-10 flex flex-col absolute left-[-100%] sm:bg-white-300 sm:relative sm:left-[0]">
          <ProfileHeader />
          <ActiveTabSwitch />

          <div className="flex flex-col overflow-y-auto h-[300px] pr-4 space-y-1">

	      { activeTab === "Chats" ? <ChatsList /> : activeTab === "Groups" ? <GroupsList /> : <ContactList /> }	  

	  </div>
        </div>
	<div className='p-6 sm:border-l flex flex-col items-center border-slate-700/50 sm:max-w-[300px]'>
	 <div className="flex">
	  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="top-navigation-icon relative left-0" height="24" width="24" xmlns="http://www.w3.org/2000/"><path d="M9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
	  <TopNavigation />
	  </div>
	  <div className="flex flex-col">
            {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
          </div>
	</div>
      </div>
  );
}
export default ContentContainer;


