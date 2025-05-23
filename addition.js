function sum()
{
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let num3=num1+num2;
    document.getElementById("result1").textContent=num3;
    num3=num1-num2;
    document.getElementById("result2").textContent=num3;
    num3=num1*num2;
    document.getElementById("result3").textContent=num3;
    num3=num1/num2;
    document.getElementById("result4").textContent=num3;

}