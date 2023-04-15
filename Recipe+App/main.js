console.log(getRandomMeal())


async function getRandomMeal() {
    const randomMeal = await fetch("www.themealdb.com/api/json/v1/1/random.php")
    return randomMeal
}

async function getMealById(id) {
    const meal = await fetch("www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
}


async function getMealsBySearch(term) {
    const meals = await fetch("www.themealdb.com/api/json/v1/1/search.php?s="+term)
}


