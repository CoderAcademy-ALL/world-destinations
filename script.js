// DOM elements
let formInput = document.querySelector('.form-input');
let formButton = document.querySelector('#submit-button');
let nameField = document.querySelector('.country-name');
let capitalField = document.querySelector('.country-capital');
let languagesField = document.querySelector('.country-languages');
let populationField = document.querySelector('.country-population');
let countryFlag = document.querySelector('.flag-image');
let cardDiv = document.querySelector('.content');
let alert = document.querySelector('.wrong-country');
let space = document.querySelector('.spacer')
let welcome = document.querySelector('.welcome')

// Asynchronous function that displays country values with data from an API
async function getCountryData(countryName){
    try{
        // hide content for opening of the project
        alert.classList.add('invisible')
        
        // receive data using the fetch API
        let response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
        let [data] = await response.json();
        console.log(data);

        // get languages spoken in the country and put them in an array
        let languages = [];
        data.languages.forEach(language => {
            languages.push(language.name);
        });

        // insert country data into elements
        nameField.innerHTML = data.name
        capitalField.innerHTML = data.capital
        populationField.innerHTML = data.population
        languagesField.innerText = languages.join(', ')
        countryFlag.src = data.flag;

        let neighbourNames = [];
        let neighbourPops = [];

        data.borders.forEach(neighbour => {
            neighbourNames.push()
        });
        
        console.log(data.borders);
        console.log(neighbourPops);

        // Neighbour Chart - display the bordering countries of the country on a chart
        var xValues = data.borders;
        var yValues = [13,42,46,52,13,43,67,34,12,23];
        // var yValues = neighbourPops;
        var barColors = ["red", "green","blue","orange","brown","orange","orange"];
        new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
            }]
        },
        options: {
            legend: {display: false},
            title: {
            display: true,
            text: "Bordering Countries of " + data.name
            }
        }
        })
    } catch(error){
        console.error(error)
        
        // If there are any errors caught, display a bootstrap alert!
        alert.classList.remove('invisible')
    }
}

// A function that gets the population of a country from the api
function getCountryPopulation(countryCode){
    let pop = fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
        .then(response => response.json())
        .then(data => data.population);
    return pop
}
// testing out the function above to see what is produces
getCountryPopulation('arm')
    .then(data => console.log(data))

// Search button functioning on button click
formButton.addEventListener('click', function(){
    let countryName = formInput.value;
    if (countryName){
        getCountryData(countryName)
        space.style.display = 'block';
        welcome.style.display = 'none';
    }
    else {
        alert.classList.remove('invisible')
    }
});

















// let asdasdasd =[]

//  async function getCountryPopulation(countryCode){
//     let response = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
//     let data = await response.json();

//         // .then(response => response.json())
//         // .then(data => data.population);
//         // // .then(data => data.name);
//     // return data.population
//     return data.population
// }


// getCountryPopulation(neighbour)
//     .then(data => {
//         console.log(data);
//         neighbourPops.push(data)
//     })
//     .finally(data => {
//         console.log(neighbourPops);
//     })