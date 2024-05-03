from flask import Flask
from flask_cors import CORS
from src.routes import UserRouter, VideoRouter, RecipeRouter
from flask_cors import CORS


app= Flask(__name__)

CORS(app,resources={"*":{"origins": "http://localhost:5173"}})

def init_app(config):
    app.config.from_object(config)
    
    
    app.register_blueprint(UserRouter.mainUser, url_prefix='/user')
    app.register_blueprint(VideoRouter.mainVideo, url_prefix='/video')
    app.register_blueprint(RecipeRouter.mainRecipe, url_prefix='/recipe')
    
    
    return app