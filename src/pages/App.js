import React from "react"

import Layout from "../components/layout"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Footer from "../components/Footer"

const IndexPage = () => (
  <>
  <Layout>
    <Header/>
    <Work/>
    <About/>
    {/* <Skills/> */}
    <Footer/>
  </Layout>
  </>
)

export default IndexPage
