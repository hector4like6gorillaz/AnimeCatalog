import React, { useEffect, useState } from 'react'
import { envAPI } from '../EndPoints/Endpoint_v2'
import{
    DivBox,
DivImg,
Img,
PP,

} from './animeStyled'
const AnimeBox = (props) => {
const [title, setTitle] = useState(props.name)

const [img, setImg] = useState(props.image)
    

    return (
        <DivBox>
            <DivImg>
                <Img alt='cover' src={img}/>
            </DivImg>
        <PP>{title}</PP>
        </DivBox>
    )
}

export default AnimeBox
