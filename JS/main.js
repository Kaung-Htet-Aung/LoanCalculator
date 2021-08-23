const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const calcBtn = document.getElementById('calculate');
const mPay = document.getElementById('m-pay');
const tPay = document.getElementById('t-pay');
const tInt = document.getElementById('t-int');


const data = {
    loanAmount : 0,
    loanInterest : 0,
    repYears : 0
}

function takeInfos(){
    calcBtn.addEventListener('click',(e)=>{
       
       e.preventDefault();
       if(data.loanAmount === 0 && data.loanInterest === 0 && data.repYears === 0){
        document.getElementById('loader').style.display = 'block';
       } 
       else {
        document.getElementById('results').style.display = 'none';
        document.getElementById('loader').style.display = 'block';
       }
       window.setTimeout(closeLoader, 4000);
       data.loanAmount = amount.value;
       data.loanInterest = interest.value;
       data.repYears = years.value;   
       formula(); 
    })
}

takeInfos();

function formula(){
     const {loanAmount , loanInterest , repYears} = data;
     let pv = loanAmount;
     let i = (loanInterest/100) / 12;
     let n = repYears * 12 ;
    /// MONTHLY PAYMENET//////
     const monthlyPay = (pv * i * Math.pow((1+i),n)) / (Math.pow((1+i),n) - 1);
    /// TOTAL PAYMENET /////
     const totalPay = monthlyPay * n ;
     //// TOTAL INTEREST ////
     const totalInt = totalPay - loanAmount ;

     mPay.innerText = `${monthlyPay.toFixed(2)}`;
     tPay.innerText = `${totalPay.toFixed(2)} `;
     tInt.innerText = `${totalInt.toFixed(2)} `;
}


function closeLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}

