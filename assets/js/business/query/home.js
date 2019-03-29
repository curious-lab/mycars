/** This file contains queries regarding the home page */
function home_on_submit(){
    //get cars
    let all_cars = sc_get_cars();
    console.log(all_cars)
    //get the submit form by id
    let el_location = document.getElementById("home_location_select").value;
    let el_date = document.getElementById("home_startDate2").value;
    console.log("location ",el_location,"Date ",el_date);
}

function home_set_select_locations(){
    var select = document.getElementById("home_location_select");
    let locations =sl_get_locations();
    for(index in locations) {
        select.options[select.options.length] = new Option(locations[index], index);
    }
}

// Init the page
$(document).ready( function () {
    home_set_select_locations();
});