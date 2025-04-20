"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const yesButtonSize = Math.min(noCount * 5 + 16, 48); // Cap the size

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE CUTIEEEE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to zabira's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "No :(",
      "Sorry, you have no choice!"
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center px-4">
      {yesPressed ? (
        <>
          <img
            className="h-[200px] sm:h-[300px]"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="bear kiss"
          />
          <div className="my-4 text-3xl sm:text-4xl font-bold">
            WOOOOOO!!! NOMMMM NOMMMM!! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[180px] sm:h-[250px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="cute bear"
          />
          <h1 className="my-4 text-3xl sm:text-4xl font-bold">
            Can I you Eat youuuuuu???
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <button
              className="rounded bg-green-500 px-6 py-2 font-bold text-white hover:bg-green-700 transition-all duration-300"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-6 py-2 font-bold text-white hover:bg-red-700 transition-all duration-300 min-w-[180px]"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}