$( document ).ready(function () {
  
  var headerDateAndTime = dayjs().format('dddd, MMMM D, YYYY h:mm A');
  $('#currentDay').text(headerDateAndTime);

  var currentHour = dayjs().format("HH")
  $('.time-block').each(function(i){
    var blockTime = i+9

    if(blockTime < currentHour) {
      $(this).addClass("past")
    }else if(blockTime == currentHour) {
      $(this).addClass("present")
    }else {
      $(this).addClass("future")
    }
  })

  $("textarea").each(function(index) {
    var hour = $(this).parent().attr('id')
    var info = localStorage.getItem(hour)
    $(this).val(info)
  })

  $('.saveBtn').click(function() {
    var hour = $(this).parent().attr('id')
    var toDo = $(this).siblings('textarea').val()
    localStorage.setItem(hour, toDo)
  
  })
})