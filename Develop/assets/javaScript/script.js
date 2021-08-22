var currentTime = moment()
var tasksArr = [];


//Displays current day at top of scheduler
$("#currentDay").text(currentTime.format('LL'))

//Saves Hour Slots to localStorage if savebutton is clicked
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var timeSlot = $(this).parent().attr('id');

    localStorage.setItem(timeSlot, text);
});

// Gets timeSlot text from localStorage if there is one.
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));