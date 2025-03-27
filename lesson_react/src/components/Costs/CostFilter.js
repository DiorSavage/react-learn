import Card from "../UI/Card"
import  './CostFilter.css'


const CostFilter = (props) => {

    const changeDateHandler = (event) => {
        props.saveDate(event.target.value)
    }
    
    return (
        <Card className='select_block'>
            <div className="selector">
                <p>Выбор по году</p>
                <select value={props.year_now} onChange={changeDateHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                </select>
            </div>
        </Card>
    )
}

export default CostFilter