$(document).ready(function () {

    var currentDay = dayjs().format('dddd, MMMM D');
    $('#currentDay').text(currentDay);
  
    var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
  
    for (var i = 0; i < hours.length; i++) {
      var timeBlock = $('<div>').attr('id', 'hour-' + (i + 9)).addClass('row time-block');
  
      var hour = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(hours[i]);
  
      var description = $('<textarea>').addClass('col-8 col-md-10 description').attr('rows', '3');
  
      var savedEvent = localStorage.getItem('hour-' + (i + 9));
      if (savedEvent !== null) {
        description.text(savedEvent);
      }
  
      var saveButton = $('<button>').addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save');
      var saveIcon = $('<i>').addClass('fas fa-save').attr('aria-hidden', 'true');
      saveButton.append(saveIcon);
  
  
      timeBlock.append(hour, description, saveButton);
  
      $('.container-lg').append(timeBlock);
  
      if (dayjs().isSame(dayjs().hour(i + 9), 'hour')) {
        timeBlock.addClass('present');
      } else if (dayjs().isAfter(dayjs().hour(i + 9), 'hour')) {
        timeBlock.addClass('past');
      } else {
        timeBlock.addClass('future');
      }
    }
  
    $('.saveBtn').click(function() {
      var hourId = $(this).parent().attr('id');
      var descriptionText = $(this).siblings('.description').val();
      localStorage.setItem(hourId, descriptionText);
    });
  
   
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
                                                   