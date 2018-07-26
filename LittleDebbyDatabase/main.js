//createing objects and putting them in local Storage
//make a function to create the object and we just pass in the code
const makeObj = function (title, type, color, flavor, icing) {
    const SnackCake = {
        title: title,
        type: type,
        color: color,
        flavor: flavor,
        icing: icing
    }
    return SnackCake
}

const setInLocalStorage = function (key, object) {
    localStorage.setItem(key, JSON.stringify(object));
}

const pushArray = function (array, item) {
    array.push(item);
}

const littleDebbySnacks = [];

function populateDB() {

    const zebraCake = makeObj("Zebra Cakes","cake","white","vanilla","yes");
    const cosmicBrownie = makeObj("Cosmic Brownie","brownie","brown","chocolate","none");
    const littleCamper = makeObj("Little Camper", "cake", "white", "vanilla", "none");

    pushArray(littleDebbySnacks, zebraCake);
    pushArray(littleDebbySnacks, cosmicBrownie);
    pushArray(littleDebbySnacks, littleCamper);

    setInLocalStorage("LittleDebbySnacks",littleDebbySnacks);
}


