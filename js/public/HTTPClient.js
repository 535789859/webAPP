/**
 * 请求(get 方法)
 * Created by DELL- on 2016/12/22.
 */
(function () {

    function HTTPClient() {

    }

    HTTPClient.prototype.getJson=function (url,callback) {

        $.get(url).done(function (result) {

            if(callback){
                callback(result);
            }
        })

    };

    HTTPClient.prototype.getJsonp=function (url,data,callback) {
        $.post({
            url:url,
            dataType:"jsonp",
            data:data
        }).done(function (result) {
            if(callback){
                callback(result);
            }
        })
    };
    HTTPClient.prototype.getJson=function (url,data,callback) {
        $.post({
            url:url,
            dataTypes:"json",
            data:data
        }).done(function (result) {
            if(callback){
                callback(result)
            }
        })

    }
    HTTPClient.prototype.getJson=function (url,callback) {
        $.get(url).done(function (result) {
            callback(result)
        })
    }


    window.HTTPClient=HTTPClient;

})();