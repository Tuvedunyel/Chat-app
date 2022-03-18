import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed.jsx'
import LoginForm from './components/LoginForm.jsx';


function App() {

  if( !localStorage.getItem('username') && !localStorage.getItem('password') ) return <LoginForm />

  return (
    <ChatEngine
      height='100vh'
      projectID='82784516-7a04-42d2-866a-56a43600f41d'
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App
