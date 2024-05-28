class Video():
    def __init__(self, id_video, title, link, category) -> None:
       self.id_video=id_video
       self.title=title
       self.link=link
       self.category=category

    @classmethod
    def convert_from_BD(cls, row):
        return cls(row[0], row[1], row[2], row[3])         