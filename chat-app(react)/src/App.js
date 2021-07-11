import {ChatEngine} from 'react-chat-engine';
import './App.css' ;
import ChatFeed from "./components/ChatFeed";
import Modal from './components/LoginForm';

const App = () => {
    if (!localStorage.getItem('username'))
        return <Modal/>;
    return(
        <ChatEngine
            height = "100vh"
            projectID = "6ce102b4-4445-46f8-8f80-97ac9f6725d9"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(ChatAppProps) => <ChatFeed {...ChatAppProps}/>}
        />
    );
}

export default App;