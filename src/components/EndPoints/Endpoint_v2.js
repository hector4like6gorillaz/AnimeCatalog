import axios from "axios";


const URL = `${process.env.REACT_APP_POKEDEX_BAE_URL}`;
export async function envAPI(props) {
    try {
        const response = await axios({
            url: `${URL}${props}`,
            method: `GET`
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}


export async function API(props) {
    try {
        const response = await axios({
            url: `${props}`,
            method: `GET`
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const ApiPost = async (props, dat) => {
    try {
        const resp = await axios.post(`${URL}${props}`, dat);
        return resp;
    } catch (err) {
        return err;
    }
};

export async function envApiDirToken(props, tk) {
    try {
        const resp = await axios.get(`${URL}${props}`, {
            headers: {
                'Authorization': `Bearer ${tk}`
            }
        })
        return resp;
    }
    catch (e) {
        console.log(e)
    }

}