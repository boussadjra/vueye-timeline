export function formatDate(date, format, customFormatter) {
	let _format = format ? format : 'yyyy-mm-dd';

	let _dateString = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
	let supportedFormats = {
		'yyyy/mm/dd': () => {
			return _dateString.replace(/-/g, '/');
		},
		'dd/mm/yyyy': () => {
			return _dateString
				.split('-')
				.reverse()
				.join('/');
		},
		'mm/dd/yyyy': () => {
			return date.toLocaleDateString('en');
		},
		'yyyy-mm-dd': () => _dateString,

		'dd-mm-yyyy': () => {
			return _dateString
				.split('-')
				.reverse()
				.join('-');
		},
		'mm-dd-yyyy': () => {
			return date.toLocaleDateString('en').replace(/\//g, '-');
		},
	};
	if (customFormatter) {
		return customFormatter(date);
	}
	return supportedFormats[_format]();
}

function pad(val) {
	return Number(val) < 10 ? '0' + val : val;
}

