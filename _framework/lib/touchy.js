/**
 * touchy.js
 *
 * A JavaScript microlibrary for UI interaction on Wekbit mobile and desktop.
 * Dispatches custom events to be used when normal events does not suffice.
 * NOTE: stopPropagation() will not work on these events, use touchy.stop(event) instead.
 *
 * @author     Stefan Liden
 * @version    0.2
 * @copyright  Copyright 2011 Stefan Liden
 * @license    Dual licensed under MIT and GPL
 */

(function() {
  var d = document,
      isTouch = 'ontouchstart' in window,
      doubleTap = false,
      touchEvents = {
        start: 'touchstart',
        move: 'touchmove',
        end: 'touchend'
      },
      mouseEvents = {
        start: 'mousedown',
        move: 'mousemove',
        end: 'mouseup'
      },
      evts = isTouch ? touchEvents : mouseEvents,
      customEvents = {
        tap: '',
        doubleTap: '',
        twoFingerTap: '',
        longTouch: '',
        swipeleft: '',
        swiperight: '',
        swipeup: '',
        swipedown: ''
      },
      swipeEvents = ['tap', 'doubleTap', 'twoFingerTap', 'longTouch', 'swipeleft', 'swiperight', 'swipeup', 'swipedown'];
  
  // Create the custom events to be dispatched
  function createSwipeEvents () {
    swipeEvents.forEach(function(evt) {
      customEvents[evt] = d.createEvent('UIEvents');
      customEvents[evt].initEvent(evt, true, true);
    });
  }
  // Fix for stopPropagation not working in Webkit and Opera for custom events
  function stopBubbling	 (event) {
    event.cancelBubble = true;
    setTimeout(function() {
      event.cancelBubble = false;
	  
    },0);
  }
  function onStart (event) { 

    var startTime = new Date().getTime(),
        touch = isTouch ? event.touches[0] : event,
        nrOfFingers = isTouch ? event.touches.length : 1,
        startX, startY, hasMoved;

    startX = touch.clientX;
    startY = touch.clientY;
    hasMoved = false;

    d.addEventListener(evts.move, onMove, false);
    d.addEventListener(evts.end, onEnd, false);
    
    function onMove (event) {
      hasMoved = true;
      nrOfFingers = isTouch ? event.touches.length : 1;
    }
    function onEnd (event) {
	
     var endX, endY, diffX, diffY,
          ele = event.target,
          customEvent = '',
          endTime = new Date().getTime(),
          timeDiff = endTime - startTime;
      touch = isTouch ? touch : event;

      if (nrOfFingers === 1) {
        if (!hasMoved) {
          if (timeDiff <= 1000) {
		  
            if (doubleTap) {
              ele.dispatchEvent(customEvents.doubleTap);
            }
            else {
              ele.dispatchEvent(customEvents.tap);
              doubleTap = true;
            }
            resetDoubleTap();
          }
          else {
            ele.dispatchEvent(customEvents.longTouch);
          }
        }
        else {
          if (timeDiff < 1000 ) {
            endX = touch.clientX;
            endY = touch.clientY;
            diffX = endX-startX;
            diffY = endY-startY;
	        dirX = diffX > 1 ? 'right' : 'left';
            dirY = diffY > 1 ? 'down' : 'up';
            absDiffX = Math.abs(diffX);
            absDiffY = Math.abs(diffY);
            
            if (absDiffX >= absDiffY) {
              customEvent = 'swipe' + dirX;
            }
            else {
              customEvent = 'swipe' + dirY;
            }
            
            ele.dispatchEvent(customEvents[customEvent]);
          }
        }
      }
      else if (nrOfFingers === 2) {
        ele.dispatchEvent(customEvents.twoFingerTap);
      }

      d.removeEventListener(evts.move, onMove, false);
      d.removeEventListener(evts.end, onEnd, false);
    }
  }
  
  function resetDoubleTap() {
    setTimeout(function() {doubleTap = false;}, 400);
  }
  

  createSwipeEvents();
  d.addEventListener(evts.start, onStart, false);

  // Return an object to access useful properties and methods
  return window.touchy = {
    isTouch: isTouch,
    stop: stopBubbling,
    events: evts
  }
})();