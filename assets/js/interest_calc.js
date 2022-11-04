function calculateInterest() { 
    let principal = document.getElementById('principal').value;
    let rate = document.getElementById('rate').value;
    let years = document.getElementById('years').value;
    let result = document.getElementById('result');
    let interestAmount = parseInt(principal) * parseInt(years) * parseInt(rate) / 100;
    result.innerHTML = 'The interest amount is ' + interestAmount;
}