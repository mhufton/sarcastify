"use client"

import { sarcastify } from "@/app/util/sarcastify"
import { track } from "@vercel/analytics"
import { useEffect, useState } from "react"

const Sarcastifier = () => {
  const [text, setText] = useState("")
  const [sarcasitifiedText, setSarcasitifiedText] = useState("")
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    setSarcasitifiedText(sarcastify(text))
  }, [text])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    error !== "" && setError("")
    setText(e.target.value)
  }

  const handleReset = () => {
    setCopied(false)
    setText("")
    setSarcasitifiedText("")
  }

  const handlesarcastify = () => {
    if (sarcasitifiedText === "") {
      setError(sarcastify("type something to sarcastify"))
    } else {
      track("sarcastify")
      navigator.clipboard.writeText(sarcasitifiedText)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 3000)
    }
  }

  const handleClear = () => {
    setText("")
    setSarcasitifiedText("")
    setCopied(false)
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10 w-full">
      <textarea
        className="w-full max-w-[75%] lg:max-w-[50%] h-20 md:h-[150px] text-black p-2 rounded-md min-w-[250px]"
        onChange={(e) => handleChange(e)}
        value={text}
      ></textarea>
      {/* {text !== "" && (
        <div
          className="mt-2 bg-slate-700 px-5 py-2 rounded-md text-white"
          onClick={() => handleClear()}
        >
          {sarcastify("clear text")}
        </div>
      )} */}
      <div className="flex flex-col-reverse">
        <div className="mt-5">
          <div className="flex flex-col flex-wrap justify-center items-center max-w-100vw">
            <p>{sarcastify("sarcastified message:")}</p>
            <p className="text-4xl flex flex-wrap break-all max-w-100vw">
              {sarcasitifiedText}
            </p>
          </div>
        </div>
        <div className="mt-2 flex flex-col justify-center items-center">
          {!copied ? (
            <div className="flex justify-center items-center">
              <button
                className={`mr-2 bg-sky-700 px-5 py-2 rounded-md text-white ${
                  copied ? "animate-fadeOut" : "animate-fadeIn"
                }`}
                onClick={() => handlesarcastify()}
              >
                {sarcastify("Copy my message")}
              </button>
              {/* <div>{error !== "" && error}</div> */}
              {text !== "" && (
                <button
                  className={`bg-slate-700 px-5 py-2 rounded-md text-white ${
                    copied ? "animate-fadeOut" : "animate-fadeIn"
                  }`}
                  onClick={() => handleClear()}
                >
                  {sarcastify("clear text")}
                </button>
              )}
            </div>
          ) : (
            <p
              className={`lg:mt-10 bg-sky-900 px-5 py-2 rounded-md text-white ${
                !copied ? "animate-fadeOut" : "animate-fadeIn"
              }`}
            >
              {sarcastify("wowww you pushed the button")}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sarcastifier
