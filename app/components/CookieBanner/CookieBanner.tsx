"use client"

import CookieConsent from "react-cookie-consent"

const CookieBanner = () => (
  <CookieConsent>
    We collect cookies. Check out our{" "}
    <a href="/privacy" className="text-sky-500">
      Privacy Page
    </a>{" "}
    for more info.
  </CookieConsent>
)

export default CookieBanner
