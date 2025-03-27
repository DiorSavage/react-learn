import React, { useState } from 'react'
import { ErrorMessage } from '@components/ErrorMessage'

export const withErrorApi = View => {
    return props => {
        const [errorApi, setErrorApi] = useState(false)
        return(
            <>
                    {errorApi ? <ErrorMessage /> : (
                        <View setErrorApi={setErrorApi} {...props}/>
                    )
                }
            </>
        )
    }
}

{/* <h1>Navigation</h1>
    {people && (
        <PeopleList people={people}/>
    )} */}