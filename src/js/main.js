"use strict";
//=================================================
// Простенький код для динамического подключения CSS файлов согласно странице
//=================================================

var path;
path = window.location.href;
path = path.split('.html').slice(0, -1).join('.').slice(path.lastIndexOf("/")).slice(1);
console.log(path);
if (path != '') document.querySelector('head').innerHTML += '<link rel="stylesheet" href="./css/' + path + '.min.css">';
else document.querySelector('head').innerHTML += '<link rel="stylesheet" href="./css/index.min.css">';

//=================================================
// Простая менюшка для бургера
// (работает при наведении курсором и когда его убрать с меню)
//=================================================

$(document).ready(function () {
    $('#menu').mouseenter(function () {
        $('.mobile-menu').find('.hidden').addClass('show').removeClass('hidden');
    });
    $('.mobile-menu').mouseleave(function () {
        $('.mobile-menu').find('.show').addClass('hidden').removeClass('show');
    });
});

//=================================================
// Подключение стандартных фишек Bootstrap 4
//=================================================

$('.dropdown-toggle').dropdown();
$('[data-toggle="tooltip"]').tooltip();
$('#myCollapsible').collapse({
    toggle: false
});

//=================================================
// Функции отображения деталей заказа на странице моих заказов
//=================================================

function OpenDetails() {
    $(".order_info").addClass('display_none');
    $(".order_details").removeClass('display_none');
}

function CloseDetails() {
    $(".order_details").addClass('display_none');
    $(".order_info").removeClass('display_none');

}

//=================================================
//=================================================