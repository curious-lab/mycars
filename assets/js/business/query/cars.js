
/**
 * init home on the page load
 */
$(document).ready(function () {
    get_the_location_and_day();
});


function get_the_location_and_day(){
    //location and day received in cars.html
    let str_location = localStorage["home_selected_location"] ;
    let frmt_day = localStorage["home_selected_day"];

    console.log("Location received in cars ",str_location,"Day received in cars ",frmt_day);
}