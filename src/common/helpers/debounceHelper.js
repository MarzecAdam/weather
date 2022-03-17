import debounce from 'lodash.debounce';

export const debounceHelper = (param, time) => debounce(param, time);
