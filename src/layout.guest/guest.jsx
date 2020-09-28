const debug = require("debug")("ReactStarter:GuestLayout")

import React from "react"
import PropTypes from "prop-types"

import { BaseLayout } from "layout.base/base"

import css from "./guest.css"

const GuestLayout = ({ children }) => {
  return (
    <BaseLayout>
      <div className={css["guest-layout"]}>
        <div>{children}</div>
      </div>
    </BaseLayout>
  )
}

GuestLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { GuestLayout }
