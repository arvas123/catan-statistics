var clicks=0;
let arr = [0,0,0,0,0,0,0,0,0,0,0]
function onClick(id){
    arr[id-2]+=1;
    var x=arr[id-2];
    toString(id);
    id+='p';
    document.getElementById(id).innerHTML = x;
}
let odds=[0,0,0,0,0,0,0,0,0,0,0]
for(let i=1;i<=6;i++){
    for(let j=1;j<=6;j++){
        odds[i+j-2]+=(1/36);
    }
}
var k=0;
var chart,data,series1,xaxis,yaxis, ticks;
d=[[0,0,0]]
data=anychart.data.set(d);

chart = anychart.column();
series1 = chart.column(data.mapAs({x: 0, value: 1, fill: 3, stroke: 5, label: 6}));
series1.name("In Game");
series2 = chart.column(data.mapAs({x: 0, value: 2, fill: 3, stroke: 5, label: 6}));
series2.name("Expected");
chart.title("Number Frequency");
xaxis=chart.xAxis();
xaxis.title("Number");
yaxis=chart.yAxis();
yaxis.title("Frequency");
ticks=chart.yScale().ticks();
ticks.allowFractional(false);
function gen(){
    
    let d1=[];
    let d2=[];
    let sum = arr.reduce((a, b) => a + b);
    for(var i=2;i<=12;i++){
        let n = [];
        let n1=[];
        n[0]=i;
        n[1]=arr[i-2];
        n1[0]=i;
        n1[1]=odds[i-2]*sum;
        d1[i-2]=n;
        d2[i-2]=n1;
    }
    if(k!=1){
        
        chart.container("container");
        chart.draw();
    }
    k=1
    series1.data(d1);
    series2.data(d2);
}