import React from 'react'
import styled from 'styled-components'
import { headerText} from '../styles/TextStyles'
import Amount from './Amount'
import Details from './Details'
import Total from './Total'
const Sidebar = () => {

    const name =[
        {id: 1,
        name: "Prada"},
        {id: 2,
        name: "Dr. Martens"},
        {id: 3,
        name: "Chanel"},

    ]
    return (
        <Body>
        <Title><Orderh1>Order Summary</Orderh1></Title>
     
<Icons>

  <Details/>
</Icons>
<Prada>


{name.map(name=>
    <Amount key={name.id} name={name.name}/>
)}

<Total/>
</Prada>

</Body>
    )
}

const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: 10px;
overflow: hidden;
`

const Title = styled.div`
height: 60px;
width: 100%;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
margin: 24px 0;
`
const Orderh1 = styled(headerText)`

`

const Icons = styled.div`
min-height: 100px;
width: 100%;
`

const Prada = styled.div`
min-height: 200px;
width: 100%;
display: flex;
flex-direction: column;
`
export default Sidebar
