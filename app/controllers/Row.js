var args = arguments[0] || {};

Ti.API.info('args.title is: ' + args.title);
$.tableRowView.title = args.title || '';
$.tableRowView.price = args.price || '';
//$.rowLabel.text = args.title || '';
//$.rowLabel.price = args.price || '';
