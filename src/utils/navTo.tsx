const navTo = (dest: number) => {
    switch (dest) {
        case 0:
            window.location.href = '#section0';
            break;
        case 1:
            window.location.href = '#section1';
            break;
        case 2:
            window.location.href = '#section2';
            break;
        case 3:
            window.location.href = '#section3';
            break;
        case 4:
            window.location.href = '#section4';
            break;
        case 5:
            window.location.href = '#section5'
            break;        
        default:
            window.location.href = '#';
            break;
    }
}

export default navTo