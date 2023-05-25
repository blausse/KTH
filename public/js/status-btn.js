$(function(){
    $('.status .menu li').click(function(){
        const idx = $(this).index();
        $('.content>div').eq(idx).show()
        $('.content>div').not($('.content>div').eq(idx)).hide()
    })
})