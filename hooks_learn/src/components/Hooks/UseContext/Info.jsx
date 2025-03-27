import PropTypes from 'prop-types';
import { useContext } from 'react'
import Context from './UseContext';
// import Context from './Context';

export const Info = () => {

    const {data} = useContext(Context);

    return(
        <>
            <p>{data[0].name} - {data[0].age}</p>
            <br />
            <p>{data[1].name} - {data[1].age}</p>
        </>
    );
};
