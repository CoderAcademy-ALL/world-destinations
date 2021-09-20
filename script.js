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
        })
        console.log(data.borders);




        var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
        var yValues = [55, 100, 44, 24, 15];
        var barColors = ["red", "green","blue","orange","brown"];

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
            text: "World Wine Production 2018"
            }
        }
        });


    } catch(error){
        console.error('No such country')
    }
}



formButton.addEventListener('click', function(){
    let countryName = formInput.value;

    getCountryData(countryName)
});





// var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// var yValues = [55, 100, 44, 24, 15];
// var barColors = ["red", "green","blue","orange","brown"];

// new Chart("myChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     legend: {display: false},
//     title: {
//       display: true,
//       text: "World Wine Production 2018"
//     }
//   }
// });