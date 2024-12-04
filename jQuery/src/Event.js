$(function(){
    $("#rangeAmount").change(()=>{
        $('#lblAmount').val($('#rangeAmount').val())
    })
    $('#rangeYear').change(()=>{
        $('#lblYear').val($('#rangeYear').val())
    })
    $('#rangeInterest').change(()=>{
        $('#lblInterest').val($('#rangeInterest').val())
    })


    $('#btnCalculate').click(()=>{
        let amount=parseInt($('#lblAmount').val());
        let years=parseInt($('#lblYear').val())*12;
        let interest=parseFloat($('#lblInterest').val())/12/100;
        var EMI = amount * interest * (Math.pow(1+interest,years)) / Math.pow(1+interest,years) - 1;

        $('#msgEmi').html(`Installment amount is <b class="text-primary">${EMI.toLocaleString('en-IN', {style: 'currency', currency: 'INR'})}</b> for next ${years} months`);

    })
    

})