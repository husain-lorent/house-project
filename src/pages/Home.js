import React from 'react'
import Banner from '../components/Banner'
import HomeList from '../components/HomeList'

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
        <Banner/>
        <HomeList/>
    </div>
  )
}

export default Home