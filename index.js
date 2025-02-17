import { Server } from "socket.io";
import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
/**
 * join : path의 Join함수는 여러개의 문자열을 가변인자로 받아서 하나의 완전한 경로로 만들어준다.
 * dirname : 주어진 경로에서 파일 이름을 제외한 디렉토리 부분을 얻을 수 있다.
 */
const app = express(); // 이게 express 어플리케이션을 만든거.
const server = createServer(app); // 이 줄을 굳이 왜 썼을까?
const __dirname = dirname(fileURLToPath(import.meta.url));
/**
 * fileURLToPath : 파일의 URL을 플랫폼별 nodejs 파일 경로를 반환함.
 * import.meta.url : 여기서 import는 객체가 아니고 , import.meta는 모듈의 url을 가리키는
 *                   url 프로퍼티를 가지고 있는 객체를 리턴함. 즉 현재 실행중인 모듈의 경로를 URL로 변환해서 보여줌.
 * > 모듈 : 모듈은 단지 파일 하나일뿐. 분리된 파일 각각을 모듈이라고 부름.
 * > 베이스 url : 파일에도 url이 있음. 파일의 경로(위치)를 url형식으로 나타낸것.
 */
/**
 * exports.createServer = function(requestListener) {
  return new Server(requestListener);
};
 */

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

server.listen(5000, () => {
  console.log("5000포트에서 서버 실행중");
});
