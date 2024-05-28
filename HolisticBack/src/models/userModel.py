class User():
    def __init__(self, id_user, password, user_type, email) -> None:
       self.id_user=id_user
       self.password=password
       self.user_type=user_type
       self.email=email

    @classmethod
    def convert_from_BD(cls, row):
        return cls(row[0], row[1], row[2], row[3])         
