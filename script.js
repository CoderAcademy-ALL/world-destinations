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

// let countryOut;

async function getCountryData(countryName){
    try{
        alert.classList.add('invisible')
        let response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
        let [data] = await response.json();
        console.log(data);

        // countryOut = data

        let languages = [];
        data.languages.forEach(language => {
            languages.push(language.name);
        });

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
        });
    } catch(error){
        console.error(error)
        alert.classList.remove('invisible')
    }
}

function getCountryPopulation(countryCode){
    let pop = fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
        .then(response => response.json())
        .then(data => data.population);
        // .then(data => data.name);
    return pop
}

getCountryPopulation('arm')
    .then(data => console.log(data))



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