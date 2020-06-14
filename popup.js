
'use strict';

let checkbox = document.getElementById('checkbox');
let title = document.getElementById('title');

chrome.storage.sync.get('isActive', function(data) {
  checkbox.checked = data.isActive;
});

checkbox.onclick = function(element) {
  let isActive = checkbox.checked;
  chrome.storage.sync.set({isActive: isActive}, function() {})
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   		if(isActive) {
   			chrome.tabs.executeScript({
            	code: "document.body.style.backgroundColor='red'",
            	allFrames: true
        	});
   		} else {
   			chrome.tabs.executeScript({
            	code: "document.body.style.backgroundColor='white'",
            	allFrames: true
        	});
   		}
  });
};