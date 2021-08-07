import React, { useEffect, useState } from 'react'
import AnimeBox from '../../BoxView/Anime';
import { envAPI, API } from '../../EndPoints/Endpoint_v2';
import Preloaders from '../../preloaders/Preloaders';
import Trend from '../../trend/Trend';



import {
    DivCont,
    DivInit,
    DivLeft,
    Nav,

} from './inicioStyled'
const Init = () => {
    const [dataAnimes, setDataAnimes] = useState([])
    const [next, setNext] = useState('')
    const [loading, setLoading] = useState(false)

    const response = async page => envAPI(page);
    useEffect(() => {
        async function loadapi() {
            const { data } = await response("anime");
            console.log(data)
            setDataAnimes(data.data)
            setNext(data.links.next)
        }
        loadapi();

    }, [])

    const handleScroll = event => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        if (Math.round(scrollHeight) - Math.round(scrollTop) <= clientHeight) more();
    }
    const more = async () => {
        setLoading(true);
        const { data } = await API(next);
        console.log(data)
        setDataAnimes(prev => [...prev, ...data.data])
        setNext(data.links.next)

        setLoading(false);
    }
    return (
        <DivInit>
            <Nav></Nav>
            <DivLeft>
                <Trend />

            </DivLeft>
            <DivCont onScroll={handleScroll}>
                {dataAnimes.map((item, index) => (
                    <AnimeBox key={index}
                        name={item.attributes.titles.en ? item.attributes.titles.en : item.attributes.titles.en_jp}
                        image={item.attributes.posterImage.large}
                        url={item.links.self} />
                ))}

            </DivCont>


        </DivInit>
    )
}

export default Init
