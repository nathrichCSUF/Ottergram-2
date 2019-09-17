//Author: Nathaniel Richards nathrich@3@csu.fullerton.edu CWID 891101883
//CPSC 349 Assignment #2: Visual Effects
//Due 9/16/2019
var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";
var NEXT_BUTTON_SELECT = "[button-role=\"next\"]";
var PREV_BUTTON_SELECT = "[button-role=\"prev\"]";
var thumbnailIndex = 0;
function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}
function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}
function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}
function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}
function addThumbClickHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    thumbnailIndex=parseInt(thumb.getAttribute("data-image-index"));
  });
}
function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}
function setNextButton(thumbs){
  "use strict";
  var nextB = document.querySelector(NEXT_BUTTON_SELECT);
  nextB.addEventListener("click",function(event){
    event.preventDefault();
    clickNextButton(thumbs);
  });
}
function setPrevButton(thumbs){
  "use strict";

  var prevB = document.querySelector(PREV_BUTTON_SELECT);

  prevB.addEventListener("click",function(event){
    event.preventDefault();
    clickPrevButton(thumbs);
  });
}

function clickPrevButton(thumbs){
  "use strict";
  thumbnailIndex--;
  if (thumbnailIndex<0){
    thumbnailIndex++;
  }
  setDetailsFromThumb(thumbs[thumbnailIndex]);
}
function clickNextButton(thumbs){
  "use strict";
  thumbnailIndex++;
  if (thumbnailIndex>=thumbs.length){
    thumbnailIndex--;
  }
  setDetailsFromThumb(thumbs[thumbnailIndex]);
}
function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();

  thumbnails.forEach(addThumbClickHandler);
  setNextButton(thumbnails);
  setPrevButton(thumbnails);

}
initializeEvents();
