const PagesJson = [
    {
        pageId: 1,
        pageName: "Index",
        title: "LandingPaghe",
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
        cont: ["The text-to-speech (TTS) project embodies the marvels of modern technology, seamlessly bridging the gap between written content and auditory comprehension. Through intricate algorithms and linguistic analysis, this project harnesses the power of artificial intelligence to transform written words into lifelike speech. ", "Read More"],
        cssClass: ["about-us", "container", "row", "flex", "abouTitle", "about-btn"],
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
        specialElementg: [{ cssClass: "mabtns-btn", text: "Language", url: "#" }, 
                           { cssClass: "mabtns-btn", text: "Say As", url: "#" },
                           { cssClass: "mabtns-btn", text: "Volume", url: "#" },
                           { cssClass: "mabtns-btn", text: "Speed", url: "#" },
                           { cssClass: "mabtns-btn", text: "Translate To..", url: "#" },
                           { cssClass: "mabtns-btn diff", text: "Use chatgpt", url: "#" },
                           { cssClass: "mabtns-btn diff", text: "Create Animation", url: "#" },

                        ]
                           


    },
    {
        pageId: 7,
        pageName: "Footer",
        title: "Copy Right ",
        url: "",
        cssClass: "footer",
        specialElementg: [{}]

    },
    {
        pageId: 8,
        img: "MyLogo.png",
        cssClass: "logo-img"
    }


]
export default PagesJson