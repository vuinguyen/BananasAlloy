var args = arguments[0] || {};

Ti.API.info('args.price is: ' + args.price);
$.fruitDetailLabel.text = '$' + args.price;
$.fruitDetailView.title = args.title;