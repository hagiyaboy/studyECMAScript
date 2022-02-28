"use strict";

function success(pos){
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const acc = pos.coords.accuracy; 

    $("#loc").text(`緯度:${lat} 経度:${lon}`);
    $("#accuracy").text(acc);
}

function fail(error){
    alert("位置情報の取得に失敗しました。エラーコード:" + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);