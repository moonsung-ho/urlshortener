function click() {
    console.log(document.getElementById("urlinput").value);
    if (document.querySelector("#urlinput").value.includes(".")) {
        console.log(`${window.location.protocol}//${window.location.host}/urlsubmit?url=${document.querySelector("#urlinput").value}`);
        if (document.querySelector("#customurlcheckbox").checked) {
            location.href = `${window.location.protocol}//${window.location.host}/urlsubmit?url=${document.querySelector("#urlinput").value}&custom=${document.querySelector("#customurl").value}`;
        } else {
            location.href = `${window.location.protocol}//${window.location.host}/urlsubmit?url=${document.querySelector("#urlinput").value}&custom=none`;
        }
    } else {
        Toastify({
            text: "URL이 잘못되었습니다",
            duration: 3000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "tomato",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }
}

document.querySelector(".custom").hidden = true;
document.querySelector("#customurlcheckbox").addEventListener("click", () => {
    if (document.querySelector("#customurlcheckbox").checked) {
        document.querySelector(".custom").hidden = false;
    } else {
        document.querySelector(".custom").hidden = true;
    }
})

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

if (params.urlused) {
    Toastify({
        text: "URL이 이미 사용되었습니다",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "tomato",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

document.querySelector("button").addEventListener("click", click);
document.querySelector("#urlinput").addEventListener("keyup", () => {
    if (window.event.keyCode == 13) {
        click()
    }
})