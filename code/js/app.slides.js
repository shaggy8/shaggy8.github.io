document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_1 = {
    elements: {
      painContent: "#s1_1_2"
    },
    onEnter: function(slideElement) {
      presentation.bgStyle('bepanthen', 'bg_s1_', 19);
      presentation.prev('empty');
    },
    onExit: function(slideElement) {}
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_10 = {
    elements: {
      painContent: "#s1_10_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_8', "s1_10");
      presentation.popup('popup__s1_10--0');
      $('.s1_10__btn--info').click(function(e) {
        $(e.target).siblings('.s1_10__info-block').show();
      });

      $('.s1_10__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
    },
    onExit: function(slideElement) {
      $('.s1_10__btn--info').unbind('click');
      $('.s1_10__info-block__close-button').unbind('click');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_11 = {
    elements: {
      painContent: "#s1_11_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_9', "s1_11");
      $('.s1_11__btn--info').click(function(e) {
        $(e.target).siblings('.s1_11__info-block').show();
      });

      $('.s1_11__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
    },
    onExit: function(slideElement) {
      $('.s1_11__btn--info').unbind('click');
      $('.s1_11__info-block__close-button').unbind('click');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_12 = {
    elements: {
      painContent: "#s1_12_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_9', "s1_12");
      $('.s1_12__btn--info').click(function(e) {
        $(e.target).siblings('.s1_12__info-block').show();
      });

      $('.s1_12__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
    },
    onExit: function(slideElement) {
      $('.s1_12__btn--info').unbind('click');
      $('.s1_12__info-block__close-button').unbind('click');
    }
  };

});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_13 = {
    elements: {
      painContent: "#s1_13_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_9', "s1_13");
      var $textBlock = $('.s1_13__info-block .info-block__text');
      var textBlockHeight = parseFloat($textBlock.css('height'));
      var textBlockWrapperHeight = parseFloat($('.s1_13__info-block .info-block__text-wrapper').css('height'));
      var textBlockTopScrolled = textBlockWrapperHeight - textBlockHeight;

      $('.s1_13__btn--1').click(function(e) {
        var textBlockTop = parseFloat($textBlock.css('top'));
        if (textBlockTop === 0) return;
        $textBlock.css('top', 0);
      });

      $('.s1_13__btn--2').click(function(e) {
        var textBlockTop = parseFloat($textBlock.css('top'));
        if (textBlockTop === textBlockTopScrolled) return;
        $textBlock.css('top', textBlockTopScrolled);
      });
    },
    onExit: function(slideElement) {
      $('.s1_13__btn--1').unbind('click');
      $('.s1_13__btn--2').unbind('click');
    }
  };

});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_14 = {
    elements: {
      painContent: "#s1_14_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_10', "s1_14");
      var $textBlock = $('.s1_14__info-block--1 .info-block__text');
      var textBlockHeight = parseFloat($textBlock.css('height'));
      var textBlockWrapperHeight = parseFloat($('.s1_14__info-block--1 .info-block__text-wrapper').css('height'));
      var textBlockTopScrolled = textBlockWrapperHeight - textBlockHeight;
      var amountOfScrolls = 2;

      $('.s1_14__btn--1').click(function(e) {
        var textBlockTop = parseFloat($textBlock.css('top'));
        if (textBlockTop === 0) {
          return;
        } else if (textBlockTop >= textBlockTopScrolled / amountOfScrolls) {
          $textBlock.css('top', 0);
        } else {
          $textBlock.css('top', function (index, value) {
            return (parseFloat(value) - textBlockTopScrolled / amountOfScrolls);
          });
        }
      });

      $('.s1_14__btn--2').click(function(e) {
        var textBlockTop = parseFloat($textBlock.css('top'));
        if (textBlockTop === textBlockTopScrolled) {
          return;
        } else if (textBlockTop <= textBlockTopScrolled / amountOfScrolls * (amountOfScrolls - 1)) {
          $textBlock.css('top', textBlockTopScrolled);
        } else {
          $textBlock.css('top', function (index, value) {
            return (parseFloat(value) + textBlockTopScrolled / amountOfScrolls);
          });
        }
      });

      $('.s1_14__btn--info').click(function(e) {
        $(e.target).siblings('.s1_14__info-block--2').show();
      });

      $('.s1_14__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
    },
    onExit: function(slideElement) {
      $('.s1_14__btn--1').unbind('click');
      $('.s1_14__btn--2').unbind('click');
      $('.s1_14__btn--info').unbind('click');
      $('.s1_14__info-block__close-button').unbind('click');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_15 = {
    elements: {
      painContent: "#s1_15_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_10', "s1_15");

      $('.s1_15__btn--1').click(function(e) {
        $(e.target).siblings('.s1_15__info-block--2').show();
      });

      $('.s1_15__btn--info').click(function(e) {
        $(e.target).siblings('.s1_15__info-block--3').show();
      });

      $('.s1_15__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
    },
    onExit: function(slideElement) {
      $('.s1_15__btn--1').unbind('click');
      $('.s1_15__btn--info').unbind('click');
      $('.s1_15__info-block__close-button').unbind('click');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_16 = {
    elements: {
      painContent: "#s1_16_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_10', "s1_16");

      $('.s1_16__btn--info').click(function(e) {
        $(e.target).siblings('.s1_16__info-block').show();
      });

      $('.s1_16__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
    },
    onExit: function(slideElement) {
      $('.s1_16__btn--info').unbind('click');
      $('.s1_16__info-block__close-button').unbind('click');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_17 = {
    elements: {
      painContent: "#s1_17_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_11', "s1_17");
    },
    onExit: function(slideElement) {}
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_18 = {
    elements: {
      painContent: "#s1_18_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_11', "s1_18");
      var $growingBlock = $('.s1_18__growing_block');
      var growingStage = 0;
      var growing = setInterval(function() {
        switch (growingStage) {
          case 0:
            $growingBlock.css('height', '76px');
            growingStage++;
            break;
          case 1:
            $growingBlock.css('height', '156px');
            growingStage++;
            break;
          case 2:
            $growingBlock.css('height', '387px');
            growingStage++;
            clearInterval(growing);
        }
      }, 4000);
    },
    onExit: function(slideElement) {
      $('.s1_18__growing_block').css('height', 0);
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_19 = {
    elements: {
      painContent: "#s1_19_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_12', "s1_19");
    },
    onExit: function(slideElement) {}
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_2 = {
    elements: {
      painContent: "#s1_2_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_2', "s1_2");

      var $slideBlock = $('#s1_2');
      var $roundSlider = $slideBlock.find('.s1_2__roundslider');
      var $dial = $slideBlock.find('.s1_2__rs_number');
      var $childrenAmount = $slideBlock.find('.s1_2__children-amount_block');
      var $buttonAnswer = $slideBlock.find('.s1_2__btn-answer');
      var $buttonWrapper = $slideBlock.find('.s1_2__button_wrapper');
      var $buttonNumber = $buttonWrapper.find('.s1_2__btn-number');
      var roundSliderProcessing = function() {
        $childrenAmount.html(function() {
          var children;
          var val = $roundSlider.roundSlider("option", "value");
          var lastNumberOfVal = +val.toString().substr(-2);

          if (lastNumberOfVal > 1 && lastNumberOfVal < 5) {
            children = ' ребенка';
          } else if (lastNumberOfVal === 1) {
            children = ' ребенок';
          } else {
            children = ' детей';
          }

          return (val + children);
        });
      };

      $roundSlider.roundSlider({
        radius: 225,
        width: 69,
        handleSize: 45,
        drag: roundSliderProcessing,
        change: roundSliderProcessing,
        stop: function() {
          $slideBlock.find('.rs-handle').hide();
          $roundSlider.roundSlider('disable');
          $childrenAmount.css('z-index', 101);
          $buttonWrapper.hide();
          $buttonAnswer.show();
        }
      });

      $buttonWrapper.click(function(event) {
        var $target = $(event.target);

        if (!$target.is('button') || $target.hasClass('s1_2__btn-number--active')) return;

        $buttonNumber.removeClass('s1_2__btn-number--active');
        $target.addClass('s1_2__btn-number--active');

        var maxVal;
        var partOfDial;

        switch ($target.html()) {
          case '10':
            maxVal = 100;
            partOfDial = '0';
            break;
          case '100':
            maxVal = 1000;
            partOfDial = '00';
            break;
          case '1000':
            maxVal = 10000;
            partOfDial = '000';
            break;
          case '10.000':
            maxVal = 100000;
            partOfDial = '0000';
            break;
        }

        $roundSlider.roundSlider("option", "max", maxVal);

        $dial.each(function(index, elem) {
          if (index === 0) return;
          $(elem).html(index + partOfDial);
        });
      });

      $buttonAnswer.click(function() {
        $childrenAmount.hide();
        $('.s1_2__answer_block').show();
      });
    },
    onExit: function(slideElement) {
      var $slideBlock = $('#s1_2');
      var $roundSlider = $slideBlock.find('.s1_2__roundslider');
      var $dial = $slideBlock.find('.s1_2__rs_number');
      var $childrenAmount = $slideBlock.find('.s1_2__children-amount_block');
      var $buttonAnswer = $slideBlock.find('.s1_2__btn-answer');
      var $buttonWrapper = $slideBlock.find('.s1_2__button_wrapper');
      var $buttonNumber = $buttonWrapper.find('.s1_2__btn-number');

      $buttonWrapper.unbind('click');
      $buttonAnswer.unbind('click');
      $('.s1_2__answer_block').hide();
      $childrenAmount.show();
      $childrenAmount.css('z-index', 5);

      $roundSlider.roundSlider('destroy');
      $dial.each(function(index, elem) {
        if (index === 0) return;
        $(elem).html(index + '0');
      });
      $childrenAmount.html('0 детей');
      $buttonWrapper.show();
      $buttonAnswer.hide();
      $buttonNumber
        .removeClass('s1_2__btn-number--active')
        .eq(0)
        .addClass('s1_2__btn-number--active');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_3 = {
    elements: {
      painContent: "#s1_3_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_2', "s1_3");
      $('.s1_3__resizable-block').resizable({
        aspectRatio: true,
        handles: 's',
        minHeight: 65,
        maxHeight: 280,
        resize: function(event, ui) {
          ui.position.top = ui.originalPosition.top - (ui.size.width - ui.originalSize.width) / 4.62;
          ui.position.left = ui.originalPosition.left - (ui.size.height - ui.originalSize.height) / 1.91;
        }
      });
    },
    onExit: function(slideElement) {
      $('.s1_3__resizable-block').resizable("destroy");
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_4 = {
    elements: {
      painContent: "#s1_4_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_2', "s1_4");
    },
    onExit: function(slideElement) {}
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_5 = {
    elements: {
      painContent: "#s1_5_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_3', "s1_5");
      $('.s1_5__wound').click(function(e) {
        var $target = $(e.target);
        if (!$target.is('button') || $target.hasClass('s1_5__btn--active')) return;

        $('.s1_5__btn').removeClass('s1_5__btn--active');
        $target.addClass('s1_5__btn--active');
        $('.s1_5__medications').hide();
        $('.s1_5__pharmaceutical-form').hide();

        switch ($target.index()) {
          case 0:
            $('.s1_5__medications--1').show();
            break;
          case 1:
            $('.s1_5__medications--2').show();
            break;
          case 2:
            $('.s1_5__medications--3').show();
        }

        $('.s1_5__pharmaceutical-form--placeholder').show();
      });


      $('.s1_5__medications').click(function(e) {
        var $target = $(e.target);
        if (!$target.is('button') || $target.hasClass('s1_5__btn--active')) return;

        var $targetParent = $target.closest('.s1_5__info-block');

        $targetParent.find('.s1_5__btn').removeClass('s1_5__btn--active');
        $('.s1_5__pharmaceutical-form').find('.s1_5__btn').removeClass('s1_5__btn--active');
        $target.addClass('s1_5__btn--active');
        $('.s1_5__pharmaceutical-form').hide();

        if ($targetParent.hasClass('s1_5__medications--1')) {
          $('.s1_5__pharmaceutical-form--1').show();
        } else if ($targetParent.hasClass('s1_5__medications--2')) {
          $('.s1_5__pharmaceutical-form--2').show();
        } else if ($targetParent.hasClass('s1_5__medications--3')) {
          $('.s1_5__pharmaceutical-form--3').show();
        }
      });

      $('.s1_5__pharmaceutical-form').click(function(e) {
        var $target = $(e.target);
        if (!$target.is('button') || $target.hasClass('s1_5__btn--active')) return;

        var $targetParent = $target.closest('.s1_5__info-block');

        $targetParent.find('.s1_5__btn').removeClass('s1_5__btn--active');
        $target.addClass('s1_5__btn--active');
      });
    },
    onExit: function(slideElement) {
      $('.s1_5__wound').unbind('click');
      $('.s1_5__medications').unbind('click');
      $('.s1_5__pharmaceutical-form').unbind('click');
    }
  };
});
document.addEventListener('presentationInit', function() {

  var slide = app.slide.s1_6 = {
    elements: {
      painContent: "#s1_6_2"
    },
    onEnter: function() {
      presentation.prev('bepanthen', 'bepanthen_4', "s1_6");
      presentation.popup('popup__s1_6--0');
      $('.s1_6__btn--info').click(function(e) {
        $(e.target).siblings('.s1_6__info-block').show();
      });

      $('.s1_6__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
    },
    onExit: function() {
      $('.s1_6__btn--info').unbind('click');
      $('.s1_6__info-block__close-button').unbind('click');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_7 = {
    elements: {
      painContent: "#s1_7_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_5', "s1_7");

      $('.s1_7__btn--info').click(function(e) {
        $(e.target).siblings('.s1_7__info-block').show();
      });
      $('.s1_7__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
    },
    onExit: function(slideElement) {
      $('.s1_7__btn--info').unbind('click');
      $('.s1_7__info-block__close-button').unbind('click');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_8 = {
    elements: {
      painContent: "#s1_8_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_6', "s1_8");
      var $infoBlock = $('.s1_8__info-block--2');

      $('.s1_8__draggable').draggable();

      $('.s1_8__droppable--0').droppable({
        tolerance: 'touch',
        drop: function(event, ui) {

          ui.draggable.css({
            top: 124,
            left: 473
          });

          $('.s1_8__info-block').hide();
          $(this).closest('.bg').css('background-image', 'url("content/img/bepanthen/bepanthen_8.jpg"');
          $infoBlock = $('.s1_8__info-block--2');
        }
      });

      $('.s1_8__droppable--1').droppable({
        drop: function(event, ui) {

          ui.draggable.css({
            top: 341,
            left: 215
          });

          $('.s1_8__info-block').hide();
          $(this).closest('.bg').css('background-image', 'url("content/img/bepanthen/bepanthen_8_1.jpg"');
          $infoBlock = $('.s1_8__info-block--3');
        }
      });

      $('.s1_8__droppable--2').droppable({
        drop: function(event, ui) {

          ui.draggable.css({
            top: 341,
            left: 470
          });

          $('.s1_8__info-block').hide();
          $(this).closest('.bg').css('background-image', 'url("content/img/bepanthen/bepanthen_8_2.jpg"');
          $infoBlock = $('.s1_8__info-block--4');
        }
      });

      $('.s1_8__droppable--3').droppable({
        drop: function(event, ui) {

          ui.draggable.css({
            top: 352,
            left: 662
          });

          $('.s1_8__info-block').hide();
          $(this).closest('.bg').css('background-image', 'url("content/img/bepanthen/bepanthen_8_3.jpg"');
          $infoBlock = $('.s1_8__info-block--5');
        }
      });

      $('.s1_8__btn--info-1').click(function(e) {
        $('.s1_8__info-block--1').show();
      });

      $('.s1_8__btn--info-2').click(function(e) {
        $infoBlock.show();
      });

      $('.s1_8__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });

    },
    onExit: function(slideElement) {
      $('#s1_8_2').css('background-image', 'url("content/img/bepanthen/bepanthen_8.jpg"');
      $('.s1_8__btn--info-1').unbind('click');
      $('.s1_8__btn--info-2').unbind('click');
      $('.s1_8__info-block__close-button').unbind('click');
      $('.s1_8__draggable').draggable('destroy');
      $('.s1_8__draggable').css({
        top: 124,
        left: 473
      });
      $('.s1_8__droppable--0').droppable('destroy');
      $('.s1_8__droppable--1').droppable('destroy');
      $('.s1_8__droppable--2').droppable('destroy');
      $('.s1_8__droppable--3').droppable('destroy');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_9 = {
    elements: {
      painContent: "#s1_9_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('bepanthen', 'bepanthen_7', "s1_9");
      $('.s1_9__draggable').draggable();

      $('.s1_9__droppable').droppable({
        tolerance: 'touch',
        drop: function(event, ui) {
          var draggableCoordinates = [{
            top: 237,
            left: 222,
            zIndex: 100
          }, {
            top: 237,
            left: 445,
            zIndex: 100
          }, {
            top: 237,
            left: 668,
            zIndex: 100
          }, ];

          $('.s1_9__draggable').each(function(index, elem) {
            $(elem).css(draggableCoordinates[index]);
          });

          ui.draggable.css({
            top: 440,
            left: 444,
            zIndex: 10
          });

          if (ui.draggable.hasClass('s1_9__draggable--1')) {
            $(this).closest('.bg').css('background-image', 'url("content/img/bepanthen/bepanthen_9_1.jpg"');
          } else if (ui.draggable.hasClass('s1_9__draggable--2')) {
            $(this).closest('.bg').css('background-image', 'url("content/img/bepanthen/bepanthen_9_2.jpg"');
          } else if (ui.draggable.hasClass('s1_9__draggable--3')) {
            $(this).closest('.bg').css('background-image', 'url("content/img/bepanthen/bepanthen_9_3.jpg"');
          }

        },
      });

      $('.s1_9__btn--info').click(function(e) {
        $('.s1_9__info-block').show();
      });

      $('.s1_9__info-block__close-button').click(function(e) {
        $(e.target).parent().hide();
      });
    },
    onExit: function(slideElement) {
      $('#s1_9_2').css('background-image', 'url("content/img/bepanthen/bepanthen_9.jpg"');
      var draggableCoordinates = [{
        top: 237,
        left: 222,
        zIndex: 100
      }, {
        top: 237,
        left: 445,
        zIndex: 100
      }, {
        top: 237,
        left: 668,
        zIndex: 100
      }, ];

      $('.s1_9__draggable').each(function(index, elem) {
        $(elem).css(draggableCoordinates[index]);
      });

      $('.s1_9__draggable').draggable('destroy');
      $('.s1_9__droppable').droppable('destroy');
      $('.s1_9__btn--info').unbind('click');
      $('.s1_9__info-block__close-button').unbind('click');
    }
  };
});
