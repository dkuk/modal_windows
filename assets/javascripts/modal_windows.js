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


  jQuery("div.modal_window").mouseleave(function(){
    jQuery(this).hide();
    jQuery(this).trigger('modal_window_hidden');
  })


  jQuery("a.close_modal_window").click(function(){
    jQuery(this).parent().hide();
    jQuery(this).parent().trigger('modal_window_hidden');
  })


  jQuery("div.modal_window, div.permanent_modal_window").insertBefore(jQuery("div").first());

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

  cur_window = jQuery("#modal-"+id);
  margin = 5;

  cur_window.css("top", link.top);

  if ( (jQuery(document).width() < cur_window.outerWidth()+link.left+link.width+margin) && (link.left < margin+cur_window.outerWidth()) ) {
    borders_w = cur_window.outerWidth()-cur_window.width()
    new_w = (link.left > jQuery(document).width()-(link.left+link.width+margin*2)) ? link.left-borders_w : jQuery(document).width()-(link.left+link.width+borders_w);
    cur_window.width(new_w-margin*2);
  }

  if( jQuery(document).width() >= cur_window.outerWidth()+link.left+link.width+margin) {
    cur_window.css("left", link.left+link.width+margin);
  }
  else {
    cur_window.css("left", link.left-margin-cur_window.outerWidth()); 
  }

  cur_window.show();
  cur_window.trigger('modal_window_shown');
}