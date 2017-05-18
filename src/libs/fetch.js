import CONFIG from './config';
const Fetch = {
    get:(url,successCallback=defaultCallback,errorCallback=defaultCallback)=>{
        fetch(reDefineUrl(url),{
            method:"GET",
        }).then((resp)=>resp.json()).then((datas)=>successCallback(datas)).catch((error)=>errorCallback(error));
    },
    post:(url,data,successCallback=defaultCallback,errorCallback=defaultCallback)=>{
        fetch(reDefineUrl(url),{
            method:"POST",
            headers:myHeaders,
            body:formatData(data)
        }).then((resp)=>resp.json()).then((datas)=>callback(datas)).catch((error)=>errorCallback(error));
    },
    fetch:(url,method,data,successCallback=defaultCallback,errorCallback=defaultCallback)=>{
        fetch(reDefineUrl(url),{
            method:method,
            headers:myHeaders,
            body:method=="GET"||method=="get"?null:formatData(data)
        }).then((resp)=>resp.json()).then((datas)=>successCallback(datas)).catch((error)=>errorCallback(error));
    }
}

let myHeaders = new Headers();
myHeaders.append('Content-Type','application/x-www-form-urlencoded');

function reDefineUrl(url){
    if(url.substr(0,4) == "http"){
        return url
    }else{
        if(url.substr(0,1) !== "/"){
            return CONFIG.url + "/" + url
        }else{
            return CONFIG.url + url
        }
    }
}
function defaultCallback(message){
    console.log(message);
}
function formatData(data){
    let newDataArr = [];
    for(let attr in data){
        if(data.hasOwnProperty(attr)){
            newDataArr.push(attr+"="+data[attr]);
        }
    }
    return newDataArr.join("&");
}

export default Fetch;