# 김하은 (Haeun Kim) - Portfolio

순수 HTML/CSS/JS로 만든 개인 포트폴리오 사이트입니다. 빌드 도구 없이 바로 브라우저에서 열거나
GitHub Pages로 배포할 수 있습니다.

## 로컬에서 미리보기

`index.html`을 브라우저로 더블클릭해서 열어도 되고, 로컬 서버로 띄우고 싶다면:

```bash
python -m http.server 5500
```

이후 브라우저에서 `http://localhost:5500` 접속.

## GitHub Pages로 배포하기

1. GitHub에서 새 저장소를 만듭니다. (예: `rlagkdms4372/rlagkdms4372.github.io` 로 만들면
   `https://rlagkdms4372.github.io` 주소로 바로 배포됩니다. 다른 이름으로 만들면
   `https://rlagkdms4372.github.io/저장소이름` 경로로 배포됩니다.)
2. 이 `portfolio` 폴더 안의 파일들(`index.html`, `style.css`, `script.js`)을 저장소 루트에 push 합니다.

```bash
cd portfolio
git init
git add index.html style.css script.js README.md
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/rlagkdms4372/저장소이름.git
git push -u origin main
```

3. GitHub 저장소 → **Settings → Pages** 에서 Source를 `main` 브랜치, `/ (root)` 폴더로 설정합니다.
4. 몇 분 후 `https://rlagkdms4372.github.io/저장소이름` (또는 `https://rlagkdms4372.github.io`)에서
   확인할 수 있습니다.

## 채워야 할 내용

- **Experience 섹션** (`index.html`의 `#experience`): 학력/경력 예시 자리표시자를 실제 이력으로 교체하세요.
- 각 프로젝트 카드의 GitHub 링크는 `frog-habit-prediction`, `mini-gpt`, `abtesting` 저장소 이름을
  기준으로 작성되어 있습니다. 실제 GitHub 저장소 이름이 다르다면 `index.html`에서 링크를 수정하세요.
