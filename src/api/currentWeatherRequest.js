import { API_URL, API_KEY, API_UNITS, API_LANG } from '../Config/constants';

const currentWeatherRequest = async (city) => {
    const response = await fetch(
        `${API_URL}/weather?q=${city}&units=${API_UNITS}&lang=${API_LANG}&appid=${API_KEY}`
    )
        .then((res) => res.json())
        .catch((e) => console.error(e));

    return response;
};

export default currentWeatherRequest;
