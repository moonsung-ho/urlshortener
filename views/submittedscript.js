const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const url = params.url;

document.querySelector('input').value = `${window.location.protocol}//${window.location.host}/${url}`;

function copy() {
    navigator.clipboard
        .writeText(document.querySelector('input').value)
        .then(() => {
            Toastify({
                text: "복사되었습니다",
                duration: 3000,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "lightgreen",
										color: "black",
                    "font-family": "Spoqa Han Sans Neo",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        })
}
function close() {
    location.href = "/";
}

document.querySelector("#close").addEventListener("click", close);