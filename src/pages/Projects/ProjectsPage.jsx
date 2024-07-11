import React from 'react'
import Navbar1 from '../home/navbar/Navbar1'
import Card1 from './cards/Card.jsx'
import Card2 from './cards/Card2.jsx'
import Card3 from './cards/Card3.jsx'
import Card4 from './cards/Card4.jsx'
import Card5 from './cards/Card5.jsx'
import Card6 from './cards/Card6.jsx'
import Title from './cards/Title.jsx'
import img from '../../images/python.png'
import './cards/Card.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
const ProjectsPage = () => {

  const cards = [
    { id: 1, imageSrc: img, description: 'Description for image 1' },
    { id: 2, imageSrc: img, description: 'Description for image 2' },
    // { id: 3, imageSrc: image3, description: 'Description for image 3' },
  ];
  return (
    <>
      <Navbar1/>
      <Title/>
      <div className="cardContainer">
      {cards.map(card => (
        <Card1 key={card.id} id={card.id} imageSrc={card.imageSrc} description={card.description} />
      ))}
      <Card1 />
      <Card2/>
      <Card3/>
      <Card4/>
      <Card5/>
      <Card6/>
      

      </div>
      </>
  )
}

export default ProjectsPage
