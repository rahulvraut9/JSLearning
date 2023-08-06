let sbiBank = {
    bankName:"SBI Bank",
    location:"Beed",
    accountNo:"11223344",
    ifsc:"SBIN003",
    interstRate:"11%",
    showDetails : function(){
        console.log(`Bank Name : ${this.bankName}, Address : ${this.location}, AccNo : ${this.accountNo}, IFSC : ${this.ifsc}, InterstRate : ${this.interstRate}`);
    }
}

let axisBank = {
    bankName:"AXIS Bank",
    location:"Pune",
    accountNo:"22113344",
    ifsc:"AXI004",
    interstRate:"11.3%",
    showDetails : function(){
        console.log(`Bank Name : ${this.bankName}, Address : ${this.location}, AccNo : ${this.accountNo}, IFSC : ${this.ifsc}, InterstRate : ${this.interstRate}`);
    }
}

let hdfcBank = {
    bankName:"HDFC Bank",
    location:"Latur",
    accountNo:"22553344",
    ifsc:"HDFC04",
    interstRate:"11.7%",
    showDetails : function(){
        console.log(`Bank Name : ${this.bankName}, Address : ${this.location}, AccNo : ${this.accountNo}, IFSC : ${this.ifsc}, InterstRate : ${this.interstRate}`);
    }
}

let yesBank = {
    bankName:"YES Bank",
    location:"Jalna",
    accountNo:"33553344",
    ifsc:"YES004",
    interstRate:"11.9%",
    showDetails : function(){
        console.log(`Bank Name : ${this.bankName}, Address : ${this.location}, AccNo : ${this.accountNo}, IFSC : ${this.ifsc}, InterstRate : ${this.interstRate}`);
    }
}
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();