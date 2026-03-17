// --- 1. LOGIKA UNTUK DARK/LIGHT MODE ---

// Kita ambil elemen checkbox berdasarkan ID-nya
const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener('change', function() {
    // Jika checkbox dicentang, kita ubah class di body
    if (this.checked) {
        // Kita gunakan class "light-mode" (nanti tambahkan sedikit di CSS)
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    }
});


// --- 2. LOGIKA UNTUK PENDAFTARAN (FORM) ---

const registrationForm = document.getElementById('registrationForm');
const participantList = document.getElementById('participantList');

registrationForm.addEventListener('submit', function(event) {
    // Mencegah halaman refresh saat tombol submit diklik
    event.preventDefault();

    // Mengambil nilai dari setiap input di dalam form
    // Kita gunakan querySelector untuk mengambil input berdasarkan tipe atau urutannya
    const fullName = registrationForm.querySelector('input[type="text"]').value;
    const email = registrationForm.querySelector('input[type="email"]').value;
    const experience = registrationForm.querySelector('select').value;

    // Membuat baris baru (tr) untuk tabel
    const newRow = document.createElement('tr');

    // Mengisi baris baru dengan data yang diambil (td)
    newRow.innerHTML = `
        <td>👤</td>
        <td>${fullName}</td>
        <td>${experience}</td>
        <td>${email}</td>
    `;

    // Memasukkan baris baru ke dalam tabel (tbody)
    participantList.appendChild(newRow);

    // Reset atau kosongkan form setelah berhasil mendaftar
    registrationForm.reset();

    // Beri notifikasi kecil
    alert('Registrasi Berhasil! Nama ' + fullName + ' sudah masuk ke tabel.');
});

