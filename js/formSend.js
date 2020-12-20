function send(){
    var comment=console.log(sessionStorage.getItem("form_comment"));
    var email=console.log(sessionStorage.getItem("form_email"));
    var name=console.log(sessionStorage.getItem("form_name"));

    window.open('mailto:saurabh6275@rediffmail.com?subject='+email+' ; '+name+'&body='+comment);
}
