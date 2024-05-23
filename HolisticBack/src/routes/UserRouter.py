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

# @mainUser.route('/<int:id_user>', methods=['PUT'])

# def put_user(id_user):
    
#     password = request.json ['password']
#     user_type = request.json ['user_type']
#     email=request.json ['email']
    
#     updateuser= User(id_user,password,user_type, email)
   
#     UserService.put_user(id_user, updateuser)
#     print('Consola: Usuario actualizado: ')
#     return 'Página: Usuario actualizado.'
   
       
# @mainUser.route('/putUserEmail', methods=['PUT'])
# def putUserEmail():
#     try:
#         print("pipipipipp")

#         # Obtén el ID del usuario desde el cuerpo de la solicitud
#         data = request.get_json()
#         print("dataaaaa")
#         print(data)
#         email = data.get('email')
#         user_id = data.get('id')

#         originalEmail = data.get('originalEmail')

#         # Verifica si se proporcionó un ID válido
#         if user_id is None:
#             return "No se proporcionó un ID de usuario", 400  # Bad request

#         # print("Correo electrónico:", userEmail)
#         print("ID de usuario:", user_id)

#         # Lógica para actualizar el correo electrónico del usuario utilizando el userEmail y el user_id
#         result = UserService.put_user_Email(email, user_id, originalEmail)
#         print("Consola:", result)
#         print("Consola: Usuario actualizado")

#         return 'Página: Usuario actualizado.'
#     except Exception as e:
#         print("Error:", str(e))
#         return "Error interno del servidor", 500  # Internal Server Error

   
# @mainUser.route('/getUserByEmail/<userEmail>', methods=['GET'])

# def getUserByEmail(userEmail):
#     print("popoipopopop")
    
#     # email=request.json ['email']
#     print(userEmail)
#     print("...................sdfsdfsfsfsfsf.............................")
#     id = UserService.get_idUserbyEmail(userEmail)
#     # updateuser= User(id_user,password,user_type, email)
   
#     # UserService.put_user_Email(email,id)
#     print(id)
#     print("..................fsdfsdfsdfsf..............................")
#     print('Consola: id del usuario recuperado ')
#     return str(id)

@mainUser.route('/delete/<userEmail>', methods=['DELETE'])
def delete_user(userEmail):
    try:
        
        UserService.delete_userByEmail(userEmail)
        return jsonify({"message": "User deleted successfully", "email": userEmail}), 200
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": "An error occurred"}), 500
