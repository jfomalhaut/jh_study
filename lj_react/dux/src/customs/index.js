import moment from 'moment';

export const Comma = (number) => {
	return new Intl.NumberFormat().format(number);
};

export const getDate = (date) => {
	return moment(date).format('YYYY-MM-DD');
};
