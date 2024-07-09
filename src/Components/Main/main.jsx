import React from 'react';
import './main.css';
import CountdownTimer from './CountdownTimer';
import img1 from '../../Assets/img1.jpeg';
import img2 from '../../Assets/img2.jpeg';
import img3 from '../../Assets/img3.jpeg';
import img4 from '../../Assets/img4.jpeg';
import img5 from '../../Assets/img5.jpeg';

const Data = [
  {
    id: 1,
    imgSrc: img1,
    leaveHour: 13,
    leaveMinute: 30,
    destTitle: 'Telavi',
    location: 'City',
    fees: '$200',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem rerum beatae! Laboriosam repudiandae in praesentium obcaecati aliquid assumenda delectus? Modi sunt odio animi ullam omnis, ut at iusto earum odit beatae eaque fuga accusamus repellat dolores quaerat. Enim totam eius animi ullam ipsa laborum nostrum sunt! Ratione, expedita?"
  },
  {
    id: 2,
    imgSrc: img2,
    leaveHour: 22,
    leaveMinute: 0,
    destTitle: 'Batumi',
    location: 'City',
    fees: '$200',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem rerum beatae! Laboriosam repudiandae in praesentium obcaecati aliquid assumenda delectus? Modi sunt odio animi ullam omnis, ut at iusto earum odit beatae eaque fuga accusamus repellat dolores quaerat. Enim totam eius animi ullam ipsa laborum nostrum sunt! Ratione, expedita?"
  },
  {
    id: 3,
    imgSrc: img3,
    leaveHour: 23,
    leaveMinute: 0,
    destTitle: 'Borjomi',
    location: 'City',
    fees: '$200',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem rerum beatae! Laboriosam repudiandae in praesentium obcaecati aliquid assumenda delectus? Modi sunt odio animi ullam omnis, ut at iusto earum odit beatae eaque fuga accusamus repellat dolores quaerat. Enim totam eius animi ullam ipsa laborum nostrum sunt! Ratione, expedita?"
  },
  {
    id: 4,
    imgSrc: img4,
    leaveHour: 17,
    leaveMinute: 30,
    destTitle: 'Mestia',
    location: 'City',
    fees: '$200',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem rerum beatae! Laboriosam repudiandae in praesentium obcaecati aliquid assumenda delectus? Modi sunt odio animi ullam omnis, ut at iusto earum odit beatae eaque fuga accusamus repellat dolores quaerat. Enim totam eius animi ullam ipsa laborum nostrum sunt! Ratione, expedita?"
  },
  {
    id: 5,
    imgSrc: img5,
    leaveHour: 15,
    leaveMinute: 45,
    destTitle: 'Tbilisi',
    location: 'City',
    fees: '$200',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam dolorem rerum beatae! Laboriosam repudiandae in praesentium obcaecati aliquid assumenda delectus? Modi sunt odio animi ullam omnis, ut at iusto earum odit beatae eaque fuga accusamus repellat dolores quaerat. Enim totam eius animi ullam ipsa laborum nostrum sunt! Ratione, expedita?"
  }
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Our current destinations
        </h3>
      </div>

      <div className="seeContent grid">
        {
          Data.map(({ id, imgSrc, leaveHour, leaveMinute, destTitle, location, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <CountdownTimer hour={leaveHour} minute={leaveMinute} />
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">DETAILS</button>
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};

export default Main;
