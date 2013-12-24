(function($) {
	function resizeHeader() {
		var height = $("#sheet-header-content").outerHeight(true);

		$("#sheet-layer-bottom").height(height);
		$("#sheet-layer-top").css("margin-top", height);
	}

	resizeHeader();
	$(window).resize(resizeHeader);
}(jQuery));