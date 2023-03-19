const date = new Date();
console.log(
  [date.getFullYear(), '.', date.getMonth(), '.', date.getDate(), '-',
    'h', date.getHours(), '.', 'm', date.getMinutes(), '.', 's', date.getSeconds(), '-', date.getMilliseconds()].join('')
);