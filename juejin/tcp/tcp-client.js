import net from "net";

const client = net.createConnection({
  host: "127.0.0.1",
  port: 3000,
});

client.on("connect", () => {
  console.log("成功连接到服务器");
  process.stdin.on("data", (data) => {
      client.write(data);
  })
});

// 服务器端响应数据时
client.on("data", (data) => {
  console.log("服务器返回数据", data.toString());
});

