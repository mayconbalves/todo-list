import React from 'react'
import * as S from './styles'

const Navbar = () => (
  <S.Ul>
    <S.ListItem>
      <S.Redirect to="/">Home</S.Redirect>
    </S.ListItem>
    <S.ListItem>
      <S.Redirect to="/todo-list">Tarefas</S.Redirect>
    </S.ListItem>
  </S.Ul>
)

export default Navbar
