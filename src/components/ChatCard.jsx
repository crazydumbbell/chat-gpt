const ChatCard = ({ answer, question }) => {
  return (
    <li className=" flex flex-col gap-4 mb-6">
      <div className=" self-start ml-4 p-2 rounded-md shadow-lg whitespace-pre-wrap">{answer}</div>
      <div className="bg-blue-100 self-end mr-4 p-2 rounded-md shadow-md origin-bottom-left whitespace-pre-wrap">{question}</div>
      {/* self-end는 자기만 오른쪽 배치 */}
    </li>
  );
};

export default ChatCard;
