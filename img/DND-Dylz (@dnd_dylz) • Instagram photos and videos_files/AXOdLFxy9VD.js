;/*FB_PKG_DELIM*/

__d("MWCMIsThreadBumped",["I64","MWCMIsAnyCMThread"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var b=a.secondaryParentThreadKey;a=a.threadType;return c("MWCMIsAnyCMThread")(a)&&b!=null&&(h||(h=d("I64"))).equal(b,(h||(h=d("I64"))).of_int32(0))}g["default"]=a}),98);
__d("MWXacGating",["IgMsgrXacGatingManager","gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("IgMsgrXacGatingManager").is_xac_enabled_for_viewer}function b(){if(c("IgMsgrXacGatingManager").is_groups_xac_enabled_for_viewer)return c("gkx")("26364");else return!1}g.isOneToOneEnabled=a;g.isGroupsEnabled=b}),98);