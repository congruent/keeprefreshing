var { PageMod } = require("sdk/page-mod");
var toggle = 0;

var button = require("sdk/ui/button/action").ActionButton({
  id: "style-tab",
  label: "Style Tab",
  icon: "./figurerefresh.png",
  onClick: function(toggle) {
    toggle ^= 1;
    toggleRefresh(toggle);
  }
});


function toggleRefresh(toggle){
if(toggle == 1){
	PageMod({
	  include: "*",
	  contentScript: 'window.setInterval(function(){this.document.location.reload()},1000);',
	  attachTo: ["top"]
    });
    return;
}else{
    PageMod({  
      include: "*",
      contentScript: 'window.setInterval.clearAll();',
      attachTo: ["top"]
    });
    return;}
console.log(toggle);
}

 

