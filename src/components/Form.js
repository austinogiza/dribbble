import React from 'react'
import styled from 'styled-components'
import { colorThemes } from '../styles/ColorStyles'
import { smallText, tinyText } from '../styles/TextStyles'

const Form = () => {
    return (
       <Body>

           <Formcover>
               <Formrow>

                   <Formlabel>
                   <Formtitle>Card Number</Formtitle>
                       <Forminput type="text" value="6011 1799 9655 8786377"/>
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
    <Forminputcv type='text' value="407"/>
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
background-image: url('data:image/svg+xml;utf8, <svg width="132" height="87" viewBox="0 0 132 87" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M83.0301 15.1399H48.3701V71.7499H83.0301V15.1399Z" fill="#FF5F00"/><path d="M51.94 43.4501C51.9357 37.9991 53.1714 32.6185 55.5536 27.7155C57.9358 22.8125 61.402 18.5157 65.69 15.1501C60.3791 10.9763 54.0011 8.38089 47.285 7.66045C40.5688 6.94001 33.7855 8.12363 27.7102 11.076C21.6349 14.0284 16.5127 18.6305 12.9292 24.3562C9.34567 30.082 7.44531 36.7004 7.44531 43.4551C7.44531 50.2098 9.34567 56.8282 12.9292 62.554C16.5127 68.2797 21.6349 72.8818 27.7102 75.8342C33.7855 78.7866 40.5688 79.9702 47.285 79.2497C54.0011 78.5293 60.3791 75.9339 65.69 71.7601C61.4007 68.3935 57.9337 64.095 55.5514 59.1902C53.1692 54.2854 51.9342 48.9028 51.94 43.4501V43.4501Z" fill="#EB001B"/><path d="M120.5 65.7601V64.6001H121V64.3601H119.81V64.6001H120.28V65.7601H120.5ZM122.81 65.7601V64.3601H122.45L122.03 65.3601L121.61 64.3601H121.25V65.7601H121.51V64.7001L121.9 65.6101H122.17L122.56 64.7001V65.7601H122.81Z" fill="#F79E1B"/><path d="M123.94 43.4501C123.94 50.2053 122.039 56.8242 118.455 62.5501C114.871 68.276 109.748 72.878 103.672 75.83C97.5956 78.782 90.8116 79.9648 84.095 79.2433C77.3785 78.5219 71.0004 75.9252 65.6899 71.7501C69.9762 68.3815 73.4415 64.0835 75.8243 59.1803C78.2071 54.277 79.4452 48.8967 79.4452 43.4451C79.4452 37.9935 78.2071 32.6132 75.8243 27.7099C73.4415 22.8067 69.9762 18.5087 65.6899 15.1401C71.0004 10.965 77.3785 8.36832 84.095 7.64685C90.8116 6.92538 97.5956 8.10823 103.672 11.0602C109.748 14.0122 114.871 18.6142 118.455 24.3401C122.039 30.066 123.94 36.6849 123.94 43.4401V43.4501Z" fill="#F79E1B"/></svg>');
background-repeat: no-repeat;
background-position: top 0% right 0px;

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
padding: 20px;

background-size: 20%;
background-image: url('data:image/svg+xml;utf8, <svg width="132" height="87" viewBox="0 0 132 87" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M83.0301 15.1399H48.3701V71.7499H83.0301V15.1399Z" fill="#FF5F00"/><path d="M51.94 43.4501C51.9357 37.9991 53.1714 32.6185 55.5536 27.7155C57.9358 22.8125 61.402 18.5157 65.69 15.1501C60.3791 10.9763 54.0011 8.38089 47.285 7.66045C40.5688 6.94001 33.7855 8.12363 27.7102 11.076C21.6349 14.0284 16.5127 18.6305 12.9292 24.3562C9.34567 30.082 7.44531 36.7004 7.44531 43.4551C7.44531 50.2098 9.34567 56.8282 12.9292 62.554C16.5127 68.2797 21.6349 72.8818 27.7102 75.8342C33.7855 78.7866 40.5688 79.9702 47.285 79.2497C54.0011 78.5293 60.3791 75.9339 65.69 71.7601C61.4007 68.3935 57.9337 64.095 55.5514 59.1902C53.1692 54.2854 51.9342 48.9028 51.94 43.4501V43.4501Z" fill="#EB001B"/><path d="M120.5 65.7601V64.6001H121V64.3601H119.81V64.6001H120.28V65.7601H120.5ZM122.81 65.7601V64.3601H122.45L122.03 65.3601L121.61 64.3601H121.25V65.7601H121.51V64.7001L121.9 65.6101H122.17L122.56 64.7001V65.7601H122.81Z" fill="#F79E1B"/><path d="M123.94 43.4501C123.94 50.2053 122.039 56.8242 118.455 62.5501C114.871 68.276 109.748 72.878 103.672 75.83C97.5956 78.782 90.8116 79.9648 84.095 79.2433C77.3785 78.5219 71.0004 75.9252 65.6899 71.7501C69.9762 68.3815 73.4415 64.0835 75.8243 59.1803C78.2071 54.277 79.4452 48.8967 79.4452 43.4451C79.4452 37.9935 78.2071 32.6132 75.8243 27.7099C73.4415 22.8067 69.9762 18.5087 65.6899 15.1401C71.0004 10.965 77.3785 8.36832 84.095 7.64685C90.8116 6.92538 97.5956 8.10823 103.672 11.0602C109.748 14.0122 114.871 18.6142 118.455 24.3401C122.039 30.066 123.94 36.6849 123.94 43.4401V43.4501Z" fill="#F79E1B"/></svg>');
background-repeat: no-repeat;
background-position: top 0% right 0px;
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

export default Form
