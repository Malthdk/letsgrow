import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../svg/logo-white.svg";

const Navigation = () => (
  <nav className="navigation">
        <a className="navigation__logo" href="#">
        <Logo />
        </a>
        <div className="navigation__items">
          <a className="navigation__item" href="#koncept">
            koncept
          </a>
          <a className="navigation__item" href="#salgsprocess">
            salgsprocess
          </a>
          <a className="navigation__item" href="#om-os">
            om os
          </a>
        </div>
    </nav>
)

export default Navigation
