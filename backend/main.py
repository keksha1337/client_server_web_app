from flask import Flask
from flask import request
import json
import entities
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient()
db = client['user']

@app.route('/user')
def userAPI():
    user_res = db['users'].find_one({"login": request.args.get('login')}) 
    #entities.User(1, 'admin', 'qwerty', 'Так-то я довольно хорош собой.', "https://ichef.bbci.co.uk/news/624/cpsprodpb/F912/poduction/_92726736_worms2.jpg", [2,3,4], [2,4,8])

    try:
        user = entities.User(user_res['id'], user_res['login'], user_res['password'], user_res['description'], user_res['photo_url'], user_res['who_like'], user_res['whom_like'])
        if user.password == request.args.get('password'):
            return json.dumps(user.__dict__)
    except:
        pass

@app.route('/mem', methods=['POST'])
def memAPI():
    
    try:
        max_id = db['memes'].find_one(sort=[("id", -1)])['id']
    except:
        max_id = -1
    data = request.get_json()
    user_id = data['user_id']
    url = data['url']

    mem = entities.Mem(max_id + 1, url, user_id)

    db['memes'].insert_one(mem.__dict__)

if __name__ == '__main__':
    app.run()