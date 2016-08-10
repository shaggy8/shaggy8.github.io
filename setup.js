(function(config) {



  // Creating our presentation and global namespace "app"
  window.app = new Presentation({
    globalElements: ['mainMenu'],
    type: 'json',
    manageMemory: true
  });


  // Initiate modules
  app.scroller = new Slidescroller();
  AutoMenu.prototype.hide = function() {
    this.ele.addClass("hidden");
  };
  AutoMenu.prototype.show = function() {
    this.ele.removeClass("hidden");
  };
  app.menu = new AutoMenu({
    attachTo: 'storyboard',

    links: {
      s1s: {
        title: ' ',
        classname: 'home'
      },

    }
  });

  app.data = new Data(true);
  //builder.checkIfNeedToLoadPresentation();
  // Initialize presentation
  app.init('s1s', 'front_page');

  app.analytics.init(config);
})();




// Prevent vertical bouncing of slides
document.ontouchmove = function(event) {
  event.preventDefault();
};

var ev = "touchend mouseup";

var nav_slide = 's8_1',
  nav_dir = 's8_1s';


var prew = {
  "bepanthen": {
    "bepanthen_1": ["s1_1"],
    "bepanthen_2": ["s1_2", "s1_3", "s1_4"],
    "bepanthen_3": ["s1_5"],
    "bepanthen_4": ["s1_6"],
    "bepanthen_5": ["s1_7"],
    "bepanthen_6": ["s1_8"],
    "bepanthen_7": ["s1_9"],
    "bepanthen_8": ["s1_10"],
    "bepanthen_9": ["s1_11", "s1_12", "s1_13"],
    "bepanthen_10": ["s1_14", "s1_15", "s1_16"],
    "bepanthen_11": ["s1_17", "s1_18"],
    "bepanthen_12": ["s1_19"],
    "class": "bepanthen",
    "name": "bepanthen",
    "prevId": "s1s"
  }
}



var presentation = {
  bgImg: [],
  popups: [],
  bgStyle: function(img, slide, count) {
    for (var i = 1; i <= count; i++) {
      bgImg = document.getElementsByClassName(slide + i);
      if (bgImg[0]) {
        bgImg[0].style.backgroundImage = "url('content/img/" + img + "/" + img + "_" + i + ".jpg')";
      }
    }
  },
  popup: function(id) {
    var id = document.getElementById(id);
    presentation.popups = document.getElementsByClassName('popups');
    for (var i = 0; i < presentation.popups.length; i++) {
      presentation.popups[i].removeClass('active');
    };
    id.addClass('active');
  },
  closePopup: function() {
    for (var i = 0; i < presentation.popups.length; i++) {
      if (presentation.popups.length !== 0) {
        presentation.popups[i].removeClass('active');
      };
    };
    presentation.popups = [];
  },
  animationBlocks: function(id, arrow) {
    var id = document.getElementById(id);
    var arrow = document.getElementById(arrow);
    setTimeout(function() {
      id.toggleClass('active');
      arrow.toggleClass('active');
    }, 300)

  },
  openAccordeon: function(id) {
    var id = document.getElementById(id);
    var blocks = document.getElementsByClassName('blocks');

    if (!(id.hasClass('active'))) {
      for (var i = 0; i < blocks.length; i++) {
        blocks[i].removeClass('active');
      };
      id.addClass('active');
    } else {
      id.removeClass('active');
    }
  },
  secondId: '',
  firstId: '',
  prev: function(presId, groupId, slideId) {
    if (presId === 'empty') {
      document.getElementById('thumbs').classList.add('hiddenThrumbs');
      document.getElementById('thumbs').classList.remove("active");
    } else {
      document.getElementById('thumbs').classList.remove('hiddenThrumbs');
      presentation.firstId = groupId;

      var handle_middle = document.getElementById("handle_middle");
      var preview_container = document.getElementById("preview_container");
      var slide_id = "",
        prev_id;

      handle_middle.classList.add(prew[presId]["class"]);

      if (presentation.firstId !== presentation.secondId) {

        removeChildrenRecursively(handle_middle);
        removeChildrenRecursively(preview_container);

        for (var i = 0; i < prew[presId][groupId].length; i++) {

          var slideTrumb = document.createElement('div');
          slideTrumb.classList.add("indicator");
          slideTrumb.id = prew[presId][groupId][i] + '_indicator';

          handle_middle.appendChild(slideTrumb);

          var slidePrev = document.createElement('li');
          slidePrev.innerHTML = '<li class="prev" id="' + prew[presId][groupId][i] + '_prev" onclick="app.goTo(\'' + prew[presId]["prevId"] + '\',\'' + prew[presId][groupId][i] + '\')" ><img  src="content/img/thumbs/' + prew[presId][groupId][i] + '.jpg"></li>'
          preview_container.appendChild(slidePrev);
        };
        presentation.secondId = groupId;
        slide_id = document.getElementById(slideId + '_indicator');
        prev_id = document.getElementById(slideId + '_prev');
        slide_id.classList.add("active");
        prev_id.classList.add("active");

      } else {
        var indicator = document.getElementsByClassName("indicator"),
          prev = document.getElementsByClassName("prev");
        slide_id = document.getElementById(slideId + '_indicator');
        prev_id = document.getElementById(slideId + '_prev');
        for (var i = 0; i < indicator.length; i++) {
          indicator[i].classList.remove("active");
        };
        for (var i = 0; i < prev.length; i++) {
          prev[i].classList.remove("active");
        };

        slide_id.classList.add("active");
        prev_id.classList.add("active");
      }
    }

  },

  openPrev: function() {
    var thumbs = document.getElementById("thumbs");

    if (!thumbs.hasClass("active")) {
      thumbs.classList.add("active");
    } else if (thumbs.hasClass("active")) {
      thumbs.classList.remove("active");
    };

  },
  menuTop: function(product) {
    var menu = document.getElementById('mainMenu');
    if (product == 'empty') {
      menu.innerHTML = '<nav id="menuTop" class=""></nav>';
    };
    if (product == 'Jass') {
      menu.innerHTML = '<nav id="menuTop" class="">\
					<ul id="menu-1" class="menu_top menu_Jass">\
						<li class="home-menu menu_top_1" onclick="app.goTo(\'s1s\', \'s1\')"> <span><img onclick="app.goTo(\'s1s\', \'s1\')" src="content/img/menu/home-button.png"></span></li>\
						<li class="menu_top_2" onclick="app.goTo(\'s3_1s\', \'s3_2\')"><span>Для кого?</span></li>\
						<li class="menu_top_3" onclick="app.goTo(\'s3_1s\', \'s3_6\')"><span>Эффективность</span></li>\
						<li class="menu_top_4" onclick="app.goTo(\'s3_1s\', \'s3_12\')"><span>Длительность</span></li>\
						<li class="menu_top_5" onclick="app.goTo(\'s3_1s\', \'s3_15\')"><span>Безопасность</span></li>\
						<li class="menu_top_6" onclick="app.goTo(\'s3_1s\', \'s3_23\')"><span>Акне</span></li>\
						<li class="menu_top_7" onclick="app.goTo(\'s3_1s\', \'s3_24\')"><span>СПКЯ</span></li>\
						<li class="menu_top_8" onclick="app.goTo(\'s3_1s\', \'s3_38\')"><span>ПМС</span></li>\
						<li class="menu_top_9" onclick="app.goTo(\'s3_1s\', \'s3_40\')"><span>FAQ</span></li>\
					</ul></nav>';
    };
    scrolNav();
  },




  menuTopSelected: function(selectLi) {
    var menu_top_before;
    if (selectLi != menu_top_before) {
      $("#menuTop li").removeClass('selected');
      $("." + selectLi).addClass('selected');
      menu_top_before = selectLi;
    };
  }

}

