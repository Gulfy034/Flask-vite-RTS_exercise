import { useEffect, useState } from "react";
import NavContents from "./navContents";
import ViewBox from "./viewbox";

import Login from "./login";
import Register from "./register";

import "./style/Index.css";

export default function Index() {
  const [selector, setSelector] = useState(null); // TODO: 选择展示的组件
  const [message, setMessage] = useState(""); //实现接收message的state

  useEffect(() => {
    fetch("/api/time")
      .then(response => response.json())
      .then(time => setMessage(time.message));
  }, []);

  return (
    <>
      <nav className="nav">
        <NavContents />
        {message}
      </nav>

      <ViewBox content={<Links />}>
      </ViewBox>
    </>
  )
}

function Links() {
  return (
    <>
      <a style={{ padding: "10px" }} href="https://vite.dev" target="_blank">vite</a>
      <a style={{ padding: "10px" }} href="https://react.dev" target="_blank">react</a>
      <a style={{ padding: "10px" }} href="https://flask.palletsprojects.com" target="_blank">flask</a>
    </>
  )
}