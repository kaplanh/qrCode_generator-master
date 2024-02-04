const qrDataInput = document.getElementById("qrData");
const frm = document.querySelector(".frm");

const qrCode = document.querySelector(".qr_code");

const err = "Something Wrong !";

//? ADDEVENTLİSTENER İLE TEKTİKLEME YAP
frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //qrcode oluştur
    createQR(qrData.value);
});

//? QR CODE OLUŞTUR
const createQR = (talep) => {
    fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size150x150&data=${talep}&&color=0-0-255`
    )
        .then((response) => {
            if (!response.ok) {
                domaHataYaz();
            }

            return response;
        })
        .then((data) => domaYaz(data.url));
};

//? QR CODE ÇIKTISINI DOMA YAZ
const domaYaz = (url) => {
    qrCode.innerHTML += `<figure>
                    <a href="${url}" download target="_blank"><img src="${url}" alt="qrcode"></a>
                    <figcaption id="data">Data : ${qrData.value}</figcaption>
                </figure>

    `;

    qrData.value = "";
};

//? QR CODE ÇIKTISINI DOMA YAZ
const domaHataYaz = () => {
    qrCode.innerHTML += `
    
    <p id="data">${err}</p>

    `;
};
