function onValidation(){
    var name=document.forms["myForm"]["name"]
    var email=document.forms["myForm"]["email"]
    var msg=document.forms["myForm"]["msg"]

    if(name.value==""){
        window.alert("Please enter name");
        name.focus();
        return false;
    }
    
    if(email.value==""){
       window.alert("Please enter email");
        email.focus();
        return false;
    }
    
    if(email.value.indexOf("@")>0){
        window.alert("Please enter valid email");
        email.focus();
        return false;
    }
    
    if(email.value.indexOf(".")>0){
        window.alert("Please enter valid email");
        email.focus();
        return false;
    }
    if(msg.value==""){
        window.alert("Please enter some message");
        msg.focus();
        return false;
    }
    return true;
}