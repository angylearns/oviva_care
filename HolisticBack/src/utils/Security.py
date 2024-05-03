import jwt
import datetime
import pytz
import uuid
from src.models.userModel import User
from src.models.personModel import Person

class Security():
    jwt_key="jzajs*!"
    tz=pytz.timezone('UTC')

    @classmethod
    def generate_token(cls,person:Person):
        try:
            current_time=datetime.datetime.now(tz=cls.tz)
            payload={  
            
              'jti':str(uuid.uuid4()),
              'iat': current_time,
              'nbf': current_time,
              'exp': current_time+datetime.timedelta(minutes=30),
              'id_user': person.email.id_user,
              'email':person.email.email,
              'password': person.email.password,
              'user_type': person.email.user_type,
              'id_person': person.id_person,
              'first_name': person.first_name
            }
            
            return jwt.encode(payload,cls.jwt_key, algorithm='HS256')  
    
    
        except Exception as ex:
         
         print(ex)
