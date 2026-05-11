# IA Quest N1

Aplicação React + Vite para estudar IA N1 com exercícios, revisão e judge local guiado para Prolog/Python.

GitHub Pages: https://nataovaz.github.io/estudo-ia-app/

## Requisitos

- Node.js LTS
- Python no PATH para exercícios Python
- SWI-Prolog no PATH (`swipl`) para exercícios Prolog

## Rodar

```bash
npm install
npm run dev
```

Frontend: `http://127.0.0.1:5173`

Backend do judge: `http://127.0.0.1:3001`

No PowerShell do Windows, se `npm` for bloqueado por Execution Policy, use:

```powershell
npm.cmd install
npm.cmd run dev
```

Ou execute `start-dev.cmd` na pasta do projeto.

## Publicar no GitHub Pages

Este deploy publica apenas o frontend. O judge local (Prolog/Python) nao funciona no GitHub Pages.

1) Faça push para a branch `main`.
2) No GitHub, abra Settings -> Pages e selecione "GitHub Actions".
3) O workflow ajusta a base do Vite automaticamente usando o nome do repositório.

A URL final fica assim:

```
https://<seu-usuario>.github.io/estudo-ia-app/
```

### Judge online (Render)

Para o judge funcionar no GitHub Pages, publique o backend em um host e configure a URL.

1) Suba este repo no GitHub.
2) No Render, crie um novo Web Service apontando para o repo.
	- Build Command: `npm ci`
	- Start Command: `npm start`
3) Depois do deploy, copie a URL publica do service (ex: https://ia-quest-judge.onrender.com).
4) No GitHub, abra Settings -> Variables and secrets -> Actions.
5) Crie a variavel `VITE_JUDGE_BASE_URL` com essa URL.
6) Faça um novo push para disparar o deploy do Pages.

O frontend usa `VITE_JUDGE_BASE_URL` para chamar o judge remoto.

## Scripts

- `npm run client`: inicia só o Vite
- `npm run server`: inicia só o backend Express
- `npm run dev`: inicia frontend e backend juntos
- `npm run build`: gera build de produção

O arquivo antigo foi preservado em `legacy-index.html`.
