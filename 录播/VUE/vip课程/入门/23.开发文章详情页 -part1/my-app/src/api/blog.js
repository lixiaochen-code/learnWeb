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

export async function getBlog(blogid) {
    const resp = await response.get(`/api/blog/${blogid}`);
    return resp;
}

export async function getComments(blogid = -1, page = 1, limit = 10) {
    const resp = await response.get("/api/comment",{
        params:{
            blogid,
            page,
            limit
        }
    });
    return resp;
}

export async function postComment(commentInfo){
    const resp = await response.post("/api/comment",commentInfo);
    return resp;
}

