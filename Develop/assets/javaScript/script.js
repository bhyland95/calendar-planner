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


//FUNCTION TO CHECK CURRENT HOUR AGAINST SCHEDULE
function currentHour() {
    //get current hour
    var timeNow = parseInt(moment().format('HH'));
    console.log(timeNow)

    // loop over time blocks
    $(".time-block").each(function () {
        var hourBlock = parseInt($(this).attr("id"));

        //if current hour is greater than HourBlock then adds class of past 
        if (timeNow > hourBlock) {
            $(this).addClass("past")
            $(this).removeClass("present")
            $(this).removeClass("future")
        //if current hour is equal to current HourBlock add class of present 
        } else if (timeNow === hourBlock) {
            $(this).addClass("present")
            $(this).removeClass("past")
            $(this).removeClass("future")
        //if current hour is less than current HourBlock add class of future
        } else {
            $(this).addClass("future")
            $(this).removeClass("past")
            $(this).removeClass("present")
        }
    })
}

// Gets timeSlot text from localStorage if there is one.
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


//Run currenthour function
currentHour();