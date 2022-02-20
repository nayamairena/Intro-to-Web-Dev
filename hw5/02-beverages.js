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

const fetchData = async (url) => {
  // Add your code here
  try{
    const response = await fetch(url);
    const data = await response.json();
    console.log('Fetch all drinks');

    data.drinks.forEach((item) => {
      addDrinkToDOM(item);
    });
    console.groupEnd();
  }catch (error){
    console.error('Request failed', error);
  }
};

fetchData(url);
