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
        swal({
            text: "올바른 URL을 입력해 주세요!",
            icon: "error"
        });
    }
}
if (document.querySelector("#customurlcheckbox").checked) {
    document.querySelector("#customurlcheckbox").click()
}
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
    swal({
        text: "URL이 이미 사용되었어요!",
        icon: "error"
    });
}

document.querySelector("button").addEventListener("click", click);
document.querySelector("#urlinput").addEventListener("keyup", () => {
    if (window.event.keyCode == 13) {
        click()
    }
})