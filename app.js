fetch("https://restcountries.eu/rest/v2/all")
.then((Response) => Response.json())
.then((data) => countryList(data));

const countryList = (countries) => {
const containerDiv = document.getElementById("country");
countries.forEach(list => {
    const newDiv = document.createElement("div");
    newDiv.className = 'listItem'
    const countryList = `
<h2 class="country-name">country: ${list.name}</h2>
<p>capital: ${list.capital}</p>
<p>Population: ${list.population} Lak</p>
<p>area: ${list.area} kilometer</p>
<button onclick="displayCountryDetails('${list.name}')">Know More</button>`
    newDiv.innerHTML = countryList;
    containerDiv.appendChild(newDiv);
});

}

const displayCountryDetails = country => {
const url = `https://restcountries.eu/rest/v2/name/${country}`
fetch(url)
.then(Response => Response.json())
.then(data => countryDetails(data))
}

const countryDetails = input => {
const infoList = `
<h2>country: ${input[0].name}<h2>
<p>Time: ${input[0].timezones}</p>
<p>Native name: ${input[0].nativeName}</p>
<img src="${input[0].flag}">`
document.getElementById('countryDetails').innerHTML = infoList;
}