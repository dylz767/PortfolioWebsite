;/*FB_PKG_DELIM*/

__d("PolarisDynamicExplorePostModal.react",["PolarisDynamicExploreMediaHelpers","PolarisDynamicExploreTypes","PolarisInstantPostModal.react","PolarisIsLoggedInDesktop","PolarisLinkBuilder","PolarisPost.react","PolarisReactRedux.react","polarisDynamicExploreSelectors","qex","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(7),e=a.analyticsContext,f=a.exploreGridQuery,g=a.exploreGridType,h=a.modalEntryPath,k=a.onClose,l=a.onOpen,m=a.postId;b[0]!==g||b[1]!==f?(a=function(a){return d("polarisDynamicExploreSelectors").getPostModalCompatibleGridItemIds(a,g,f)},b[0]=g,b[1]=f,b[2]=a):a=b[2];a=d("PolarisReactRedux.react").useSelector(a);var n;b[3]!==g||b[4]!==f||b[5]!==m?(n=function(a){return d("polarisDynamicExploreSelectors").getGridItems(a,g,f).find(function(a){return d("PolarisDynamicExploreMediaHelpers").getPostId(a)===m})},b[3]=g,b[4]=f,b[5]=m,b[6]=n):n=b[6];b=d("PolarisReactRedux.react").useSelector(n);n=c("qex")._("638")===!0;return b!=null&&j.jsx(c("PolarisInstantPostModal.react"),{analyticsContext:e,combinedPostIds:a,dimensions:n?d("PolarisDynamicExploreMediaHelpers").getDimensionsFromMedia(b):d("PolarisDynamicExploreMediaHelpers").getPostDimensions(b),mediaLinkBuilder:d("PolarisLinkBuilder").buildMediaLink,modalEntryPath:h,onClose:k,onlyReplaceModalHistory:g===d("PolarisDynamicExploreTypes").DYNAMIC_EXPLORE_GRID_TYPES.keyword_grid,onOpen:l,postCode:d("PolarisDynamicExploreMediaHelpers").getPostCode(b),postId:m,children:j.jsx(c("PolarisPost.react"),{analyticsContext:e+"Modal",autoplay:d("PolarisIsLoggedInDesktop").isLoggedInDesktop(),id:m,isVisible:!0,visiblePosition:0})})}g["default"]=a}),98);
__d("PolarisLegacyDataFromPartnersUserGrainRootQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6013132628804071"}),null);