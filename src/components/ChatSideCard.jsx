import { useState } from "react";
import { CgCloseR } from "react-icons/cg";

const ChatSideCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  // 팝업창이 열려있냐 닫혀있냐를 위한 useState

  const onClickModal = () => {
    setIsOpen(true);
  };
  const onClickClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li
        className="mb-2 truncate cursor-pointer hover:font-bold"
        onClick={onClickModal}
      >
        {question}
      </li>
      {isOpen && (
        <div className="fixed top-0 left-0 bg-opacity-20 w-full h-full z-10">
          <div className="bg-white rounded-md shadow-md fixed p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-double outline-3 outline-offset-2 ring-slate-950">
            <button onClick={onClickClose}>
              <CgCloseR />
            </button>
            <div>{question}</div>
            <div>{answer}</div>
          </div>
        </div>
      )}
      {/* 팝업창이 open된 상태에서만 출력하라 */}
      {/* absolute는 relative기준으로 절댓값 fixed는 브라우저 전체 기준 */}
      {/* z index로 z축 우선순위 설정 가능! */}
    </>
    // 리액트는 항상 최상위 태그하나만 존재해야되서 div로 한번 전체를 감싸야됨
    // 근데 div는 너무 많으니 프라크먼트태그 <> </>를 쓰면됨
  );
};

export default ChatSideCard;
