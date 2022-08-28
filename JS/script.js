$("#formval").validate({

    rules: {
        name: {
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
        pass: {
            required: true,
            minlength: 8,
            maxlength: 20
        },
        age: {
            required: true,
            min: 13
        },
        txt: {
            required: true,
            maxlength: 60
        }
    },
    messages: {
        name: {
            required: "Please Enter Your Name",
            minlength: "Name at least 2 characters"
        },
        email: {
            required: "Please Enter Your Email",
            email: "Please Enter Valid Email addess"
        },
        pass: {
            required: "Please Enter Your Password",
            minlength: "Enter at least 8 characters",
            maxlength: "Maximum 20 characters are allowed"
        },
        age: {
            required: "Please Enter Age",
            min: "You must be 13 or above"
        },
        txt: {
            required: "Please Enter any message",
            maxlength: "60 characters are allowed only"
        }

    },

    submitHandler: function (form) {
        form.submit();
    }
});