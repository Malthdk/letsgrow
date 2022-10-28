import * as React from "react"
import Logo from "../svg/logo-white.svg";
import Hamburger from "../components/hamburger"

const Navigation = () => (
  <div className="navigation">
        <a className="navigation__logo" href="/">
        <Logo />
        </a>
        <div className="flex items-center">
          <div className="headline text-xl pt-7 pr-6">51 51 77 83</div>
          <Hamburger />
        </div>
    </div>
)

export default Navigation
