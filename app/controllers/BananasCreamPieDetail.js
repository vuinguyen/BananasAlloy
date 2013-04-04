var args = arguments[0] || {};

Ti.API.info('args.price is: ' + args.price);
$.bananaCreamPieDetailLabel.text = '$' + args.price;
$.bananaCreamPieDetailView.title = args.title;