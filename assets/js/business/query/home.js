
/** This file contains queries regarding the home page */
function home_on_submit() {
    //get cars
    let all_cars = sc_get_cars();
    console.log(all_cars)
    //get the submit form by id
    let el_location = document.getElementById("home_location_select").value;
    let el_date = document.getElementById("home_startDate2").value;
    console.log("location ", el_location, "Date ", el_date);
    //check for invalid location and date
    //get err div reference
    let err_div = document.getElementById("home_submit_error_div");
    if (el_location == "" || el_location == undefined || el_location == null) {
        //invalid location
        //show message
        err_div.innerHTML = "Please select a location";
        err_div.style.visibility = "visible"
        return;
    } else if (el_date == "" || el_date == undefined || el_date == null) {
        //invalid date
        //show message
        err_div.innerHTML = "Please select a date";
        err_div.style.visibility = "visible"
        return;
    } else {
        //get the formatted date and location
        err_div.style.visibility = "hidden"

        //get location form the location array
        let locations = sl_get_locations();

        if (locations == null || locations == undefined || locations.length == 0) {
            err_div.innerHTML = "No locations available , refresh and try again";
            err_div.style.visibility = "visible"
            return;
        }

        let str_location = locations[el_location];
        let frmt_day = sl_get_day_def(moment(el_date, 'MM/DD/YYYY').toDate().getDay());

        console.log("Formatted location ", str_location, "Formatted day ", frmt_day);

        //navigate to cars page
        //set the location and day in local storage
        localStorage["home_selected_location"] = str_location;
        localStorage["home_selected_location_index"] = el_location;
        localStorage["home_selected_day"] = frmt_day;

        window.location = "./cars.html";
    }
}



/**
 * Load the drop down with locations
 */
function home_set_select_locations() {
    var select = document.getElementById("home_location_select");
    let locations = sl_get_locations();
    for (index in locations) {
        select.options[select.options.length] = new Option(locations[index], index);
    }
}



/**
 * init home on the page load
 */
$(document).ready(function () {
    home_set_select_locations();
    //clear all cache
    clear_last_page_number_from_storage()
    clear_sbp_option_from_storage()
    clear_fbt_option_from_storage()
    clear_fbf_option_from_storage()
    clear_fbs_option_from_storage()
    clear_search_query_from_storage()
});


function clear_sbp_option_from_storage() {
    localStorage['sbp_method_id']=""
}

function clear_fbt_option_from_storage() {
     localStorage['fbt_method_id']=""
}
function clear_fbf_option_from_storage() {
    localStorage['fbf_method_id']=""

}

function clear_fbs_option_from_storage() {
    localStorage['fbs_method_id']=""
}

function clear_search_query_from_storage() {
    localStorage['car_search_input']=""
}

function clear_last_page_number_from_storage() {
    localStorage['last_page_number']="";
}