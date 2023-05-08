import axios from "axios";

const getWidgetData = async (id) => {
  try {
    const result = await axios.get(
      "https://api.astraotoshop.com/v1/masterdata-service/public/widget/active"
    );

    return result.data;
  } catch (error) {
    return error;
  }
};

export default {
  getWidgetData,
};
