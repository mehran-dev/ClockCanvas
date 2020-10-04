var timeA;//= new Date(2020, 12, 12, 12, 12, 12);
var timeB;//= new Date(1995, 12, 1, 1, 6, 30);
var timeC;//= new Date(2020, 3, 12, 5, 35, 12);
//var timeM;//= new Date(2020, 3, 12, 2, 20, 12);

var timeDatas = [
    { id: "A", timeCaption: "لندن", h: 14, m: 33, s: "" },
    { id: "B", timeCaption: " پاریس", h: 1, m: 33, s: "" },
    { id: "C", timeCaption: "امارات", h: 15, m: 2, s: "" },
    //{ id: "M", timeCaption: "تهران", h: 12, m: 52, s: "" },
]


//var canvasM = document.getElementById("canvasM");
//var ctxM = canvasM.getContext("2d");
//var radiusM = canvasM.height / 2;
//ctxM.translate(radiusM, radiusM);
//radiusM = radiusM * 0.90

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90

var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");
var radius1 = canvas1.height / 2;
ctx1.translate(radius1, radius1);
radius1 = radius1 * 0.90




var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
var radius2 = canvas2.height / 2;
ctx2.translate(radius2, radius2);
radius2 = radius2 * 0.90






function timeInitializer(h, m, s) {
    if (!s) s = 0;
    var timerX = new Date();
    timerX.setHours(h);
    timerX.setMinutes(m);
    timerX.setSeconds(s);
    return timerX;
}



var timeCallBack = setInterval(function () {
    var isOk = true;
    timeDatas.forEach(el => {
        if (el.m === "" || el.h === "") {
            isOk = false;
        }
    });

    if (isOk) {
        // console.log("timeCallBack");

        timeA = timeInitializer(timeDatas[0].h, timeDatas[0].m, timeDatas[0].s);
        timeB = timeInitializer(timeDatas[1].h, timeDatas[1].m, timeDatas[1].s);
        timeC = timeInitializer(timeDatas[2].h, timeDatas[2].m, timeDatas[2].s);
        //      timeM = timeInitializer(timeDatas[3].h, timeDatas[3].m, timeDatas[3].s);


        clearInterval(timeCallBack);
        //document.querySelector(".clockContainer.main h6").innerHTML = timeDatas[3].timeCaption;
        document.querySelector(".clockContainer.C h6").innerHTML = timeDatas[2].timeCaption;
        document.querySelector(".clockContainer.B h6").innerHTML = timeDatas[1].timeCaption;
        document.querySelector(".clockContainer.A h6").innerHTML = timeDatas[0].timeCaption;






        setInterval(drawClock, 1000);


    } else {
        console.log("times of clocks is not loaded yet ");
    }
}, 500)







function drawClock() {
    //drawFace(ctxM, radiusM);
    //drawNumbers(ctxM, radiusM);
    //drawTime1(ctxM, radiusM, timeM);


    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime1(ctx, radius, timeA);

    drawFace(ctx1, radius1);
    drawNumbers(ctx1, radius1);
    drawTime1(ctx1, radius1, timeB);

    drawFace(ctx2, radius2);
    drawNumbers(ctx2, radius2);
    drawTime1(ctx2, radius2, timeC);


}

function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}








function drawTime1(ctx, radius, theTime) {

    theTime.setSeconds(theTime.getSeconds() + 1)
    var hour = theTime.getHours();
    var minute = theTime.getMinutes();
    var second = theTime.getSeconds();
    //console.log(second);
    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
        (minute * Math.PI / (6 * 60)) +
        (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    //minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    // second
    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
}



