//Making the button place the database in local Storage
//Get a reference to populate the database button in the DOM
const populateButton = document.getElementById("populateDatabase");
/*
    When the user clicks the button put the data in local storage
*/
populateButton.addEventListener("click", function () {
    populateDB();
})

// or you could do the function this way
// populateButton.addEventListener("click", populateDB)