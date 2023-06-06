
$(document).ready(function () {

  $('.saveBtn').click(function () {
    var timeBlockId = $(this).parent().attr('id');
    var userInput = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, userInput);
  });


  var currentHour = dayjs().format('H');
  $('.time-block').each(function () {
    var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
    if (timeBlockHour < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (timeBlockHour === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });


  $('.time-block').each(function () {
    var timeBlockId = $(this).attr('id');
    var userInput = localStorage.getItem(timeBlockId);
    if (userInput) {
      $(this).find('.description').val(userInput);
    }
  });


  var currentDate = dayjs().format('MMMM D, YYYY');
  $('#currentDay').text(currentDate);
});