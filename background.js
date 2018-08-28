async function makeQRCode() {
    await chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
        let url = tabs[0].url;
        new QRCode(document.getElementById("qrDiv"), url);
    });
}

window.onload = makeQRCode;