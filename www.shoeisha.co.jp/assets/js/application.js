$(function () {
   
    // tooltip
    $('[data-toggle="tooltip"]').tooltip();
    
      var topBtn = $('#page-top');  
      topBtn.hide();
      //�X�N���[����100�ɒB������{�^���\��
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
        } else {
          topBtn.fadeOut();
        }
      });
      //�X�N���[�����ăg�b�v
        topBtn.click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 500);
        return false;
        });

 //�摜�Ȃ��� noimage �o��
  $('img.book').error(function() {
          //�u������
          $(this).attr({
              src: '/assets/img/noimage.gif'
          });
      });


});

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        'use strict';
        if (this == null) {
            throw new TypeError();
        }
        var n, k, t = Object(this),
            len = t.length >>> 0;

        if (len === 0) {
            return -1;
        }
        n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}

