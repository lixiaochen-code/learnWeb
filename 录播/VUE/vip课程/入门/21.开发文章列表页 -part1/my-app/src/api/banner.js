import { showMessage } from "@/utils";
import response from "./response";

async function getBanner(){
    const resp = await response.get("/api/banner"); 
    return resp;
}
export default getBanner;