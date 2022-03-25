import { useLocation } from 'react-router-dom';

const useNavPath = (props) => {
    const localization = useLocation()
    if (localization.pathname === props) {
        return 'contained';
    } else {
        return 'outlined';
    }
};

export default useNavPath;
