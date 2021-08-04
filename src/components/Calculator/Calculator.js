import React, { useState } from 'react'
import '../fonts/Calculator.ttf'

import {
    DivCenter,
    DivButtons,
    Buttons,
    DivDisplay,
    PP,

} from './CalculatorStyled'

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [Result, setResult] = useState(0);
    const [sent, setSent] = useState(false);
    const [operation, setOperation] = useState('');
    const [decimal, setDecimal] = useState(0);
    var fontSize = 50;
    
    const numberOne = n => num1?setNum1(Number(num1)*10 + Number(n)):setNum1(n); 
    const numberTwo = n => num2?setNum2(Number(num2)*10 + Number(n)):setNum2(n); 
    const Sent = n => !sent? numberOne(n):numberTwo(n);
    function Equals() {
        var res=0;
        if(operation === '+')res=Number(num1)+Number(num2);
        if(operation === '-')res=Number(num1)-Number(num2);
        if(operation ==='x')res=Number(num1)*Number(num2);
        if(operation === '/')num2? res=Number(num1)/Number(num2):res='Error';
        setResult(res);
    }
    function restart() {
        setNum1(0);
        setNum2(0);
        setResult(0);
        setSent(false);
        setOperation('');
        setDecimal(0);
    }
    return (
        <DivCenter size={{w:400,h:600}}>
            <DivDisplay area={'di'}>
                <PP fSize={fontSize}>
                    {Result?Result: !sent?num1:num2}
                </PP>
            </DivDisplay>
            <DivButtons area={'off'}>
                <Buttons fSize={fontSize}
                onClick={restart}>
                    off
                </Buttons>
            </DivButtons>
            <DivButtons area={'sqrt'}>
                <Buttons fSize={fontSize}>
                √
                </Buttons>
            </DivButtons>
            <DivButtons area={'per'}>
                <Buttons fSize={fontSize}>
                    %
                </Buttons>
            </DivButtons>
            <DivButtons area={'div'}>
                <Buttons fSize={fontSize}
                onClick={()=>{
                    setSent(true);
                    setOperation('/');
                }}>
                    /
                </Buttons>
            </DivButtons>
            <DivButtons area={'n7'}>
                <Buttons fSize={fontSize}
                onClick={()=>Sent(7)}>
                    7
                </Buttons>
            </DivButtons>
            <DivButtons area={'n8'}>
            <Buttons fSize={fontSize}
             onClick={()=>Sent(8)}>
                    8
                </Buttons>
            </DivButtons>
            <DivButtons area={'n9'}>
            <Buttons fSize={fontSize}
             onClick={()=>Sent(9)}>
                    9
                </Buttons>
            </DivButtons>
            <DivButtons area={'x'}>
            <Buttons fSize={fontSize}
            onClick={()=>{
                setSent(true);
                setOperation('x');
            }}>
                    X
                </Buttons>
            </DivButtons>
            <DivButtons area={'n4'}>
            <Buttons fSize={fontSize}
             onClick={()=>Sent(4)}>
                    4
                </Buttons>
            </DivButtons>
            <DivButtons area={'n5'}>
            <Buttons fSize={fontSize}
             onClick={()=>Sent(5)}>
                    5
                </Buttons>
            </DivButtons>
            <DivButtons area={'n6'}>
            <Buttons fSize={fontSize}
             onClick={()=>Sent(6)}>
                    6
                </Buttons>
            </DivButtons>
            <DivButtons area={'n-'}>
            <Buttons fSize={fontSize}
            onClick={()=>{
                setSent(true);
                setOperation('-');
            }}>
                    -
                </Buttons>
            </DivButtons>
            <DivButtons area={'n1'}>
            <Buttons fSize={fontSize}
             onClick={()=>Sent(1)}>
                    1
                </Buttons>
            </DivButtons>
            <DivButtons area={'n2'}>
            <Buttons fSize={fontSize}
             onClick={()=>Sent(2)}>
                    2
                </Buttons>
            </DivButtons>
            <DivButtons area={'n3'}>
            <Buttons fSize={fontSize}
             onClick={()=>Sent(3)}>
                    3
                </Buttons>
            </DivButtons>
            <DivButtons area={'plus'}>
            <Buttons fSize={fontSize}
            onClick={()=>{
                setSent(true);
                setOperation('+');
            }}>
                +
                </Buttons>
            </DivButtons>
            <DivButtons area={'n0'}>
            <Buttons fSize={fontSize}
             onClick={()=>Sent(0)}>
                    0
                </Buttons>
            </DivButtons>
            <DivButtons area={'dot'}>
            <Buttons fSize={fontSize}>
                    .
                </Buttons>
            </DivButtons>
            <DivButtons area={'equal'}>
            <Buttons fSize={fontSize}
            onClick={Equals}>
                    =
                </Buttons>
            </DivButtons>
        </DivCenter>
    )
}

export default Calculator
