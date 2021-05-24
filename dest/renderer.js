
 const Renderer = function(){
    const renderRecipes = function(recipesArr){
        // console.log("from renderer - renderRecipes\n recipes =\n",recipesArr)
        var source = $('#recipe-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({recipes:recipesArr});
        cardsElement.append(newHTML);
        
    }
    return {
        renderRecipes:renderRecipes     
    }
    
}