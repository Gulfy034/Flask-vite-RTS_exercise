from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# 通过URI连接数据库
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:1234567@localhost/flask_data'
database = SQLAlchemy(app)

# 定义一个封装类
class User_list(database.Model):
    id: int = database.Column(database.Integer, primary_key=True)
    username: str = database.Column(database.String(80), unique=True, nullable=False)
    password = database.Column(database.String(120), unique=True, nullable=False)

def query_users():
    users = User_list.query.get_or_404(2)
    passw = User_list.query.get_or_404(3)

def add_user():
    new_id: int = request.json["id"]
    new_user: str = request.json["username"]
    new_pass: str = request.json["password"]
    user = User_list(new_id=User_list.id, new_user=User_list.username, new_pass=User_list.password)
    database.session.add(user)
    database.session.commit() #确认添加一条用户数据


if __name__ == "__main__":
    database.create_all()