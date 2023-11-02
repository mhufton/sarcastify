// import CookieConsent from "react-cookie-consent"
import Sarcastifier from "./components/Sarcastifier/Sarcastifier"

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-center">
          <Sarcastifier />
        </div>
        <a href={"/privacy"} className="justify-self-end text-center">
          Privacy Policy
        </a>
      </div>
      {/* <CookieConsent>
        We collect cookies. Check out our{" "}
        <a href="/privacy" className="text-sky-500">
          Privacy Page
        </a>{" "}
        for more info.
      </CookieConsent> */}
    </div>
  )
}
