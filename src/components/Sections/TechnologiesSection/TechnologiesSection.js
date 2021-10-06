import Divider from '../../UI/Divider/Divider'
import React from 'react'
import  classes  from './TechnologiesSection.module.css'
import CategoriesItems from '../../TechnologiesSection/CategoriesItems/CategoriesItems'


const TechnologiesSection = () => {
    return (
        <section>
            <Divider title="Technologies"/>
            <div className={classes.dd}>
                <CategoriesItems/>
            </div>
        </section>
    )
}

export default TechnologiesSection
