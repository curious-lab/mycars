
/**
 * init home on the page load
 */
$(document).ready(function () {
    get_the_location_and_day();
});


function get_the_location_and_day() {
    //location and day received in cars.html
    let str_location = localStorage["home_selected_location"];
    let frmt_day = localStorage["home_selected_day"];

    console.log("Location received in cars ", str_location, "Day received in cars ", frmt_day);

    if (str_location == "" || str_location == undefined || str_location == null) {
        //go back to home , suspecting cache clear
        window.location = "./index.html";
        return;
    }

    if (frmt_day == "" || frmt_day == undefined || frmt_day == null) {
        //go back to home , suspecting cache clear
        window.location = "./index.html";
        return;
    }


    //initially filter the cars according to the location 
    filter_cars_by_loc_and_day(str_location, frmt_day);
}






/**
 * This function will filter the cars by location and the day
 */
function filter_cars_by_loc_and_day(location, day) {
    //get all the cars
    let cars = JSON.parse(JSON.stringify(sc_get_cars()));
    let unavailable_cars = [];

    let filtered_cars = cars.filter(function (car) {
        //compare the location
        if (car.location.toLowerCase() == location.toLowerCase()) {

            if (car.availability != undefined && car.availability != null) {
                let avl_days = car.availability.replace(/\s/g, "").split(",")
                if (avl_days != null) {
                    //check if the car available for that day
                    let is_day_found = avl_days.find((aval_day) => {
                        if (aval_day.toLowerCase() == day.toLowerCase()) {
                            return true;
                        }
                    })
                    if (is_day_found != undefined && is_day_found != null) {
                        return true;
                    }else{
                        push_to_unavailable(car)
                        false;
                    }
                } else {
                    push_to_unavailable(car)
                    false;
                }
            } else {
                push_to_unavailable(car)
                return false;
            }
        } else {
            push_to_unavailable(car)
            return false;
        }
    });

    /**
    * push the car to unavailable cars array 
    */
    function push_to_unavailable(car) {
        car.is_available = false;
        unavailable_cars.push(car)
    }

    console.log("filtered cars on submit ", filtered_cars)
    console.log("unavailable cars ", unavailable_cars)

    //make single array 
    let all_cars = filtered_cars.concat(unavailable_cars);
}

