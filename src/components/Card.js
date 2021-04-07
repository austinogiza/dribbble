import React from 'react'
import styled from 'styled-components'
import { colorThemes } from '../styles/ColorStyles'
import { tinyText } from '../styles/TextStyles'
import mc from '../images/mc-new.svg'
import visa from '../images/visa.svg'
import blue from '../images/blue.svg'
import brown from '../images/brown.svg'
import green from '../images/green.svg'
import check from '../images/check.svg'
import { AiFillPlusCircle} from 'react-icons/ai'
const Card = () => {
    return (
       <Body>

<Cards>
<Icon src={blue}/>

   <Details> <Number>*** 6377</Number>
    <Logo><Logoimg src={mc}/></Logo></Details>
</Cards>
<LavenderCards>
<Lavender src={brown}/>

   <Details> <Number>*** 5442</Number>
    <Logo><Logoimg src={visa}/></Logo></Details>
</LavenderCards>

<GreenCards>
<Check src={check}/>
<Green src={green}/>

   <GreenDetails>
   <AddNumber>Add New</AddNumber><Plus/></GreenDetails>
  
</GreenCards>

       </Body>
    )
}

const Body = styled.div`
width: 100%;
min-height: 100px;
display: grid;
grid-template-rows: repeat(3,1fr);
grid-gap: 20px;
grid-auto-rows: minmax(150px,auto);

`
const Cards = styled.div`
max-width: 300px;
width: 100%;
cursor: pointer;
height: 150px;
padding: 20px 20px 0 20px;
background: ${colorThemes.lavender};
/* overflow: hidden; */
border-radius: 20px ;
display: flex;
position: relative;
`
const Icon = styled.img`
width: 100%;
left: -80px;
bottom: 0;
height: 100%;
position: absolute;
`
const Details = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
justify-self: flex-end;
`
const Number = styled(tinyText)`
font-weight: 500;
`
const Logo = styled.div`
width: 44px;
height: 44px;
overflow: hidden;
`
const Logoimg = styled.img`
width: 44px;
height: 44px;
color: ${colorThemes.darkLavender};
`

const LavenderCards = styled.div`
max-width: 300px;
width: 100%;
height: 150px;
padding: 20px 20px 0 20px;
cursor: pointer;
background: ${colorThemes.red};
/* overflow: hidden; */
border-radius: 20px;
display: flex;
position: relative;
`
const Lavender = styled.img`

width: 100%;
left: -100px;
bottom: 0;
height: 100%;
position: absolute;
`
const GreenCards = styled.div`
max-width: 300px;
width: 100%;
height: 150px;
padding: 30px;
cursor: pointer;
background: ${colorThemes.green};
/* overflow: hidden; */
border-radius: 20px;
display: flex;
position: relative;

`

const Check = styled.img`
    position: absolute;
    width: 24px;
height:24px;
top: -20px;
right:0;
z-index: 400;
`
const Green= styled.img`
width: 100%;
left: -90px;
bottom: 0;
height: 100%;
position: absolute;
`

const Plus = styled(AiFillPlusCircle)`
width: 32px;
height: 32px;
margin: 0 0 0 8px;
`

const GreenDetails = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: row;
justify-content: flex-end;
align-items: center;
justify-self: center;
align-self: flex-end;
`
const AddNumber = styled(tinyText)`
font-weight: 600;
`
export default Card
