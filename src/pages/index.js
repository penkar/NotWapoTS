import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import App from "../components/App"

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers/index'

const store = createStore(reducer)

const IndexPage = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default IndexPage
