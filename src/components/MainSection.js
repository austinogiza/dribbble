import React from 'react'
import styled from 'styled-components'
import { colorThemes } from '../styles/ColorStyles'
import Card from './Card'
import Form from './Form'
import Nav from './Nav'
import Payment from './Payment'
import Tab from './Tab'

const MainSection = () => {

    const name =[
        {id: 1,
        name: "Credit Card"},
        {id: 2,
        name: "Paypal"},
        {id: 3,
        name: "Other"},

    ]
    return (
        <Body>
        <Nav/>
        <Payment/>
   <Tabcover> <Tabbody>
        {name.map(name=>
            <Tab key={name.id} name={name.name}/>
        )}
        </Tabbody></Tabcover>
        <Section>
<Card/>
<Form/>

        </Section>
        </Body>
    )
}


const Tabcover = styled.div`
border-bottom: 0.5px solid ${colorThemes.grey};
width: 100%;
height: 40px;
margin: 32px 0;
overflow: hidden;
`
const Tabbody = styled.div`
width: 300px;
height: 40px;
overflow: hidden;
display: flex;
flex-direction: row;
`
const Body = styled.div`
width: 100%;
min-height: 600px;
background: ${colorThemes.white};
padding: 60px;
display: flex;
flex-direction: column;
align-items: flex-start;
@media only screen and (max-width: 650px){
    padding: 20px; 
}

`

const Section = styled.div`
width: 100%;
min-height: 300px;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-auto-rows: minmax(200px,auto);
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    place-items: center;
}
`

export default MainSection
