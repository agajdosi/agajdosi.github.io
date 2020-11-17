var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;

document.write(''
 +'Browser name  = '+browserName+'<br>'
 +'Full version  = '+fullVersion+'<br>'
 +'Major version = '+majorVersion+'<br>'
 +'navigator.appName = '+navigator.appName+'<br>'
 +'navigator.userAgent = '+navigator.userAgent+'<br>'
)

var ogTitle = document.createElement('meta');
ogTitle.setAttribute('property', 'og:title');
ogTitle.content = navigator.userAgent;
document.getElementsByTagName('head')[0].appendChild(ogTitle);

var ogDescription = document.createElement('meta');
ogDescription.setAttribute('property', 'og:description');
ogDescription.content = window.location.search;
document.getElementsByTagName('head')[0].appendChild(ogDescription);
