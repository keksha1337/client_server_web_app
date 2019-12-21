что должно работать:
>>> логин
>>> загрузка мема
>>> показ списка чужих мемов
>>> кнопки like, dislike для каждого показанного мема
>>> если совпали лайки, показать модульное окно, что лайки совпали, на котором будут кнопки: написать, отложить
>>> по нажатию на обе кнопки, ничего не происходит. просто типа показали, что так можно.



Проблемы в общении сервера и клиента:
>>> как передать картинку на сервер



Entities:
>>> user
------ id:         int
------ login:      str
------ password:   str
------ description:str
------ photo_url:  str
------ who_like:   [int] - id user'ов, которые лайкнули этого юзера
------ whom_like:  [int] - id user'ов, которых лайнул этот юзер

>>> mem
------ id:         int
------ url:        str
------ user_id:    int - id user'a, который этот мем загрузил.


REST API:
    GET
    /user?login=my_login&password=qwerty - пример запроса на логин. 
    вернется json:
    {
        id: int,
        login: str,
        password: str,
        who_like: [
            int,
            int,
            int
        ],
        whom_like: [
            int,
            int
        ]
    } - если залогинился

    или 
    {
        result: "error"
    } - если логин/пароль неверные

    GET
    /mem?id=15
    json:
    {
        id: int,
        src: str,
        user_id: int
    }

    GET
    /like?mem_id=1
    json:
    {
        user_id: -1
    } - положительное число - id юзера, если смачило, отрицательное - нет пары.

    GET
    /dislike?mem_id=1
    json: 
    {
        result: "ok"
    }

    POST
    /uploadmem
    {
        тут хз - надо подумать как картинки передавать.
    }