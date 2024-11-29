import axios from "axios";

const getWidgetData = async(id)=>{
    try {
<<<<<<< Updated upstream
        const result = await axios.get("https://mocki.io/v1/2fff17dd-1b88-48aa-9849-4a66a668d1b4");;
=======
        const result = await axios.get("https://api.astraotoshop.com/v1/masterdata-service/public/widget/active");
>>>>>>> Stashed changes
        return result.data;    
    } catch (error) {
        return error;
    }
}

export default {
    getWidgetData,
}