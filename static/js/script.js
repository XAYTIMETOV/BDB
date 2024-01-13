function ShowDisplay() {
    if (document.getElementById("contact-list").style.display == "none") {
        document.getElementById("contact-list").style.display = "grid";
    } else {
        document.getElementById("contact-list").style.display = "none";
    }
}

function StartChat(){
    document.getElementById("pop-contact").style.display = "flex";
    document.getElementById("contact-list").style.display = "none";
    document.getElementById("message-hr").style.display = "none";
}

function ExitBtn(){
    document.getElementById("pop-contact").style.display = "none";
    document.getElementById("message-hr").style.display = "block";
}

function TelegramBtn(){
    window.open("https://t.me/sxaytimetov/", "_blank");
}

function FullScreen(){
    document.getElementById("pop-full").style.display = "block";
    document.getElementById("full-screen").style.display = "flex";
}

function HidePop(){
    document.getElementById("pop-full").style.display = "none";
    document.getElementById("full-screen").style.display = "none";
}

function FilterOperator(){
    window.open("pages/by-operator.html", "_self");
}

function MoreBtn(){
    window.open("article-more.html", "_self");
}

function PollResults(){
    document.getElementById("pop-poll-result").style.display = "flex";
}