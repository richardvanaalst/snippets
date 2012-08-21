(function(w) {

	var w = window;
	w.trace = trace;
	function trace( feedback, location ) {
		location = typeof location !== 'undefined' ? location : ['console', 'log'];

		// Console in page.
		if (location.indexOf('console') != -1) {
			if (document.getElementById('console') == null) {
				var Console = document.createElement('ol');
				Console.id = 'console';

				var head = document.getElementsByTagName('head')[0],
					style = document.createElement('style'),
					css  = "#console { position: fixed; width: 200px; max-height: 315px; top: 2px; right: -190px; z-index: 100; padding: 5px 10px;";
					css += " overflow-x: hidden; overflow-y: scroll; font: 10px/1.5em menlo, consolas, \"courier new\", fixed; list-style-type: decimal; word-wrap: no; color: #888; background-color: #ddd; border: 1px dotted #999;";
					css += " -webkit-box-shadow: -1px 2px 3px 0 rgba(0, 0, 0, 0.3); -moz-box-shadow: -1px 2px 3px 0 rgba(0, 0, 0, 0.3); box-shadow: -1px 2px 3px 0 rgba(0, 0, 0, 0.3); opacity: .4; -webkit-transition: all 0.2s linear; -moz-transition: all 0.2s linear; -o-transition: all 0.2s linear; transition: all 0.2s linear; }\n";
					css += "#console:hover { right: -1px; opacity: 1; }\n";
					css += "#console li { margin-left: 20px; }\n";
					css += "#console li:nth-child(odd) { background-color: #fff; }\n";
					css += "#console li:nth-child(even) { background-color: #eee; }\n";
					css += "#console span { margin-left: 10px; font-size: 11px; color: #000; }\n";

				if (style.styleSheet) { style.styleSheet.cssText = css; }
				else { style.appendChild(document.createTextNode(css)); }
				head.appendChild(style);
				document.body.appendChild(Console);
			}
			else {
				var Console = document.getElementById('console');
			}
			Console.innerHTML += '<li><span>'+feedback+'</span></li>';
			Console.scrollTop = Console.scrollHeight;
		}

		// Console log of browser.
		if (location.indexOf('log') != -1) { console.log('trace: '+feedback); }

		// Alert pop-up.
		if (location.indexOf('alert') != -1) { alert('trace: '+feedback); }
	};
})(window);
