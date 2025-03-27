import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './PeopleNavigation.module.css'
import { UIbutton } from './UI/UIbutton'

const PeopleNavigation = ({
    getResource, 
    next, 
    prev, 
    counter
}) => {
    const handleChangeNext = () => {
        getResource(next)
    }
    const handleChangePrev = () => {
        getResource(prev)
    }
    return(
        <div className={styles.main__div}>
            <Link to={`/people/?page=${counter-1}`}>
                {/* <button onClick={handleChangePrev} className={styles.buttons}>Next</button> */}
                <UIbutton
                    text="Previous"
                    handleChange={handleChangePrev}
                    disabled={!prev}
                    theme='dark'
                />
            </Link>
            <Link to={`/people/?page=${counter+1}`}>
                <UIbutton
                    text="Next"
                    handleChange={handleChangeNext}
                    disabled={!next}
                    theme='dark'
                />            
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prev: PropTypes.string,
    next: PropTypes.string,
    conter: PropTypes.number,
}

export default PeopleNavigation