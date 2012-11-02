jQuery(document).ready(function(){

  jQuery("a.link_to_modal").click(function(){    
    link = jQuery(this).offset();
    link.width = jQuery(this).outerWidth();
    link.href = jQuery(this).attr("href")
    cur_window = jQuery("#modal-"+jQuery(this).attr("id"));
    margin = 5;

    hide_modals();

    if (cur_window.text() == ""){
      jQuery.ajaxSetup({ async: false});
      cur_window.load(link.href);
      jQuery.ajaxSetup({ async: true});
    }
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
    return false;
  })


  jQuery("div.modal_window").mouseleave(function(){
    jQuery(this).hide();
  })


  jQuery("a.close_modal_window").click(function(){
    jQuery(this).parent().hide();
  })
  

  jQuery("div.modal_window, div.permanent_modal_window").insertBefore(jQuery("div").first());

});

jQuery(window).click(hide_modals);

function hide_modals(){
  jQuery("div.modal_window").hide()
}
