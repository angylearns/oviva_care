class Person():
    def __init__(self, id_person,first_name,last_name, birth_date, country, diagnosed, email) -> None:
       self.id_person=id_person
       self.first_name=first_name
       self.last_name=last_name
       self.birth_date=birth_date
       self.country=country
       self.tdiagnosed=diagnosed
       self.email=email

    @classmethod
    def convert_from_BD(cls, row):
        return cls(row[0], row[1], row[2], row[3], row[4], row[5], row[6])    