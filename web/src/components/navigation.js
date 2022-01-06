import * as React from "react"
import Logo from "../svg/logo-white.svg";
import Hamburger from "../components/hamburger"

const Navigation = () => (
  <div className="navigation">
        <a className="navigation__logo" href="/">
        <Logo />
        </a>
        <Hamburger />
    </div>
)

export default Navigation
