// toggleClass 對被選元素進行添加/刪除類的切換操作
$(document).ready(function () {
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
});