(function() {
	var insertCustomScript = function () {
		var scriptUrl = 'https://cdn.jsdelivr.net/gh/jitendersandhu/rc-test@4dee347c714376a59cc11a5c9435167991ce4e4a/custom.js',
			body = document.getElementsByTagName('body')[0],
			scriptTag = document.createElement('script');

		scriptTag.type= 'text/javascript';
		scriptTag.src= scriptUrl;
		body.appendChild(scriptTag);
	};

	insertCustomScript();
})();
