const debug = require("debug")("mrs:GuestLayout")

import React from "react"
import PropTypes from "prop-types"

import { BaseLayout } from "../layout.base/base"
import css from "./guest.css"

const GuestLayout = ({ children }) => {
  return (
    <BaseLayout>
      <div className={css["guest-layout"]}>
        <h1>Hello World!</h1>
        <div>{children}</div>
      </div>
    </BaseLayout>
  )
}

GuestLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { GuestLayout }
