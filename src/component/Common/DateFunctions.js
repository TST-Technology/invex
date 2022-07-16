import moment from 'moment';
import { DATE_FORMAT } from './Constants';

export const convertDateFormat = (date, format = DATE_FORMAT[1]) => {
  return date ? moment(date).format(format) : '-';
};
