import React, { useEffect, useState } from 'react'

import { API, envAPI } from '../EndPoints/Endpoint_v2';
import {
    DivList,
Link,
} from './trendStyled'
const Trend = () => {
    const [data, setData] = useState([])
    const response = async page => envAPI(page);
    useEffect(() => {
        async function loadapi() {    
        const {data} = await response("trending/anime");
        console.log(data.data)
        setData(data.data)
        
        }
        loadapi();

    }, [])
    
    return (
    <DivList>
        
        {data.map((item, index) => (
        <Link key={index} href={item.links.self}>{item.attributes.titles.en? item.attributes.titles.en:item.attributes.titles.en_jp }</Link>         
                 
                
            ))}
    </DivList>    
    )
}

export default Trend
