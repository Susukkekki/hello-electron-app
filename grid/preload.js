const { contextBridge, ipcRenderer } = require('electron')

// contextBridge.exposeInMainWorld('versions', {
//   node: () => process.versions.node,
//   chrome: () => process.versions.chrome,
//   electron: () => process.versions.electron,
//   ping: () => ipcRenderer.invoke('ping')
//   // we can also expose variables, not just functions
// })

contextBridge.exposeInMainWorld('db', {
    query: (param) => ipcRenderer.invoke('query', param),    
    querySubItems : (param) => ipcRenderer.invoke('querySubItems', param)    
  })

  contextBridge.exposeInMainWorld('s3', {
    downloadObject: (bucketName, objectName) => ipcRenderer.invoke('downloadObject', bucketName, objectName)
  })