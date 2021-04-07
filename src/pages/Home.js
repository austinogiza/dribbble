import React from 'react'
import styled from 'styled-components'
import MainSection from '../components/MainSection'
import Sidebar from '../components/Sidebar'

const Home = () => {
    return (
      <Body>
<MainSection/>
          <Sidebar />
      </Body>
    )
}


const Body = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 800px auto;
grid-gap: 50px;
padding: 20px;
grid-auto-rows: minmax(200px, auto);

@media only screen and (max-width: 650px){
    grid-template-columns: 1fr;  
}
`
export default Home
