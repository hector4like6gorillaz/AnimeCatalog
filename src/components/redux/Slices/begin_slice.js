import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "bi contador",
    initialState: {
        valor1: 5,
        valor2: 4,
        
    },
    reducers: {
        incremento: (state) => { state.valorsin += 1; },
        decremento: (state) => { state.valorsin -= 1; },
        incremento_dos: (state) => { state.valors_dos += 1; },
        decremento_dos: (state) => { state.valors_dos -= 1; },
    }
});

export const {incremento, decremento,incremento_dos, decremento_dos} = counterSlice.actions;

export default counterSlice.reducer;


