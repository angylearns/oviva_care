class Qa():
    def __init__(self, id_qa, question, answer) -> None:
       self.id_qa=id_qa
       self.question=question
       self.answer=answer
       

    @classmethod
    def convert_from_BD(cls, row):
        return cls(row[0], row[1], row[2])   