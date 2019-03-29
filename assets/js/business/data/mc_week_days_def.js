/**
 * function to get the day defination from day number
 */
function sl_get_day_def(day_number){
    if(day_number == undefined || day_number == null || day_number<0 || day_number>6){
        return day_defs[0];
    }
    return day_defs[day_number];
}

//static car data
const day_defs = ["sun","mon","tue","wed","thu","fri","sat"];