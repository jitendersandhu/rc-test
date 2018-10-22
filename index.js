(function() {
	var insertCustomScript = function () {
		var scriptUrl = 'https://cdn.jsdelivr.net/gh/jitendersandhu/rc-test@6dd260820ade4917d01e4dbaec9af821a3aaf395/custom.js',
			body = document.getElementsByTagName('body')[0],
			scriptTag = document.createElement('script');

		scriptTag.type= 'text/javascript';
		scriptTag.src= scriptUrl;
		body.appendChild(scriptTag);
	};

	insertCustomScript();
})();
