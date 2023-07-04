

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

document.getElementById('query').addEventListener("click", async ()=>{
    option1 = document.getElementById('option1')
    option2 = document.getElementById('option2')
    fromDate = document.getElementById('fromDate')
    toDate = document.getElementById('toDate')

    msg = `option1: ${option1.value} option2: ${option2.value} from: ${fromDate.value} to: ${toDate.value}`
    // alert(msg)

    $('#main_table tbody').empty()

    const resultJson = await window.db.query(msg)
    results = JSON.parse(resultJson)    
    for (idx in results) {        
        $('#main_table').append($('<tr>').attr('id', results[idx].id)
            .append($('<td>').append(results[idx].id))
            .append($('<td>').append(results[idx].name))
            .append($('<td>').append(results[idx].age))
        )           
    }

    $("#main_table td").on("click", async (e) => {
        // alert(e.target.parentElement.id)

        $('#sub_table tbody').empty()

        const resultJson = await window.db.querySubItems(e.target.parentElement.id)
        results = JSON.parse(resultJson)    
        for (idx in results) {        
            var row = $('<tr>').attr('id', results[idx].id)            
            for (key in results[idx]) {                
                row.append($('<td>').append(results[idx][key]))
            }
            $('#sub_table').append(row)            
        }

        $("#sub_table td").on("click", async (e) => {
            // alert(e.target.parentElement.id)
            $('#image').attr("src", `../image/${e.target.parentElement.id}.jpg`)
        })
    })
})

