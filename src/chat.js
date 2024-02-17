import {ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';

const Chat=()=>{
    return(
        <ChatEngine
            height="100vh"
            projectID="e4afb934-3dce-4ffe-a740-78469e4024c5"
            userName="Sahil"
            userSecret="Sahil"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    );
}
export default Chat;