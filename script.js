function generateQRCode() {
    // Get the text from the input field
    var text = document.getElementById('text-input').value;

    // Get the div where the QR code will be displayed
    var qrcodeDiv = document.getElementById('qrcode');

    // Clear any previous QR code
    qrcodeDiv.innerHTML = '';

    // Create a new QR Code using the qrcode-generator library
    var qrcode = new QRCode(qrcodeDiv, {
        text: text,
        width: 128,
        height: 128
    });
}
