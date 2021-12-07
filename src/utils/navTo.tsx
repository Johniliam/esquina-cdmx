const navTo = (dest: number) => {
    switch (dest) {
        case 0:
            window.scrollTo(0,0)
            break;
        case 1:
            window.scrollTo(0,530)
            break;
        case 2:
            window.scrollTo(0,1260)
            break;
        case 3:
            window.scrollTo(0,1750)
            break;
        case 4:
            window.scrollTo(0,2200)
            break;        
        default:
            window.location.href = '#';
            break;
    }
}

export default navTo