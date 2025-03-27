import Diagram_bar from './Diagram_bar'
import './Diagram.css'

const Diagram = (props) => {

    const dataSetsValues = props.dataSets.map(dataSet => {
        return ( 
            dataSet.value
        )
    })

    const maxMonthCosts = Math.max(...
        dataSetsValues)

    return (
        <div className='diagram'>
            {props.dataSets.map(dataSet => {
                <Diagram_bar 
                key={dataSet.label}
                value={dataSet.value} 
                max_value={maxMonthCosts}
                label={dataSet.label}
                />
            })}
        </div>
    )
}


export default Diagram