function removeChildrenRecursively(node) {
  if (!node) return;
  while (node.hasChildNodes()) {
    removeChildrenRecursively(node.firstChild);
    node.removeChild(node.firstChild);
  }
};

/*функция скроллинга*/
function scrolNav() {
  var preview = document.getElementsByClassName("touch_scroll");
  var scrollStartPos = 0;
  for (var i = 0, j = preview.length; i < j; i++) {


    preview[i].addEventListener("touchstart", function(event) {
      scrollStartPos = this.scrollTop + event.touches[0].pageY;
    }, false);

    preview[i].addEventListener("touchmove", function(event) {
      this.scrollTop = scrollStartPos - event.touches[0].pageY;
    }, false);
  };


};

/*верхнее меню*/

/*запуск / остановка видео*/

function playVideo(video) {
  document.getElementById('video_' + video).style.cssText = "display:block;";
  document.getElementById('stop_video_' + video).style.cssText = "display:block;";
  document.getElementById('video_' + video).play();
};


function stopVideo(video) {
  document.getElementById('video_' + video).pause();
  document.getElementById('video_' + video).style.cssText = "display:none";
  document.getElementById('stop_video_' + video).style.cssText = "display:none;";
};



/*счетчик колличества символов*/
function textareaLength(val) {
  var maxLength = $('#comment' + val).attr('maxlength');
  $('#comment' + val).on('keyup', function() {
    var curLength = $('#comment' + val).val().length;
    $("#free_symbols" + val).text(maxLength - curLength);
  });

};


// /*отправка статистики*/
// var response_value = "",
// question_value = "",
// label_id = 0;
// function submitDataFlex(){
// 	ag.submit.data({
// 		unique: true,
// 		category: "CLM_Beauty_line_1cycle_2016",
// 		categoryId: label_id,
// 		label: question_value,
// 		value: response_value,
// 		valueType: "text",
// 		labelId: label_id,
// 		path: app.getPath()
// 	});
// 	console.log("label_id = " + label_id + ": " + question_value + ": " + response_value);
// };

// function submitData(val, question){
// 	ag.submit.data({
// 		unique: true,
// 		category: "CLM_VITA_line_1cycle_2016",
// 		categoryId: "CLM_VITA_line_1cycle_2016",
// 		label: question,
// 		value: val,
// 		valueType: "text",
// 		labelId: "Id",
// 		path: app.getPath()
// 	});
// 	console.log(val + ": "+ question);
// };

var response_value = "",
  question_value = "",
  label_id = 0;

function getValQuestionnaire(id, name, question, text) {
  label_id = '';
  response_value = '';
  question_value = '';

  label_id = id;
  $('input[name="' + name + '"]:checked').each(function() {

    response_value = response_value + this.value + ", ";
  });
  question_value = question;
  if ($('#checkbox_' + id).is(":checked")) {
    console.log($('#' + text));
    response_value = response_value + $('#' + text).val();
  }

  submitData();
}

/*отправка статистики*/

function submitData() {
  ag.submit.data({
    unique: true,
    category: "A CLM_Beauty_line_2cycle_2016",
    categoryId: label_id,
    label: question_value,
    value: response_value,
    valueType: "text",
    labelId: label_id,
    path: app.getPath()
  });
  alert("label_id = " + label_id + ": " + question_value + ": " + response_value);
};
