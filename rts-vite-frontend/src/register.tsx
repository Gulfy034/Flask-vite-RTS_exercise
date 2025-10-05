import React from "react";
import { BtnSubmit, BtnReset } from "./btns";

export default function Register() {
    return (
        <div className="registerPage">
            <UserRegisterForm />
        </div>
    )
}

function UserRegisterForm() {
    return (
        <form action="/api/register" method="POST">
            <table border={3}>
                <tr>
                    <h2>注册表单</h2>
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
                <tr>
                    <th>确认密码</th>
                    <td colSpan={3}>
                        <input type="password" name="passagain" id="passagain" placeholder="必填项" alt="必填项，确认密码" />
                    </td>
                </tr>
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