
/**
 * init home on the page load
 */
$(document).ready(function () {
    set_search_query_from_storage();

    let cars = get_the_location_and_day();
    sort_by_price_pipe(cars);
    cars = filter_by_transimission_pipe(cars)
    cars = filter_by_fuelpipe(cars);
    cars = filter_by_style_pipe(cars)
    cars = searchFilterPipe(cars)
    displayAllCars(cars);

    car_set_select_locations();
    set_sbp_option_from_storage();
    set_fbt_option_from_storage();
    set_fbf_option_from_storage();
    set_fbs_option_from_storage();
});

/**
 * Load the drop down with locations
 */
function car_set_select_locations() {
    var select = document.getElementById("car_location_select");
    let locations = sl_get_locations();
    for (index in locations) {
        select.options[select.options.length] = new Option(locations[index], index);
    }
    //select the index according to the passed location from the home page
    document.getElementById("car_location_select").selectedIndex = localStorage["home_selected_location_index"];
}


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
    let cars = filter_cars_by_loc_and_day(str_location, frmt_day);
    if (cars == null || cars == undefined) {
        return null;
    } else {
        return cars;
    }
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
                    } else {
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

    //make single array
    let all_cars = filtered_cars.concat(unavailable_cars);

    console.log("filtered cars on submit ", filtered_cars)
    console.log("unavailable cars ", unavailable_cars)
    console.log("All cars", all_cars)

    return all_cars;
}

/**
 * this method will display all the cars
 * 
 */
function displayAllCars(cars) {
    if (cars != null) {
        cars.forEach(car => {
            display_car(car)
        });
    }
}

//removed the cars child array form root
function clear_all_cars() {
    //get the root reference
    let root_element = document.getElementById("cars_cars_list");
    while (root_element.firstChild) {
        root_element.removeChild(root_element.firstChild);
    }
}

/**
 * This method is used to display the cars in the car.html page
 */
function display_car(car) {
    //get the root reference
    let root_element = document.getElementById("cars_cars_list");

    //create car card
    var car_card = document.createElement('div');
    car_card.className = "single-car-wrap";

    //card row
    var card_row = document.createElement('div');
    card_row.className = "row";
    car_card.appendChild(card_row);

    //single car thumbnell
    var sc_thumb_out = document.createElement('div');
    sc_thumb_out.className = "col-lg-5";
    //thumb img
    var sc_thumb_in = document.createElement('div');
    sc_thumb_in.className = "car-list-thumb";
    let car_img = document.createElement('img');
    car_img.src = car.photo;
    car_img.className = "car-list-thumb";
    //car_img.style.height="auto"
    sc_thumb_in.appendChild(car_img);
    sc_thumb_out.appendChild(sc_thumb_in);
    card_row.appendChild(sc_thumb_out);

    //car info col
    var cr_inf_col = document.createElement('div');
    cr_inf_col.className = "col-lg-7"
    var cr_inf_dis_tbl = document.createElement('div');
    cr_inf_dis_tbl.className = "display-table"
    var cr_inf_dis_tbl_cell = document.createElement('div');
    cr_inf_dis_tbl_cell.className = "display-table-cell"
    //car info starts
    var cr_inf = document.createElement('div');
    cr_inf.className = "car-list-info"
    //name
    var div_name = document.createElement('h2');
    div_name.innerHTML = car.name;
    //fare
    var div_fare = document.createElement('h5');
    div_fare.innerHTML = "&#8377;" + car.price + "/Per day";
    //misc info
    var ul_misc = document.createElement('ul');
    ul_misc.className = "car-info-list"
    //seat
    var li_seat = document.createElement('li');
    li_seat.innerHTML = car.seats;
    ul_misc.appendChild(li_seat)
    //fuel
    var li_fuel = document.createElement('li');
    li_fuel.innerHTML = car.fuel_Type;
    ul_misc.appendChild(li_fuel)
    //gear
    var li_gear = document.createElement('li');
    li_gear.innerHTML = car.transmission;
    ul_misc.appendChild(li_gear)

    //locatioin
    var car_location = document.createElement('p');
    car_location.innerHTML = car.location;
    car_location.style = "float: right";

    //location marker
    var loc_marker = document.createElement('i');
    loc_marker.className = "fa fa-map-marker"
    loc_marker.style = "margin-right:5px; color: #ffd000;"
    car_location.appendChild(loc_marker)

    //availability
    var p_avl = document.createElement('p');
    p_avl.className = "rent-btn not-active"
    p_avl.innerHTML = "NOT AVAILABLE"

    //car info ends
    cr_inf.appendChild(div_name)
    cr_inf.appendChild(div_fare)
    cr_inf.appendChild(ul_misc)
    cr_inf.appendChild(car_location);
    //check if car available
    if (car.is_available == false) {
        cr_inf.appendChild(p_avl)
    }
    cr_inf_dis_tbl_cell.appendChild(cr_inf);
    cr_inf_dis_tbl.appendChild(cr_inf_dis_tbl_cell);
    cr_inf_col.appendChild(cr_inf_dis_tbl)
    card_row.appendChild(cr_inf_col)

    root_element.appendChild(car_card)
}




/** on location and date reselected*/
function car_on_loc_and_date_reselect() {
    //get cars
    let all_cars = sc_get_cars();
    console.log(all_cars)
    //get the submit form by id
    let el_location = document.getElementById("car_location_select").value;
    let el_date = document.getElementById("car_startDate2").value;
    console.log("location ", el_location, "Date ", el_date);
    //check for invalid location and date
    //get err div reference
    let err_div = document.getElementById("car_submit_error_div");
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

        location.reload();
    }
}

/**
 * On sort by price option is changed
 */
