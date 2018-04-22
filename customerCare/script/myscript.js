$(document).ready(function() {
			
			$('.question').on('click', function(){
				$(this).parent().toggleClass('active');
				$(this).next().slideToggle();

			})

			$('.list-unstyle a').on('click', function(){
				$(this).parent().addClass('active').siblings().removeClass('active');	
			})
			
		})