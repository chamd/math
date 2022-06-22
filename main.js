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
var nowColor = 1;
// 0 pink
// 1 red
// 2 blue
// 3 black
var bs = "inset 5px 5px 11px -6px #000000, 5px 5px 11px -6px #FFFFFF";
var bsnone = "5px 5px 11px -6px #000000, inset 5px 5px 11px -6px #FFFFFF";

function setGraph() {
    length = document.getElementById("lengthBar").value;
    range = document.getElementById("rangeBar").value;
    cycle = document.getElementById("cycleBar").value;
    document.getElementById("lengthCount").textContent = length;
    document.getElementById("rangeCount").textContent = range;
    document.getElementById("cycleCount").textContent = cycle;

    var els = document.querySelectorAll(".dots");

    for (let i = 0; i < els.length; i++) {
        els[i].remove();
    }

    for (let i = 0; i < length; i++) {
        var dot = document.createElement("div");
        dot.classList.add("dots");
        document.getElementById("content").appendChild(dot);

    }

    var els = document.querySelectorAll(".dots");

    for (let i = 0; i < length; i++) {
        if (nowFunction == 0) {
            var mathSin = - Math.sin(i * (Math.PI / 180) * cycle) * range;
            setAllNone(0);
            document.getElementById("sinbtn").style.boxShadow = bs;

        } else if (nowFunction == 1) {
            var mathSin = - Math.cos(i * (Math.PI / 180) * cycle) * range;
            setAllNone(0);
            document.getElementById("cosbtn").style.boxShadow = bs;

        } else if (nowFunction == 2) {
            var mathSin = - Math.tan(i * (Math.PI / 180) * cycle) * range;
            setAllNone(0);
            document.getElementById("tanbtn").style.boxShadow = bs;
        } else if (nowFunction == 3) {
            var mathSin = - 1 / Math.sin(i * (Math.PI / 180) * cycle) * range;
            setAllNone(0);
            document.getElementById("cscbtn").style.boxShadow = bs;
            
        } else if (nowFunction == 4) {
            var mathSin = - 1 / Math.cos(i * (Math.PI / 180) * cycle) * range;
            setAllNone(0);
            document.getElementById("secbtn").style.boxShadow = bs;

        } else {
            var mathSin = - 1 / Math.tan(i * (Math.PI / 180) * cycle) * range;
            setAllNone(0);
            document.getElementById("cotbtn").style.boxShadow = bs;
        
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

function setColor(c) {
    nowColor = c;
    if (nowColor == 0) {
        setAllNone(1);
        document.getElementById("pinkbtn").style.boxShadow = bs;
        document.documentElement.style.setProperty('--dotColor', 'pink');

    } else if (nowColor == 1) {
        setAllNone(1);
        document.getElementById("redbtn").style.boxShadow = bs;
        document.documentElement.style.setProperty('--dotColor', 'red');

    } else if (nowColor == 2) {
        setAllNone(1);
        document.getElementById("bluebtn").style.boxShadow = bs;
        document.documentElement.style.setProperty('--dotColor', 'blue');

    } else {
        setAllNone(1);
        document.getElementById("blackbtn").style.boxShadow = bs;
        document.documentElement.style.setProperty('--dotColor', 'black');
    
    }
}

setColor(1);

function setAllNone(m) {
    if (m == 0) {
        document.getElementById("sinbtn").style.boxShadow = bsnone;
        document.getElementById("cosbtn").style.boxShadow = bsnone;
        document.getElementById("tanbtn").style.boxShadow = bsnone;
        document.getElementById("cscbtn").style.boxShadow = bsnone;
        document.getElementById("secbtn").style.boxShadow = bsnone;
        document.getElementById("cotbtn").style.boxShadow = bsnone;
    } else {
        document.getElementById("pinkbtn").style.boxShadow = bsnone;
        document.getElementById("redbtn").style.boxShadow = bsnone;
        document.getElementById("bluebtn").style.boxShadow = bsnone;
        document.getElementById("blackbtn").style.boxShadow = bsnone;

    }
}

