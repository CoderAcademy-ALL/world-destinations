let formInput = document.querySelector('.form-input');
let formButton = document.querySelector('#submit-button');
let nameField = document.querySelector('.country-name');
let capitalField = document.querySelector('.country-capital');
let languagesField = document.querySelector('.country-languages');
let countryFlag = document.querySelector('.flag-image')

async function getCountryData(countryName){
    try{
        let response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
        let [data] = await response.json();
        console.log(data);

        let languages = [];
        data.languages.forEach(language => {
            languages.push(language.name);
        });

        nameField.innerHTML = data.name
        capitalField.innerHTML = data.capital
        languagesField.innerText = languages.join(', ')
        countryFlag.src = data.flag


        let neighbourNames = [];
        let neighbourPops = [];
        data.borders.forEach(neighbour => {
            neighbourNames.push()
            
            
            // let pop = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
            //     // .then(data => console.log(data))

            // neighbourPops.push(pop)


        });
        console.log(data.borders);
        console.log(neighbourPops.length);

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
    }
}


// function getCountryPopulation(countryCode){
//     let pop = fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
//         .then(response => response.json())
//         .then(data => data.population);
//         // .then(data => data.name);
//     return pop
// }

let asdasdasd =[]

 async function getCountryPopulation(countryCode){
    let response = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
    let data = await response.json();

        // .then(response => response.json())
        // .then(data => data.population);
        // // .then(data => data.name);
    return data.population
}

getCountryPopulation('tr')
    .then(data => console.log(data))




formButton.addEventListener('click', function(){
    let countryName = formInput.value;

    getCountryData(countryName)
});
