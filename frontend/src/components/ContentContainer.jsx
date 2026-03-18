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
	<div className="grid sm:grid-cols-2">
        <div className="flex flex-col sm:max-w-[300px]">
          <ProfileHeader />
          <ActiveTabSwitch />

          <div className="flex-1 overflow-y-auto max-h-[500px] p-4 space-y-2">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>
        </div>
	<div className='p-6 sm:border-l border-slate-700/50 sm:max-w-[300px]'>
	  <div className="flex flex-col">
            {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
          </div>
	</div>
	</div>
   </div>
  );
}
export default ContentContainer;


