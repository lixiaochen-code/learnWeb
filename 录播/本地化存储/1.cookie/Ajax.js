function Ajax(url,method,callback){
    var xhr = new XMLHttpRequest();
    xhr.open(method,url,false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            callback && callback(data);
        }
    }
    xhr.send();
}