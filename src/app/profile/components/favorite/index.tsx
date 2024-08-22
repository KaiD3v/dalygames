"use client";
import { FiEdit, FiX } from "react-icons/fi";
import { useState } from "react";

export function FavoriteCard() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gameName, setGameName] = useState("");

  function handleButton() {
    setShowInput(!showInput);

    if (input !== "") {
      setGameName(input);
    }

    setInput("");
  }

  return (
    <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput
        ? <div className="flex items-center justify-normal gap-3">
            <input
              className="w-full h-8 text-black px-2"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button>
              <FiX size={24} color="#FFF" onClick={handleButton} />
            </button>
          </div>
        : <button
            onClick={handleButton}
            className="self-start hover:scale-110 duration-200 transition-all"
          >
            <FiEdit size={24} color="#fff" />
          </button>}

      {gameName &&
        <div>
          <span className="text-white">Jogo Favorito: </span>
          <p className="font-bold text-white">
            {gameName}
          </p>
        </div>}
      {!gameName && <p className="font-bold text-white">Adicionar jogo</p>}
    </div>
  );
}
