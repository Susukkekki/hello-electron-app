# Hello Electron App

> 공식 튜터리얼을 참고하여 간단한 app 을 만들어 봄.
>
> - https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites  

- [Hello Electron App](#hello-electron-app)
  - [프로젝트 생성](#프로젝트-생성)
  - [App 실행](#app-실행)
  - [VS Code 디버깅](#vs-code-디버깅)
  - [IPC](#ipc)
  - [More examples](#more-examples)
  - [App 패키징](#app-패키징)

## 프로젝트 생성

```bash
mkdir my-electron-app
cd my-electron-app
npm init
```

```bash
npm install electron --save-dev
```

## App 실행

```bash
npm run start
```

## VS Code 디버깅

> `.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "compounds": [
    {
      "name": "Main + renderer",
      "configurations": ["Main", "Renderer"],
      "stopAll": true
    }
  ],
  "configurations": [
    {
      "name": "Renderer",
      "port": 9222,
      "request": "attach",
      "type": "chrome",
      "webRoot": "${workspaceFolder}"
    },
    {
      "name": "Main",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args": [".", "--remote-debugging-port=9222"],
      "outputCapture": "std",
      "console": "integratedTerminal"
    }
  ]
}
```

## IPC

- https://www.electronjs.org/docs/latest/tutorial/ipc

## More examples

- https://www.electronjs.org/docs/latest/tutorial/examples

## App 패키징

```bash
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

```bash
npm run make
```

```text
out/
├── out/make/zip/darwin/x64/my-electron-app-darwin-x64-1.0.0.zip
├── ...
└── out/my-electron-app-darwin-x64/my-electron-app.app/Contents/MacOS/my-electron-app
```
