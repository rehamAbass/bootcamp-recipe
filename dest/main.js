const r = new Renderer()
// const inputElement = $("#searchInput")
const cardsElement = $(".cards")
//---------------------------------------------------------
$("#recipeBtn").on("click",function(){
    let  inputElement = $('#searchInput').val()
        $.get(`/recipes/${inputElement}`, function (recipes){
        // console.log("befrore render",recipes);
         r.render(recipes)
    })
})
//-------------------------------------------------------------

    //---------------------------------------------------------------
            //    $.ajax({
        //     method: "GET",
        //     url: "http://localhost:8080/recipes/" + inputElement.val(),
        //     success: function (recipesArr) {
        //         console.log("from logic - get Recipes :\n",recipesArr);
        //         cardsElement.empty()
        //         renderer.renderRecipes(recipesArr)
        //     },
        // })


