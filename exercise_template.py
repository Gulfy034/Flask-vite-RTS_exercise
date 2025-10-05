from flask import Flask, render_template, flash, request, session;

app = Flask(__name__);

#模板视图
@app.route("/")
def index():
    name = "i am a variable";
    return render_template("index.html", name=name);

#jinja语法-对字符串过滤
@app.route("/filters")
def filter():
    num = -11.2;
    list = [1,2,1,3,2,5,0];
    str = "aString";
    return render_template("filters.html", num=num, list=list, str=str);

#jinja语法-选择结构
@app.route("/filters/<int:score>")
def filters(score:int):
    return render_template("select_struct.heml", score=score);

#jinja语法-循环
@app.route("/loop")
def loop():
    items = ["one", "teo", "three", "four"];
    return render_template("loop_struct.html", items=items);

#jinja语法-宏定义
@app.route("/macro")
def marco():
    return render_template("macro.html");

#jinja语法-宏调用
@app.route("/macro-called")
def marco_called():
    return render_template("macro_called.html");

#消息闪现
# flash() && get_flashed_message()
app.secret_key = "haha";
@app.route("/flash", methods=["GET", "POST"]) # 需要显式声明同时GET和POST方法，不然会报错Method Not Allowed
def flasher():
    key_value = session.get("submit"); # 捕捉产生的session数据
    if request.method == "POST":
        if (request.form["key_value"] != "False") or (key_value in session):
            flash(message="YES!", category="info"); # 发送闪现
    return render_template("flash.html");

if __name__ == "__main__":
    app.run(host="localhost", port=5716, debug=True);