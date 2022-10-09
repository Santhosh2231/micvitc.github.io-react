import React from 'react'
import {past} from "../../constants/index"

const Past = () => {
  return (
    < >
    <div className="container">
        <h1>
          <center><u>Past Events</u></center>
        </h1>
      </div>
      <br />
    
        {
             past.map((past)=>(
                
                <div key={past.name} className="content-wrapper">
                    <div className="news-card" >
                        <a href={`${past.images[0]}`} className="news-card__card-link"></a>
                        <img src={`${past.images[0]}`} alt="" className="news-card__image" />
                        <div className="news-card__text-wrapper">
                            <div className="news-card__details-wrapper"></div>
                        </div>
                    </div>
                    <div className="news-card">
                        <a href={`${past.images[1]}`} className="news-card__card-link"></a>
                        <img src={`${past.images[1]}`} alt="" className="news-card__image" />
                        <div className="news-card__text-wrapper">
                            <h2 className="news-card__title">{past.name}</h2>
                            <div className="news-card__post-name">{past.date}</div>
                            <div className="news-card__details-wrapper">
                            <p className="news-card__excerpt"> {past.description}
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="news-card">
                        <a href={`${past.images[2]}`} className="news-card__card-link"></a>
                        <img src={`${past.images[2]}`} alt="" className="news-card__image" />
                        <div className="news-card__text-wrapper">
                            <div className="news-card__details-wrapper">
                            </div>
                        </div>
                    </div>
                </div>
              
            
            ))
        }
        </>
    
  )
}

export default Past