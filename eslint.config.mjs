import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        cy: 'readonly', // Pastikan `cy` hanya dibaca
        Cypress: 'readonly', // Pastikan `Cypress` hanya dibaca
        describe: 'readonly', // Pastikan `describe` hanya dibaca
        it: 'readonly', // Pastikan `it` hanya dibaca
        expect: 'readonly', // Pastikan `expect` hanya dibaca
        process: 'readonly', // Pastikan `process` hanya dibaca
        require: 'readonly', // Pastikan `require` hanya dibaca (untuk Node.js)
        module: 'readonly', // Pastikan `module` hanya dibaca (untuk Node.js)
        console: 'readonly' // Pastikan `console` hanya dibaca
      }
    }
  },
  {
    rules: {
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }], // Mengabaikan variabel yang diawali dengan _
      'no-undef': 'error', // Menyaring variabel yang tidak didefinisikan
      'semi': ['error', 'always'], // Memastikan penggunaan titik koma di akhir pernyataan
      'quotes': ['error', 'single'], // Menggunakan tanda kutip tunggal
      'no-console': 'off' // Menonaktifkan peringatan penggunaan `console`
    }
  }
];
