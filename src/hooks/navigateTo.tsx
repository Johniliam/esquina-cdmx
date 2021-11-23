const navigateTo = (dest: number) => {
    switch (dest) {
        case 0:
            window.scrollTo(0,100)
            break;
        case 1:
            window.scrollTo(0,200)
            break;
        case 2:
            window.scrollTo(0,295)
            break;
        case 3:
            window.scrollTo(0,390)
            break;
        case 4:
            window.scrollTo(0,490)
            break;        
        default:
            window.location.href = '#';
            break;
    }
}

export default navigateTo