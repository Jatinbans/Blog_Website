import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

export const Footer = () => {
  return (
    <>
      <footer className='boxItems' id="footer">
        <div className='container flex'>
          <p>All right reserved - Design & Developed by Jatin Bansal</p>
          <p>Contact no: 9815178150</p>
          <p>Mail to :<a href="mailto:jatinbansal80173@gmail.com">Jatin Bansal</a></p>
          
          <div className='social'>
            <BsFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}
