from flask import Blueprint, request, jsonify
from src.services.RecipeService import RecipeService
from src.models.recipeModel import Recipe

mainRecipe = Blueprint('recipe_blueprint', __name__)


@mainRecipe.route('/',methods=['GET'])

def get_recipe():
    list_recipe=RecipeService.get_recipe()
    print("Consola: Recetas obtenidas.")

    return jsonify([recipe.__dict__ for recipe in list_recipe])
    

@mainRecipe.route('/',methods=['POST'])

def post_recipe():

    
    title = request.json ['title']
    image= request.json ['image']
    description= request.json ['description']
    category=request.json ['category']
    
    recipe= Recipe(0,title,image, description, category)


    if RecipeService.post_recipe(recipe):
        print('Consola:Receta insertada: ', recipe)
        return 'Receta creada.'
    
    return 'Página: Ok'

@mainRecipe.route('/<int:id_recipe>', methods=['PUT'])

def put_recipe(id_recipe):
    
    
    title = request.json ['title']
    image= request.json ['image']
    description= request.json ['description']
    category=request.json ['category']
    

    updaterecipe= Recipe(id_recipe,title,image,description, category)
    
   
    RecipeService.put_recipe(id_recipe, updaterecipe)
    print('Consola: Receta actualizada: ')
    return 'Página: Receta actualizada.'
   
       
@mainRecipe.route('/<int:id_recipe>', methods=['DELETE'])
def delete_recipe(id_recipe):       
    RecipeService.delete_recipe(id_recipe)
    print('Consola: Receta eliminada.')
    return 'Página: Receta eliminada.'

