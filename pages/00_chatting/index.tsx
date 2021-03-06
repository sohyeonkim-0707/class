import Script from "next/script";
import { io } from "socket.io-client";
import styled from "@emotion/styled";
import { useState } from "react";

const Span = styled.span`
  font-size: large;
`;

const Div = styled.div`
  position: fixed;
`;

export default function SoketChat() {
  // π  μλ²λμ°κ²°νλ κ³³
  const socket = io("http://localhost:81/chattings");

  // const nickname = prompt("λλ€μμ μλ €μ£ΌμΈμ.");
  const [nickname] = useState("λλ€μ1");
  // const room = prompt("μμ₯ν  λ°©μ μ½λλ₯Ό μ μ΄μ£ΌμΈμ.");
  const [room] = useState("λ°©λ²νΈ1");
  console.log(nickname, room);

  if (!(nickname && room)) {
    alert("λ€μ μλ ₯ν΄μ£ΌμΈμ.");
    window.location.reload();
  }

  // π
  socket.emit("γγγ", nickname, room);

  socket.on("connect", () => {
    // π λκ΅°κ° μ±νμΉ¨
    socket.on(room, (data: any) => {
      $("#chatList").append(`<div>${data[0]} : ${data[1]}</div>`);
    });
    // π λκ΅°κ° μμ₯
    socket.on("comeOn" + room, (comeOn: any) => {
      $("#chatList").append(`<div style="color:blue;">${comeOn}</div>`);
    });
  });

  // π λ§€μΈμ§ μ μ‘
  function msg_send(event: any) {
    let message = $("#msg").val();
    socket.emit("send", room, nickname, message);
    $("#msg").val("");
    $("#chatList").append(
      `<div style="color:red;">${nickname} : ${message}</div>`
    );
  }

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossOrigin="anonymous"
      ></Script>
      <Script src="http://localhost:81/socket.io/socket.io.js"></Script>
      <h1>
        μν¬λ¦Ώ μ±νλ°© <Span id="room"></Span>
      </h1>

      <div id="chatList"></div>
      <Div id="sendMessage">
        <input type="text" id="msg" />
        <button onClick={msg_send}>μ μΆ</button>
      </Div>
    </>
  );
}
