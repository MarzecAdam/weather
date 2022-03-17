import { API_URL, API_KEY, API_UNITS, API_LANG } from '../Config/constans';

const currentWeatherRequest = async (lat, lon) => {
    const response = await fetch(
        `${API_URL}/weather?lat=${lat}&lon=${lon}&units=${API_UNITS}&lang=${API_LANG}&appid=${API_KEY}&appid=${API_KEY}`,
    )
        .then((res) => res.json())
        .catch((e) => console.error(e));

    return response;
};

export default currentWeatherRequest;
