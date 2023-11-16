import ChatCard from "./ChatCard";
import { useEffect, useRef } from "react";

const ChatView = ({ chatList }) => {
  const ulRef = useRef();
  // useRef는 html속성에 직접 접근하는 방법임.
  // 우리는 스크롤을 튜닝할거기 때문에 직접 접근해서 튜닝할거임

  useEffect(() => {
    ulRef.current.scrollTop = ulRef.current.scrollHeight;
  }, [chatList]);
  // 스크롤을 맨 아래로 내림

  return (
    <div className="bg-red-500 h-screen max-w-[560px] flex flex-col justify-end">
      <ul ref={ulRef} className="mb-24 overflow-y-auto ">
        {chatList.length === 0
          ? "채팅이 없습니다."
          : chatList.map((v, i) => (
              <ChatCard key={i} answer={v.answer} question={v.question} />
            ))}
      </ul>
    </div>
  );
};

export default ChatView;
