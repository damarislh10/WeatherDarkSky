export const obtenerStateStorage = ()=> {
    const productStorage = localStorage.getItem('savedLocations');
    if(productStorage === null){
        return undefined;
    }
    return JSON.parse(productStorage);
}

export const guardarStateStorage = state => {
    const productsState = JSON.stringify(state);
    localStorage.setItem('savedLocations', productsState)
}