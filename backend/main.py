from flask import Flask
from flask import request
import json
import entities
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient()
db = client['user']

@app.route('/user', methods=['GET'])
def userAPI():
    user_res = db['users'].find_one({"login": request.args.get('login')}) 

    try:
        user = entities.User(user_res['id'], user_res['login'], user_res['password'], user_res['description'], user_res['photo_url'], user_res['who_like'], user_res['whom_like'])
        if user.password == request.args.get('password'):
            return json.dumps(user.__dict__)
    except:
        pass

@app.route('/user', methods=['POST'])
def userAdd():
    try:
        max_id = db['users'].find_one(sort=[("id", -1)])['id']
    except:
        max_id = -1
    data = request.get_json()

    login = data['login']
    password = data['password']
    description = data['description']
    photo_url = data['photo_url']
    who_like = data['who_like']
    whom_like = data['whom_like']

    user = entities.User(max_id + 1, login, password, description, photo_url, who_like, whom_like)

    db['users'].insert_one(user.__dict__)

    return '{"result": "OK"}'

@app.route('/mem', methods=['POST'])
def uploadMem():
    try:
        max_id = db['memes'].find_one(sort=[("id", -1)])['id']
    except:
        max_id = -1
    data = request.get_json()
    user_id = data['user_id']
    url = data['url']

    mem = entities.Mem(max_id + 1, url, user_id)

    db['memes'].insert_one(mem.__dict__)

    return '{"result": "OK"}'

@app.route('/mem', methods=['GET'])
def getMem():
    user = db['users'].find_one({"login": request.args.get('login')}) 
    
    whole_memes_list = db['memes'].find()
    result_mem_list = []
    for mem in whole_memes_list:
        if mem['user_id'] != user['id'] and mem['user_id'] not in user['whom_like']:
            result_mem_list.append(entities.Mem(mem['id'], mem['url'], mem['user_id']).__dict__)
    
    return json.dumps(result_mem_list)

@app.route('/mem/like', methods=['GET'])
def likeMem():
    liked_user_mongo = db['users'].find_one({"id": int(request.args.get('user_id'))})
    liked_user = entities.User(liked_user_mongo['id'], liked_user_mongo['login'], liked_user_mongo['password'], liked_user_mongo['description'], liked_user_mongo['photo_url'], liked_user_mongo['who_like'], liked_user_mongo['whom_like'])
    return liked_user.__dict__

if __name__ == '__main__':
    app.run()