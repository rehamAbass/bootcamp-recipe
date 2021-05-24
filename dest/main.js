const renderer = new Renderer()
const inputElement = $("#searchInput")
const cardsElement = $(".cards")
//---------------------------------------------------------
$("#recipeBtn").on("click",function(){
    getRecipes()
    console.log("from main - recipeBtn onclick",);
})
//------------------------------------------------------------
    const getRecipes = function () {
           $.ajax({
            method: "GET",
            url: "http://localhost:8080/recipes/" + inputElement.val(),
            success: function (recipesArr) {
                console.log("from logic - get Recipes :\n",recipesArr);
                cardsElement.empty()
                renderer.renderRecipes(recipesArr)
            },
        })

    }

