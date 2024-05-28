class Recipe():
    def __init__(self, id_recipe, title, image, description, category) -> None:
       self.id_recipe=id_recipe
       self.title=title
       self.image=image
       self.description=description
       self.category=category

    @classmethod
    def convert_from_BD(cls, row):
        return cls(row[0], row[1], row[2], row[3], row[4] )      