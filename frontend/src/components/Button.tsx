import React from "react";

type Props = {
  text: string;
  click?: React.MouseEventHandler<HTMLButtonElement>;
};

const NormalButton: React.FC<Props> = ({ text, click }) => {
  return (
    <button
      onClick={click}
      className="bg-sky-400 hover:bg-sky-300 p-1 font-bold rounded-full w-full text-white border-2 truncate border-white"
    >
      {text}
    </button>
  );
};

export default NormalButton;
