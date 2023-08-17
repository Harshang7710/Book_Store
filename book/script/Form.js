﻿jQuery.validator.addMethod("noSpace", function (value, element) {
    return value == '' || value.trim().length != 0;
}, "No space please and don't leave it empty");
jQuery.validator.addMethod("customEmail", function (value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
}, "Please enter valid email address!");
$.validator.addMethod("alphanumeric", function (value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
}, "Letters, numbers, and underscores only please");
var $registrationForm = $('#registration');
if ($registrationForm.length) {
    $registrationForm.validate({
        rules: {
           
            email: {
                required: true,
                customEmail: true
            },
            password: {
                required: true
            },
            confirm: {
                required: true,
                equalTo: '#password'
            },
            fname: {
                required: true,
                noSpace: true
            },
            lname: {
                required: true,
                noSpace: true
            },
            gender: {
                required: true
            },
           
            address: {
                required: true
            }
        },
        messages: {
           
            email: {
                required: 'Please enter Email!',
                //error message for the email field
                email: 'Please enter valid Email!'
            },
            password: {
                required: 'Please enter Password!'
            },
            confirm: {
                required: 'Please enter Confirm Password!',
                equalTo: 'Please enter same Password!'
            },
            fname: {
                required: 'Please enter First Name!'
            },
            lname: {
                required: 'Please enter Last Name!'
            },
           
            address: {
                required: 'Please enter Address!'
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parents('.gender'));
            }
            else if (element.is(":checkbox")) {
                error.appendTo(element.parents('.hobbies'));
            }
            else {
                error.insertAfter(element);
            }

        }
        
    });
}

