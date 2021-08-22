import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import styled from "styled-components"
import { Link } from "gatsby"
import mario from '../images/404.gif'


const NotFound = styled.div`
  margin: 12px auto 0;
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url(${mario});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #efefef;

  & > p a {
    color: #efefef;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <NotFound>
      <p>Not sure how you got here but you should probably <Link to={"/"}>go home</Link></p>
    </NotFound>
  </Layout>
)

export default NotFoundPage
