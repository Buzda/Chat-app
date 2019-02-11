var moment = require("moment");

var createdAt = 34135;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
