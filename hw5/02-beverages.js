const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

let app = document.querySelector("#results");

const addDrinkToDOM = (drink) => {
  let element = document.createElement("div");
  element.setAttribute("class", "figure");
  let pic = document.createElement("img");
  let name = document.createElement("h1");

  pic.src = drink.strDrinkThumb;
  name.textContent = drink.strDrink;

  app.style.display = "flex";
  app.style.flexFlow = "row wrap";
  app.style.justifyContent = "center";

  element.style.margin = "10px 10px 10px 10px";

  name.style.margin = "20px 10px 20px 23px";
  name.style.fontSize = "1.5em";
  name.style.width = "200px";

  pic.style.width = "250px";
  pic.style.height = "250px";

  element.append(pic);
  element.append(name);

  app.append(element);
};

const fetchData = async (url) => {
  // Add your code here
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Fetch all drinks");
    console.log(data);

    data.drinks.forEach((item) => {
      addDrinkToDOM(item);
    });
    console.groupEnd();
  } catch (error) {
    console.error("Request failed", error);

    let element = document.createElement("div");
    element.textContent = "An error occured. Please reload the page.";
    app.append(element);
  } finally {
    let loader = document.querySelector("#loading");
    app.removeChild(loader);
  }
};

fetchData(url);
