import React from 'react'
import styled from 'styled-components'
import { colorThemes } from '../styles/ColorStyles'
import { largText, smallText } from '../styles/TextStyles'

const Total = () => {
    return (
        <Body>

<Text>
    <Name>Total Amount:</Name><AmountText>&#36;3680.60</AmountText>
</Text>
        </Body>
    )
}


const Body = styled.div`
height: 100%;
width: 100%;
overflow: hidden;
margin: 32px 0;
`

const Text = styled.div`
height: 10px;
width: 100%;
overflow: hidden;
border-radius: 10px;
margin: 4px 0;
color: ${colorThemes.grey};
align-items: center;
padding: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Name = styled(smallText)`

`
const AmountText = styled(largText)`
color: ${colorThemes.black};
font-weight: 600;
`


export default Total
