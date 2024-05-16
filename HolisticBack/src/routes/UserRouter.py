from flask import Blueprint, request, jsonify
from src.services.UserService import UserService
from src.models.userModel import User

mainUser = Blueprint('user_blueprint', __name__)


@mainUser.route('/',methods=['GET'])

def get_user():
    list_user=UserService.get_user()
    print("Consola: Usuarios obtenidos.")

    return jsonify([user.__dict__ for user in list_user])
    

@mainUser.route('/',methods=['POST'])

def post_user():

    password = request.json ['password']
    user_type = request.json ['user_type']
    email=request.json ['email']
    
    user= User(None,password,user_type, email)

    if UserService.post_user(user):
        print('Consola:Usuario insertada: ', user)
        return 'Usuario creado.'
    
    return 'Página: Ok'

@mainUser.route('/<int:id_user>', methods=['PUT'])

def put_user(id_user):
    
    password = request.json ['password']
    user_type = request.json ['user_type']
    email=request.json ['email']
    
    updateuser= User(id_user,password,user_type, email)
   
    UserService.put_user(id_user, updateuser)
    print('Consola: Usuario actualizado: ')
    return 'Página: Usuario actualizado.'
   
       
@mainUser.route('/delete/<userEmail>', methods=['DELETE'])
def delete_user(userEmail):
    try:
        
        UserService.delete_userByEmail(userEmail)
        return jsonify({"message": "User deleted successfully", "email": userEmail}), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": "An error occurred"}), 500
