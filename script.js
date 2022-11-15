var NewDate = new Date();

function Render() {

    NewDate.setDate(1);
    var endDate = new Date(
        NewDate.getFullYear(), NewDate.getMonth() + 1, 0

    ).getDate()

    var prevDate = new Date(
        NewDate.getFullYear(), NewDate.getMonth(), 0

    ).getDate()
    var today = new Date();
    var day = NewDate.getDay();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("date-str").innerHTML = NewDate.toDateString();

    document.getElementById("month").innerHTML = months[NewDate.getMonth()];

    var cells = "";
    for (x = day; x > 0; x--) {
        cells += "<div class='prev-date'>" + (prevDate - x + 1) + "</div>"
    }

    for (i = 1; i <= endDate; i++) {
        if (i == today.getDate() && NewDate.getMonth() == today.getMonth()) {
            cells += "<div class='today'>" + i + "</div>"
        } else {
            cells += "<div>" + i + "</div>"
        }
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;


}

//next or prev function

function moveDate(para) {
    if (para == "prev") {
        NewDate.setMonth(NewDate.getMonth() - 1)

    } else if (para == "next") {
        NewDate.setMonth(NewDate.getMonth() + 1)
    }
    Render()
}