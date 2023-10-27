"use client";
import React, { useEffect, useState } from "react";

const sarcastify = (str: string) => {
  const isChar = /^[a-zA-Z]+$/;
  const splitStr = str.split("");
  const nonCharIndexes = new Map();
  const chars = [];

  // loop through string and store non-characters
  for (let i = 0; i < splitStr.length; i++) {
    if (!isChar.test(splitStr[i])) {
      nonCharIndexes.set(i, splitStr[i]);
    } else {
      chars.push(splitStr[i]);
    }
  }

  // Capitalise every other character
  for (let i = 0; i < chars.length; i++) {
    if (isChar.test(chars[i]) && i % 2 === 0) {
      chars[i] = chars[i].toUpperCase();
    }
  }

  // Insert non-characters back into the string
  for (const [key, value] of Array.from(nonCharIndexes.entries())) {
    chars.splice(key, 0, value);
  }

  return chars.join("");
};

export default function Home() {
  const [text, setText] = useState("");
  const [sarcasitifiedText, setSarcasitifiedText] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setSarcasitifiedText(sarcastify(text));
  }, [text]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    error !== "" && setError("");
    setText(e.target.value);
  };

  const handlesarcastify = () => {
    if (sarcasitifiedText === "") {
      setError(sarcastify("type something to sarcastify"));
    } else {
      navigator.clipboard.writeText(sarcasitifiedText);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 6000);
    }
  };

  return (
    <main className="p-20">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-8xl">{sarcastify("sarcastify")}</h1>
          <p className="text-2xl pt-5">
            {sarcastify("a sarcastic text generator")}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 w-full">
          <textarea
            className="w-full max-w-[50%] h-20 text-black"
            onChange={(e) => handleChange(e)}
          ></textarea>
          <div className="mt-5">
            {text === "" ? (
              <p>{sarcastify("type your message above to sarcastify it")}</p>
            ) : (
              <p>{sarcasitifiedText}</p>
            )}
          </div>
          <div>
            {!copied ? (
              <div className="flex flex-col justify-center items-center">
                <button
                  className="mt-10 mb-3 bg-sky-900 px-5 py-2 rounded-md text-white"
                  onClick={() => handlesarcastify()}
                >
                  {sarcastify("Copy my message")}
                </button>
                <div>{error !== "" && error}</div>
              </div>
            ) : (
              <p className="mt-10 mb-3 bg-sky-900 px-5 py-2 rounded-md text-white">
                {sarcastify(
                  "congratulations... you pushed the button and copied your text"
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
