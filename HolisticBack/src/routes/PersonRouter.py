from flask import Blueprint, request, jsonify
from src.services.PersonService import PersonService
from src.models.personModel import Person

mainPerson = Blueprint('person_blueprint', __name__)


@mainPerson.route('/',methods=['GET'])

def get_person():
    list_person=PersonService.get_person()
    print("Consola: personas obtenidas.")

    return jsonify([person.__dict__ for person in list_person])
    

@mainPerson.route('/post',methods=['POST','OPTIONS'])

def post_person():

    if request.method == 'OPTIONS':
        
        response = jsonify({'message': 'Preflight request success'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS')
        return response
    else:
        id_person = ""
        first_name = request.json["first_name"]
        last_name = request.json["last_name"]
        birth_date = request.json["birth_date"]
        country = request.json["country"]
        diagnosed = request.json["diagnosed"]
        email = request.json["email"]
    
       
        person= Person(0,first_name,last_name,birth_date,country,diagnosed,email)

        if PersonService.post_person(person):
            print('Consola:persona insertada: ', person)
            return 'persona creada.'
    
        return 'Página: Ok'

@mainPerson.route('/put', methods=['PUT'])

def put_person():
    id_person = request.json["id_person"]
    first_name = request.json["first_name"]
    last_name = request.json["last_name"]
    birth_date = request.json["birth_date"]
    country = request.json["country"]
    diagnosed = request.json["diagnosed"]
    email = request.json["email"]
    
    updatePerson= Person(id_person,first_name,last_name,birth_date,country,diagnosed,email)

    PersonService.put_person(id_person, updatePerson)
    print('Consola: persona actualizada: ')
    return 'Página: persona actualizada.'
   
       
@mainPerson.route('/delete', methods=['DELETE'])
def delete_person():       
   
    idPerson = request.json["id_person"]
    PersonService.delete_person(idPerson)
    print('Consola: persona eliminada.')
    return 'Página: persona eliminada.'



