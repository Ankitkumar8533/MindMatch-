import React from 'react'
import styled from 'styled-components'
import CustmGame from './components/CustmGame'
import { useCardContext } from './context/cardsEmoji'
import Demo from './components/Demo'
const App = () => {
      
 
  return (
    <Wrapper>

    
     <CustmGame/> 
    </Wrapper>
  )
}

const Wrapper = styled.section`
width:100vw;
height:100vh;
${'' /* display:flex;
flex-direction:column;
align-items:center;
gap:10rem; */}



`;
export default App