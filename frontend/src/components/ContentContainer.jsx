import { useChatStore } from "../store/useChatStore";

import TopNavigation from './TopNavigation';
import ProfileHeader from "./ProfileHeader";
import ActiveTabSwitch from "./ActiveTabSwitch";
import ChatsList from "./ChatsList";
import ContactList from "./ContactList";
import ChatContainer from "./ChatContainer";
import NoConversationPlaceholder from "./NoConversationPlaceholder";
import { BsPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import { MessageCircleIcon } from "lucide-react";

const ContentContainer = () => {

  const { activeTab, selectedUser } = useChatStore();

  return (
   <div className="overflow-auto">
     <TopNavigation />
	<div className="flex">
        <div className="w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col">
          <ProfileHeader />
          <ActiveTabSwitch />

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>
        </div>
	<div className='flex flex-row space-around'>
	  <div className="flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm">
            {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
          </div>
	</div>
	</div>
   </div>
  );
}
export default ContentContainer;


