import PeopleNavigation from '../../components/PeopleNavigation'
import { ApiPeople } from '@constants/ApiConstants'
import { getApiResource } from '@utils/network'
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData' 
import { PeopleList } from '@components/PeopleList'
import { withErrorApi } from '@hoc-helpers/withError'

import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useQueryParams } from '../../Hooks/useQueryParams'

const People = ({ setErrorApi }) => {

    const [people, setPeople] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)
    const [nextPage, setNextPage] = useState(null)

    const query = useQueryParams()
    const queryPage = query.get('page')
    

    const getResource = async (url) => {
        const response = await getApiResource(url)

        if (response) {
            const peopleList = response.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                console.log(img)
                return {
                    name,
                    url,
                    img,
                }
            })
            setPeople(peopleList)
            setNextPage(response.next)
            setCounterPage(getPeoplePageId(url))
            setPrevPage(response.previous)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }
    useEffect(() => {
        getResource(ApiPeople+queryPage)
    }, [])
    return(
        <>
            <PeopleNavigation 
                getResource={getResource}
                prev={prevPage}
                next={nextPage}
                counter={counterPage}
            />
            {people && (
                <PeopleList people={people}/>
            )}
        </>
    )
}

People.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(People)
// return(
//     <>
//         {errorApi ? <h2>Error</h2> : (
//             <>
//                 <h1>Navigation</h1>
//                 {people && (
//                     <PeopleList people={people}/>
//                 )}
//             </>
//         )
//         }
//     </>
// )