$(function () {
    "use strict";

    $('a[href="#"]').on('click', function (ev) {
        ev.preventDefault();
    });

    $('header nav [data-toggle="follow"]').on('click', function () {
        var $this = $(this);
        var $nav = $this.closest('nav');
        $nav.find('.page-links').toggleClass('hide');
        $nav.find('.social-links').toggleClass('hide');
        $this.toggleClass('active');
    });

    $('header nav .menu-icon').on('click', function () {
        $(this).toggleClass('active');
        $('#nav-links').toggleClass('open');
    });

    $('.social-share [data-toggle="share"]').on('click', function () {
        var $this = $(this);
        var $div = $this.closest('.social-share');
        $div.find('.share-links').toggleClass('hide');
        $this.toggleClass('active');
    });

});
