const key = 'yjgJ7MZPghutF2wLuMMWAsNOO9FI4my7';
//get weather info
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0]
}