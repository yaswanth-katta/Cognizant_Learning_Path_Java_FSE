function validateEmail(email) {
     var re = /\S+@\S+\.\S+/;
    if(re.test(email)) return 'Valid email address!';
    else return 'Invalid email address!';
}

