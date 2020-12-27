import axios from "axios";

export const getData = async (url, method)=>{
  try {
    let data = await axios({
      method,
      url
    })
    return data
  }catch (e) {
    return e
  }

}
