import { useState } from "react";
import ChatBar from "./components/ChatBar";
import ChatView from "./components/ChatView";

const App = () => {
  const [chatList, setChatList] = useState([]);

  // chatbar에 setChatList를 써서 값을담고 app에 넘어가서 프롭스를 써서 쓰이는곳에chatList를 내려준다,.

  return (
    <div className="min-h-screen max-w-screen-md mx-auto flex">
      <div className="bg-blue-100 w-52">Side</div>
      <div className="grow flex flex-col">
        <div className="bg-yellow-100 grow">Main</div>
        <ChatView chatList={chatList}/>
        <ChatBar chatList={chatList} setChatList={setChatList}/>
        {/* 기존<ChatBar에 프롭스 옆에 추가> */}
        {/* 챗뷰랑 챗바에 프롭스로 녀석들 내려주기 */}
      </div>
    </div>
  );
};

export default App;
