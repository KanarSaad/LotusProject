const PagesJson = [
    {
        pageId: 1,
        pageName: "LandingPage",
        title: "LandingPage",
        url: "/LandingPage.js",
        cont: ["The power of artificial intelligence", "to transform", "written words", "into", "lifelike", "speech"],
        cssClass: "",
        cssId: "",
        btn: "Let's Get Started",
        img1: "link.png",
        img2: "textone.png"

    },
    {
        pageId: 2,
        pageName: "AboutUs",
        title: "About Us",
        url: "/AboutPage.js",
        cont: ["The text-to-speech (TTS) project embodies the marvels of modern technology, seamlessly bridging the gap between written content and auditory comprehension. Through intricate algorithms and linguistic analysis, this project harnesses the power of artificial intelligence to transform written words into lifelike speech. "],
        cssClass:"",
        btn: "Read More",
        img: "nadi-borodina-gETBUi_oRgQ-unsplash.jpg"
    },
    {
        pageId: 3,
        pageName: "SignUp",
        title: "Sign Up",
        url: "/SignUp.js",
        formId: 3,

    },
    {
        pageId: 4,
        pageName: "LogIn",
        title: "Log In",
        url: "/LogIn.js",
        formId: 1,
        specialElementg: [{ cssClass: "fogotPass", p: "Forgot Password?", url: "#", src: "Press Here" },
        { cssClass: "loginmedia", p: "Or Continue with", url: "#", src: "google.png" }]
    },
    {
        pageId: 5,
        pageName: "ContactUs",
        title: "Contact Us",
        url: "/ContactUs.js",
        formId: 2,
        specialElementg: [{}]
    },
    {
        pageId: 6,
        pageName: "Service",
        title: "Text To Speach",
        url: "/tts.js",
        specialElementg: [
            {id:1, cssClass: "mabtns-btn", text: "Language", url: "#" },
            { id:2,cssClass: "mabtns-btn", text: "Say As", url: "#" },
            { id:3,cssClass: "mabtns-btn", text: "Volume", url: "#" },
            {id:4,cssClass: "mabtns-btn", text: "Speed", url: "#" },
            { id:5,cssClass: "mabtns-btn", text: "Translate To..", url: "#" },
            { id:6,cssClass: "mabtns-btn diff", text: "Use chatgpt", url: "#" },
            { id:7,cssClass: "mabtns-btn diff", text: "Upload File", url: "#" },
            { id:8,cssClass: "mabtns-btn diff", text: "Create Animation", url: "#" },

        ]



    },
    {
        pageId: 7,
        pageName: "Header",
        title: "This is Header",
        url: "",
        specialElementg: [
            { id: 1, text: "HOME", cssClass:"",cssId:"",url: "./Home",menuName: "header"},
            { id: 2, text: "ABOUT", cssClass:"",cssId:"",url: "./About",menuName: "header"},
            { id: 3, text: "SERVICES", cssClass:"",cssId:"",url: "./Service",menuName: "header"},
            { id: 4, text: "CONTACT US", cssClass:"",cssId:"",url: "./ContactUs",menuName: "header"},
            { id: 5, text: "SIGN UP", cssClass:"",cssId:"",url: "./SignUp",menuName: "header"},
            { id: 6, text: "LOG IN", cssClass:"active",cssId:"",url: "./LogIn",menuName: "header"},

        ],
        imgs:[{img: "MyLogo.png", cssClass: "logo-img"}]
    },
    {
        pageId: 7,
        pageName: "Footer",
        title: "Copy Right",
        url: "",
        cssClass: "footer",
        specialElementg: [
            

        ]
    }



]
module.exports = PagesJson;