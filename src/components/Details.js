import React from 'react'
import styled from 'styled-components'
import { colorThemes } from '../styles/ColorStyles'
import {RiLuggageCartFill} from 'react-icons/ri'
import {  smallText, tinyText } from '../styles/TextStyles'
import {AiOutlineCreditCard} from 'react-icons/ai'
import {GrPowerCycle} from 'react-icons/gr'
const Details = () => {
    return (
      <Body>

<Shopping>

<Detswrapper>
    <Shippingcover>
        <Shippingicon/>
    </Shippingcover>
    <Detstext>
        <Textheader>Step 1</Textheader>
        <Textmain>Shipping</Textmain>
    </Detstext>

</Detswrapper>
<Detswrapper>
    <Paymentcover>
        <Paymenticon/>
    </Paymentcover>
    <Detstext>
        <Textheader>Step 2</Textheader>
        <Textmain className="active">Payment</Textmain>
    </Detstext>
    
</Detswrapper>
<Detswrapper>
    <Reviewcover>
        <Reviewicon/>
    </Reviewcover>
    <Detstext>
        <Textheader>Step 3</Textheader>
        <Textmain>Review</Textmain>
    </Detstext>
    
</Detswrapper>
</Shopping>
      </Body>
    )
}

const Body = styled.div`
height: 100%;
width: 100%;
overflow: hidden;
`

const Shopping = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 20px;
@media only screen and (max-width: 500px){
    grid-template-columns: 1fr;  
    margin: 16px 0;
}
`
const Detswrapper = styled.div`
display: grid;
grid-template-columns: 50px auto;
grid-gap: 10px;
width: 100%;

`
const Shippingcover = styled.div`
background: ${colorThemes.lavender};
height: 50px;
width: 50px;
border-radius: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Shippingicon = styled(RiLuggageCartFill)`
color: ${colorThemes.darkLavender};
height: 24px;
width: 24px;
`
const Detstext = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
.active{
    color: ${colorThemes.black};
    font-weight: 600;
}
`
const Textheader = styled(tinyText)`
margin: 0;
color: ${colorThemes.grey};
`
const Textmain = styled(smallText)`
margin: 4px 0;
color: ${colorThemes.grey};


`
const Paymentcover = styled.div`
background: ${colorThemes.red};
height: 50px;
width: 50px;
border-radius: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Paymenticon = styled(AiOutlineCreditCard)`
height: 24px;
width: 24px;
color: ${colorThemes.darkRed};
`
const Reviewcover = styled.div`
background: ${colorThemes.green};
height: 50px;
width: 50px;
border-radius: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Reviewicon = styled(GrPowerCycle)`
height: 24px;
width: 24px;
color: ${colorThemes.darkGreen};
`

export default Details
