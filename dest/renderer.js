
 const Renderer = function(){
    const render = function(recipes){
        var source = $('#recipe-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({recipes:recipes});
        cardsElement.append(newHTML);
        
    }
    return {
        render:render    
    }
    
}