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

const replaceEmpty = (value) => {
  if (value === '' || value === null || value === undefined) {
    return '-';
  } else {
    return value;
  }
};

const millionToBillionConvert = (number) => {
  return number ? `${(number / 1000).toFixed(2)} B` : '-';
};

export {
  getCurrentDate,
  getOneDayBeforeDate,
  capitalizeFirstLetter,
  replaceEmpty,
  millionToBillionConvert,
};
