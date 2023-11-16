import ChatSideCard from "./ChatSideCard";

const ChatSide = ({ chatList }) => {
  return (
    <ul className="bg-blue-100 w-52 p-4">
      {chatList?.map((v, i) => (
        <ChatSideCard key={i} question={v.question} answer={v.answer}/>
      ))}
      {/* 맵함수 . 앞에 ?를 넣음으로써 &&연산자 대체가능 옵셔널채이닝이라고함 */}
      {/* ?앞의 갚이 존재하면 뒤에 map이 실행 null이나 undefined가 아니면 실행 */}
      {/* 맵함수니까 키오류 안나도록 i를 이용해서 key값 넣어줌 */}
      {/* truncate는 tailwind문법 오버플로우도 막아주고 글이길면 뒤에 ...도 붙여줌 */}
    
      </ul>
  );
};

export default ChatSide;

// 모달창 만들기 정석
