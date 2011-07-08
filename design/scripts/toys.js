/* Squareweave did many sexy things for this one. oh yeah. Thanks Yuri. Thanks Will. Thanks jQuery. */

$(function(){


	var images = [
		'freshprince.gif',		
		'shake.gif',		
		'gameboy.gif',				
		'body.gif',		
		'bingowings.gif',			
		'animevom.gif',		
		'80sdancedudes.gif',		
		'acid.gif',		
		'afrogroove.gif',		
		'applause.gif',		
		'aprilisawesome.gif',		
		'babes.gif',		
		'balls.gif',		
		'ballsbeingtripped.gif',		
		'bearjammin.gif',		
		'biceptclappin.gif',		
		'biggidupbiggidup.gif',		
		'billandted.gif',		
		'blue.gif',		
		'bookclub.gif',		
		'booty.gif',		
		'bootyspray.gif',		
		'casiomotherfucker.gif',		
		'cheerleadin.gif',		
		'chocolate-love.gif',		
		'chubbysuperheros.gif',		
		'cocaine.gif',		
		'crotch.gif',		
		'crotches.gif',		
		'dancefish.gif',		
		'dancin.gif',		
		'dancing-tigers_gif-party.gif',		
		'daria.gif',		
		'ddrfeld.gif',		
		'ddrkombat.gif',		
		'discokombat.gif',		
		'doctor.gif',		
		'dogbooty.gif',		
		'dolphins.gif',		
		'drinkupbro.gif',		
		'epilepsy.gif',		
		'epilepsydudes.gif',		
		'fattyrave.gif',		
		'getoverhere.gif',		
		'getsometapesyo.gif',		
		'hairgirl.gif',		
		'headsmash.gif',		
		'headspin.gif',		
		'hnnnngh.gif',		
		'hooptydoop.gif',		
		'jelly.gif',		
		'jerry.gif',		
		'jiggly.gif',		
		'jolie.gif',		
		'jumparound.gif',		
		'kurt.gif',		
		'lazerseverywhere.gif',		
		'licklick.gif',		
		'likeapolaroid.gif',		
		'mchammer.gif',		
		'mirrorbash.gif',		
		'moorespicy.gif',		
		'morphin.gif',		
		'mountaindewz.gif',		
		'newchampion.gif',		
		'nightvision.gif',		
		'nodoubt.gif',		
		'noscrubs.gif',		
		'notworthy.gif',		
		'ohgodsclub7.gif',		
		'onlikedonkeykong.gif',		
		'partyhard.gif',		
		'partyharder.gif',		
		'partyharderer.gif',		
		'pills.gif',		
		'pingu.gif',		
		'pinkranger.gif',		
		'pizza.gif',		
		'plane.gif',		
		'power.gif',		
		'pump.gif',		
		'punchapuncha.gif',		
		'pushpop.gif',		
		'pushpopohyeah.gif',		
		'ranga.gif',		
		'rangers.gif',		
		'renandstimpie.gif',		
		'ridin.gif',		
		'rock.gif',		
		'rockitlikecarlton.gif',		
		'rocko.gif',		
		'rollerblades.gif',		
		'running.gif',		
		'sclub.gif',		
		'scrubs.gif',		
		'sethgreen.gif',		
		'sexyback.gif',		
		'shakey-cat.gif',		
		'shark.gif',		
		'simba.gif',		
		'sing.gif',		
		'skeleton.gif',		
		'slam.gif',		
		'somanydrugs.gif',		
		'spice.gif',		
		'stare.gif',		
		'stimpie.gif',		
		'swedenz.gif',		
		'tekken.gif',		
		'telivision.gif',		
		'tellytubbie.gif',		
		'terrifying.gif',		
		'thisisbankaiworking.gif',		
		'thrust.gif',		
		'totallyrad.gif',		
		'transformerbutton.gif',		
		'tronnnnn.gif',		
		'turtledanceyo.gif',		
		'turtledenim.gif',		
		'warioass.gif',		
		'what.gif',		
		'whatislove.gif',		
		'windows.gif',		
		'wob.gif',		
		'wolfman.gif',		
		'wtf.gif',		
		'yeaaaaaaaah.gif',		
		'yepyepyepyepye.gif',		
		'yes.gif',		
		'yesfist.gif',		
		'yess.gif',		
		'yesss.gif',		
		'yessss.gif',		
		'youdied.gif',		
		'zombie.gif',		
		'zoom.gif'
	]
	
	var i = 0;
	
	function touchthis(){
	
		$('.js_ajax_loader').show();



		$('<img />')
		.attr('src', 'awesome/' + images[i])
		.load(function(){
		
			$('.js_ajax_loader').hide();
		
			$('.js_mover').css('width', '0');
				
			$('.js_mover').animate({
			  width: '100%'
			}, 4000, function() {

				i++
				if (images.length == i){i=0;}
	
			  $('.js_fuckyeah').empty();
			  $('.js_fuckyeah').append('<img src="awesome/' + images[i] + '">');
			  
			  $('.js_linky').attr('href', 'awesome/' + images[i]);
			  $('.js_linky').text('' + images[i]);				  
			  
			  touchthis();			  		    
			});

/*

			$('.js_fuckyeah').empty();
			$('.js_fuckyeah').append($(this));


*/

		});
	
				
		
	}

	touchthis();
	
	
	// Insert preloaded image after it finishes loading

	$('.js_hide_aboot').click(function(e){

		e.preventDefault();
		if ($('.js_aboot').hasClass('aboot_hidden'))
		{
			$('.js_aboot').removeClass('aboot_hidden');
		} else
		{
			$('.js_aboot').addClass('aboot_hidden');		
		}
	});

});