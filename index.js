

function calculate() {

    let sMetric = document.getElementById("mainmetric").textContent;
    document.getElementById("feet").textContent = sMetric * 3.28;
    document.getElementById("meters").textContent = sMetric / 3.28;
    document.getElementById("firstMetric").textContent = document.getElementById("mainmetric").textContent;
    document.getElementById("secondMetric").textContent = document.getElementById("mainmetric").textContent;
    document.getElementById("thirdMetric").textContent = document.getElementById("mainmetric").textContent;
    document.getElementById("fourthMetric").textContent = document.getElementById("mainmetric").textContent;
    document.getElementById("fifthMetric").textContent = document.getElementById("mainmetric").textContent;
    document.getElementById("sixthMetric").textContent = document.getElementById("mainmetric").textContent;
}   