class User:
    id: int
    login: str
    password: str
    description: str
    photo_url: str
    who_like: [int]
    whom_like: [int]

    def __init__(self, id, login, password, description, photo_url, who_like, whom_like):
        super().__init__()
        self.id = id
        self.login = login
        self.password = password
        self.description = description
        self.photo_url = photo_url
        self.who_like = who_like
        self.whom_like = whom_like

class Mem:
    id: int
    url: str
    user_id: int

    def __init__(self, id, url, user_id):
        super().__init__()
        self.id = id
        self.url = url
        self.user_id = user_id