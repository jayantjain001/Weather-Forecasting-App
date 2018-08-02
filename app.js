const yargs=require('yargs'); //using cli arguments
const geo=require('./geocode/geocode');
const forecast=require('./forecastapi/forecast');
const argv=yargs.options({
  a: {
     alias: 'address',
     demand:true,
     describe:'Address to fetch weather for',
     string:true  // parse a as a string
  }
   
})
.help()
.alias('help','h')     // alias for ,shortcut
.argv;
 geo.geocodeAddress(argv.address,(errorMessage,result)=>{
if(errorMessage)
console.log(errorMessage);
else {
console.log(JSON.stringify(result,undefined,2));
forecast.fooo(result.Latitude,result.Longitude);
}

});

