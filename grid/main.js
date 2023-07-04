const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

async function handleQuery(channel, param) {
  console.log(param)

  return JSON.stringify(
      [ 
        {
          id: 1,
          name: "Tom",
          age: 19
        },
        {
          id: 2,
          name: "Jane",
          age: 20
        },
        {
          id: 3,
          name: "Ace",
          age: 23
        }
      ]      
    )
}

function randomString(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz,randomPoz+1);
  }
  return randomString;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

async function handleQuerySubItems(channel, param) {  

  var results = []

  start = parseInt(param)

  for (i=start; i<10+start; i++) {
    var data = {
      id: i
    }
    
    for (j=0; j<9; j++) {
      data["col_" + j] = randomString(getRandomInt(5, 10))
    }
    
    results.push(data)
  }

  return JSON.stringify(results)
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, './preload.js')
      }
  })

  win.loadFile('./grid/grid.html')
  win.openDevTools({mode: 'bottom' /*'detach'*/})
}

app.whenReady().then(() => {
  // ipcMain.handle('ping', () => 'pong')

  ipcMain.handle('query', handleQuery)
  ipcMain.handle('querySubItems', handleQuerySubItems)

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {      
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})