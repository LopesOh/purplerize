var btn = {

	/*invert the color pass by param*/
	invert_color:function(color){

		var colors = color.replace(/[^0-9,]/g, '').split(',');
				red = 255 - colors[0],
				green = 255 - colors[1],
				blue = 255 - colors[2];

		return 'rgb('+red+','+green+','+blue+')';	

	},
	//start object
	start : function(){

		var map = {},
				invert_color = this.invert_color;

		$('a[class*=btn]').mouseenter(function(){
			change_color($(this));
		});
		
		$('a[class*=btn]').mouseleave(function(){
			return_color($(this));			
		});	


		//change the color of an element
		function change_color(element, effect){

			map = {
				color:element.css("color"),
				bgcolor:element.css("background-color")
			};			

			element.attr('style', 'background-color: '+ invert_color(map.bgcolor) +
				' !important; color: '+ invert_color(map.color)+ ' !important');

		}

		//return the original color of an element
		function return_color(element, effect){

			element.css('color', map.color);
			element.css('background-color', map.bgcolor);	

			map = {};

		}
	}

},
menu = {

	start: function(){		

		var map = {};

		$('.menu li').mouseenter(function(){

			
			$(this).children('ul').css('left', $(this).position().left );
			$(this).children('ul').show();

			map = {
				element:$(this)
			};
		});

		$('.menu li ul').mouseleave(function(){
			$(this).hide();
		});
	}


};

$(document).ready(function(){
	
	btn.start();
	menu.start();
});