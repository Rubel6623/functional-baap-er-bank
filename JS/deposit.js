
document.getElementById('btn-deposit').addEventListener('click', function(){

    // from function-1
    const newDepositAmount=getInputFieldValueById('deposit-field');

    // from function-2
    const previousDepositTotal=getTextElementValueById('deposit-total');

    // total deposit
    const newDepositTotal=previousDepositTotal+newDepositAmount;

    setTextElementValueById('deposit-total', newDepositTotal);

    //get balance section
    const previousBalanceTotal=getTextElementValueById('balance-total');
    const newBalanceTotal=previousBalanceTotal+newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})
