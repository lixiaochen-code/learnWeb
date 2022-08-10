import { showMessage } from "@/utils";
import response from "./response";

export async function getBlogs(page=1,limit=10,categoryid=-1){
    const resp = await response.get("/api/blog",{
        params:{
            page,
            limit,
            categoryid
        }
    });
    return resp;
}

export async function getBlogType(){
    const resp = await response.get("/api/blogtype");
    return resp;
}

