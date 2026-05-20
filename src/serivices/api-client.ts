import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'90f4fa98486f4a27a88aa14ee3bd7344'
    }
})