~function () {
    var winW = document.documentElement.clientWidth || document.body.clientWidth;
    var desW = 640;
    var htmlFont = winW/desW*100;
    if(winW >= desW){
        $('.section').css({
            width: desW,
            margin: '0 auto'
        });
        window.htmlFont = 100;
        return;
    }
    window.htmlFont = htmlFont;
    document.documentElement.style.fontSize = htmlFont + 'px';
}();
new Swiper('.swiper-container',{
    direction: 'horizontal',
    pagination:'.swiper-pagination',
    loop: true
});
/*--tab--*/
var tabRender = (function () {
    var $tabPlain = $.Callbacks(),

    $list = $('.nav').children(),$divs = $('.tab').children();
    var $songList = $('.song_list');
    $tabPlain.add(function () {
        function tab(index) {
            for(var i = 0; i< $list.length; i++){
                $list[i].className = '';
                $divs.eq(i).hide();
            }
            $list[index].className = 'active';
            $divs.eq(index).show();
        }
        for(var i = 0 ;i < $list.length; i++){
            $list[i].index = i;
            $list[i].onclick = function () {
                tab(this.index);
            }
        }
    });
    $tabPlain.add(function () {
        $songList.on('click',function (e) {
            //console.log(e.target);
            if(e.target.nodeName.toLowerCase() === 'li'){
                window.location = 'songList.html';
            }
        })
    });
    return {
        init:function () {
            $tabPlain.fire();
        }
    }
})();
tabRender.init();
