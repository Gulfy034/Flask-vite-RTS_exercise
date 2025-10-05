import React, { useState } from "react";

export function BtnOne() {
    const [theme, setTheme] = useState(false);
    function changeTheme() {
        alert("按下了切换主题按钮");
        setTheme(!theme); //取反处理
    }

    return (
        <button className="btnOne" type="button" onClick={changeTheme}>切换主题</button>
    )
}

export function BtnTwo() {
    return (
        <button type="button" className="btnTwo" >打开登录界面</button>
    )
}

export function BtnThree() {
    return (
        <button type="button" className="btnThree">相关页面</button>
    )
}

export function BtnFour() {
    return (
        <button type="button" className="btnFour"><a href="http://github.com/Gulfy034">查看我的Github主页</a></button>
    )
}

export function BtnSubmit() {
    return (
        <button type="submit" className="submit">提交</button>
    )
}

export function BtnReset() {
    return (
        <button type="reset" className="reset">重置</button>
    )
}