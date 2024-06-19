;/*FB_PKG_DELIM*/

__d("useMAWUnsupportedBrowserNUX",["MAWSetupUtils","WebStorage","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(){var a=d("MAWSetupUtils").useIsIDBOperational();a=c("gkx")("24101")===!0||c("gkx")("1778")||!a||(h||(h=c("WebStorage"))).getLocalStorage()==null;var b=a&&!c("gkx")("1778");return{shouldHideEBFlow:b,shouldShowQP:a}}g.useMAWUnsupportedBrowserNUX=a}),98);