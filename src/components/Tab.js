import React, { useState } from 'react'
import styled from 'styled-components'
import { colorThemes } from '../styles/ColorStyles'

const Tab = ({name}) => {
    const [selected, setSelected] = useState("Credit Card")
    const [active, setActive ] = useState(false)

const handleSelect =(name)=>{
    setSelected(name)
    setActive(active === true ? "active" : "")
    if(selected){

    }
  
    

}
    return (
     <Body>

<Tabcontent>
<TabName onClick={() => handleSelect(name)} className={selected === name ? "active" : ""}>
    {name}
</TabName>
</Tabcontent>
     </Body>
    )
}

const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
overflow: hidden;


`
const Tabcontent = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
overflow: hidden;

.active{
    border-bottom: 3px solid ${colorThemes.black};
    width: 100%;
}
`

const TabName = styled.div`
cursor: pointer;
`

export default Tab
