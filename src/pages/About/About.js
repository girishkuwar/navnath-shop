import React, { useEffect } from 'react'
import dp from "../../assets/bg.jpg"
import "./about.css"

const About = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (<>
    <div className="about">
      <section className='banner'>
        <div className="text">
          About Us
        </div>
      </section>
      <div className="about-text">
      <div className="col">
        <div className="row">

          <h1>Homes that transcend your aspirations</h1>
      <p>Contemporary lifestyles have been driving us to be at the top of our game. We offer a comprehensive portfolio of products ranging from sanitaryware, faucets and tiles to wellness solutions like high-end showers, steam cubicles, whirlpools, and more. Every product is a design marvel resulting from advanced technology combined with innovative processes.</p>
      <p>We also bring creations from the best design studios in the world through Isvea - an Italian luxury designer brand; Senator - a premium range of sanitaryware, faucet, wellness and mirrors . Navnath Trader's is inevitably the first choice for those seeking the finest for their home.</p>

      <p><b>The Navnath Trader's Edge – built on a foundation of technology</b></p>

      <p>Our commitment to technology lends us a competitive advantage that’s unparalleled. Since inception in 1980, we have invested in state-of-the-art manufacturing plants to achieve the highest standards of quality. From manufacturing precision to that impeccable body finish, our factories ensure every product meets quality level.</p>

      <p>We achieve this by incorporating latest technologies like 3D prototype printer, fully automatic chrome plating, robotic grinding and polishing machine, robotic glazing machine and pressure casting machine at our faucets and sanitaryware manufacturing factories. Our brands continues to be the leader in the industry with its futuristic technology.</p>
        </div>
        <div className="row">
          <img src={dp} alt="" />

        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default About