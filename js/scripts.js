$(document).ready(function() {


	/* Scroll page to corresponding anchor. */
	$('nav a').click(function() {
		scrollTo($(this).attr('href'));
	});
	$('h1 a').click(function() {
		scrollTo('#top');
		return false;
	});
	function scrollTo(element) {
		var _s = 200,
			_f = 'swing';

		trace("scrollTo "+element.toString());

		$('html, body').animate(
			{scrollTop: $(element).offset().top},
			_s,
			_f
		);
	};


	/* Highlight code syntax. */
	SyntaxHighlighter.autoloader(
		'xml xhtml html          js/shScripts/shBrushXml.js',
		'css                     js/shScripts/shBrushCss.js',
		'sass scss               js/shScripts/shBrushSass.js',
		'js script javascript    js/shScripts/shBrushJScript.js',
		'bash shell              js/shScripts/shBrushBash.js',
		'text plain              js/shScripts/shBrushPlain.js'
	);
	SyntaxHighlighter.all();


	/* Open new tab when clicked on >. */
	$('article a').attr('target','_blank');


	/*$('div.code').click(function(event) {
		trace( $(this) +'; '+ this.getAttribute('class') );
		// $(this).select();
	});*/
});
