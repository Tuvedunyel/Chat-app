import { useState } from 'react';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <ChatEngine
      height='100vh'
      projectID='82784516-7a04-42d2-866a-56a43600f41d'
      userName='gregoireM'
      userSecret='123'
      renderChatFeed={ ( chatAppProps ) => <ChatFeed { ...chatAppProps } /> }
    />
  );
}

export default App
