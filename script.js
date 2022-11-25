var kuponCode = document.querySelector(".kuponCode");
kuponCode.style.display = "none";
function increement(incDec,prc,itm){
    var count = document.getElementById(incDec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    if(count.value>=10){
        count.value = 10;
        alert("only 10 product allow")
    }
    else{
        count.value++;
        var result = parseInt(price.innerHTML)+ parseInt(item.innerHTML);
        item.innerHTML=result;
        var amount = document.getElementById("amount");
        var amountResult = parseInt(price.innerHTML) + parseInt(amount.innerHTML);
        amount.innerHTML = amountResult;
        var charge = document.getElementById("charge");
        var totalAmount = document.getElementById("totalAmount");
        var deleveryCharge = parseInt(amount.innerHTML) + parseInt(charge.innerHTML);
        totalAmount.innerHTML = deleveryCharge;

        if(totalAmount.innerHTML>=600){
            kuponCode.style.display = "block"
        }
        else{
            kuponCode.style.display="none"
        }

    }
}
function decreement(incDec,prc,itm){
    var count = document.getElementById(incDec,prc,itm);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    if(count.value<=0){
        count.value = 0;
        item.innerHTML="00"
        alert("minimum one product")
    }
    else{
        count.value--;
        var result1 = parseInt(item.innerHTML)- parseInt(price.innerHTML);
        item.innerHTML=result1;
        var amount1 = document.getElementById("amount");
        var amountResult1 =parseInt(amount1.innerHTML) - parseInt(price.innerHTML)  ;
        amount1.innerHTML = amountResult1;
        var totalAmount1 = document.getElementById("totalAmount");
        var deleveryCharge1 = parseInt(totalAmount1.innerHTML) - parseInt(price.innerHTML);
        totalAmount1.innerHTML = deleveryCharge1;
        if(totalAmount.innerHTML>=600){
            kuponCode.style.display = "block"
        }
        else{
            kuponCode.style.display="none"
        }


    }
}
var less= document.querySelector("#less");
var apply = document.getElementById("apply");
apply.addEventListener("click",function(){
    if(less.value=="sHaRif"){
      var motamount = document.getElementById("totalAmount");
      var totalLess=  parseInt(motamount.innerHTML)-100;

      motamount.innerHTML =totalLess;
      alert("congraluation");

      if(kuponCode){
        less.value = "";
        kuponCode.style.display = "none"

    }
    else{
        kuponCode.style.display="block"
    }
    }
    else{
        alert("code does not match")
    }
})