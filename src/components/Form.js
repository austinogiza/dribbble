import React from 'react'
import styled from 'styled-components'
import { colorThemes } from '../styles/ColorStyles'
import { smallText, tinyText } from '../styles/TextStyles'
import mc from '../images/mc.svg'
import eye from '../images/eye.svg'
const Form = () => {
    return (
       <Body>

           <Formcover>
               <Formrow>

                   <Formlabel>
                   <Formtitle>Card Number</Formtitle>
                       <Input>
                       <Forminput type="text" value="6011 1799 9655 8786377"/>
                       <Master src={mc}/>
                       </Input>
                   </Formlabel>
               </Formrow>
               <Formrow>

<Formlabel>
<Formtitle>Name</Formtitle>
    <Forminputname type="text" value="Annette Murphy"/>
</Formlabel>
</Formrow>
               <Formrowtwo>

<Formlabel>
<Formtitle>Expiration Date</Formtitle>
    <Forminputname type='text' value="08/21"/>
</Formlabel>
<Formlabel>
<Formtitle>CVV</Formtitle>
<InputCVV>
    <Forminputcv type='text' value="407"/>
    <Eye src={eye}/>
    </InputCVV>
</Formlabel>
</Formrowtwo>
<Formrowbutt>
    <Button>Confirm Order</Button>
    <Ordertext>Cancel and Return</Ordertext>
</Formrowbutt>
           </Formcover>
       </Body>

    )
}

const Body = styled.div`
display: flex;
flex-direction: column;
width:100%;
min-height: 300px;
`
const Formcover = styled.div`
display: flex;
width:100%;
height:100%;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`
const Formrow = styled.div`
width:100%;
min-height: 50px;
margin: 24px 0 0 0;
`

const Formrowbutt = styled.div`
width:100%;
height: 50px;
margin:  0;
display: flex;
flex-direction: row;
`
const Button = styled.button`
width:150px;
height: 48px;
background: ${colorThemes.black};
color: ${colorThemes.white};
outline: none;
border:none;
cursor: pointer;
display: flex;
flex-direction: column;
font-size: 15px;
justify-content: center;
align-items: center;
font-style: normal;
font-weight: 400;
line-height: 1.4;
border-radius: 10px;
transition: 0.3s ease-in;
:hover{
    transition: 0.3s ease-in;
    background: ${colorThemes.white};
color: ${colorThemes.black}; 
border: 1px solid ${colorThemes.black}; 
}
@media only screen and (max-width: 650px){
    font-size: 14px;
}
`
const Ordertext = styled(tinyText)`
color: ${colorThemes.grey};
font-weight: 600;
display: flex;
margin: 0 0 0 16px;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Formlabel = styled.div`
display: flex;
flex-direction: column;

`
const Formtitle = styled(smallText)`
color: ${colorThemes.grey}

`
const Forminput = styled.input`
width:100%;
height: 48px;
background: ${colorThemes.smoke};
color: ${colorThemes.black};
outline: none;
border:none;
margin: 10px 0 0 0;
border-radius: 10px;
padding: 20px;
background-size: 20%;
background-repeat: no-repeat;
background-position: top 0% right 0px;

`

const Input = styled.div`
width:100%;
min-height: 50px;
position: relative;
`
const Master = styled.img`
position: absolute;
width:40px;
height: 40px;
top: 25%;
right: 20px;
`
const Forminputname = styled.input`
width:100%;
height: 48px;
background: ${colorThemes.smoke};
color: ${colorThemes.black};
outline: none;
border:none;
margin: 10px 0 0 0;
border-radius: 10px;
padding: 20px;
`

const Forminputcv = styled.input`
width:100px;
height: 48px;
background: ${colorThemes.smoke};
color: ${colorThemes.black};
outline: none;
border:none;
margin: 10px 0 0 0;
border-radius: 10px;
padding: 10px;

background-size: 20%;
background-repeat: no-repeat;
background-position: top 40% right 10px;
`
const Formrowtwo = styled.div`
width:100%;
height: 130px;
margin: 24px 0 0 0;
display: grid;
overflow: hidden;
grid-gap: 40px;
grid-template-columns: repeat(2,1fr);
grid-auto-rows: minmax(200px,auto);

`

const InputCVV = styled.div`
width:100px;
min-height: 50px;
position: relative;
`
const Eye = styled.img`
position: absolute;
width:24px;
height: 24px;
top: 40%;
right: 20px;
`
export default Form
