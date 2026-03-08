import { useAuthStore } from "../store/useAuthStore";
import Channelbar from '../components/ChannelBar.jsx';
import ContentContainer from '../components/ContentContainer.jsx';
import SideBar from '../components/SideBar.jsx';

function ChatPage() {
	const { logout } = useAuthStore();
	return (
		<div className="z-10 flex relative w-full max-w-6xl h-[800px]">
		  <button onClick={logout}>Logout</button>
		  <SideBar />
		  <Channelbar />
		  <ContentContainer />
		</div>
	);
};
export default ChatPage;
