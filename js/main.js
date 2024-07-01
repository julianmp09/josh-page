let grafico = document.getElementById("myChart").getContext("2d");

let myChart = new Chart(grafico,{
type :"line",
data:{
    labels: ["mon","tue","wed","thu","fri","sat","sun"],
    datasets:[
        { 
        label: "statistics",    
        backgroundColor:"rgb(0,0,0)",
        data:[0,1.5,2.5,1,4,3,2],
        tension: 0.5,
        borderColor: 'rgb(0,0,0)'
    }
]
},
options: {
    scales:{
        y: {
            max: 5
        }
    }
}
}
)