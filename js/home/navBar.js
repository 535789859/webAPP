/**
 * 导航条
 * Created by DELL- on 2016/12/22.
 */
(function () {

    function NavBar(url,superView,getItemsCallback) {

        this.superView=superView;

        this.showNavBar(url,getItemsCallback);

        this.items=[];

        HTTPClient.call(this);

    }

    NavBar.prototype=new HTTPClient();

    NavBar.prototype.showNavBar=function (url,getItemsCallback) {

        this.navBar=$("<ul class='nav-container'></ul>");
        this.superView.append(this.navBar);
        var self=this;
        this.getJson(url,function (result) {
            console.log(result);
            if(!result){
                console.log("没有获取到数据");
                return;
            }
            var dataList=$($.parseJSON(result));/*json字符串转化json对象*/
            console.log($.parseJSON(result));/*把json字符串转成盛放json对象的数组*/
            console.log(dataList);
            dataList.each(function () {
                var item=new NavBarItem(this);
                self.navBar.append(item.li);

                // item.li.click(function () {
                //     alert(ite
                //
                // m.info.classID);
                // });
                self.items.push(item);

            });
            if(getItemsCallback){/*防止没加载完数据 就去获得数组的情况*/
                getItemsCallback(self.items);
            }
        });

    };

    function NavBarItem(info) {

        this.info=info;
        this.li=$("<li>"+info.className+"</li>")
    }

    window.NavBarItem=NavBarItem;
    window.NavBar=NavBar;

})();