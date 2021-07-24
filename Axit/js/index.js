var fnames=document.getElementById('fname');
var fnames_error=document.getElementById('fname-error');

var femails=document.getElementById('femail');
var femails_error=document.getElementById('femail-error')

function error_msg(){
    if(fnames.value==''){
        fnames_error.innerHTML="Please Enter Your Name!";
        fnames.style="border-color:#5f0b0b";
        // fnames_error.style="color:#5f0b0b;font-size:1.7rem";
        
        return false
    }
    else if(femails.value==""){
        femails_error.innerHTML="Please enter your email"
        femails.style="border-color:#5f0b0b";
        // femails_error.style="color:#5f0b0b;font-size:1.7rem";

        return false
    }
}
function remove_error(){
    if(fnames.value!=''){
        fnames_error.innerHTML="";
        fnames.style="border-color:inherit"
    }
    if(femails.value!=""){
        femails_error.innerHTML="";
        femails.style="border-color:inherit;"
    }
}

fnames.addEventListener('blur',remove_error);

$('#fname-error,#femail-error').addClass('error-msg')



 
