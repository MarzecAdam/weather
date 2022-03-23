import { useEffect } from 'react';

import { SITE_NAME } from '../../Config/constants';

export const useTitle = (title) => {
    useEffect(() => {
        let res = '';
        if (title) {
            res = `| ${title}`;
        }
        document.title = `${SITE_NAME} ${res}`;
    }, []);
};
