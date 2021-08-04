import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { envAPI } from '../../EndPoints/Endpoint_v2'

import {
    DivPage,

} from './selectedStyled'

const Selected = (props) => {
    var id = useParams().id;
    const response = async page => envAPI(page);
    useEffect(() => {
        async function loadapi() {    
        const {data} = await response( `anime/${id}`);
        console.log(data)
        
        }
        loadapi();

    }, [])
  console.log(useParams().id);
    return (
        <DivPage>
            yolo
        </DivPage>
    )
}

export default Selected
