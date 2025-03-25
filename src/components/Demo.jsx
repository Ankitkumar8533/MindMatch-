import React from 'react'
import styled from 'styled-components'

const Demo = () => {
  return (
    <Wrapper>

    <div className='container'>

     <div className='card'>
     <div className='front-face'> 
        ?
      </div>

      <div className='back-face'>
      😎      </div>

     </div>

    </div>
   
    </Wrapper>
  )
}

const Wrapper  = styled.section`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;

.container{
  width:200px;
  height:200px;
  
  
  display:flex;
  align-items:center;
  justify-content:center;
  perspective:1000px;
  
}

.card{
  width:100%;
  height:100%;
  position:relative;
  transform-style:preserve-3d;
  transition: transform 0.6s ease;
}

.container:hover .card{
  transform: rotateY(180deg);

}



.front-face{
  width:100%;
  height:100%;
  background-color:yellow;
  display:flex;
  align-items:center;
justify-content:center;
position:absolute;
backface-visibility: hidden;

}





.back-face{
  width:100%;
  height:100%;
  background-color:green;
  display:flex;
  align-items:center;
justify-content:center;
position:absolute;
backface-visibility: hidden;
transform:rotateY(180deg);

}


 
    





`;

export default Demo