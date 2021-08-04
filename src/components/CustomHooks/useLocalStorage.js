import { useState } from 'react';

//const [cont1, setcont1] = LocalStorage("valorsin", valorsin);
// declaramos la variable a utilizar tipo useState, le colocamos un nombre para
//que se identifique dentro del localstorage y el valor inicial
//listo de esta manera ya tenemos agregado una variable en el localstorage del navegador
export function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
}

//simplemente llamamos a la funcion y le agregamos el dato que queremos eliminar que debemos saber que existe
//en caso de no existir no sucedera nada

export function deleteLocalStorage(key) {
    try {
        window.localStorage.removeItem(key);
    }
    catch (error) {
        console.log(error);
    }
}

export function deleteAllLocalStorage() {
    try {
        window.localStorage.clear();
    }
    catch (error) {
        console.log(error);
    }
}
