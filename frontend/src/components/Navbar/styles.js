import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #dcdcdc;
`

export const ListItem = styled.li`
  float: left;
`

export const Redirect = styled(Link)`
  display: block;
  color: #000;
  text-align: center;
  padding: 14px 16px;

  &:hover {
    background-color: #efefef;
    color: #f00;
    text-decoration: none;
  }
`
