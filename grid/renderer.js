// const information = document.getElementById('info')

// information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

// const func = async () => {
//     const response = await window.versions.ping()
//     console.log(response) // prints out 'pong'
// }

// func()

// $(function(){
//     $('.input-daterange').datepicker();
// });= 

today = new Date()
threeMonthsAgo = new Date()
threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)
document.getElementById('fromDate').valueAsDate = threeMonthsAgo;
document.getElementById('toDate').valueAsDate = today;

document.getElementById('query').addEventListener("click", ()=>{
    option1 = document.getElementById('option1')
    option2 = document.getElementById('option2')
    fromDate = document.getElementById('fromDate')
    toDate = document.getElementById('toDate')

    msg = `option1: ${option1.value} option2: ${option2.value} from: ${fromDate.value} to: ${toDate.value}`
    alert(msg)
})