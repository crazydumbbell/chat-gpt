import axios from "axios";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";

const ChatBar = ({ chatList, setChatList }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //   초기값은 false 그다음 입력할때만 트루
  // newQuestion은 값이 담겨있는 변수 setNewQuestion은 함수
  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      if (!newQuestion) return;

      setIsLoading(true);

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: newQuestion,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_KEY}`,
          },
        }
      );
      console.log(response);
      setChatList([
        ...chatList,
        {
          question: newQuestion,
          answer: response.data.choices[0].message.content,
        },
        // setChatList를 써서 chatList라는 배열에 question과 answer를 담음
        // app.jsx에는 프롭스를 써서 내려받음
      ]);

      setNewQuestion("");

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-purple-100 h-24">
      <form
        className="bg-red-100 h-full flex items-center px-4"
        onSubmit={onSubmitChat}
      >
        <input
          className={`ml-4 grow py-1 px-2 focus:outline-none border-2 focus:border-pink-400 mr-4 ${
            isLoading && "bg-gray-200 text-gray-600"
          }`}
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          //   onChange는 내장 기능 인풋창에 useState부착시킴
          disabled={isLoading}
          //   isLoading중에 는 사용중지!
          //   위에 setIsLoading으로 true인 구간을 설정해 놨다. 저때아니면 항상 막혀있어서 남용안하게됨
          placeholder="무엇이든 물어보세요. 1번노예 김종혁 입니다."
        />
        <button
          className="w-28 py-[6px] text-sm bg-pink-400 hover:bg-pink-600 active:bg-pink-400 rounded-lg text-white font-semibold flex justify-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <CgSpinner className="animate-spin-slow" size={22} />
          ) : (
            "검색"
          )}
        </button>
      </form>
    </div>
  );
};
export default ChatBar;
