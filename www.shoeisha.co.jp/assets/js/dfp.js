var gptadslots=[];
(function(){
  var useSSL = 'https:' == document.location.protocol;
  var src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
  document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
})();

function init_dfp(){
googletag.cmd.push(function() {
  googletag.defineSlot('/5473248/SE_SB_Foot1_728x90', [728, 90], 'div-gpt-ad-1431052067844-0').addService(googletag.pubads());
  googletag.pubads().collapseEmptyDivs(true);
  googletag.pubads().enableSingleRequest();
  //googletag.pubads().enableSyncRendering();
  googletag.enableServices();
  });
}

function dfp_set_responsive (gpt_id, b_width) {
  $(window).resize(function(){
    dfp_change_scale(gpt_id, b_width);
  });
  $(function(){
    $(gpt_id).trigger('resize');
  });
}

function dfp_change_scale (gpt_id, b_width) {
  var width = document.documentElement.clientWidth;
  var scale;
  var min_scale   = 0.2;
  var coefficient = 0.9;
  if (width >= 1024) {
    scale = 1;
  } else {
    if (!b_width) b_width = 768;
    scale = width / b_width;
    if (coefficient) scale = scale * coefficient;
    if (min_scale) scale = scale < min_scale ? min_scale : scale;
  }

  $(gpt_id)
   .css('transform-origin',  '0px 50%')
   .css('transform',         'scale(' + scale + ')')
   .css('-o-transform',      'scale(' + scale + ')')
   .css('-webkit-transform', 'scale(' + scale + ')')
   .css('-moz-transform',    'scale(' + scale + ')')
   .css('-ms-transform',     'scale(' + scale + ')');
}
