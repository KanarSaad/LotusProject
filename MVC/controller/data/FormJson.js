const FormJson = [
    {
        formId: 1,
        formName: "LogIn",
        title: "Welcome Back",
        cssClass: "",
        text: "Please enter your personal info to log in",
        cont: [{ id:1,type: "email", placeholder: "Email", cssClass: "log-input" },
        { id:1,type: "password", placeholder: "Password", cssClass: "log-input" }
        ],
        btn: { type: "submit", placeholder: "", value: "Login", cssClass: "log-input log-btn" }
    },
    {
        formId: 2,
        formName: "ContactUs",
        title: "Contact Us",
        cssClass: "",
        text: "Feel free to reach out to us for any inquiries or feedback!",
        cont: [{id:1, type: "text", placeholder: "Name", cssClass: "form-input" },
        {id:2, type: "email", placeholder: "Email", cssClass: "form-input" },
            //{ type: "submit", placeholder: "Send Message", cssClass: "contact-btn"},
            //{ type: "text", placeholder: "Enter your message...", value: "Send Message", cssClass: "form-input textarea" }
        ]
    },
    {
        formId: 3,
        formName: "SignUp",
        title: "Create Account",
        cssClass: "",
        text1: "Enter your personal details ",
        text2: "and start your journey with us",
        cont: [
            { id: 1, type: "text", placeholder: "Name", value: "", cssClass: "signup-input" },
            { id: 2, type: "email", placeholder: "Email", value: "", cssClass: "signup-input" },
            { id: 3, type: "password", placeholder: "Password", value: "", cssClass: "signup-input" },
            { id: 4, type: "submit", placeholder: "", value: "Sign Up", cssClass: "signup sign-btn" }
        ]


    }


]
module.exports = FormJson;