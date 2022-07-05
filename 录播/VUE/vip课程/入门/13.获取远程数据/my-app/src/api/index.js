import axios from "axios";

async function getData(url) {
    const resp = await axios.get(url);
    return resp;
}
getData("/api/v2/za/logs/batch").then(data=>{
    console.log(data);
},err=> {
    console.log(err);
})