import React, {useState}from 'react'
import styled from 'styled-components'
import { colorThemes } from '../styles/ColorStyles'
import {CgChevronUp,CgChevronDown} from 'react-icons/cg'
import { smallText} from '../styles/TextStyles'
import {motion} from 'framer-motion'

const Amount = ({name}) => {
    const [active, setActive] =useState("")
    const [clicked, setClicked] =useState(false)
    const [height, setHeight] =useState(false)

    function handleClick(){
        setActive(active === "" ? "active": "")
        setClicked(active === "active" ? false : true)
        setHeight(active === "active" ? false : true)

    }
    return (
        <Body>

<Header className={`${active}`} onClick={handleClick}>
<Title>{name}</Title>
<Icon>
{
    clicked
    ?

    <Up/>:
<Down/>
}


</Icon>

</Header>

<Details  transition={{opacity: 1, duration: 0.3}} initial={{opacity:1}}  height={height}>
<Text>
    <Name>Leather mini-bag</Name><AmountText>&#36;1850.00</AmountText>
</Text>
<Text>
    <Name>Estimated Shipping</Name><AmountText>&#36;370.00</AmountText>
</Text>
<Text>
    <Name>Discount</Name><AmountText>&#36;0.00</AmountText>
</Text>
<Text>
    <Name>Total</Name><AmountText className="total">&#36;2200.00</AmountText>
</Text>

</Details>

        </Body>
    )
}

const Body = styled.div`
min-height: 50px;
width: 100%;
margin: 8px 0;
overflow: hidden;

.active{
    box-shadow: none;
}
`

const Header = styled.button`
height: 50px;
width: 100%;
border: none;
outline: none;
background: ${colorThemes.white};
border-radius: 10px;
cursor: pointer;
align-items: center;
padding: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Title = styled(smallText)`
 font-weight: 600;
`
const Icon = styled.div`

`
const Details = styled(motion.div)`
overflow: hidden;
width: 100%;
padding: 20px;
transition: 0.4s ease-in;
display: ${props=> props.height? "flex" :"none"};
height: ${props=> props.height? "400px" :"0px"};
flex-direction: column;

`
const Text = styled.div`
height: 10px;
width: 100%;
overflow: hidden;
border-radius: 10px;
margin: 8px 0;
color: ${colorThemes.grey};
align-items: center;
padding: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;

.total{
    font-weight: 600;
}
`
const Name = styled(smallText)`
   
`
const Up = styled(CgChevronUp)`
height: 18px;
width: 18px;
color: ${colorThemes.black};
transition: 0.3s ease-in;
`
const Down = styled(CgChevronDown)`
height: 18px;
width: 18px;
color: ${colorThemes.black};
transition: 0.3s ease-in;
`
const AmountText = styled(smallText)`
color: ${colorThemes.black};
font-weight: 300;
`


export default Amount
