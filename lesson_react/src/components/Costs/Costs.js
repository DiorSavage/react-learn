import './Costs.css'
import Card from '../UI/Card'
import CostFilter from './CostFilter'
import React, { useState } from 'react'
import CostsDiagram from './CostsDiagram'
import CostList from './CostList'

const Costs = (props) => {
    const [year, setYear] = useState('2023')
    const saveDateHandler = (Date) => {
        setYear(Date)
    }
    const filtered_costs = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === year
    })

    return (
        <div>
            <Card className='costs'>
                <CostFilter year_now={year} saveDate={saveDateHandler}/>
                <CostsDiagram costs={filtered_costs}/>
                <CostList costs={filtered_costs}/>
            </Card>
        </div>
    )
}

export default Costs