import React from 'react'
import { ongoing } from '../../constants'
import './events.css'
const Ongoing = () => {
  return (
    < >

    <div className="container">
        <h1>
          <center><u>Ongoing Events</u></center>
        </h1>
      </div>
      <br />
        {
             ongoing.map((ongoing)=>(
                <div className="content-wrapper">
                    <div className="cardup" key={ongoing.name}>
                    <div className="news-card" >
                        <a href={`${ongoing.images[0]}`} className="news-card__card-link"></a>
                        <img src={`${ongoing.images[0]}`} alt="" className="news-card__image" />
                        <div className="news-card__text-wrapper">
                            <h2 className="news-card__title">{ongoing.name}</h2>
                            <div className="news-card__post-name">{ongoing.date}</div>
                            <div className="news-card__details-wrapper">
                            <p className="news-card__excerpt"> {ongoing.description}
                            </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
              
            
            ))
        }
        </>
  )
}

export default Ongoing