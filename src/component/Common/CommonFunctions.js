import moment from 'moment-timezone';
import { NormalFormat } from './NumberFormat';

const getCurrentDate = () => {
  return moment(new Date()).tz('America/Los_Angeles').format('YYYY/MM/DD');
};

const getOneDayBeforeDate = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return moment(yesterday).tz('America/Los_Angeles').format('YYYY/MM/DD');
};

const getNDayBeforeDate = (dayBefore) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - dayBefore);
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

const replaceEmptyWithPostFix = (value, postFix = '%') => {
  if (value === '' || value === null || value === undefined) {
    return '-';
  } else {
    return `${value} ${postFix ? postFix : ''}`;
  }
};

const replaceEmptyWithPreFix = (value, preFix = '$') => {
  if (value === '' || value === null || value === undefined) {
    return '-';
  } else {
    return `${preFix ? preFix : ''} ${value}`;
  }
};

const replaceEmptyWithNumberPreFix = (value, preFix = '$') => {
  if (value === '' || value === null || value === undefined) {
    return '-';
  } else {
    return `${preFix ? preFix : ''} ${NormalFormat(value)}`;
  }
};

const millionToBillionConvert = (number) => {
  return number ? `${(number / 1000).toFixed(2)} B` : '-';
};

const convertCamelCaseToSpaceSeparatedString = (text) => {
  if (text) {
    const result = text.replace(/([A-Z])/g, ' $1');
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  } else {
    return '';
  }
};

const capitalizeFirstLetterOfEachWord = (str) => {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
};

export {
  getCurrentDate,
  getOneDayBeforeDate,
  capitalizeFirstLetter,
  replaceEmpty,
  millionToBillionConvert,
  replaceEmptyWithPostFix,
  replaceEmptyWithPreFix,
  replaceEmptyWithNumberPreFix,
  convertCamelCaseToSpaceSeparatedString,
  getNDayBeforeDate,
  capitalizeFirstLetterOfEachWord,
};
