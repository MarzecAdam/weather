const UnixTimeConvert = (props, type = 'time') => {
    const date = new Date(props * 1000);
    if (type === 'time') {
        const time = date.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
        });
        return `${time}`;
    }
    if (type !== 'time' || type === 'date') {
        const time = date.toLocaleString('en-GB', {
            month: '2-digit',
            day: '2-digit',
            weekday: 'short',
        });
        return `${time}`;
    }
};

export default UnixTimeConvert;
