import React from 'react'
import PropTypes from 'prop-types'
import styles from './PeopleList.module.css'

export const PeopleList = ({ people }) => {
    return(
        <ul className={styles.list__container}>
                {people.map(({ name, id, img }) => {
                        return (
                            <>
                                <li className={styles.list__item} key={id}>
                                    <a href="" key={id}> 
                                        <img className={styles.person__photo} src={img} alt="Hero" key={id} />
                                        <p key={id}>{name}</p>
                                    </a>
                                </li>
                            </>
                        )
                    })
                }
            </ul>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}