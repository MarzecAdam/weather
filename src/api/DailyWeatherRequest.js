import { API_URL, API_KEY, API_UNITS, API_LANG } from '../Config/constans';

const DailyWeatherRequest = async (lat, lon) => {
    const response = await fetch(
        `${API_URL}onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=${API_UNITS}&lang=${API_LANG}&appid=${API_KEY}`,
    )
        .then((res) => res.json())
        .catch((e) => console.error(e));

    return response;
};

export default DailyWeatherRequest;
