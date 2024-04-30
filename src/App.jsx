import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from './assets/img_ashva.jpg'
import Logo2 from './assets/img_socialstories.jpg'
import Logo3 from './assets/img_drive.png'

import Card from './Card.jsx'
import Header from './Header.jsx'

function App() {
  return(
    <>
      <div className="main-header">
        <Header />
      </div>
      <div className="main-page">    
        <Card imglink={Logo} link="https://ashva.xyz/impact-of-knee-pain-and-physical-disability-on-the-economy-of-india/" title= "Knee Economy" text="Impact of Knee Pain and physical disability on the economy of India" />
        <Card imglink={Logo} link="https://ashva.xyz/unveiling-indias-reliance-on-the-western-world-for-physiotherapy/" title= "Western Reliance" text="Unveiling India's Reliance on the West for Physiotherapy" /> 
        <Card imglink={Logo} link="https://ashva.xyz/journey-of-fitmust-development/" title= "The Fitmust Story" text="Journey of Fitmust Development" />
        <Card imglink={Logo} link="https://ashva.xyz/physiotherapys-ticking-time-bomb-the-hunt-for-second-opinions/" title= "Second Opinions" text="Physiotherapy’s Ticking Time Bomb – The Hunt for Second Opinions." />
        <Card imglink={Logo} link="https://ashva.xyz/unforseen-allies-yoga-physiotherapy/" title= "Unforeseen Allies" text="Yoga as Physiotherapy" />
        <Card imglink={Logo2} link="https://www.instagram.com/p/CPk3o0fhd1a/?igsh=c2VrZ212aWFkbDA3" title="The Playlist" text="A Fictional Letter"/>
        <Card imglink={Logo2} link="https://www.instagram.com/p/CFRPG7MFcZt/?igsh=N203c3djdDU0MTln" title="Castle of Glass" text="A Fictional Story"/>
        <Card imglink={Logo2} link="https://www.instagram.com/p/CPEFfDNB7xl/?igsh=cWRuNWI4ZzhqOG40" title="POBAW" text="Movie Quotes" />
        <Card imglink={Logo2} link="https://www.instagram.com/p/C3gM5kfhxwi/?igsh=MWFpZGUwb3R0Z21jMQ==" title="Red String" text="Everyday Conversations" />
        <Card imglink={Logo3} link="https://drive.google.com/drive/folders/1qMbUZqvEiX6s-V_Pe9rjZ7hmypHky4lG?usp=drive_link" title="Rest" text="My Google Drive" />
      </div>
    </>   
  );
}

export default App
