import net from "net";
const app = net.createServer();

app.on("connection", (socket) => {
  socket.write("hello world");
  console.log("connected");
  socket.on("data", (data) => {
    console.log("客户端传输数据：", data.toString());
  });
});

app.on("close", () => {
  console.log("tcp 断开连接");
});

app.listen(3000, () => console.log("tcp listening on port 3000"));
