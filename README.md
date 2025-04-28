# 📚 YourDiary 모노레포

**YourDiary** 프로젝트의 모든 핵심 애플리케이션 — **프론트엔드**, **백엔드**, **iOS 앱** — 을 하나의 저장소에 통합하여 관리합니다.

---

## 📦 폴더 구조

```plaintext
your-diary-monorepo/
├── front/    # React + TypeScript 기반 웹 애플리케이션
├── back/     # NestJS + TypeScript 기반 백엔드 서버
└── ios/      # Swift 기반 iOS 애플리케이션
```

---

## 🚀 프로젝트 개요

| 폴더 | 설명 | 주요 기술 스택 |
| :--- | :--- | :--- |
| `front/` | 사용자가 일기를 작성하고 날씨를 조회할 수 있는 웹 애플리케이션입니다. | React, TypeScript, TanstackQuery, Zustand |
| `back/` | 사용자 인증, 일기 저장, 날씨 데이터 처리 등을 담당하는 백엔드 서버입니다. | NestJS, TypeScript, PostgreSQL |
| `ios/` | YourDiary의 iOS 전용 모바일 애플리케이션입니다. | Swift, UIKit, WKWebView |

---

## ✨ 주요 기능

- ✍️ **일기 작성**: 사용자가 매일 자신의 감정과 활동, 날씨를 기록할 수 있습니다.
- ☀️ **실시간 날씨 연동**: 위치 기반으로 실시간 날씨 정보를 불러와 기록합니다.
- 🔒 **보안 인증 시스템**: OAuth 2.0 및 JWT를 활용하여 안전한 사용자 인증을 제공합니다.
- 📱 **멀티 플랫폼 지원**: 웹과 iOS 앱을 통해 다양한 환경에서 이용할 수 있습니다.

---

## ⚙️ 시작하기

본 저장소를 클론한 후, 각 프로젝트별로 의존성을 설치하고 실행할 수 있습니다.

```bash
git clone https://github.com/YuDa.git
cd YuDa
```

### 프론트엔드 실행

```bash
cd front
npm install
npm run dev
```

### 백엔드 실행

```bash
cd back
npm install
npm run start:dev
```

### iOS 앱 실행

```bash
# Xcode를 이용하여 ios/ 폴더를 열고,
# 시뮬레이터 또는 실제 기기에서 실행합니다.
```

---

## 📜 배포 및 CI/CD

- **프론트엔드**: GitHub Actions를 통해 트리거 후 GitHub Pages 통합 배포
- **백엔드**: Docker를 활용한 서버 배포
- **iOS 앱**: 추후 App Store Connect를 통한 배포 예정

---

## 🛡️ 라이선스

본 프로젝트는 MIT License 하에 배포됩니다.

---

## 📮 문의

프로젝트와 관련하여 문의 사항이나 이슈가 있으신 경우, [tlsdbtn0507](https://github.com/tlsdbtn0507)로 연락 주시거나 이슈를 등록해주시기 바랍니다.
