function checkForm(form) {
    if(form.firstname.value == "") {
        alert("Error: First Name is missing, please introduce your name.");
        return false;
    }
    if(form.email1.value != form.email2.value) {
        alert("Error: Email addresses don't match");
        return false;
    }
    return true;
}
