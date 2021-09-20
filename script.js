let formInput = document.querySelector('.form-input');
let formButton = document.querySelector('.submit-button');
let nameField = document.querySelector('.country-name');
let capitalField = document.querySelector('.country-capital');
let currenciesField = document.querySelector('.country-currency');
let countryFlag = document.querySelector('.flag-image')

async function getCountryData(countryName){
    try{
        let response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
        let [data] = await response.json();
        console.log(data);

        nameField.innerHTML = data.name
        capitalField.innerHTML = data.capital
        // currenciesField.innerText = data.currencies
        countryFlag.src = data.flag
    } catch(error){
        console.error('No such country')
    }
}

formButton.addEventListener('click', function(){
    // e.preventDefault();

    let countryName = formInput.value 

    console.log(countryName)
});


