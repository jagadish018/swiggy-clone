import React from 'react'
import NavBar from './components/NavigationBar'
import Category from './components/Catogery'
import TopRest from './components/TopRestuarent'
import OnlineDelivery from './components/OnlineDelivery'

const page = () => {
  return (
    <>
      <NavBar />
      <Category />
      <TopRest />
      <OnlineDelivery/>
    </>
  )
}

export default page