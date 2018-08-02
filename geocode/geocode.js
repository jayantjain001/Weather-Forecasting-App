const request=require('request');
var geocodeAddress =(add,callback)=>{
    var encodedAddress=encodeURIComponent(add);

    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json:true
    },(error,response,body)=>{
    

    if(error){
    callback('Unable to connect to Google Servers...');
    }else if(body.status==="ZERO_RESULTS"){
        callback('Unable to find address');
    }else if(body.status==="OK")
    {
        //console.log(JSON.stringify(body,undefined,2)); 2 means spaces size we have put 2nd argument as undefined because we wanted to use 3rd 
       callback(undefined,{
        Address:body.results[0].formatted_address,
        Latitude:body.results[0].geometry.location.lat,  
        Longitude:body.results[0].geometry.location.lng 
    });
    }});



}

module.exports.geocodeAddress=geocodeAddress;