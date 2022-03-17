import { API_URL } from '../Config/constans';

const DailyWeatherRequest = async (lat = 52.2298, lon = 21.0118) => {
    const response = await fetch(
        `${API_URL}onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=8accc89566a8f3e260e2a3f714744670`,
    )
        .then((res) => res.json())
        .catch((e) => console.error(e));

    return response;
};

export default DailyWeatherRequest;
