import Sarcastifier from "./components/Sarcastifier/Sarcastifier"
import CookieBanner from "./components/CookieBanner/CookieBanner"

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-center">
          <Sarcastifier />
        </div>
      </div>
      <CookieBanner />
    </div>
  )
}
