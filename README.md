# 이진웅 무신사 과제 제출  frontend 페이지 구현

 - 이 프로젝트는 react로 frontend 페이지를 구성하였습니다.

## 프로젝트 환경 구성

### `npm install`
 - 프로젝트를 실행하기 위하여 npm을 이용하여 react 관련 라이브러리를 설치한다. 
 - 참고 
   - CORS 처리를 위한 src directory에서 <code>npm install http-proxy-middleware --save</code>에 대하여 설치가 필요 할수 있음. 
   - axios를 이용하여 서버와 통신하기에 <code>npm install axios --save</code> 라이브러리 설치가 필요 할수 있다.

### `npm start`
 - musinsa backend 서버를 실행한다. (참조 : https://github.com/Jinung82/musinsa.git)
 - musinsa_frontend/ directory 밑에서 <code> npm start </code>를 이용하여 서버를 실행한다. 
 - react 서버가 실행 되면 http://localhost:3000 으로 브라우져가 열리면서 실행된다. 
 - 페이지가 실행되면 아래와 같은 페이지가 보이며, 문제에 해당하는 API를 호출하여 render 한다.

### 무신사 과제 제출
1. 프로덕트 최저가 정보
2. 브렌드 최저가 정보
3. 카테고리별 최저가 정보
4. 카테고리 생성
5. 카테고리 수정
6. 카테고리 삭제
