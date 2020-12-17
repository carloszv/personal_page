import React, { ReactElement } from 'react'
import Link from 'components/foundations/Link/Link'
import { NavElement, NavList } from './styles'

type NavElementProps = {
  name: string
  url: string
}

type NavigationProps = {
  navElement: Array<NavElementProps>
}

export default function Navigation({
  navElement,
}: NavigationProps): ReactElement {
  return (
    <NavList>
      {navElement.map((element: NavElementProps) => {
        return (
          <NavElement key={element.name}>
            <Link href={element.url}>
              <a>{element.name}</a>
            </Link>
          </NavElement>
        )
      })}
    </NavList>
  )
}
