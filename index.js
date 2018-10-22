(function() {
	var insertCustomScript = function () {
		var scriptUrl = 'https://cdn.jsdelivr.net/gh/jitendersandhu/rc-test@642f7bd8bbda3120145b1cbfe319191d5f8d465f/custom.js',
			body = document.getElementsByTagName('body')[0],
			scriptTag = document.createElement('script');

		scriptTag.type= 'text/javascript';
		scriptTag.src= scriptUrl;
		body.appendChild(scriptTag);
	};

	insertCustomScript();
})();
