const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

let app = document.querySelector('#results');

const addDrinkToDOM = (drink) => {
  let element = document.createElement('div');
  let name = document.createElement('p');
  let pic = document.createElement('img');

  name.textContent = drink.strDrink;
  pic.src = drink.strDrinkThumb;

  element.append(name);
  element.append(pic);

  app.append(element);
}

const fetchData = (url) => {
  // Add your code here

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      var tmp = Object.entries(data);
      console.log(typeof(tmp));
      tmp.forEach((array) => {
        array[1].forEach((drink) => {
        console.log(drink.strDrink, drink.strDrinkThumb);
        addDrinkToDOM(drink);
        });
      });
    })

  .catch((error) => console.log(error));


};

fetchData(url);
