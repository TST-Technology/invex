import moment from 'moment-timezone';

const getCurrentDate = () => {
  return moment(new Date()).tz('America/Los_Angeles').format('YYYY/MM/DD');
};

const getOneDayBeforeDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return moment(yesterday).tz('America/Los_Angeles').format('YYYY/MM/DD');
};

function capitalizeFirstLetter(string) {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
}

export { getCurrentDate, getOneDayBeforeDate, capitalizeFirstLetter };
