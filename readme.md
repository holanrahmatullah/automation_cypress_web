# Cypress Testing Project

Proyek ini adalah otomatisasi pengujian end-to-end menggunakan [Cypress](https://www.cypress.io/) untuk memastikan kualitas aplikasi web. Proyek ini mendukung pengujian lokal dan integrasi berkelanjutan menggunakan GitHub Actions.

## Daftar Isi

- [Persyaratan](#persyaratan)
- [Instalasi](#instalasi)
- [Struktur Proyek](#struktur-proyek)
- [Menjalankan Tes](#menjalankan-tes)
- [Menjalankan Tes di GitHub Actions](#menjalankan-tes-di-github-actions)
- [Konfigurasi Tambahan](#konfigurasi-tambahan)
- [Laporan Tes](#laporan-tes)

## Persyaratan

- Node.js (Versi 16 atau lebih baru)
- Cypress
- NPM untuk manajemen paket

## Instalasi

1. **Clone repositori ini:**

    ```bash
    git clone https://github.com/username/repo-name.git
    ```

2. **Navigasi ke direktori proyek:**

    ```bash
    cd repo-name
    ```

3. **Instal dependensi:**

    ```bash
    npm install
    ```

## Struktur Proyek

**Hasilnya akan terlihat seperti ini:**

```bash
├── cypress/
│   ├── e2e/              # Script Test
│   ├── fixtures/         # Data uji dalam format JSON
│   ├── integration/      # Tes spesifikasi Cypress
│   ├── screenshots/      # Screenshot hasil tes
│   ├── videos/           # Video hasil tes
│   └── results/          # Laporan hasil tes (dari Mochawesome)
└── cypress.config.js     # Konfigurasi Cypress
```
## Menjalankan Tes

Untuk menjalankan pengujian menggunakan Cypress, jalankan perintah berikut:

```bash
npx cypress open
```

Ini akan membuka antarmuka pengguna Cypress di mana Anda dapat memilih dan menjalankan tes.

Jika Anda ingin menjalankan pengujian secara otomatis di terminal (headless), gunakan perintah berikut:

```bash
npx cypress run
```

## Menjalankan Tes di GitHub Actions

Proyek ini menggunakan GitHub Actions untuk menjalankan pengujian otomatis di setiap push atau pull request ke branch main atau master. Berikut adalah alur kerjanya:

- Tes akan dijalankan setiap kali ada push ke main atau master.
- Laporan hasil tes akan diunggah sebagai artefak, yang dapat diunduh setelah tes selesai.

File konfigurasi GitHub Actions terletak di:

```bash
Salin kode
.github/workflows/ci.yml
```

## Konfigurasi Tambahan

Jika Anda ingin mengubah konfigurasi Cypress, Anda bisa memodifikasi file `cypress.config.js`. Di dalamnya, Anda dapat menyesuaikan pengaturan seperti URL dasar aplikasi dan pengaturan lainnya.

### Contoh konfigurasi:

```javascript
module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // Setup Node.js events here
    },
  },
};
```

## Laporan Tes

Setelah pengujian selesai, laporan akan disimpan dalam format Mochawesome di dalam direktori `cypress/results`. Anda juga dapat mengonfigurasi GitHub Actions untuk mengunggah laporan sebagai artefak setelah tes selesai.

Jika Anda ingin menambahkan dukungan untuk laporan lebih lanjut, Anda bisa memodifikasi file `cypress.json` untuk menyertakan plugin Mochawesome:

```json
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/results"
  }
}
```

## Test Report Link
[Automation Cypress Web Report](https://holanrahmatullah.github.io/automation-cypress_web/)

