import Sarcastifier from "./components/Sarcastifier/Sarcastifier"
import CookieBanner from "./components/CookieBanner/CookieBanner"

export default function Home() {
  return (
    <div className="md:w-full">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-center md:w-full">
          <Sarcastifier />
        </div>
      </div>
      <CookieBanner />
    </div>
  )
}
