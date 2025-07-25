import React, { useContext, useMemo, useState } from 'react';
import Chats from '../Components/Chats';
import ChatDetails from '../Components/ChatDetails';
import ChatBox from '../Components/ChatBox';
import { AppContext } from '../context/AppContext';

const Chat = ({ setShowNotifications }) => {
  const {
    selectedFriend,
    setSelectedFriend,
    selectedGroup,
    setIsChatOpen,
  } = useContext(AppContext);

  const [isFriendOnline, setIsFriendOnline] = useState(false);

  // Memoize frequently passed props
  const chatBoxProps = useMemo(() => ({
    isFriendOnline,
    setIsFriendOnline,
    group: selectedGroup,
    friend: selectedFriend,
  }), [isFriendOnline, selectedGroup, selectedFriend]);

  const chatDetailsProps = useMemo(() => ({
    isFriendOnline,
    group: selectedGroup,
    friend: selectedFriend,
    setIsChatOpen,
  }), [isFriendOnline, selectedGroup, selectedFriend, setIsChatOpen]);

  return (
    <div className="grid min-h-screen bg-[linear-gradient(to_bottom_right,_#596aff,_#383699)] place-items-center">
      <div className="w-[95%] h-[75vh]  relative max-w-[1000px] lg:grid lg:grid-cols-custom-layout">
        <Chats
          setIsChatOpen={setIsChatOpen}
          setShowNotifications={setShowNotifications}
          setSelectedFriend={setSelectedFriend}
          selectedFriend={selectedFriend}
          selectedGroup={selectedGroup}
        />
        <ChatBox {...chatBoxProps} />
        <ChatDetails {...chatDetailsProps} />
      </div>
    </div>
  );
};

export default Chat;
