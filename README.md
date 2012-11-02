= modal_window

Redmine modal window plugin, adds simple helper for modal window generation. Window content can be static or async loaded from link url.
Window appears left or right from the link depend from available page space. If there are not anought both spaces, window will be resized to max available. 

Samples:
* `link_to_modal_window('Show modal with dynamic loaded content', {:controller => 'docflow_versions', :action=> 'autocomplete_for_user', :q => ''})` - default modal - disappears on mouseleave or mouseclick.
* `link_to_modal_window('Show permanent', "Test Permanent window", {:modal_type => 'permanent'})` - permanent static modal. Can be closed via button.


Plugin also integrates Lightview (http://projects.nickstakenburg.com/lightview) into Redmine. Be awere! Lightview library avalible fo free only for non-commercial use.
Read license please: http://projects.nickstakenburg.com/lightview/license