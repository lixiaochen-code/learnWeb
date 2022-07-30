import ins from "./response";
export default async function getData(){
    const resp = await ins.get("/api/setting");
    return resp;
}
getData().then(data=>{
    console.log(data);
},err=>{
    console.log(err);
})