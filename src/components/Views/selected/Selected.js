import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AnimeBox from '../../BoxView/Anime'
import { envAPI } from '../../EndPoints/Endpoint_v2'

import {
    DivPage,

} from './selectedStyled'

const Selected = (props) => {
    const id = useParams().id;
    const [loading, setDLoading] = useState(false);
    const [name, setName] = useState("");
    const [Img, setImg] = useState("");
    const [link, setLink] = useState("");

    const response = async page => envAPI(page);
    useEffect(() => {
        setDLoading(true);
        async function loadapi() {
            const { data } = await response(`anime/${id}`);
            console.log(data);

            setName(data.data.attributes.titles.en ? data.data.attributes.titles.en : data.data.attributes.titles.en_jp);
            setImg(data.data.attributes.posterImage.large);
            setLink(data.data.links.self);
            setDLoading(false);


        }
        loadapi();

    }, [])

    console.log(useParams().id);
    return (
        <DivPage>
            {!loading ?
                <AnimeBox
                    name={name}
                    image={Img}
                    url={link} />
                :
                {id}
            }
            
        </DivPage>
    )
}

export default Selected;
