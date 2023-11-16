import ChatCard from "./ChatCard";

const ChatView = ({ chatList }) => {
  return (
    <div className="bg-red-500 h-screen max-w-[560px] flex flex-col justify-end">
      <ul className="mb-24 overflow-y-auto ">
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
