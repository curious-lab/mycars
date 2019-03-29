/** This file contains queries regarding the home page */
function home_on_submit(){
    //get cars
    let all_cars = sc_get_cars();
    console.log(all_cars)
    //get the submit form by id
    let form = document.getElementById("home_submit_form").children;
    console.log(form)

    //location id home_location_select
}