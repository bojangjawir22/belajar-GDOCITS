// Ambil elemen
const modeToggle = document.getElementById('mode-toggle');
const registrationForm = document.getElementById('registrationForm');
const participantList = document.getElementById('participantList');

// 1. Logika Mode Gelap/Terang
modeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    }
});

// 2. Logika Form Pendaftaran
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop halaman refresh

    // Ambil input
    const fullName = registrationForm.querySelector('input[type="text"]').value;
    const email = registrationForm.querySelector('input[type="email"]').value;
    const experience = registrationForm.querySelector('select').value;

    // Buat baris baru
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>👤</td>
        <td>${fullName}</td>
        <td>${experience}</td>
        <td>${email}</td>
    `;

    // Masukkan ke tabel
    participantList.appendChild(newRow);

    // Reset form
    registrationForm.reset();
    alert('Berhasil Daftar!');
});
