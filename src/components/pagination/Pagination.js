import React, { useEffect, useState } from 'react';


import {
    Pages
} from "./paginationStyles";

export const Pagination = (props) => {
    const [pa, setpa] = useState([]);
    var number = [];
    var seven = [];

    const num = (num) => {

        seven = [];
        for (var i = num; i < num + 7; i++) seven.push(i);
        seven.map((item, index) => {
            return (
                console.log(item)
            )
        })


    }
    for (var i = 0; i < 7; i++)seven.push((props.pag + i || 0) * 20);
    for (var i = 0; i < 56; i++)number.push(i * 20);
    const url = (page) => `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`;

    return (
        <div>
            {number.map((item, index) => {
                return (
                    <>
                        {index === props.page ? <Pages key={`${item}+${index}`} onClick={() => props.func(url(item), index)}>{index + 1}</Pages>
                            : <Pages prim key={`${item}+${index}`} onClick={() => props.func(url(item), index)}>{index + 1}</Pages>}
                    </>
                )
            })}
            <br />
            {seven.map((item, index) => {
                return (
                    <>

                        {index === props.page ? <Pages key={`${item}+${index}`} onClick={() => { props.func(url(item), index); num(index); }}>{index + 1}</Pages>
                            : <Pages prim key={`${item}+${index}`} onClick={() => { props.func(url(item), index); num(index); }}>{index + 1}</Pages>}
                    </>
                )
            })}

        </div>
    )
}
