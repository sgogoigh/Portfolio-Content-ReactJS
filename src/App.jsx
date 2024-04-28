import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Card from './Card.jsx'
import Header from './Header.jsx'

function App() {
  return(
    <>
      <div className="main-page">
        <Header />
        <Card link="https://ashva.xyz/impact-of-knee-pain-and-physical-disability-on-the-economy-of-india/" title= "Knee Economy" text="Impact of Knee Pain and physical disability on the economy of India" />
        <Card link="https://ashva.xyz/how-evidence-based-physiotherapy-helps-in-better-treatment/" title= "Evidence-based Physiotherapy" text="Pros of this in physiotherapy" />
        <Card link="https://ashva.xyz/journey-of-fitmust-development/" title= "The Fitmust Story" text="Journey of Fitmust Development" />
        <Card link="https://ashva.xyz/physiotherapys-ticking-time-bomb-the-hunt-for-second-opinions/" title= "Second Opinions" text="Physiotherapy’s Ticking Time Bomb – The Hunt for Second Opinions." />
        <Card link="https://ashva.xyz/unforseen-allies-yoga-physiotherapy/" title= "Unforeseen Allies" text="Yoga as Physiotherapy" />
        <Card link="https://ashva.xyz/unveiling-indias-reliance-on-the-western-world-for-physiotherapy/" title= "Western Reliance" text="Unveiling India's Reliance on the West for Physiotherapy" /> 
      </div>
    </>   
  );
}

export default App
