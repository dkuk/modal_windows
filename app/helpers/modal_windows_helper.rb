module ModalWindowsHelper

  def link_to_modal_window(text, context = {}, html_options = nil, *parameters_for_method_reference)
    t = Time.now

    opts = {:class => "in_link link_to_modal", :id => "#{t.to_i}-#{t.nsec}"}
    html_options = html_options.nil? ? opts : (html_options.merge(opts)){|key, oldval, newval| [newval.to_s,oldval.to_s].join(" ") })
    data = ''
    unless context.is_a? Hash 
      data = context
      context = '#'
    end
    window_class = "modal_window"
    if html_options.keys.include?(:modal_type) && html_options[:modal_type] == 'permanent'
      data = link_to('','#', :class => "icon close-icon close_modal_window", :style => "margin-top:-10px; margin-left:-8px;")+data
      window_class = "permanent_modal_window"
    end

    html = content_tag(:div, data, :id => "modal-#{t.to_i}-#{t.nsec}", :class => window_class)
    html << link_to( text, context, html_options, *parameters_for_method_reference )

    html.html_safe
  end  

end