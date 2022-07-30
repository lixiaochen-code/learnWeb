import { showMessage } from "@/utils";
import axios from "axios";
const ins = axios.create();
ins.interceptors.response.use(function(resp){
    if(resp.data.code !== 0) {
        showMessage(resp.data.msg,"error");
        return null;
    }
    return resp.data.data;
})
export default ins;