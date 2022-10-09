import React from 'react'
import { upcoming } from '../../constants'
const Upcoming = () => {
  return (
    < >
    <div className="container">
        <h1>
          <center><u>Upcoming Events</u></center>
        </h1>
      </div>
      <br /> 

    
        {
             upcoming.map((upcoming)=>(
                <div className="content-wrapper">
                    <div className="cardup" key={upcoming.name}>
                    <div className="news-card" >
                        <a href={`${upcoming.images[0]}`} className="news-card__card-link"></a>
                        <img src={`${upcoming.images[0]}`} alt="" className="news-card__image" />
                        <div className="news-card__text-wrapper">
                            <h2 className="news-card__title">{upcoming.name}</h2>
                            <div className="news-card__post-name">{upcoming.date}</div>
                            <div className="news-card__details-wrapper">
                            <p className="news-card__excerpt"> {upcoming.description}
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

export default Upcoming