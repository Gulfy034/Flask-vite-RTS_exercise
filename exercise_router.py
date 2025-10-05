from flask import Flask;

app = Flask(__name__);

#自定义路由方式1
def main():
    return "<a herf='/index'>Goto Index</a>"
app.add_url_rule(rule="/",view_func=main);

#定义路由方式2
@app.route("/index")
def index():
    return "<p>Hello,Flask</p>";

#多URl绑定视图函数的路由
@app.route("/One")
@app.route("/Two")
def multiple():
    return f"<h1>The multiple router bindings</h1>";

#新增路由
@app.route("/haha")
def haha():
    return "<p>Haha,Flask!</p>";

#传参路由方式1
@app.route("/<int:page_num>")
def page(page_num:int):
    return f"当前为第{page_num}页";

#传参路由方式2
def pages(page_number:int):
    return f"当前为第{page_number}页";
app.add_url_rule(rule="/page/<int:page_number>",view_func=pages);


if __name__ == "__main__":
    app.run(host="localhost", port=5716, debug=True); #配置flask运行参数并且启动