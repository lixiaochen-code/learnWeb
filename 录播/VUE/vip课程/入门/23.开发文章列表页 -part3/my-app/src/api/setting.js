import ins from "./response";
export default async function getData(){
    const resp = await ins.get("/api/setting");
    return resp;
}