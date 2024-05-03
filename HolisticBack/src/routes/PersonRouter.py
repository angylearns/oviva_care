from flask import Blueprint, request, jsonify
from src.services.PersonService import PersonService
from src.models.personModel import Person

mainPerson = Blueprint('person_blueprint', __name__)


@mainPerson.route('/',methods=['GET'])

def get_person():
    list_person=PersonService.get_person()
    print("Consola: personas obtenidas.")

    return jsonify([person.__dict__ for person in list_person])
    

@mainPerson.route('/',methods=['POST'])

def post_person():

        id_person = ""
        first_name = request.json["first_name"]
        last_name = request.json["last_name"]
        birth_date = request.json["birth_date"]
        country = request.json["country"]
        diagnosed = request.json["diagnosed"]
        email = request.json["email"]
    
       
        person= Person(None,first_name,last_name,birth_date,country,diagnosed,email)


        if PersonService.post_person(person):
            print('Consola:persona insertada: ', person)
            return 'persona creada.'
    
        return 'Página: Ok'

@mainPerson.route('/<int:id_person>', methods=['PUT'])

def put_person(id_person):
    
    
    
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
   
       
@mainPerson.route('/<int:id_person>', methods=['DELETE'])
def delete_person(id_person):       
    PersonService.delete_person(id_person)
    print('Consola: persona eliminada.')
    return 'Página: persona eliminada.'

