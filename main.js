var length;
var range;
var cycle;
var nowFunction = 0;
// 0 sin
// 1 cos
// 2 tan

// 3 csc
// 4 sec
// 5 cot

function setGraph() {
    length = document.getElementById("lengthBar").value;
    range = document.getElementById("rangeBar").value;
    cycle = document.getElementById("cycleBar").value;
    document.getElementById("lengthCount").textContent = length;
    document.getElementById("rangeCount").textContent = range;
    document.getElementById("cycleCount").textContent = cycle;

    var els = document.querySelectorAll("div:not(#content)");

    for (let i = 0; i < els.length; i++) {
        els[i].remove();
    }
    
    for (let i = 0; i < length; i++) {
        document.getElementById("content").appendChild(document.createElement("div"));
    }

    var els = document.querySelectorAll("div:not(#content)");

    for (let i = 0; i < length; i++) {
        if (nowFunction == 0) {
            var mathSin = - Math.sin(i * (Math.PI / 180) * cycle) * range;
            document.getElementById("sinbtn").style.boxShadow = "rgb(0, 0, 0) 0px 0px 0px 3px";
            document.getElementById("cosbtn").style.boxShadow = "none";
            document.getElementById("tanbtn").style.boxShadow = "none";
            document.getElementById("cscbtn").style.boxShadow = "none";
            document.getElementById("secbtn").style.boxShadow = "none";
            document.getElementById("cotbtn").style.boxShadow = "none";

        } else if (nowFunction == 1) {
            var mathSin = - Math.cos(i * (Math.PI / 180) * cycle) * range;
            document.getElementById("sinbtn").style.boxShadow = "none";
            document.getElementById("cosbtn").style.boxShadow = "rgb(0, 0, 0) 0px 0px 0px 3px";
            document.getElementById("tanbtn").style.boxShadow = "none";
            document.getElementById("cscbtn").style.boxShadow = "none";
            document.getElementById("secbtn").style.boxShadow = "none";
            document.getElementById("cotbtn").style.boxShadow = "none";

        } else if (nowFunction == 2) {
            var mathSin = - Math.tan(i * (Math.PI / 180) * cycle) * range;
            document.getElementById("sinbtn").style.boxShadow = "none";
            document.getElementById("cosbtn").style.boxShadow = "none";
            document.getElementById("tanbtn").style.boxShadow = "rgb(0, 0, 0) 0px 0px 0px 3px";
            document.getElementById("cscbtn").style.boxShadow = "none";
            document.getElementById("secbtn").style.boxShadow = "none";
            document.getElementById("cotbtn").style.boxShadow = "none";
        } else if (nowFunction == 3) {
            var mathSin = - 1 / Math.sin(i * (Math.PI / 180) * cycle) * range;
            document.getElementById("sinbtn").style.boxShadow = "none";
            document.getElementById("cosbtn").style.boxShadow = "none";
            document.getElementById("tanbtn").style.boxShadow = "none";
            document.getElementById("cscbtn").style.boxShadow = "rgb(0, 0, 0) 0px 0px 0px 3px";
            document.getElementById("secbtn").style.boxShadow = "none";
            document.getElementById("cotbtn").style.boxShadow = "none";

        } else if (nowFunction == 4) {
            var mathSin = - 1 / Math.cos(i * (Math.PI / 180) * cycle) * range;
            document.getElementById("sinbtn").style.boxShadow = "none";
            document.getElementById("cosbtn").style.boxShadow = "none";
            document.getElementById("tanbtn").style.boxShadow = "none";
            document.getElementById("cscbtn").style.boxShadow = "none";
            document.getElementById("secbtn").style.boxShadow = "rgb(0, 0, 0) 0px 0px 0px 3px";
            document.getElementById("cotbtn").style.boxShadow = "none";

        } else {
            var mathSin = - 1 / Math.tan(i * (Math.PI / 180) * cycle) * range;
            document.getElementById("sinbtn").style.boxShadow = "none";
            document.getElementById("cosbtn").style.boxShadow = "none";
            document.getElementById("tanbtn").style.boxShadow = "none";
            document.getElementById("cscbtn").style.boxShadow = "none";
            document.getElementById("secbtn").style.boxShadow = "none";
            document.getElementById("cotbtn").style.boxShadow = "rgb(0, 0, 0) 0px 0px 0px 3px";
        }
        els[i].style.marginLeft = `calc(1px * ${i})`;
        els[i].style.marginTop = `${mathSin}px`;
    }
}

setGraph();

function setFunction(f) {
    nowFunction = f;
    setGraph();
}