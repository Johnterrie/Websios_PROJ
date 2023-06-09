const meals = document.querySelector(".meals");

getRandomMeal();

async function getRandomMeal() {
  const resp = await fetch("www.themealdb.com/api/json/v1/1/random.php");

  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  addMeal(randomMeal, true);
}

async function getMealById(id) {
  const meal = (
    await fetch("www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
  ).json();
}

async function getMealsBySearch(term) {
  const meals = (
    await fetch("www.themealdb.com/api/json/v1/1/search.php?s=" + term)
  ).json();
}

function addMeal(mealData, random = false) {
  const meal = document.createElement("div");
  meal.classList.add("meal");

  meal.innerHTML = `
   
      <div class="meal-header">
        ${random ? '<span class="random">Random Recipe</span>' : " "}  

        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" srcset="">
      </div>
      <div class="meal-body">
        <h4>${mealData.strMeal}</h4>
        <button class="fav-btn"><i class="fas fa-heart"></i></button>
      </div> 
    `;


      const btn = meal.querySelector("meal-body .fav-btn")

      
    meal.querySelector('.meal-body .fav-btn').addEventListener('click', (e) => {
      e.target.classList.toggle("active")
    })

    meals.appendChild(meal)


}
