jQuery.validator.addMethod("noSpace", function (value, element) {
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

            name: {
                required: true,
                alphanumeric: true
            },
            email: {
                required: true,
                customEmail: true
            },
            password: {
                required: true
            },
            reason: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'Please enter username!'
            },
            email: {
                required: 'Please enter email!',
                email: 'Please enter valid email!'
            },
            password: {
                required: 'Please enter password!'
            },
            reason: {
                required: 'Please enter address!'
            }
        },
        errorPlacement: function (error, element) {
            if (element.is("")) {
                error.appendTo(element.parents(''));
            }

            else {
                error.insertAfter(element);
            }

        }
    });
}