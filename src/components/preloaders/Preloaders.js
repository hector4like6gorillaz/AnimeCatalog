import React from 'react';
import {
    Preloader1,
    Preloader2,
    Img,


} from "./PreloaderStyled";

const Preloaders = (props) => {

    //console.log(type);
    return (
        <>
            {props.type === 1 &&
                <Preloader1
                    dim={props.dimention}
                    duty={props.duration}
                    border={props.border}
                    cw={props.ccw}
                >
                </Preloader1>
            }
            {props.type === 2 &&
                <Preloader2
                    dim={props.dimention}
                    duty={props.duration}
                    border={props.border}
                    cw={props.ccw}
                >
                    <Img alt="" src={props.img} />
                </Preloader2>
            }
        </>
    )
}

export default Preloaders;
