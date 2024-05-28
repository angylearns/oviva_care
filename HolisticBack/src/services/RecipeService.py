from src.database.db_mysql import get_connection
from src.models.recipeModel import Recipe


class RecipeService():

    @classmethod
    def get_recipe(cls):
        try:
            connection=get_connection()
           
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM recipe')
                result= cursor.fetchall()
                list_recipe=[Recipe.convert_from_BD(row) for row in result]
                connection.close()
                return list_recipe
                
               
        except Exception as ex: 
            print(ex)

    @classmethod
    def post_recipe(cls, recipe: Recipe):
        try:
            connection=get_connection()
        
            with connection.cursor() as cursor:
                id_recipe = recipe.id_recipe
                title = recipe.title
                image= recipe.image
                description=recipe.description
                category= recipe.category
                

                cursor.execute("INSERT INTO recipe (id_recipe, title, image, description, category) VALUES ('{0}', '{1}', '{2} ', '{3}', '{4}');".format(id_recipe, title, image, description, category))
                connection.commit()
                connection.close()
                return 'Receta agregada correctamente'
               
        except Exception as ex: 
            print(ex)

    @classmethod
    def delete_recipe(cls, id_recipe):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                cursor.callproc("DeleteRecipe", (id_recipe,))
                connection.commit()
            connection.close()
            return 'Receta eliminada correctamente'
        except Exception as ex:
            print(ex)

    @classmethod
    def put_recipe(cls, id_recipe, recipe: Recipe):
        try:
             connection = get_connection()
             with connection.cursor() as cursor:
              title = recipe.title
              image = recipe.image
              description = recipe.description
              category=recipe.category
              
              cursor.callproc("UpdateRecipe", (id_recipe, title, image, description, category))
              connection.commit()
             connection.close()
             return 'Receta actualizado correctamente'
        except Exception as ex:
               print(ex)
     
   