function login() {
    window.location.href = "dashboard.html";
}

function uploadFile() {
    const input = document.getElementById("fileInput");

    if (input.files.length === 0) {
        alert("Pilih file terlebih dahulu.");
        return;
    }

    const namaFile = input.files[0].name;

    const daftar = document.getElementById("fileList");

    const item = document.createElement("li");
    item.textContent = namaFile;

    daftar.appendChild(item);

    alert("File berhasil ditambahkan ke daftar.");
}