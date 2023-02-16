document.getElementById('btn-withdraw').addEventListener('click', function(){

    // function-11
    const newWithdrawAmount=getInputFieldValueById('withdraw-field');
    
    // function-2
    const previousWihdrawTotal=getTextElementValueById('withdraw-total');

    const newWithdrawTotal=previousWihdrawTotal+newWithdrawAmount;
    
    // function-3
    setTextElementValueById('withdraw-total' ,newWithdrawTotal);

    // update balance
    const previousBalanceTotal=getTextElementValueById('balance-total');
    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})