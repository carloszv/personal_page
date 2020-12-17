/* eslint-disable import/no-cycle */
import React, { ReactElement, ReactNode } from 'react'

import Header from './Header'
import Footer from './Footer'

import { Main, Outer } from './PageLayout.styles'

type PageLayoutProps = {
  children: ReactNode
  navigation?: boolean
}

export default function PageLayout({
  children,
  navigation = false,
}: PageLayoutProps): ReactElement {
  return (
    <>
      <Header navigation={navigation} />
      <Main>
        <Outer>{children}</Outer>
      </Main>
      <Footer />
    </>
  )
}
