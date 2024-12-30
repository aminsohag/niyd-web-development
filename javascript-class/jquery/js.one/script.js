function fullNameCheck(){
    var fullNameValue = $('#fulName').val();
    var regex = /^[a-zA-Z ]{2,30}$/;
    if( regex.test(fullNameValue)) {    //.length >= 2 && fullNameValue.length <=20){
        $('#fullNameError').text(" ");
    }
    else{
        $('#fullNameError').text("Full Name should be 2 to 20");
    }
}

$('#fulName').keyup(function(){
    fullNameCheck();
})

function emailCheck(){
    var emailAddressValue = $('#emailAddress').val();
    var regex = /^[a-zA-Z ]{2,30}$/;
    if( regex.test(emailAddressValue)) {    
        $('#emailAddressError').text(" ");
    }
    else{
        $('#emailAddressError').text("Full Name should be 2 to 20");
    }
}

$('#regForm').submit(function(){
    
})

$('#emailAddress').keyup(function(){
    emailCheck();
})

$('#styleOne').click(function(){
    $('#resDiv').css({
       
    })
})

$('#styleDefault').click(function(){
    $('#resDiv').css({
        
    })
})

$('#styleOne').click(function(){
    $('#resDiv').attr('class','style-one');
})


$('#fullNameBtn').click(function(){
    var firstNameValue = $('#firstName').val();
    var lastNameValue = $('#lastName').val();

    var fullNameValue = firstNameValue+' '+lastNameValue;

    $('#fullName').val(fullNameValue)
})


$('#changeTextBtn').click(function() {
   $('#heading').text('Hello');
});

function smartWatch(){
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var myWatch = hours +" hours "+minutes +" minutes " +seconds+" seconds";
    document.getElementById('watchRes').innerText= myWatch;
}



// setInterval();
// setTimeout();



setInterval(smartWatch, 1000)

//setTimeout(test, 3000)




