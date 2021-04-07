// import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { colorThemes } from '../styles/ColorStyles'
import { headerText, smallText } from '../styles/TextStyles'
import {BiLock} from 'react-icons/bi'

const Payment = () => {
       return (
        <Body>

            <Logo>
               <Details>Payment Details</Details>
            </Logo>
            <Avatar>
                <Avatarselect /> 
                <Avataroption>
           <Avatarhead>Card is secure</Avatarhead>
           <Avatartext>Your data is protected, <br/> everything will be private</Avatartext>
                    </Avataroption>
            
            </Avatar>
        </Body>
    )
}

const Body = styled.nav`
width: 100%;
min-height: 100px;
display: flex;
align-self: flex-start;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;

@media only screen and (max-width: 650px){
    flex-direction: column; 
}
`
const Logo = styled.div`
margin: 8px 0;
`
const Details = styled(headerText)`

`
const Avatar = styled.div`
display: grid;
grid-template-columns: 24px auto;
grid-gap: 10px;
margin: 8px 0;
`
const Avatarselect = styled(BiLock)`
color: ${colorThemes.black};
height: 24px;
width: 24px;
`
const Avataroption = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

`
const Avatarhead = styled(smallText)`
margin: 0;
font-weight: 600;
color: ${colorThemes.black};
`
const Avatartext = styled(smallText)`
color: ${colorThemes.grey};
margin: 4px 0;
`

export default Payment
