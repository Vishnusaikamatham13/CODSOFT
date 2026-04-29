function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let result = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(result);
    } catch {
        alert("Error");
    }
}

// Keyboard support
document.addEventListener("keydown", function(e) {
    if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        let display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    }
});