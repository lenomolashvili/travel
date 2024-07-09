import React from 'react'
import './footer.css'
import video from '../../Assets/busbridge2.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from 'react-icons/md';

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Adress'  />
            <button className="btn flex" type = "submit">
              Send <FiSend classname="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a class = "logo" href="">
                <MdOutlineTravelExplore className = "icon"/> Travel 
              </a>
            </div>

            <div className="footerParagraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consectetur repellendus aspernatur culpa, tempora minima repudiandae qui voluptatem a animi doloribus magnam eius nihil natus corrupti reiciendis fugit nostrum sapiente?
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer