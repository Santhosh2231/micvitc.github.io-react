import React from 'react'
import Ongoing from './Events/Ongoing'
import Upcoming from './Events/Upcoming'
import Past from './Events/Past';

const Events = () => {
  return (
    <>
    <Ongoing />
    <Upcoming />
    <Past />
    </>
  )
}

export default Events;