import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";


/*
  프로젝트  캡쳐시
  pc : 408x500 
  모바일 : 전체화면
  
*/
const project = [
  {
    title: "🎬영화 소개 사이트🎬",
    pc_img: ["project/프로젝트_영화소개_pc01.png", "project/프로젝트_영화소개_pc02.png", "project/프로젝트_영화소개_pc03.png", "project/프로젝트_영화소개_pc04.png",],
    m_img: ["project/프로젝트_영화소개_m01.png", "project/프로젝트_영화소개_m02.png", "project/프로젝트_영화소개_m03.png", "project/프로젝트_영화소개_m04.png",],
    skills: ["../../img/react.png", "../../img/js.png", "../../img/sass.png", "../../img/css.png", "../../img/html.png"],
    info: "TMBD에서 제공된 API를 기반으로 제작한 영화 소개 사이트 입니다! \n (Redux, Redux-Thnk, Router, Axios)",
    detail_info: [
      "💁‍♂️ 간단한 설명 💁‍♂️",
      "👉 react-router을 사용해 SPA형태로 구성되었습니다.",
      "👉 axios를 활용해 데이터를 불러왔으며, async, await를 사용해 각각의 api를 비동기적으로 불러왔습니다.",
      "👉 thunk를 활용해 dispatch의 매개변수에 객체가 아닌 API를 불러오고 다시 dispatch를 해주는 액션함수를 넣어 API를 불러오는 과정을 비동기적으로 구현하였습니다.",
      "👉 홈화면이 렌더링시 useEffect를 사용해 dispatch(api.get하는 액션함수)가 실행되며 데이터를 불러와줍니다.",
      "👉 Toprated, Upcoming, Popular 3가지 타입의 api를 불러와 슬라이드를 구성하였습니다.",
      "👉 각 영화를 클릭시 path='/movies/:id'로 이동되며 detail컴포넌트를 불러와줍니다. 클릭시 해당 /:id값에 영화의 id가 들어가며,",
      "useParams를 사용해 해당 아이디 값을 활용할 수 있는 구조로 구현하였습니다.",
      "👉 해당된 영화의 정보를 불러오기 위해 detail api를 사용해 dispatch로 전달하는 과정에서 액션함수의 매개변수로 id값을 전달해주었습니다.",
      "👉 디테일 페이지에서 react-youtube를 활용해 영상을 클릭시 유튜브 영상이 보여지게끔 구현하였습니다.",
      "🙋‍♂️ 느낀점, 알게된점, 나의 생각 🙋‍♂️",
      "🧐redux를 사용해 단순히 store에 값을 저장하고 활용하는 단순한 용도가 아닌 thnk와 같이 사용해 비동기적으로 API 데이터를 불러오는 과정에 있어 외부 API를 사용하는 프로젝트에 크게 유용한 기술이라고 생각이 들었다.",
      "🧐처음 thnk를 이해하고 활용하는거에 있어 어려움을 겪었지만 계속된 복기를 통하여 이해와 스스로 비동기적 요소가 필요한 부분을 판단하고 적용할 수 있게 되었다.",
      "🧐기존의 dispatch는 type, payload등이 담긴 객체를 전달해 주었지만 thnk를 활용하게 되면 함수를 생성해주는 액션함수가 매개변수로 들어갈 수 있어, 이또한 놀라운 기능이라고 생각이 들었다. 다른 프로젝트를 하게 되면 thnk를 접목시켜 비동기적 상태관리에 있어 유용한 장점들을 다시 활용하여 작업을 진행하고싶다.",
      "🧐또한 router의 useParams함수가 detail페이지를 구성하는 과정에 있어 큰 영향을 미쳤다. ",
      "🧐redux만을 사용해 홈페이지를 구성하였다면 지금처럼 가독성있고 효과적으로 코드로 구성하기 힘들었을텐데 router을 같이 활용해 시너지를 이끌어내어 여러 라이브러리의 장점을 조합해 하나의 서비스를 만들 수 있었던 좋은 기회였다.",
      "🧐데이터를 불러오는 과정에 있어 주로 fetch 사용해 데이터를 불러와 주었지만 이번에는 axios를 사용해 주었다.",
      "🧐현재의 프로젝트에서 axios를 활용해 데이터를 불러오는 부분 까지는 fetch와 동일하지만 자동으로 json형태로 데이터를 변환해주고, Intercept기능, 다양한 브러우저에서 지원 등과 같은 부가적인 장점들이 많아 axios에 활용도를 늘리며 중점적으로 학습을 하고싶다고 생각이 들었다."
    ],
    github:"https://github.com/seonghong1/REACT_MovieSite",
    siteUrl:"https://master--seonghong-moviesite.netlify.app/"
  },
  /*
  {
    title: "Project name",
    pc_img: ["/project/프로젝트_날씨앱_pc01.png", "/project/프로젝트_날씨앱_pc02.png"],
    m_img: ["/project/프로젝트_날씨앱_pc01.png", "/project/프로젝트_날씨앱_pc02.png"],
    skills: ["../../img/sass.png"], info: "프로젝트에 대해서 간단한 설명입니다. 프로젝트에 대해서 간단한 설명입니다.",
    detail_info: [
    
    ],
    github:"",
    siteUrl:""
  },
*/
  {
    title: "🌟조성홍의 포트폴리오 사이트🌟",
    pc_img: ["project/프로젝트_포트폴리오_pc01.png", "project/프로젝트_포트폴리오_pc02.png", "project/프로젝트_포트폴리오_pc03.png", "project/프로젝트_포트폴리오_pc04.png"],
    m_img: ["project/프로젝트_포트폴리오_m01.png", "project/프로젝트_포트폴리오_m02.png", "project/프로젝트_포트폴리오_m03.png"],
    skills: ["../../img/react.png", "../../img/js.png", "../../img/sass.png", "../../img/html.png", "../../img/css.png"],
    info: "저의 인적 정보와 기술 이해도, 작업물들이 담겨 있는 사이트 입니다." +
      "(React-Router, Swiper, AOS)",
    detail_info: [
      "💁‍♂️ 간단한 설명 💁‍♂️",
      "👉 router을 사용해 SPA형태로, 보는 사람의 관점에서 원하는 정보를 클릭해서 볼 수 있도록 구현하였습니다.",
      "👉 SPA형태의 사이트에서 동적인 요소를 추가하고자 AOS라이브러리를 사용하여 애니메이션을 진행하였습니다.",
      "👉 각각의 컴포넌트 내부의 데이터들은 상단에 배열형태로 저장해 불필요한 반복을 줄여 html을 작성했습니다.",
      "👉 스타일 구성으로는 Sass를 사용하여 변수, mixin, extend 등과 같이 유용한 기능들은 사용하여 작업하게 되었습니다.",
      "💡 느낀점, 알게된점, 나의 생각 💡",
      "🧐 코드를 치기전 figma를 사용하여 기본적은 틀을 잡고 시작하니 레이아웃, 스타일등은 큰 무리 없이 진행했었습니다.",
      "🧐 가장 많이 고민했던 부분은 바로 구성요소였다. 보는 사람의 관점에서 어떤 정보를 먼저 제공받고 싶은지, 어떻게 하면 표현하고싶은 부분을 더 가독성있게 표현할 수 있을지 정말 고민이 많이 되었다.",
      "🧐 컴포넌트별 html작성은 return 위에 데이터를 담은 배열을 만들어 모든 컴포넌트의 반복되는 html구성을 반복문(map)으로 작성하였다.",
      "🧐 중간중간 수정할 부분이 많았었는데 html에 직접 수정이 아닌 단순히 위의 데이터만 수정하면 되는 부분이라 값을 수정하고, 추가하는 부분에 있어서 매우 편리하고 효과적이었다.",
      "🧐 앞으로 꾸준히 학습하여 포트폴리오 사이트를 업데이트하고 스스로를 가꾸어 나갈 예정이다.",
    ],
    github:"https://master--seonghong-portfolio.netlify.app/",
    siteUrl:"https://github.com/seonghong1/PORTFOLIO_SITE"
  },
  {
    title: "🕑TODO LIST🕣",
    pc_img: ["project/프로젝트_투두리스트_m01.png", "project/프로젝트_투두리스트_m02.png"],
    m_img: ["project/프로젝트_투두리스트_m01.png", "project/프로젝트_투두리스트_m02.png"],
    skills: ["../../img/react.png", "../../img/js.png", "../../img/sass.png", "../../img/css.png", "../../img/html.png"], 
    info: "TODO LIST입니다. 오늘 하루 해야될 일들을 기록해보세요 ❗ (useContext, useEffect, useState)",
    detail_info: [
      "💁‍♂️ 간단한 설명 💁‍♂️",
      "👉 [추가] : input창에 할일을 입력후 submit시 매개변수로 받은 함수에 인자로 입력한 텍스트 값이 전달된다.",
      "전달된 텍스트 값은 스프레드 연산자를 사용해서 값(todolist)이 추가되는 형식으로 구현하였다.",
      '👉 [완료] : todolist에 값이 추가될때 기본 status값은 "active"이다. 체크박스를 클릭시 값은 "completed"로 변경된다.',
      "👉 [삭제] : 삭제버튼을 클릭시 매개변수로 받은 onDelect함수에 클릭한 아이템이 매개변수로 담아 전달된다.",
      "기존의 todolist 배열에 filter함수를 적용시켜 기존의todolist의 id != 내가 클릭한 아이디의 값 형태로 setTodos를 실행시켜 내가 누르지 않은 id의 값으로만 배열을 다시 만들어 todolist의 값을 갱신시키는 방법으로 구현하였다.",
      "👉  todolist의 값이 변경될때마다 useEffect를 사용해 todo의 값을 localStorage.setItem을 이용해 문자열형식으로 저장한뒤 (stringify)",
      "다시 localStorage.getItem로 todolist의 값을 객체형태로 불러와준뒤(parse) return해주어 새로고침을 하여도 값이 유지되게끔 구현하였습니다.",
      "💡 느낀점, 알게된점, 나의 생각 💡",
      "🧐 useState에 대한 이해 뿐만 아니라 복잡한 구조에서의 사용 형태에 대해서도 완벽히 이해할 수 있는 계기가 되었다.",
      "🧐 다만 모든 값을 useState로 관리하게 되어서 조금 복잡한 구조이기도 하지만 이해를 했어도 여러번 복기를 통하여 구글링 없이도 스스로 구현을 할 수 있게 되었다.",
      "🧐 또한 값을 저장하기 위해서는 프론트 엔드의 영역만으로는 어렵다 라는 생각을 가졌었는데 자바스크립트의 매서드중 localstorage에 저장할 수 있는 기능이 있다는걸 알게되었다. ",
      "🧐 적용을 해보고 실제 새로고침시에도 값이 남아있는걸 보고 자바스크립트는 내가 생각한것 보다 더 깊고 더 흥미로운 언어라고 생각이 들어 평범한 웹형태의 구조가 아닌 다양한 서비스, 게임 등등을 자바스크립트만을 사용하여 만들어보고싶다.",
      "🧐 마지막으로 useState로 todolist의 값을 관리하는 과정에서 배열의 값을 추가, 삭제, filter을 통한 추출 등등 자바스크립트적 개념을 다시한번 복습할 수 있는 기회가 되었다."
    ],
    github:"https://github.com/seonghong1/REACT_TODOLIST",
    siteUrl:"https://6396ce3dc7299845cb0967c0--seonghong-todolist.netlify.app"
  },
  {
    title: "📗Phone Book📗",
    pc_img: ["project/프로젝트_폰북_pc01.png", "project/프로젝트_폰북_pc02.png"],
    m_img: ["project/프로젝트_폰북_m01.png", "project/프로젝트_폰북_m02.png"],
    skills: ["../../img/react.png", "../../img/js.png", "../../img/sass.png", "../../img/css.png", "../../img/html.png"], 
    info: "번호를 저장하고 검색 기능을 이용해보세요 ❗ (Redux, React-Bootstrap, Post CSS)",
    detail_info: [
      "💁‍♂️ 간단한 설명 💁‍♂️",
      "👉 input에 이름과 전화번호를 입력하고 submit시 dispatch함수가 실행되며 값이 reducer로 전달됩니다.",
      "👉 빈배열(초기값)에 push를 사용하여 연속적으로 값이 추가되게끔 구현하였습니다.",
      "우측 전화번호 리스트에서는 useSelector를 사용해 store에 접근하여 값을 갖고오며 map함수를 사용하여 배열의 값이 추가될때마다 아이템이 생성되게끔 구현하였습니다.",
      "👉 또한 useState를 사용해 키워드의 값(우측 input에 입력한값)이 있을 경우에는배열에 filter매서드를 키워드가 포함된 값을, 공백일경우 기존의 배열값을 노출되게끔 기능을 구현하였습니다.",
      "💡 느낀점, 알게된점, 나의 생각 💡",
      "🧐 기존의 useState에서는 값을 지정하고 그 값을 자식요소들에게 props로 전달하고 다시 자식에게 전달하는 형태의 구조였다.",
      "🧐 props로 전달이 아닌 useContext와 유사한 Redux를 사용하여 필요한 컴포넌트에서 useSelector을 사용해",
      "store의 값을 불러올 수 있는 점은 간편하고 효율적인 방법이라고 생각이 들었다.",
      "🧐 또한 useState는 값, 상태관리가 조금만 복잡해져도 코드의 길이나 가독성면에서 떨어지는 단점을 Redux를 사용해 보완하고 가독성과 직관적으로 코드를 볼 수 있는 점에서 많은 장점을 갖고있는 것 같다.",
      "🧐 Redux를 사용하여 값을 저장, 갱신, 출력등 다양한 쓰임새로 사용이 가능할거같아 조금더 복잡한 트리구조형태의 프로젝트에서도 적용하여 깊이 배우고싶다는 생각이 들었다."
    ],
    github:"https://github.com/seonghong1/REACT_PhoneBook",
    siteUrl:"https://master--seonghong-phonebook.netlify.app/"
  },
  {
    title: "👕H&M👕",
    pc_img: ["project/프로젝트_hnm_pc01.png", "project/프로젝트_hnm_pc02.png", "project/프로젝트_hnm_pc03.png", "project/프로젝트_hnm_pc04.png"],
    m_img: ["project/프로젝트_hnm_m01.png", "project/프로젝트_hnm_m02.png", "project/프로젝트_hnm_m03.png", "project/프로젝트_hnm_pc04.png"],
    skills: ["../../img/react.png", "../../img/js.png", "../../img/sass.png", "../../img/css.png", "../../img/html.png"], 
    info: "React-Router을 사용하여 디테일 페이지, 로그인 이벤트를 구현한 H&M SPA사이트 입니다.( json-server, Router, React-Bootstrap)",
    detail_info: [
      "💁‍♂️ 간단한 설명 💁‍♂️",
      "👉루트 폴더 안에 데이터베이스 역할을 해주는 db.josn파일을 생성해주고, 안에는 이미지의 url, 기타 텍스트 정보들이 기입되어 있습니다. ",
      "👉서버를 실행시켜주고 fetch를 통해 api의 값을 갖고오는 형태로 구현 되었습니다.",
      "👉react-bootstrap과 미디어쿼리를 사용해 반응형을 디자인 했으며,",
      "👉검색기능은 router의 쿼리 기능을 사용하여 input에 텍스트가 입력되어지고 keydown시 처음 api를 갖고오는 fetch에 쿼리값이 대입, 되어 지는 형식으로 해당 키워드가 포함된 데이터가 불러와지게끔 구현하였습니다",
      "👉또한 useParams를 이용하며 클릭한 id값과 불러온 api의 id값과 동일한 데이터를 불러와 detail페이지를 구현하였습니다.",
      "💡 느낀점, 알게된점, 나의 생각 💡",
      "🧐크게 두가지 유용한 기능을 알게되었다. 첫번째로 useParams이다. path에서의 :id 값을 일반적인 문자, 숫자가 아닌 변수의 형태를 띄고 있어, 해당되는 id값의 데이터만 도출해내는 방법으로 detail페이지를 구현하게 되었다.",
      "🧐두번째로는 json-server이다. 서버가 없는 환경에서 서버를 제공해준다는 것은 엄청난 기능이라고 생각한다. 특히 프론트엔드 작업 환경에서 간단한 실무적인 기능을 구현할때 정말 유용하게 사용할 수 있을 것 같다.",
      "🧐화면이 새로고침 없이 특정부분만 렌더링 되는 형태의 기능을 다른 사이트와 앱에서 보기만 했었다. 그치만 React-Router의 컴포넌트와 hook을 사용해 직접 구현해보니 정말 유용한 기능이고 좋은 경험이었다. 웹, 앱에서 자주 사용하는 기능이라 SPA에 대해 더 깊히 학습 욕구가 생기게 되었다",
  
    ],
    github:"https://github.com/seonghong1/REACT_HnM",
    siteUrl:"https://master--seonghont-hnm.netlify.app"
  },
  {
    title: "🌞Weather APP🌞",
    pc_img: ["project/프로젝트_날씨앱_pc01.png", "project/프로젝트_날씨앱_pc02.png"],
    m_img: ["project/프로젝트_날씨앱_m01.png", "project/프로젝트_날씨앱_m02.png"],
    skills: ["../../img/react.png", "../../img/js.png", "../../img/css.png", "../../img/html.png"], 
    info: "현재 날씨와 도시 버튼을 클릭해 날씨를 확인해보세요 ❗",
    detail_info: [
      "💁‍♂️ 간단한 설명 💁‍♂️",
      "👉 weather API를 fetch를 이용하여 갖고오고, useState를 사용해 값을 저장했습니다",
      "👉 도시 버튼을 클릭시 도시명을 이용해 api를 다시 불러와주며, 버튼을 클릭하지 않은, 맨처음 상태에서는 현재 위도, 경도 값을 position.coords.latitude / position.coords.longitude 구해서 컴포넌트에 props로 전달해준 뒤 화면에 노출시켰습니다.",
      "💡 느낀점, 알게된점, 나의 생각 💡",
      "👉 react에서 api데이터를 갖고오는 방법은 fetch를 사용해 달라진점은 없지만 갖고온 데이터 값을 useState에 저장하고, 자유롭게 사용하는점에서 다시한번 유용한 라이브러리라고 생각이 들었다",
      "👉 데이터가 객체 형태로 변환되기 이전에 로딩애니메이션의 boolean값을 true, 변환된 이후에는 false를 넣어주어 로딩애니메이션을 구현하였습니다",
      "👉 OpenWeatherApp에서 다양한 날씨 관련 api들이 있어 개인 토이프로젝트 다양한 형태로 사용해보고 싶다고 느꼈습니다."
    ],
    github:"https://github.com/seonghong1/REACT_WeatherAPP",
    siteUrl:"https://6398215fd96ee5523be7e55c--seonghong-weatherapp.netlify.app"
  },
  {
    title: "✋가위바위보 게임👊",
    pc_img: ["project/프로젝트_가위바위보게임_pc01.png", "project/프로젝트_가위바위보게임_pc02.png", "project/프로젝트_가위바위보게임_pc03.png"],
    m_img: ["project/프로젝트_가위바위보게임_m01.png", "project/프로젝트_가위바위보게임_m02.png", "project/프로젝트_가위바위보게임_m03.png"],
    skills: ["../../img/react.png", "../../img/js.png", "../../img/css.png", "../../img/html.png"], 
    info: "가위바위보 게임 입니다. 컴퓨터를 이겨보세요 ❗",
    detail_info: [
      "💁‍♂️ 간단한 설명 💁‍♂️",
      "👉 클릭시 컴퓨터의 랜덤한 값, 내가 클릭한 아이템의 값을 나타내는 함수가 호출됩니다.",
      "👉 함수의 매개변수에 해당되는 가위, 바위, 보의 단어가 전달되며,단어에 따라 출력되는 값을 삼항연산자를 통해 나타내었습니다.",
      "ex) if(uu.name === 'Rock') { return cc.name === 'Scissors' ? 'WIN' : 'LOSE' }",
      "💡 느낀점, 알게된점, 나의 생각 💡",
      "👉 가장 기본이 되는 useState Hook을 사용하여 동적으로 상태를 관리하는 방법을 알게되고 다른 상황에서도 능동적으로 사용할 수 있게 해준 계기가 되었습니다.",
      "👉 또한 도출해낸 값을 자식요소에게 props로 전달하는 방법은 정말 간편하고 유용한 기술이라고 생각이 들었습니다.",
      "👉 결과적으로는 useState, props에 대한 개념적 이해를 완벽히 할 수 있게 되었습니다."

    ],
    github:"https://github.com/seonghong1/REACT-RockScissorsPaper",
    siteUrl:"https://master--seonghong-rockscissorspaper.netlify.app"
  },
  {
    title: "📸PWA 네이버 클라우드📸",
    pc_img: ["project/프로젝트_네이버클라우드_pc03.png","project/프로젝트_네이버클라우드_pc04.png", "project/프로젝트_네이버클라우드_pc09.png", "project/프로젝트_네이버클라우드_pc05.png","project/프로젝트_네이버클라우드_pc06.png","project/프로젝트_네이버클라우드_pc07.png","project/프로젝트_네이버클라우드_pc08.png", "project/프로젝트_네이버클라우드_pc10.png"],
    m_img: ["project/프로젝트_네이버클라우드_m01.png","project/프로젝트_네이버클라우드_m02.png", "project/프로젝트_네이버클라우드_m03.png", "project/프로젝트_네이버클라우드_m04.png","project/프로젝트_네이버클라우드_m05.png","project/프로젝트_네이버클라우드_m06.png","project/프로젝트_네이버클라우드_m07.png", "project/프로젝트_네이버클라우드_m08.png"],
    skills: ["../../img/js.png", "../../img/sass.png","../../img/html.png"], 
    info: "사진 업로드, 공유 등 어플의 형태와 유사합니다 ❗(sw-precache)",
    detail_info: [
      "💁‍♂️ 간단한 설명 💁‍♂️",
      "🔔TIP 메인 홈페이지 구경하기 -> 우측상단 메뉴의 네이버클라우드 이미지를 클릭하기 -> 네이버클라우드 어플로 도착 !",
      "👉버튼을 통해 이동할 수 있는 페이지는 깜빡이도록 애니메이션을 적용하였습니다.",
      "👉사진을 업로드 하는 기능은 자바스크립트의 FileReader객체를 사용하여 구현했으며,",
      "사진을 클릭시 큰 이미지로 나오고, 사진이 업로드 되는 시점을 Date객체를 사용해 나타내었습니다.",
      "👉또한 아래 공유 버튼을 클릭하면 카카오톡 공유 API를 사용해 실제 공유기능을 구현하였습니다.",
      "👉이벤트 페이지에서의 D-DAY는 기준이 되는 날짜 - 현재날짜를 연산해 실제 D-DAY를 표현하였으며, 룰렛의 형태는 canvas태그를 사용해 구현하였습니다",
      "👉마지막으로 manifest를 직접 작성하고, sw-precache-config.js파일에 sw-precache.js파일로 업로드할 파일의 경로를 정의해 준 뒤 sw-precache라이브러리를 사용하여 Service-worker.js파일의 내용을 토대로 sw파일을 생성하였습니다.",
      "💡 느낀점, 알게된점, 나의 생각 💡",
      "👉네이버 클라우드를 작업하게 되어 PWA에 대해 이해할 수 있는 좋은 기회가 되었다.",
      "👉최대한 외부 라이브러리를 사용하지 않고 자바스크립트만을 사용하여 여러 이벤트를 접목시키고 싶어 다양한 기능들을 넣어보게 되었다.",
      "👉앞으로 이미지를 새로고침해도 남아있도록 구현하고, 삭제기능 등등 실제 제공되는 서비스와 일치하도록 완성하고싶다.",
      "👉사이트의 규모가 클수록 파일의 목록을 직접 작성하기에는 무리가 있지만 sw-precache 라이브러리를 사용하게되면 경로와 규칙에 해당되는 파일들을 자동으로 업로드 해주고, 기타 요소들을 작성해주어서 유용한 라이브러리라고 생각이 들었다.",
      "👉자바스크립트를 사용하여 무궁무진한 기능들을 넣을 수 있어, 다른 프로젝트에서도 자바스크립트만을 사용하여 다양한 기능들을 넣어 완벽한 하나의 서비스를 만들어보고 싶다고 생각이 들었다"
    ],
    github:"https://github.com/seonghong1/PWA_NaverCloud",
    siteUrl:"https://seonghong1.github.io/PWA_NaverCloud/"
  },
]
console.log(project[0].detail_info)
const clonecoding = [
  {
    title: "INZENT", img: ["project/반응형_인젠트_pc01.png", "project/반응형_인젠트_pc02.png"],
    skill: ["../../img/js.png", "../../img/jquery.png", "../../img/html.png", "../../img/css.png"],
    site: "https://github.com/seonghong1/CLONE_inzent",
    github:"https://seonghong1.github.io/CLONE_inzent/"
  },
  {
    title: "URBAN LAUNDERTTE", img: ["project/반응형_어반런드렛_pc01.png"],
    skill: ["../../img/js.png", "../../img/jquery.png", "../../img/html.png", "../../img/css.png"],
    site: "https://github.com/seonghong1/CLONE_Urbanlaunderette",
    github:"https://seonghong1.github.io/CLONE_Urbanlaunderette/"
  },
  {
    title: "타이어테크", img: ["project/반응형_타이어테크_pc01.png"],
    skill: ["../../img/jquery.png", "../../img/html.png", "../../img/css.png"],
    site: "https://github.com/seonghong1/CLONE_Tire-tech",
    github:"https://seonghong1.github.io/CLONE_Tire-tech/"
  },
  {
    title: "여행사 홈페이지(창작)", img: ["project/여행사_창작.png"],
    skill: ["../../img/jquery.png", "../../img/html.png", "../../img/css.png"],
    site: "https://github.com/seonghong1/CLONE_Travel",
    github:"https://seonghong1.github.io/CLONE_Travel/"
  },
  {
    title: "폴로(bootstrap위주)", img: ["project/부트스트랩_polo.png"],
    skill: ["../../img/html.png", "../../img/css.png"],
    site: "https://github.com/seonghong1/Bootstrap_polo",
    github:"https://seonghong1.github.io/Bootstrap_polo/"
  },
  {
    title: "빙그레", img: ["project/반응형_빙그레_pc01.png"],
    skill: ["../../img/js.png", "../../img/jquery.png", "../../img/html.png", "../../img/css.png"],
    site: "https://github.com/seonghong1/CLONE_Binggrae",
    github:"https://seonghong1.github.io/CLONE_Binggrae/"
  },
  {
    title: "우성사료", img: ["project/우성사료_pc01.png"],
    skill: ["../../img/jquery.png", "../../img/html.png", "../../img/css.png"],
    site: "https://github.com/seonghong1/CLONE_Woosungfeed",
    github:"https://seonghong1.github.io/CLONE_Woosungfeed/"
  },
  {
    title: "INSUROBO", img: ["project/반응형_인슈로보_pc01.png"],
    skill: ["../../img/jquery.png", "../../img/html.png", "../../img/css.png"],
    site: "https://github.com/seonghong1/CLONE-_Insurobo",
    github:"https://seonghong1.github.io/CLONE-_Insurobo/"
  },
  {
    title: "아산병원_모바일", img: ["project/적응형_아산병원_pc01.png", "project/적응형_아산병원_pc02.png", "project/적응형_아산병원_pc03.png", "project/적응형_아산병원_pc04.png"],
    skill: ["../../img/jquery.png", "../../img/html.png", "../../img/css.png"],
    site: "https://github.com/seonghong1/CLONE_Asan-Medical-Cente",
    github:"https://seonghong1.github.io/CLONE_Asan-Medical-Cente/"
  },
  {
    title: "도시락통", img: ["project/반응형_도시락통_pc01.png"],
    skill: ["../../img/html.png", "../../img/css.png"],
    site: "https://github.com/seonghong1/CLONE_Dosiraktong",
    github:"https://seonghong1.github.io/CLONE_Dosiraktong/"
  }
]
// 프로젝트 내부 이미지는 슬라이드로 설정
const Project = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="project">
      <div className="title">PROJECT</div>
      {/* ===== 프로젝트 pc버전 입니다 ===== */}
      <div className="project_wrap">
        {project.map((item, index) => {
          return (
            <div data-aos-duration="1000" data-aos="fade-up" className="project_item">
              <span className="number">{index + 1} / 8</span>
              <h1 className='project_name'>{item.title}</h1>
              <div className="project_inner">
                <div className="img_wrap">
                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {item.pc_img.map((img) => {
                      return <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                    })}
                  </Swiper>
                </div>
                <div className="text_wrap">
                  <ul className="project_skills">
                    {item.skills.map((skill) => <li style={{ backgroundImage: `url(${skill})` }}></li>)}
                  </ul>
                  <p className="info">
                    {item.info}
                  </p>
                  <p className="detail_info">
                    {item.detail_info.map((item)=> <span>{item}</span>)}
                  </p>
                  <div className="move">
                    <a href={item.github} target="_blank"></a>
                    <a href={item.siteUrl} target="_blank"><span>사이트<br />바로가기</span></a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {/* ===== 프로젝트 모바일버전 입니다 ===== */}
      <div className="project_mobile slide_top">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {project.map((item) => {
            return (
              <SwiperSlide>
                <div className="slide_item">
                  <div className="slide_title">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="slide_wrap">
                    <div className="top">
                      <div className="img_wrap">
                      <div className="move">
                      <a href={item.github} className='github' target="_blank"></a>
                      <a href={item.siteUrl} className='site' target="_blank">
                        <span>
                          사이트<br />바로가기
                          </span>
                        </a>
                    </div>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                          {item.m_img.map((img) => {
                            return <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                          })}
                        </Swiper>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="slide_skills">
                        {item.skills.map((item) => {
                          return <span style={{ backgroundImage: `url(${item})` }}></span>
                        })}
                      </div>
                      <p>{item.info}</p>
                      <p className='detail_info_m'>{item.detail_info.map((item)=><span>{item}</span>)}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <h2 className="cloneCoding_title">CloneCoding</h2>
      {/* ===== 클론코딩 pc버전 입니다 =====*/}
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="cloneCoding_wrap cloneCoding_style">
        {clonecoding.map((item) => {
          return (
            <article className=' cloneCoding_item'>
              <h3 className="name">{item.title}</h3>
              <div className="img_wrap">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                  {item.img.map((img) => {
                    return <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                  })}
                </Swiper>
              </div>
              <div className="skill_list">
                {item.skill.map((i) => {
                  return <span style={{ backgroundImage: `url(${i})` }} className="skill"></span>
                })}
              </div>
              <div className="move">
                <a className="github" href={item.github} target="_blank"></a>
                <a href={item.site}  target="_blank" className="site"><span>사이트<br />바로가기</span></a>
              </div>
            </article>
          )
        })}
      </div>
      {/* ===== 클론코딩 모바일 버전 입니다 ===== */}
      <div className="cloneCoding_m project_mobile cloneCoding_style">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {clonecoding.map((item) => {
            return (
              <SwiperSlide>
                <div className="slide_item">
                  <div className="slide_title">
                    <h3>{item.title}</h3>
                    <div className="move">
                      <a href={item.github} target="_blank" className='github'></a>
                      <a href={item.site} target="_blank" className='site'><span>사이트<br />바로가기</span></a>
                    </div>
                  </div>
                  <div className="slide_wrap">
                    <div className="top">
                      <div className="img_wrap">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                          {item.img.map((img) => {
                            return <SwiperSlide><div className="clone_m"><img src={img} alt="" /></div></SwiperSlide>
                          })}
                        </Swiper>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="slide_skills">
                        {item.skill.map((i) => {
                          return <span style={{ backgroundImage: `url(${i})` }}></span>
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Project