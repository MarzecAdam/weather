import { API_URL } from '../Config/constans';

const currentWeatherRequest = async (city) => {
    const response = await fetch(
        `${API_URL}/weather?q=${city}&units=metric&lang=pl&appid=8accc89566a8f3e260e2a3f714744670`,
    )
        .then((res) => res.json())
        .catch((e) => console.error(e));

    return response;
};

export default currentWeatherRequest;
