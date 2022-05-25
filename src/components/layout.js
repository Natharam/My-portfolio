import React from "react"
import Navbar from "./Navbar"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main class='main-container'>{children}</main>
    </>
  )
}
export default Layout
