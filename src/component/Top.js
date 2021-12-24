/* 
Top.js
Header로 쓰이는 컴포넌트
Header 컴포넌트는 semantin-ui에서 이미 사용중이기에 Top.js로 명명
*/

import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/doge.png"
            alt="logo"
            style={{ display: "block", width: 80 }}
          />
        </div>
        <Header as="h1">kanglaeheon</Header>
      </div>
      <Gnb />
    </div>
  );
}
