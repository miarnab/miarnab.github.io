$(function(){
    $("form[name='feedback']").validate({
        rules:{
            firstname:"required",
            lastname:"required",
            email:"required",
            phonenumber:{
                required:true,
                minlength:10
            },
            message:"required"
        },
        messages:{
            firstname:"Please enter your First Name",
            lastname:"Please enter your Last Name",
            email:"Please enter a valid Email ID",
            phonenumber:{
                required:"Please enter valid Mobile Number. Do not include 0 or +91",
                minlength:"Phone Number must be 10 digits long"
            },
            message:"Please enter your message"
        },
        submitHandler:function(form){
            form.submit();
            alert("Feedback Sent!");
        }
    });
});