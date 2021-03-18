console.log(moment().format("[It is] HH:mm:ss"));

const officeHours = [9, 10, 11, 12, 13, 14, 15, 16];
let save;

renderPage();

function renderPage() {

    // let currentHour = 15;
    let time = moment().format("HH");
    let currentHour = parseInt(time);

    console.log(currentHour);
    $("#date").text(moment().format("dddd, Do MMMM"));

    officeHours.forEach(hour => {


        let positionLeft = currentHour - hour;
        let positionRight = hour - currentHour;

        let container = document.createElement("div");
        container.setAttribute("class", "container text-white");

        let row = document.createElement("div");
        row.setAttribute("class", "row mb-3");

        let timeSlot = document.createElement("div");
        let timeSlotText = document.createElement("span");
        timeSlot.setAttribute("class", "col-12 col-md-2 pt-3");
        timeSlotText.setAttribute("style", "font-size:24px");
        timeSlotText.setAttribute("class", "align-middle ");
        if (hour === 9) { timeSlotText.textContent = "09:00 - 10:00" }
        else {
            timeSlotText.textContent = `${hour}:00 - ${hour + 1}:00`
        }
        timeSlot.append(timeSlotText);



        let planner = document.createElement("div");
        let plannerText = document.createElement("textarea");
        if (hour < currentHour) {

            plannerText.style.backgroundColor = "#67E96C";

            //plannerText.style.opacity = 0.8 - (positionLeft * 0.07); 
        }
        else if (hour > currentHour) {
            plannerText.style.backgroundColor = "#67C6E9";
        }
        else {

            plannerText.style.backgroundColor = "#FFE45B";

            //make time font bold
        }
        planner.setAttribute("class", "col-10 col-md-9");
        plannerText.setAttribute("class", "form-control text-black border-0 hover");
        plannerText.setAttribute("id", `"${hour}"`);
        plannerText.setAttribute("rows", "3");
        plannerText.value = localStorage.getItem(hour);
        // plannerText.setAttribute("style", "border-radius: 15px")
        planner.append(plannerText);

        let save = document.createElement("div");
        save.setAttribute("class", "col-2 col-md-1");
        let floppy = document.createElement("img");
        floppy.setAttribute("src", "./assets/images/floppy.png");
        floppy.setAttribute("alt", "Floppy disk save icon");
        floppy.setAttribute("class", "img-fluid pt-2 floppy");
        save.append(floppy);


        row.append(timeSlot, planner, save);
        container.append(row);
        container.append(row);
        $("main").append(container);

    });

    const saveIcons = document.querySelectorAll(".floppy");
    saveIcons.forEach(element => {
        element.addEventListener("click", function (event) {

            //array index of the image that was clicked on
            save = (Array.from(saveIcons).indexOf(event.target));

            console.log(save);
            saveTextArea();

        })
    });

}

function saveTextArea() {

    let y = save + 9;
    let z = y.toString();
    let x = document.getElementById(`"${z}"`);
    localStorage.setItem(z, (x.value));

}

function clearButton() {

    for (let i = 9; i < 16; i++) {

        let x = document.getElementById(`"${i}"`);
        localStorage.setItem(i, "");
        x.value = "";

    }
}


//future self: trigger event on multiple elements (done on lines 81 to 83) and then get that element's ID
//or class or index etc.  (done on line 86 for index) that is associated with another element (in this case the textarea
// and its equivalent save icon);

//instead of having 8 elements... 8 different IDs, 8 lots of "document.getElement.. etc. etc."

