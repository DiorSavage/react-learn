import './NewCost.css'
import CostForm from './CostForm'
import React, { useState } from 'react'

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false)


    const saveCostDataHandler = (InputCostData) => {
        const costData = {
            ...InputCostData,
            id: Math.random().toString(),
        }
        props.onSaveCostDataApp(costData)
        setIsFormVisible(false)
    }

    const InputCostDataHandler = () => {
        setIsFormVisible(true)
    }

    const CancelCostHandler = () => {
        setIsFormVisible(false)
    }

    return <div className='new-cost'>
        {!isFormVisible && <button onClick={InputCostDataHandler}>Добавить новый расход</button>}
        {isFormVisible && <CostForm cancel={CancelCostHandler} onSaveCostData={saveCostDataHandler} />}
    </div>
}

export default NewCost