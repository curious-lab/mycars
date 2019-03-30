
/**
 * function to get the car json
 */
function sc_get_cars() {

  //make http call to cars end point
  let api_end_point = "https://api.sheety.co/311576ae-321a-43e3-9a5b-61b3ac373d85"

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", api_end_point, false); // false for synchronous request
  xmlHttp.send(null);
  
  console.log(xmlHttp.responseText)
  if(xmlHttp.responseText != null && xmlHttp.responseText != undefined){
    try{
      let json_data = JSON.parse(xmlHttp.responseText)
      return cars;
    }catch(e){
      console.log("error in parsing cars ",e)
      return[]
    }
    }else{
      return [];
    }
}

//static car data
const cars = [
  {
    "name": "Hyundai Grand i10",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1517236166_1509779915_152_i10.webp",
    "price": 1301,
    "location": "Koramangala",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 5,
    "fuel_Type": "Petrol",
    "transmission": "Automatic",
    "car_Type": "Hatchback"
  },
  {
    "name": "Mahindra TUV300",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1508769709_tuv300_CARDIMENSION%282%29.png",
    "price": 1360,
    "location": "Koramangala",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 7,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "SUV"
  },
  {
    "name": "Hyundai i20 Magna",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1517235691_1503654158_i20_magna_carimage_1_.webp",
    "price": 1430,
    "location": "Koramangala",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "Hatchback"
  },
  {
    "name": "Mahindra Verito",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1539321232_mahindra_Vertio_new_final.webp",
    "price": 1440,
    "location": "Koramangala",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "Sedan"
  },
  {
    "name": "Honda Amaze 2018",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1545022905_amaze2018.webp",
    "price": 1570,
    "location": "Koramangala",
    "availability": "Sat, Sun",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Automatic",
    "car_Type": "Sedan"
  },
  {
    "name": "Hyundai Creta",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1517236391_1511333933_creta_CARDIMENSION.webp",
    "price": 1700,
    "location": "Koramangala",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "Mini SUV"
  },
  {
    "name": "Maruti Ritz",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1505295259_1500892807_ritz2%281%29.webp",
    "price": 1180,
    "location": "HSR Layout",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 5,
    "fuel_Type": "Petrol",
    "transmission": "Manual",
    "car_Type": "Hatchback"
  },
  {
    "name": "Tata Bolt",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1505297592_1500892399_bolt.webp",
    "price": 1150,
    "location": "HSR Layout",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "Hatchback"
  },
  {
    "name": "Hyundai Xcent",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1505390422_1500896796_xcent.webp",
    "price": 1450,
    "location": "HSR Layout",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "Sedan"
  },
  {
    "name": "Suzuki Vitara Brezza",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1522147962_vitarabrezza-final_CARDIMENSION.webp",
    "price": 1580,
    "location": "HSR Layout",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "Mini SUV"
  },
  {
    "name": "Tata Hexa XE",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1525356832_tatahexa.png",
    "price": 1980,
    "location": "HSR Layout",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 7,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "SUV"
  },
  {
    "name": "Maruti Suzuki Ertiga",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1505393064_1500892647_etriga.webp",
    "price": 2000,
    "location": "HSR Layout",
    "availability": "Sat, Sun",
    "seats": 7,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "SUV"
  },
  {
    "name": "Hyundai Eon",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1505389673_1500892609_eon.webp",
    "price": 1100,
    "location": "Indiranagar",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 5,
    "fuel_Type": "Petrol",
    "transmission": "Manual",
    "car_Type": "Hatchback"
  },
  {
    "name": "Ignis",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1526893284_ignis.webp",
    "price": 1150,
    "location": "Indiranagar",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 5,
    "fuel_Type": "Petrol",
    "transmission": "Automatic",
    "car_Type": "Hatchback"
  },
  {
    "name": "Maruti Suzuki Baleno",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1517234251_1503651026_balenoimage_carimage.webp",
    "price": 1433,
    "location": "Indiranagar",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "Hatchback"
  },
  {
    "name": "Honda Jazz",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1505393385_1504243587_jazz_CARDIMENSION.webp",
    "price": 1500,
    "location": "Indiranagar",
    "availability": "Sat, Sun",
    "seats": 5,
    "fuel_Type": "Petrol",
    "transmission": "Manual",
    "car_Type": "Hatchback"
  },
  {
    "name": "Ford Aspire",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1517230722_1504243232_aspire_CARDIMENSION.png",
    "price": 1235,
    "location": "Koramangala",
    "availability": "Tue, Thu, Fri",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "Sedan"
  },
  {
    "name": "Tata Zest",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1500897102_zest.png",
    "price": 1300,
    "location": "Koramangala",
    "availability": "Mon, Wed, Sat",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "Sedan"
  },
  {
    "name": "Mahindra KUV100",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1522147865_vitarabrezza-final_CARDIMENSION.png",
    "price": 1800,
    "location": "Koramangala",
    "availability": "Sun",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "Mini SUV"
  },
  {
    "name": "Tata Tiago",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1517230869_1510226494_tiago.png",
    "price": 999,
    "location": "HSR Layout",
    "availability": "Mon, Tue, Wed, Fri",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "Hatchback"
  },
  {
    "name": "Wagon R",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1529314831_wagon-rCARDIMENSION.png",
    "price": 1050,
    "location": "HSR Layout",
    "availability": "Mon, Wed, Sat",
    "seats": 5,
    "fuel_Type": "Petrol",
    "transmission": "Automatic",
    "car_Type": "Hatchback"
  },
  {
    "name": "Honda BR-V",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1537795601_BR-V_final.png",
    "price": 1590,
    "location": "HSR Layout",
    "availability": "Sat",
    "seats": 7,
    "fuel_Type": "Petrol",
    "transmission": "Manual",
    "car_Type": "SUV"
  },
  {
    "name": "Mahindra Scorpio",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1501074564_scorpio2%281%29.png",
    "price": 1490,
    "location": "HSR Layout",
    "availability": "Tue, Thu, Fri",
    "seats": 7,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "SUV"
  },
  {
    "name": "Celerio",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1529322833_celerioCARDIMENSION.png",
    "price": 850,
    "location": "Indiranagar",
    "availability": "Mon, Tue, Wed, Fri",
    "seats": 5,
    "fuel_Type": "Petrol",
    "transmission": "Automatic",
    "car_Type": "Hatchback"
  },
  {
    "name": "Maruti Swift VDI",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1517230618_1500896677_swift.png",
    "price": 1100,
    "location": "Indiranagar",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "Hatchback"
  },
  {
    "name": "Tata Safari Ex",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1500894652_safari.png",
    "price": 1650,
    "location": "Indiranagar",
    "availability": "Mon, Tue, Wed, Thu, Fri, Sat, Sun",
    "seats": 7,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "SUV"
  },
  {
    "name": "Mahindra XUV-W10",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1500897271_xuvw10.png",
    "price": 1800,
    "location": "Indiranagar",
    "availability": "Mon, Tue, Wed, Thu, Fri, Sat, Sun",
    "seats": 7,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "SUV"
  },
  {
    "name": "Honda BR-V",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1537795601_BR-V_final.png",
    "price": 1650,
    "location": "Indiranagar",
    "availability": "Mon, Tue, Wed, Thu, Fri",
    "seats": 7,
    "fuel_Type": "Diesel",
    "transmission": "Automatic",
    "car_Type": "SUV"
  },
  {
    "name": "Hyundai Verna",
    "photo": "https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1517230970_1517047476_verna%281%29.png",
    "price": 1320,
    "location": "Koramangala",
    "availability": "Mon, Tue, Wed, Thu, Fri, Sat, Sun",
    "seats": 5,
    "fuel_Type": "Diesel",
    "transmission": "Manual",
    "car_Type": "Sedan"
  }
]
