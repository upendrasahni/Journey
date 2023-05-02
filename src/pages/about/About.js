import React from 'react'
import '../about/About.css'
import { Link } from "react-router-dom";
import about_banner from '../../assets/About_images/about-banner.jpg'
import about_img from '../../assets/About_images/about-img.jpg'
import Upendra from '../../assets/About_images/Upendra.jpeg'
import Aditya from '../../assets/About_images/Aditya.jpg'
import  kishor from '../../assets/About_images/kishor.jpg'
import  bag from '../../assets/About_images/bag.jpg'

const About = () => {

return (
<>
        <div className='background-color'>
       <div className="banner">
            <div className="about-bannerr">
                <img src={about_banner} alt="" />
            </div>
           
            <div className="abcd">
                <p className="about-fade">About</p>
                <p className="about-bannerr-text">About Us</p>
            </div>
        </div>

    <div className='aboutus11'>
        <div className="container about-section">
            <div className="about-image">
                <img src={about_img} alt="" className="rounded-2" />
            </div>
            <div className="about">

                <p><h1>About us </h1></p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, pariatur. Laboriosam vero itaque
                    sint, repellat assumenda corporis, a provident nulla optio eius alias vitae dicta fugiat cumque
                    accusantium pariatur rem?</p>
                 
            </div>
        </div>
    </div>

    <div >
		<div className="diffsection">
			<center>
				<p className='thecreator11'>The Creators</p>
			</center>
			<div  className="totalcard text-center">
				<div className="card">
					<center><img src={Upendra}/></center>
					<center>
						<div className="card-title1"><p>Upendra Sahni</p></div>
						<div id="detail">
							<div className="det">
                                    <p>Student - BE</p>
                                <p>Alpha College</p>
                                </div>
							<div className="mt-5">
                                <a href="https://www.linkedin.com/in/upendra-sahni-6051ab20a" target="_blank"><button
									className="btn-seenu">Follow +</button></a>
                            </div>
						</div>
					</center>
				</div>

              <div className="card">
					<center><img src={Aditya}/></center>
					<center>
						<div className="card-title1"><p>Giri Aditya</p></div>
						<div id="detail">
							<div className="det">
                                <p>Student - BE</p>
                            <p>GEC Gandhinagar</p>
                            </div>
							<div className="mt-5">
                                <a href="https://www.linkedin.com/in/aditya-giri-901a02226" target="_blank"><button
									className="btn-seenu">Follow +</button></a>
                            </div>
						</div>
					</center>
				</div>

                <div className="card">
					<center><img src={kishor}/></center>
					<center>
						<div className="card-title1"><p>Kishor Prajapati</p></div>
						<div id="detail">
                                <div className="det">
                                    <p>Student - BE</p>
                                <p>Monark University</p>
                                </div>
                                <div className="mt-5">
                                    <a href="https://www.linkedin.com/in/kishor-prajapati-182a56249" target="_blank"><button
                                        className="btn-seenu">Follow +</button></a>
                                </div>
						</div>
					</center>
				</div>
                
			</div>
		</div>
	</div>


    <div>
       <div className="people1">
        <div className="container py-5 d-flex justify-content-center">
            <h1><p>What People Says</p></h1>
        </div>
        <div className="row people container">
            <div className="col-3 col-sm-3">
                <img src={bag} alt=""/>
            </div>
            <div className="col-9 col-sm-7">
                <div className="card-peo">
                    <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo dolorem accusamus? Recusandae praesentium distinctio, libero placeat odio quidem necessitatibus temporibus nam eum corporis ad."</p>
                    <p id="tra">- <i>Ganesh Gaitonde,</i> Traveller</p>
                </div>
            </div>
        </div>
       </div>

       <div className="want">
        <p><h1>Want To Travel With Us?</h1></p>
        <Link to="/booking">Book Now</Link>
       </div>
       </div>
       </div>
    </>
  )
}

export default About
