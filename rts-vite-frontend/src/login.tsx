import React from "react";
import { BtnSubmit, BtnReset } from "./btns";

export default function Login() {
    return (
        <div className="loginPage">
            <UserLoginForm />
        </div>
    )
}

function UserLoginForm() {
    return (
        <form action="/api/login" method="GET">
            <table border={3}>
                <tr>
                    <h2>登录表单</h2>
                </tr>
                <tr>
                    <th>账号名</th>
                    <td colSpan={3}>
                        <input type="text" className="username" name="username" id="username" placeholder="必填项" alt="必填项，账号名" />
                    </td>
                </tr>
                <tr>
                    <th>密码</th>
                    <td colSpan={3}>
                        <input type="password" name="password" id="password" placeholder="必填项" alt="必填项，密码" />
                    </td>
                </tr>

                <input type="checkbox" name="是否记住密码复选框" id="passmem" />记住密码
                <tfoot>
                    <tr>
                        <td colSpan={4}>
                            <BtnSubmit />
                            <BtnReset />
                        </td>
                    </tr>
                </tfoot>
            </table>
        </form>
    )
}