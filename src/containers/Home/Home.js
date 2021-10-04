import React from 'react'
import AboutMeSection from '../../components/Sections/AboutMeSection/AboutMeSection'

import HomeSection from '../../components/Sections/HomeSection/HomeSection'
import Services from '../../components/Sections/ServicesSection/Services'

const Home = () => {
    return (
        <div>
            <HomeSection/>
            <AboutMeSection/>
            <Services/>
        </div>
    )
}

export default Home
