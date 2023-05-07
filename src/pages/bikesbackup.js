




import React from 'react'
import image from '../assets/images/bike-bg.jpg'
import jupiter from '../assets/images/jupiter.webp'
import dio from '../assets/images/dio.webp'
import pleasure from '../assets/images/pleasure.webp'
import sp from '../assets/images/sp.webp'
import splendor from '../assets/images/splendor.webp'
import duke from '../assets/images/duke.webp'
import { Link } from 'react-router-dom'


const Bikes = () => {
    let bikesArr=[{
        id:1,
        name:'TVS Jupiter',
        img:jupiter,
        description:'Moped, Auto Transmission with Boot',
        passanger:2,
        transmission:'A',
        rate: 350
    },{
        id:2,
        name:'Honda Dio',
        img:dio,
        description:'Moped, Auto Transmission with Boot',
        passanger:2,
        transmission:'A',
        rate: 370
    },
    {
        id:3,
        name:'Hero Pleasure',
        img:pleasure,
        description:'Moped, Auto Transmission with Boot',
        passanger:2,
        transmission:'A',
        rate: 400
    },
    {
        id:4,
        name:'Honda SP 125',
        img:sp,
        description:' Manual Transmission without boot',
        passanger:2,
        transmission:'M',
        rate: 420
    },{
        id:5,
        name:'Hero Splendor',
        img:splendor,
        description:'Manual Transmission without boot',
        passanger:2,
        transmission:'M',
        rate: 410
    },{
        id:6,
        name:'KTM Duke 200',
        img:duke,
        description:'Manual Transmission without boot',
        passanger:2,
        transmission:'M',
        rate: 700
    },
    {
        id:7,
        name:'TVS Jupiter',
        img:jupiter,
        description:'Moped, Auto Transmission with Boot',
        passanger:2,
        transmission:'A',
        rate: 350
    },{
        id:8,
        name:'Honda Dio',
        img:dio,
        description:'Moped, Auto Transmission with Boot',
        passanger:2,
        transmission:'A',
        rate: 370
    },
    {
        id:9,
        name:'Hero Pleasure',
        img:pleasure,
        description:'Moped, Auto Transmission with Boot',
        passanger:2,
        transmission:'A',
        rate: 400
    },
    {
        id:10,
        name:'Honda SP 125',
        img:sp,
        description:' Manual Transmission without boot',
        passanger:2,
        transmission:'M',
        rate: 420
    },{
        id:11,
        name:'Hero Splendor',
        img:splendor,
        description:'Manual Transmission without boot',
        passanger:2,
        transmission:'M',
        rate: 410
    },{
        id:12,
        name:'KTM Duke 200',
        img:duke,
        description:'Manual Transmission without boot',
        passanger:2,
        transmission:'M',
        rate: 700
    }
]
  return (
    <>
   
    <section className="section section-bg" id="call-to-action" style={{ backgroundImage: `url(${image})` }} >
        <div className="container" >

       
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="cta-content">
                        <br/>
                        <br/>
                        <h2>Our <em>Fleet</em></h2>
                        <p>Choose your bike from our fleet & Enjoy the ride...</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section" id="trainers">
        <div className="container">
            <br/>
            <br/>
            <div className="row">
                {
                    bikesArr.map((bike)=>{
                        return(
                            <div className="col-lg-4 col-md-4" key={bike.id}>
                            <div className="trainer-item">
                                <div className="image-thumb">
                                    <img src={bike.img} alt=""/>
                                </div>
                                <div className="down-content">
                                    <span>from <sup>₹</sup>{bike.rate} per weekend</span>
                                    <h4>{bike.name}</h4>
                                    <p>
                                        <i className="fa fa-user" title="passegengers"></i> {bike.passanger} &nbsp;&nbsp;&nbsp;
                                        
                                        <i className="fa fa-cog" title="transmission"></i> {bike.transmission}
                                    </p>
                                    <ul className="social-icons">
                                        <li><Link to= {`/bikedetails/${bike.id}`}>+ Book Now</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
               
            </div>

            <br/>
                
            <nav>
              <ul className="pagination pagination-lg justify-content-center">
                <li className="page-item">
                  <a className="page-link" href= "/blank" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item"><a className="page-link" href= "/blank">1</a></li>
                <li className="page-item"><a className="page-link" href= "/blank">2</a></li>
                <li className="page-item"><a className="page-link" href= "/blank">3</a></li>
                <li className="page-item">
                  <a className="page-link" href= "/blank" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>

        </div>
    </section>
    
    </>
  )

}

export default Bikes

