import axios from "axios";

const getWidgetData = async(id)=>{
    try {
        const result = await axios.get("https://mocki.io/v1/2fff17dd-1b88-48aa-9849-4a66a668d1b4");;
        return result.data;    
    } catch (error) {
        return error;
    }
}

export default {
    getWidgetData,
}