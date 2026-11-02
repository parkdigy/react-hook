# 에이전트 코딩 가이드

## 프로젝트

`@pdg/react-hook`은 TypeScript React Hook npm 패키지다. `src/index.ts`와 각 하위 `index.ts`가 공개 API를 구성하며, `examples/`는 라이브러리 소스를 직접 가져오는 별도 Rspack 앱이다. 상세 구조와 알려진 주의점은 [프로젝트 구조](docs/agents/project.md), 구현 절차는 [npm 패키지 개발 스킬](.agents/skills/npm-package-development/SKILL.md)을 참고한다.

## 작업 원칙

- 시작할 때 `git status --short`와 관련 소스·설정을 확인하고 기존 변경을 보존한다.
- 문서와 작업 결과는 한글로 작성한다. 식별자와 명령은 원래 표기를 사용한다.
- 공개 API를 변경할 때 내보내기, 타입 선언, 소비자 호환성, 테스트, README와 예제의 영향을 확인한다.
- 의존성 변경 시 루트와 예제의 사용처, peer dependency, `.nvmrc`와의 호환성, React 중복 여부를 확인한다. `@pdg/react-admin-layout`의 peer도 유지한다.
- 커밋·푸시·npm 게시 명령은 요청받았을 때만 실행한다. `npm run pub`는 실제 게시를 수행한다.
- `dist/`, `examples/dist/`, 루트 HTML에는 Git 추적 파일이 있다. 생성물을 직접 수정하지 않으며, 빌드 전에 기존 변경과 삭제·덮어쓰기 영향을 확인한다.

## 검증

`.nvmrc`의 Node 버전과 npm을 사용한다. 루트와 `examples/`의 의존성은 별도이며, Git에서 제외된 로컬 잠금 파일이 현재 선언과 다를 수 있으므로 설치 옵션과 영향을 확인한다.

```sh
npm run tsc
npm run lint
(cd examples && npm run tsc && npm run lint)
```

동작 변경에는 적절한 테스트와 실행 명령을 마련한다. 현재 테스트 파일과 npm `test` 스크립트는 없고, Jest 설정은 `.tsx` 변환을 포함하지 않으며 Node 환경을 사용한다. Hook 테스트에 필요한 변환과 DOM 환경을 확인한다.

라이브러리 빌드 변경은 `npm run build`로 검증한다. Watchman 접근 오류 시 `./node_modules/.bin/rollup -c --bundleConfigAsCjs`를 별도 실행하고 표준 빌드 실패를 함께 보고한다. 예제 변경은 `(cd examples && npm run build:rspack)`으로 검증한다. 두 명령 모두 산출물을 정리하거나 덮어쓴다. 예제 전체 빌드 `npm run build:examples`는 루트 `index.html`, `404.html`도 덮어쓴다.

문서만 변경한 경우 링크·경로·명령을 실제 설정과 대조한다. 완료 시 변경 내용, 검증 결과 및 미확인 사항을 한글로 보고한다.
