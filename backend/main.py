from flask import Flask
from flask import request
import json
import entities

app = Flask(__name__)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

@app.route('/user')
def hello_world():
    
    user = entities.User(id=1, login='admin', password='qwerty', description='Так-то я довольно хорош собой.', photo_url="https://ichef.bbci.co.uk/news/624/cpsprodpb/F912/poduction/_92726736_worms2.jpg", who_like=[2,3,4], whom_like=[2,4,8])

    try:
        if request.args.get('login') == 'admin' and request.args.get('password') == 'qwerty':
            return json.dumps(user.__dict__)
        else:
            return '{"result": error}'
    except:
        return '{"result": error}'

if __name__ == '__main__':
    app.run()