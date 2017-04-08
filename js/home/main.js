/**
 * Created by DELL- on 2016/12/22.
 */
(function () {

    function init() {
        showContent("1");
        var navBar=new NavBar("http://datainfo.duapp.com/shopdata/getclass.php",$(".navBar"),function (items) {
            $(items).each(function () {
                var self=this;
                this.li.click(function () {
                    // alert(self.info.classID)
                    showContent(self.info.classID);
                })
            });
        });
    }

    function showContent(classID) {
        new GoodsListView("http://datainfo.duapp.com/shopdata/getGoods.php",{classID:classID},$(".main-container"));
    }

    init();

})();