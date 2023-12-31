import { useState } from "react";
import ChatBar from "./components/ChatBar";
import ChatView from "./components/ChatView";
import ChatSide from "./components/ChatSide";

const App = () => {
  const [chatList, setChatList] = useState([]);

  // chatbar에 setChatList를 써서 값을담고 app에 넘어가서 프롭스를 써서 쓰이는곳에chatList를 내려준다,.

  return (
    <div className="min-h-screen max-w-screen-md mx-auto flex">
      <ChatSide chatList={chatList}/>
      {/* 프롭스는 다시 말하지만 그 컴포넌트에 요소를 내려주는것 */}
      <div className="grow flex flex-col relative">
        {/* 여기에 relative를 넣어줘야  chatbar의 return의 길이가 요녀석 기준으로 w-full이 됨 */}
        <ChatView chatList={chatList} />
        <ChatBar chatList={chatList} setChatList={setChatList} />
        {/* 기존<ChatBar에 프롭스 옆에 추가> */}
        {/* 챗뷰랑 챗바에 프롭스로 녀석들 내려주기 */}
      </div>
    </div>
  );
};

export default App;
