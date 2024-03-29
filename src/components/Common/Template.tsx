import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'

import Footer from './Footer'
import GlobalStyle from './GlobalStyle'

interface Props {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Template = function ({
  title,
  description,
  url,
  image,
  children,
}: Props) {
  return (
    <Container>
      <Helmet>
        <html lang="ko" />
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/hrml;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="mikaboo" />
        <meta name="twitter:creator" content="mikaboo" />

        <meta
          name="google-site-verification"
          content="PUPMLIuKRemEIR83Z312HmeX0O1CGhsNvDTctZF7bQE"
        />
        <meta
          name="naver-site-verification"
          content="94825d67edb0fd2f3fff9d28b1b9c8943358ddcd"
        />
      </Helmet>

      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`
