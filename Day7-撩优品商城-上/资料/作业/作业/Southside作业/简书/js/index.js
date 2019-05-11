$(function () {
    $('#search').focus(function () {
        $(this).siblings('.tip').show();
    });

    $('.main-rgt>a').hover(function () {
        $(this).children('.big-code').toggle();
    });

    var fragment = document.createDocumentFragment();
    var $ctr = $('.main-lft-img');
    var $ul = $('.main-lft-img-option');
    var $box = $('.main-lft-img-box');
    var unitWidth = $box.children()[0].offsetWidth;
    var index = 0, timer;
    for (var i = 0, len = $box.children().length; i < len; i++) {
        var li = document.createElement('li');
        fragment.appendChild(li);
    }
    $ul.append(fragment);
    $ul.children().eq(0).attr('class', 'current');
    $box.children().eq(0).css('left', 0);
    timer = setInterval(function () {
        $box.children().eq(index).animate({left: -unitWidth}, 500);
        index++;
        if (index > $box.children().length - 1) {
            index = 0;
        }
        $box.children().eq(index).css('left', unitWidth + 'px').animate({left: 0}, 500);
        $ul.children().eq(index - 1).removeClass('current').end().eq(index).addClass('current');
    }, 3000);
    $ctr.hover(function () {
        $('.main-lft-img span').show();
        clearInterval(timer);
    }, function () {
        $('.main-lft-img span').hide();
        timer = setInterval(function () {
            $box.children().eq(index).animate({left: -unitWidth}, 500);
            index++;
            if (index > $box.children().length - 1) {
                index = 0;
            }
            $box.children().eq(index).css('left', unitWidth + 'px').animate({left: 0}, 500);
            $ul.children().eq(index - 1).removeClass('current').end().eq(index).addClass('current');
        }, 3000);
    });
    $ul.click(function (e) {
        var i = $(e.target).index();
        if (i > -1) {
            if (i > index) {
                $box.children().eq(index).animate({left: -unitWidth}, 500);
                $box.children().eq(i).css('left', unitWidth + 'px').animate({left: 0}, 500);
                $ul.children().eq(index).removeClass('current').end().eq(i).addClass('current');
                index = i;
            } else if (i < index) {
                $box.children().eq(index).animate({left: unitWidth}, 500);
                $box.children().eq(i).css('left', -unitWidth + 'px').animate({left: 0}, 500);
                $ul.children().eq(index).removeClass('current').end().eq(i).addClass('current');
                index = i;
            }
        }
    });
    $ctr.children('span').click(function (e) {
        if (e.target.className === 'prev') {
            $box.children().eq(index).animate({left: unitWidth}, 500);
            index--;
            if (index < 0) {
                index = $box.children().length - 1;
            }
            $box.children().eq(index).css('left', -unitWidth + 'px').animate({left: 0}, 500);
            $ul.children().eq(index + 1).removeClass('current').end().eq(index).addClass('current');
        } else if (e.target.className === 'next') {
            $box.children().eq(index).animate({left: -unitWidth}, 500);
            index++;
            if (index > $box.children().length - 1) {
                index = 0;
            }
            $box.children().eq(index).css('left', unitWidth + 'px').animate({left: 0}, 500);
            $ul.children().eq(index - 1).removeClass('current').end().eq(index).addClass('current');
        }
    });

    $(window).scroll(function () {
        if (document.documentElement.scrollTop > 180) {
            $('.footer span').show();
        } else {
            $('.footer span').hide();
        }
    });
    $('.footer span').click(function () {
        $('html').animate({scrollTop: 0}, 500);
    })
});