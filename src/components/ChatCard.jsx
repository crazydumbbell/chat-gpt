const ChatCard = ({ answer, question }) => {
  return (
    <li className="text-9xl">
      <div>{answer}</div>
      <div>{question}</div>
    </li>
  );
};

export default ChatCard;