function onSortByPrice(id) {
    console.log("sot by price method id ", id)
    localStorage['sbp_method_id'] = id;
    location.reload();
}


function set_sbp_option_from_storage() {
    let id = localStorage['sbp_method_id']
    if(id !=""){
        document.getElementById(id).className = "nav-link active"
    }
}

function set_fbt_option_from_storage() {
    let id = localStorage['fbt_method_id']
    if(id != ""){
        document.getElementById(id).className = "nav-link active"
    }
}
function set_fbf_option_from_storage() {
    let id = localStorage['fbf_method_id']
    if(id != ""){
        document.getElementById(id).className = "nav-link active"
    }
}

function set_fbs_option_from_storage() {
    let id = localStorage['fbs_method_id']
    if(id != ""){
        document.getElementById(id).className = "nav-link active"
    }
}

function set_search_query_from_storage() {
    let query = localStorage['car_search_input']
    if(query != undefined && query !=null && query != "" && query!="undefined"){
        document.getElementById('car_search_input').value = query
    }
}

function onFilterByTransmission(id){
    console.log("filer by trnsimssion method id ", id)
    localStorage['fbt_method_id'] = id;
    location.reload()
}

function onFilterByFuel(id){
    console.log("filer by Fuel method id ", id)
    localStorage['fbf_method_id'] = id;
    location.reload()
}

function onFilterByStyle(id){
    console.log("filer by style method id ", id)
    localStorage['fbs_method_id'] = id;
    location.reload()
}

function sort_by_price_pipe(cars){
    let id = localStorage['sbp_method_id'] ;
    if (id == "sbp_lowhigh") {
        //sort low to high
        cars.sort((car_a,car_b)=>{
            if(car_a.price>car_b.price){
                return 1;
            }else{
                return -1;
            }
        })
    } else if(id == "sbp_highlow"){
        //sort high to low
        //sort low to high
        cars.sort((car_a,car_b)=>{
            if(car_a.price>car_b.price){
                return -1;
            }else{
                return 1;
            }
        })
    }
}

function filter_by_transimission_pipe(cars){
    let id = localStorage['fbt_method_id'] ;
    let fl_cars = []
    if(id == "fbt_manual"){
        cars.forEach((car)=>{
            if(car.transmission.toLowerCase().replace(/\s/g, "")=="manual"){
                fl_cars.push(car) 
            }
        })
        return JSON.parse(JSON.stringify(fl_cars))

    }else if(id== "fbt_auto"){
        cars.forEach((car)=>{
            if(car.transmission.toLowerCase().replace(/\s/g, "")=="automatic"){
                fl_cars.push(car) 
            }
        })
        return JSON.parse(JSON.stringify(fl_cars))
    }else{
        return cars;
    }
}

function filter_by_fuelpipe(cars){
    let id = localStorage['fbf_method_id'] ;
    let fl_cars = []
    if(id == "fbf_petrol"){
        cars.forEach((car)=>{
            if(car.fuel_Type.toLowerCase().replace(/\s/g, "")=="petrol"){
                fl_cars.push(car) 
            }
        })
        return JSON.parse(JSON.stringify(fl_cars))

    }else if(id== "fbf_diesel"){
        cars.forEach((car)=>{
            if(car.fuel_Type.toLowerCase().replace(/\s/g, "")=="diesel"){
                fl_cars.push(car) 
            }
        })
        return JSON.parse(JSON.stringify(fl_cars))
    }else{
        return cars;
    }
}

function filter_by_style_pipe(cars){
    let id = localStorage['fbs_method_id'] ;
    let fl_cars = []
    if(id == "fbs_hatch"){
        cars.forEach((car)=>{
            if(car.car_Type.toLowerCase().replace(/\s/g, "")=="hatchback"){
                fl_cars.push(car) 
            }
        })
        return JSON.parse(JSON.stringify(fl_cars))

    }else if(id== "fbs_sedan"){
        cars.forEach((car)=>{
            if(car.car_Type.toLowerCase().replace(/\s/g, "")=="sedan"){
                fl_cars.push(car) 
            }
        })
        return JSON.parse(JSON.stringify(fl_cars))
    }else if(id== "fbs_suv"){
        cars.forEach((car)=>{
            if(car.car_Type.toLowerCase().replace(/\s/g, "")=="suv"){
                fl_cars.push(car) 
            }
        })
        return JSON.parse(JSON.stringify(fl_cars))
    }else if(id== "fbs_mini_suv"){
        cars.forEach((car)=>{
            if(car.car_Type.toLowerCase().replace(/\s/g, "")=="minisuv"){
                fl_cars.push(car) 
            }
        })
        return JSON.parse(JSON.stringify(fl_cars))
    }else{
        return cars;
    }
}

function search_filter(){
    //get the search word
    let search_query = document.getElementById("car_search_input").value;
    localStorage['car_search_input']  = search_query;

   // let err_div = document.getElementById("car_search_submit_error_div");
    location.reload();
}

function searchFilterPipe(cars){
    let search_query = document.getElementById("car_search_input").value;

    let flt_cars = []
    console.log("Searchig for ",search_query)
    if(search_query == undefined || search_query == null || search_query =="" ||  search_query=="undefined"){
       return cars;
    }else{
       //do the filtering
       flt_cars = cars.filter((car)=>{
           if(car.name.toLowerCase().includes(search_query.toLowerCase()) ||
           search_query.toLowerCase().includes(car.name.toLowerCase()) ||
           car.car_Type.toLowerCase().includes(search_query.toLowerCase()||
           search_query.toLowerCase().includes(car.car_Type.toLowerCase()))){
               return true;
           }
       })
    }

    return flt_cars;
}

