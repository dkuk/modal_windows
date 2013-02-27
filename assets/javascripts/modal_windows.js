jQuery(document).ready(function(){

  jQuery(document.body).on('click', 'a.link_to_modal', function(){
    id = jQuery(this).attr("id");
    link = jQuery(this).offset();
    cur_window = jQuery("#modal-"+id);

    jQuery("div.modal_window").hide();

    if ( (cur_window.text() != "" || cur_window.hasClass("permanent_modal_window")) && !jQuery(this).hasClass("refreshable") ){
      show_modal(id);
    }
    else{
      jQuery(this).addClass("invisible_link");
      jQuery("#mw_content_loading").css("left", link.left);
      jQuery("#mw_content_loading").css("top", link.top);
      jQuery("#mw_content_loading").show();
      cur_window.load(jQuery(this).attr("href"), function(){show_modal(id)});      
    }

    return false;
  })

  jQuery(document.body).on('click', function (event){
    if( !jQuery(event.target).hasClass("modal_window") && jQuery(event.target).parents("div.modal_window").length == 0){
      jQuery("div.modal_window").hide()
    }
  });

  jQuery(document.body).on('mouseleave', "div.modal_window", function(evt){
    var mw_div = $(evt.target)

    if (!mw_div.hasClass('modal_window')){
      mw_div = $(evt.target).parents(".modal_window")
    }

    if (evt.target.nodeName.toLowerCase() !== "select" && !mw_div.hasClass("click_out")) {
      jQuery(this).hide();
      jQuery(this).trigger('modal_window_hidden');
    }
  })


  jQuery("a.close_modal_window").click(function(){
    jQuery(this).parent().hide();
    jQuery(this).parent().trigger('modal_window_hidden');
  })


  // jQuery("div.modal_window, div.permanent_modal_window").insertBefore(jQuery("div").first());

  $(document).ajaxStop(function() {
    jQuery('a.for_open').trigger('click');
    jQuery('a.for_open').removeClass('for_open');
  });

  jQuery('a.for_open').trigger('click');
  jQuery('a.for_open').removeClass('for_open');

  append_loader();
});


function append_loader(){
  if (jQuery("#mw_content_loading").length == 0) {
    jQuery(document.body).append("<div id='mw_content_loading'>&nbsp;</div>");
  }
}


function show_modal(id) {
  jQuery("#"+id).removeClass("invisible_link");
  jQuery("#mw_content_loading").hide();

  link = jQuery('#'+id).offset();
  link.width = jQuery('#'+id).outerWidth();
  link.height = jQuery('#'+id).outerHeight();

  cur_window = jQuery("#modal-"+id);
  margin = 5;
  

  if ( (jQuery(window).width() < cur_window.outerWidth()+link.left+link.width+margin) && (link.left < margin+cur_window.outerWidth()) ) {
    borders_w = cur_window.outerWidth()-cur_window.width()
    new_w = (link.left > jQuery(window).width()-(link.left+link.width+margin*2)) ? link.left-borders_w : jQuery(window).width()-(link.left+link.width+borders_w);
    cur_window.width(new_w-margin*2);
  }

  // right from element - is default
  cur_window.css("left", link.width+margin);
  
  if( jQuery("#"+id).hasClass("left-preffered") || jQuery(window).width() < cur_window.outerWidth()+link.left+link.width+margin) {
    // try to display left if preffered left or no space at right
    if ( cur_window.outerWidth() < link.left) {      
      cur_window.css("left", 0-margin-cur_window.outerWidth());
    }
  }


  // vertical position - default down 
  cur_window.css("top", 0);

  if ( jQuery("#"+id).hasClass("top-preffered") || jQuery(window).height() < link.top+cur_window.outerHeight()-link.height) { // && cur_window.outerHeight() < link.top+link.height) {
    // try to display as preffered no space bottom or top-preffered and
    if (cur_window.outerHeight() < link.top+link.height) {
      cur_window.css("top", link.height-cur_window.outerHeight());
    }
  }

  cur_window.show();
  cur_window.trigger('modal_window_shown');
}