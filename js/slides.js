require(['order!../slide_config', 'order!modernizr.custom.45394',
         'order!prettify/prettify', 'order!hammer', 'order!slide-controller',
         'order!slide-deck'], function(someModule) {

});

/* Load scripts depending on mode of access (local vs remote). */
var lscripts = null;
if (localmode) {
  logmsg("Starting in LOCAL ACCESS mode.");
  loadscripts("localscript");
  var forceload_cmd = "loadscripts('remotescript');";
  logmsg('To forceload remote scripts, <span onclick="'
         +forceload_cmd+'" style="text-decoration:underline;'
         +'cursor:pointer;">click here</span>.');
} else {
  logmsg("Starting in REMOTE ACCESS mode.");
  loadscripts("remotescript");
}

