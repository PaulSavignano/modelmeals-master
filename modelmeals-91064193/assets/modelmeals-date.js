/*============================================================================
  Developer: Paul Savignano
  Email: paul.savignano@gmail.com
  Mobile: (619) 865-3725
==============================================================================*/

// Find current Sunday and return a date object.

var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function next(day) {
  var date = new Date();
  var today = date.getUTCDay();
  var hour = date.getUTCHours();
  day = day.toLowerCase();

  for (var i = 7; i--;) {
    if (day === days[i]) {
      if (i < today) {
        day = i + 8;
      } else {
        if (hour >= 19) {
          day = i + 8;
        } else {
          day = i + 1;
        }
      }
      break;
    }
  }
  var daysUntilNext = day - today;
  return new Date().setDate(date.getUTCDate() + daysUntilNext);
}
