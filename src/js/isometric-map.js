// Isometric Map Generator
// A jQuery plugin for generating a 2D isometric map
// version 1.0, January 01 2017
// by Christian Burd

;(function($) {

    $.fn.isometric_map = function( options ) {

        var defaults = {
            
			on_load: function() {}			
        }

        var plugin = this;
        var container = $(this);

        plugin.settings = {}

        var update_active = function() {

        }

        var init = function() {
            // init settings and compile user options
            plugin.settings = $.extend({
                on_load: function() {}                
            }, defaults, options);            
            
        }

        init();

    }

})(jQuery);