function calc() {
    let val1 = parseInt(document.querySelector("#value1").value);
    let val2 = parseInt(document.querySelector("#value2").value);
    let op = document.querySelector("#operator").value;

    if (op == "add") {
        calculate = val1 + val2;
    } else if (op === "subtract") {
        calculate = val1 - val2;
    } else if (op === "multiply") {
        calculate = val1 * val2;
    } else if (op === "divide") {
        calculate = val1 / val2;
    }

    document.querySelector("#result").innerHTML = "That Calculation Equals " + calculate;
}