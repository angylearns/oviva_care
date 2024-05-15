from flask import Flask
from flask_cors import CORS
from src.routes import UserRouter, VideoRouter, RecipeRouter, PersonRouter, AuthRouter,QaRouter
from flask_cors import CORS


app= Flask(__name__)

CORS(app,resources={"*":{"origins": "http://localhost:5173"}})

def init_app(config):
    app.config.from_object(config)
    
    
    app.register_blueprint(UserRouter.mainUser, url_prefix='/user')
    app.register_blueprint(VideoRouter.mainVideo, url_prefix='/video')
    app.register_blueprint(RecipeRouter.mainRecipe, url_prefix='/recipe')
    app.register_blueprint(AuthRouter.main, url_prefix='/userL')
    app.register_blueprint(PersonRouter.mainPerson, url_prefix='/person')
    app.register_blueprint(QaRouter.mainQa, url_prefix='/qa')
    
    
    return app
