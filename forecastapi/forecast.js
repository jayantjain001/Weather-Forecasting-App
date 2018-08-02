const request=require('request');

var fooo= (lat,lon)=>{
request({
    url:`https://api.darksky.net/forecast/cb2cdb86bec6421da7c5b5383a891f3b/${lat},${lon}`,
    json:true
        },(error,res,body)=>{
if(error)
{
    console.log('Unable to connect to forecast ');
    
}else if(res.statusCode===400){
    console.log('Unable to fetch weather');
    
}
else if(res.statusCode===200){
console.log(' Current_Temperature: '+(body.currently.temperature-32)*(5/9) + ' degree celcius');
console.log(' Current Wind Speed : '+(body.currently.windSpeed+ 'Km/hr'));
        }
});
}



module.exports.fooo=fooo;