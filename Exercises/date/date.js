// Make a function which will return passed date object to passed format. 
// Make a function which will translate passed date object to passed timezone.
function formatDate(date, format) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    if (format === 'dd/mm/yyyy') {
        return `${dayOfMonth}/${month}/${year}`
    } else if (format === 'mm/dd/yyyy') {
        return `${month}/${dayOfMonth}/${year}`
    } else if (format === 'mm-dd-yyyy') {
        return `${month}-${dayOfMonth}-${year}`
    } else {
        return `format is not supported`
    }
}
console.log(formatDate(new Date, 'dd/mm/yyyy'));
console.log(formatDate(new Date, 'mm-dd-yyyy'));
console.log(formatDate(new Date, 'dd/mm-yyyy'));

function formatDateToTZ(date, tz) {
    date.setUTCHours(date.getUTCHours() + +tz.slice(3));
    return date.toUTCString();
}
console.log(`Alaska time: ${formatDateToTZ(new Date, 'UTC-9')}`);