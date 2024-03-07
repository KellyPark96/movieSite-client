## 🛠 Development Setup

# pages

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/:id -> See User
/users/logout -> Log Out
/users/edit -> Edit MY Profile
/users/delete -> Delete MY Profile

/videos/:id -> See Video
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video

> `npm`을 기본 패키지 매니저로 사용합니다. (aws build 환경에서도 npm을 사용)

개발 서버 시작을 위해 다음 명령어를 사용하세요.

```bash
$ npm install
# package install

$ npm run dev
# run dev server
# server works on port 3030

# caddy reverse-proxy --from localhost:3000 --to localhost:3030 &
# https apply by caddy
# caddy가 dev와 함께 실행됩니다.
```

Caddy를 통해 서버가 시작되면 [https://localhost:3000](https://localhost:3000) 에 브라우저를 통해 접속합니다.

## 🖼️ 배너 아이템 교체 방법

1. 전달받은 Notion 에서 이미지 파일을 모두 내려받은 뒤,  
   public/images 폴더 속 popupBanner, slideBanner에 각각 저장합니다.  
   이때, 이미 존재하는 아이템은 이름을 그대로 유지하고, 새로운 아이템은 적절한 이름을 붙입니다.  
   팝업, 슬라이드 구분 없이 동일한 이벤트 배너는 반드시 동일한 이름을 사용합니다.

2. src/global/bannerItems.ts 파일로 이동  
   2-1. 웹, 앱 모두에서 사용하는 팝업 이미지는 commonPopupItems에서 관리  
   2-2. 웹, 앱 팝업 중 한 곳 + slide 배너에서 사용하는 이미지는 commomItems에서 관리  
   2-3. 한 곳에서만 사용하는 이미지들은 slideBannerItems, webPopupItems, appPopupItems에서 각각 관리

3. src(신규 아이템의 경우)와 url을 수정한 뒤, slideBannerItems, (web/app)PopupItems 에서 순서를 조정해줍니다.

4. 로컬에서 테스트 후 배포합니다.

## ✏️ Coding Conventions

- 각 파일에서 코드 작성 순서 (src/event.tsx 참고)
  - import 문
  - 상수 선언 및 할당 (re-rendering 이 필요하지 않은)
  - 함수 할당문 (re-rendering 이 필요하지 않은)
  - prop 상수 선언 및 할당 (re-rendering 이 필요하지 않은)
  - 컴포넌트의 prop 타입 선언
  - 컴포넌트
    - useEffect를 제외한 hook (useRouter, useState 등)
    - 변수 선언 및 할당
    - 함수 할당문
    - useEffect
    - prop 변수 선언 및 할당
    - return
- 2개 이상의 파일에서 쓰는 코드 조각은 공통파일로 분리합니다

- 함수 및 변수명

  - 가능한 `명확`, `상세`하고 목적보단 `원기능`에 맞는 이름을 사용합니다
    ```javascript
    const isBorder = star.votes > goal(X);
    const isGoalAchieved = star.votes > goal(O);
    // 향후 동일한 변수를 다른 목적으로 써야할 때 재사용하기 쉽다
    ```
  - 유사한 이름 사용은 지양합니다 (e.g. boardName, boardTitle)
  - boolean 변수는 반드시 is~ 형식으로 작성합니다
  - 이해 및 발음하기 쉽게 작성하고, 함수는 반드시 동사를 포함합니다 (변수는 지양)
  - 다만 이해를 높이기 위해 쓸데없이 긴 이름을 사용하는 것 또한 지양합니다

  ```javascript
  const loginKakao = () => {} (X)  // 발음하기 어려움
  const loginWithKakao = () => {} (X)  // 의미는 명확하나 너무 긴 이름
  const kakaoLogin = () => {} (O)  // 일상적인 발음순이라 발음하기 쉽고, 충분히 의미가 전달됨

  const starById = (id) => {} (X) // 동사가 없어 변수인지 함수인지 명확 X, 함수라면 스타정보를 가져오는 건지 저장하는 건지도 불확실
  const setStarById = (id) => {} (O)  // 의미가 명확하고 문법순이라 발음이 쉽다
  const getStarById = stars[id] (X) // 동사는 함수에만 사용
  const star = stars[id] (O) // 충분히 명확한 이름
  ```

- 주석은 꼭 필요한 경우에만 작성합니다
  - 단위가 중요한 경우 ( src/utils의 common.ts 혹은 localStorage.ts 참고 )
  - return 형식이 복합적인 경우 ( src/utils의 formatTime, formatShareTime 함수 참고 )
  - 구체적인 설명이 필요한 경우 ( src/api/PromoVote.ts의 sortAndRankStar 함수 참고 )

## 🎨 Commit Lint Setup

> [Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/) 에 기반한 Commit Lint를 사용합니다.

커밋시마다 lint가 실행됩니다. 컨벤셔널 커밋을 위반했다면 커밋이 불가능하니, 수정 후 커밋해주세요.

> 참고 : Conventional Commits을 도와주는
> [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)

## ⌨️ Deploy on Vercel and AWS (24.01.15 기준)

- [Dev 서버](https://culture-fit-e5b2b.web.app/)는
  [AWS BeanStalk](https://ap-northeast-2.console.aws.amazon.com/codesuite/codepipeline/pipelines/deploy-dev-culture-fit-front/view?region=ap-northeast-2#)을
  통해 배포되고 있고,
- [Live 서버](https://culture-fit-e5b2b.web.app)는 현재
  [Vercel](firebase http://~~~)을 통해 배포되고 있습니다.
- 추후 Live 서버도 AWS를 통해 배포될 예정입니다.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
