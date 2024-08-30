# 6candoit
[Vercel 배포 주소](https://6-candoit.vercel.app)
![image](https://github.com/user-attachments/assets/c8476110-04df-4a56-bec9-6042e5c6cf92)

## Spring_3기 미니프로젝트

6팀_육캔두잇

|이름|주요 역할|
|---|---|
|장재혁|형상관리|
|김지혜|DB 관리|
|조중휘|코드 통합 및 배포|
|김가빈|회의록 관리|
|정현우|API 관리|

## 프로젝트 계획

### 목표
- 웹 개발과정 숙달을 위해, 각 개인 페이지 양식과 동작을 해당 팀원이 직접 구현

### 웹 종합반 내용에 기초한 라이브러리 모듈
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLME0hpAJOqBGhaVjcgkk8hIKS3S4GAqrLg&s" width="100" height="100"/>

- jquery를 통한 DOM 조작

<img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" width="100" height="100"/>

- bootstrap을 통한 빠른 마크업 및 스타일링

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSusjkbP-h1ukv_7P2s5sLX9D-rtJgCn_jc1g&s" width="100" height="100"/>

- firestore js를 이용한 간편한 데이터베이스 조작

### Github 활용 방침

- 브랜치 및 PR 기능은 사용하지 않음
- 모든 팀원이 메인 브랜치에서 Push하여 작업
- 병합 문제 발생 시, 팀원 간 스터디를 통해 조율

## 결과물

### 배포

- Github page, Netlify, Vercel 등의 무료 호스팅이 적합
- 저장소를 통해 CI/CD 및 빌드 테스트를 자동적으로 진행하는 Vercel 사용
- [6-candoit.vercel.app](http://6-candoit.vercel.app) 에서 웹 페이지 게시 중

### CRUD & restFul

- 팀원 데이터에 대한 간단한 CRUD 기능 구현
- js 모듈로 구현된 DB에 한해, restful을 다소 간과하고 진행
- **기능 시연**

## 기능 명세

- DB의 팀원 정보를 가져와 일괄적으로 카드로 표시하는 기능
- 카드를 클릭했을 시 지정된 서브 페이지로 패러미터와 함께 이동하는 쿼리스트링 기능
- 하드 코딩된 개별 양식이 존재할 시 해당 양식을 우선적으로 적용하는 조건부 기능
- DB에 js모듈을 통해 팀원 정보를 생성, 조회, 수정 그리고 삭제하는 모든 CRUD 기능

### 해결하면 좋은 부분들
- firebase 키 환경변수화
- 반응형 웹
- 잘못된 URL 처리
