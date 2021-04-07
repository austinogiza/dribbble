// import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import { colorThemes } from '../styles/ColorStyles'
import { smallText } from '../styles/TextStyles'
import avatar from '../images/kate.jpg'
const Nav = () => {
    return (
        <Body>

            <Logo>
                <Logoimg src={logo}/> Tolly
            </Logo>
            <Avatar>
                <Avatarselect>
                <Avataroption>
                Annette
                    </Avataroption>
                    <Avatarphoto src={avatar}/>
                </Avatarselect>
            </Avatar>
        </Body>
    )
}

const Body = styled.nav`
width: 100%;
height: 100px;
display: flex;
align-self: flex-start;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
`
const Logo = styled.div`

height: 50px;
display: flex;
flex-direction: row;

align-items: center;
justify-content: flex-start;
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: 1.4;

@media only screen and (max-width: 650px){
    font-size: 16px;
}
`


const Logoimg = styled.img`
height: 40px;
width: 40px;
`
const Avatar = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: flex-end;
`
const Avatarselect = styled.div`
width: 180px;
height: 50px;
border-radius: 50px;
outline: none;
padding: 0px 0px 0px 35px;
border: none;
position: relative;
background: ${colorThemes.smoke};

background-image: url('data:image/svg+xml;utf8, <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.62036 9.85022L12.6204 15.8502L18.6204 9.85022" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
appearance: none;
-moz-appearance: none;
-webkit-appearance: none;
background-repeat: no-repeat;
background-position: top 50% left 10px;
overflow:hidden;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
`
const Avataroption = styled(smallText)`

overflow:hidden;

`

const Avatarphoto = styled.img`
width: 40px;
height: 40px;
justify-self: flex-end;
margin: 0 16px; 
position: absolute;
border-radius: 50%;
overflow:hidden;
right: -10px;
top: 5px;
`
export default Nav
