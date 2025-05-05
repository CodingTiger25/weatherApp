
getWeather();


async function getWeather()
{
    try{

        const weather = await fetch(
            'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tamarac%2C%20florida?unitGroup=us&key=GMCXAYGS38JSKTCY8J9V69BJW&contentType=json', {mode:"cors"})
   
        const data = await weather.json()


        console.log(data)
        const location = document.querySelector('.address')
        location.innerHTML = data.resolvedAddress;  
        }

    catch{

    }

}

