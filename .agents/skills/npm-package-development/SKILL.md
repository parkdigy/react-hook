---
name: npm-package-development
description: 이 저장소의 React Hook·TypeScript npm 패키지 기능, 오류, 공개 API, 의존성 및 빌드 설정을 변경할 때 사용한다. 소스·테스트·타입·예제·배포 진입점에 미치는 영향을 함께 확인한다.
---

# npm 패키지 개발

## 사용 시점과 입력

Hook 구현, 오류 수정, 공개 타입, 의존성 또는 빌드·배포 설정 변경에 사용한다. 요청과 완료 조건을 확인하고 [저장소 지침](../../../AGENTS.md), [프로젝트 구조](../../../docs/agents/project.md), 현재 작업 트리와 관련 소스·설정을 읽는다. 소비자의 React·Node·모듈 환경에 대한 요구가 있으면 함께 확인한다.

## 분석과 구현

1. `git status --short`로 기존 변경을 확인한다. 요청과 관련된 Hook, 하위 배럴 및 `src/index.ts`, 예제, 테스트, 타입·배포 설정을 추적하고 변경 범위와 검증 방법을 정한다.
2. Hook 변경 시 렌더·의존성 변화·언마운트, cleanup 및 ref 동작 중 영향받는 부분을 확인한다. `useEffectEvent`를 사용하는 Hook의 React 호환 범위를 실제 peer 선언과 대조한다. 이름을 변경할 때는 기존 공개 API 호환성을 검토한다.
3. 공개 API 또는 타입 변경 시 `src/`의 배럴과 생성될 선언, README, 소스를 직접 가져오는 `examples/`를 확인한다. 타이머 관련 공개 타입의 `NodeJS.Timeout`과 소비자 타입 해석도 확인한다.
4. 의존성 변경 시 양쪽 `package.json`, 실제 사용처와 peer 범위, `.nvmrc`, React·React DOM 버전 및 중복 여부를 확인한다. 예제는 `@pdg/react-admin-layout`의 MUI·Emotion·React Router·SimpleBar peer를 사용한다. 설치된 트리는 각 디렉터리에서 `npm ls`로 확인하고, 최신 버전을 적용할 수 없으면 원인을 기록한다.
5. 로컬 `package-lock.json`은 Git 제외 대상이며 선언과 다를 수 있다. 설치·감사 시 사용한 잠금 파일과 옵션을 확인하고, 기존 잠금 파일과 `node_modules`를 무심코 삭제하지 않는다.

## 검증과 검토

- `AGENTS.md`의 타입·lint 명령과 변경에 적합한 테스트를 실행한다. 동작 변경 시 실제 공개 API를 호출하고 변경된 생명주기나 cleanup을 검증하는 테스트를 마련한다. 현재 테스트 파일과 npm `test` 스크립트가 없고 Jest는 `.tsx`를 변환하지 않으며 Node 환경이므로 필요한 실행 명령과 환경을 함께 마련한다.
- 라이브러리 빌드 변경은 표준 빌드를, 예제 변경은 Rspack 빌드를 확인한다. 실행 전 추적·미추적 산출물의 기존 변경을 확인한다. Rollup은 `dist/*`를 정리하고 Rspack 프로덕션 빌드는 `examples/dist/`를 정리한다. 예제 전체 빌드는 루트 HTML도 덮어쓴다.
- 배포 설정 변경은 `npm pack --dry-run`과 실제 소비자의 import·require·타입 해석을 확인한다. 예제는 소스를 직접 가져오므로 예제 성공만으로 배포물 호환성을 판단하지 않는다.
- Watchman 오류에는 Rollup을 별도로 확인하고 표준 빌드 실패를 명시한다. 개발 서버 응답만으로 브라우저 렌더링이나 HMR을 검증했다고 보고하지 않는다. 실패와 미실행은 이유와 함께 기록하고 검사 설정을 완화해 숨기지 않는다.
- 마지막으로 diff와 생성물, 공개 API, 기존 변경 보존 여부를 검토한다. 변경 목적과 검증 결과, 미확인 사항을 한글로 보고한다.

여러 세션에 걸치거나 인계가 필요한 작업만 [작업 기록 양식](templates/task.md)을 `_workspace/<작업명>/task.md`에 복사한다. 작업명은 경로로 안전한 짧은 영문·숫자·하이픈을 사용하며 다른 기록을 덮어쓰지 않는다.
