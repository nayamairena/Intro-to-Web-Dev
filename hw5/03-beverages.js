$(document).ready(function () {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
  // Add your code here

  const addDrinkToDOM = (drink) => {
    $("#results")
      .css({
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
      })
      .append(
        $('<div class = "figure">')
          .css({ margin: "10px 10px 10px 10px" })
          .append(
            $("<img src =" + drink.strDrinkThumb + ">").css({
              width: "250px",
              height: "250px",
            })
          )
          .append(
            $("<h1>").text(drink.strDrink).css({
              margin: "20px 10px 20px 23px",
              fontSize: "1.5em",
              width: "200px",
            })
          )
      );
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        console.log(data);

        data.drinks.forEach((item) => {
          addDrinkToDOM(item);
        });
      },
      error: (error) => {
        console.error(error);
        $("#results").append(
          $("<div>").text("An error occured. Please reload the page.")
        );
      },

      complete: () => {
        $("#loading").remove();
      },
    });
  };

  fetchData(url);
});
