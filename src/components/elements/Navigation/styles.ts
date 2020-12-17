import styled from 'styled-components'

export const NavList = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const NavElement = styled.li`
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 5px;

  > a {
    display: inline-block;
    padding: 10px 10px;
    transition: all 100ms;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    &:hover {
      text-decoration: underline;
    }
  }
`
