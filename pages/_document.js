/*
HTML, Head, Body 태그의 Customizing이 필요한 경우,
Next.js 공식문서를 참고하여 _document.js를 생성 후 관리

참고: onClick 같은 eventHandler나 CSS는 작동하지 않는다.
CSS나 <title> 삽입은 _app.js에서 !
*/

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
