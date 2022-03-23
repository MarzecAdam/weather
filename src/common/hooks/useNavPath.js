import { useLocation } from 'react-router-dom';

const useNavPath = (props) => {
    if (useLocation().pathname === props) {
        return 'contained';
    } else {
        return 'outlined';
    }
};

export default useNavPath;
