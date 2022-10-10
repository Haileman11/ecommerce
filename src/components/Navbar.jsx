import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
const Container = styled.div`
    height:60px;
`
const SearchContainer = styled.div`
    border:1px solid lightgrey;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
`
const Language = styled.div`
    font-size:14;
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Input = styled.input`
    border:none;
`
const Center = styled.div`
    flex:1;
    text-align:center;
`
const Logo = styled.h1`
    font-weight:bold;
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size:14;
    cursor:ponter;
    margin-left:25px;
`

const Navbar = () => {
  return (
      <Container>
          <Wrapper>
              <Left>
                  <Language>EN</Language>
                  <SearchContainer>
                    <Input/>  
                    <Search style={{fontSize:16, color:"grey"}}/>
                  </SearchContainer>
              </Left>
              <Center>
                  <Logo>HAILE'S</Logo>
              </Center>
              <Right>
                  <MenuItem>Login</MenuItem>
                  <MenuItem>Register</MenuItem>
                  <MenuItem>                   
                      <Badge badgeContent={1} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                  </MenuItem>
                  
              </Right>
          </Wrapper>
      </Container>
  )
}

export default Navbar