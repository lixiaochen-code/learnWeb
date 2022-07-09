import { showMessage } from "@/utils";
import response from "./response";

async function getBanner(){
    const resp = await response.get("/api/banner"); 
    return resp;
}
getBanner().then(data=>{
    console.log(data);
})