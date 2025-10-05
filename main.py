from flask import Flask, jsonify
from flask_cors import CORS
from datetime import datetime
#import main_database;

app = Flask(__name__,
            static_folder="./rts-vite-frontend/dist/static",
            )
#解决跨域问题
CORS(app)

now_time = datetime.now()

#路由部分
@app.route("/api/time")
def index():
    return jsonify({"time": now_time})

#登录表单接收
@app.route("/api/login", methods=["GET", "POST"])
def login():
    return jsonify({"message":"successful"})

#注册表单接收
@app.route("/api/register", methods=["GET", "POST"])
def register():
    return jsonify({"message": "successful"})

if __name__ == "__main__":
    app.run(host="localhost", port=5716, debug=True) #配置flask运行参数并且启动