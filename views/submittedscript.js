const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const url = params.url;

document.querySelector('input').value = `${window.location.protocol}//${window.location.host}/${url}`;

function copy() {
    navigator.clipboard
        .writeText(document.querySelector('input').value)
}