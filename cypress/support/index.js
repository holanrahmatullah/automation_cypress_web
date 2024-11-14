import 'cypress-iframe';
Cypress.on('uncaught:exception', (_err, _runnable) => {
    // Tindakan penanganan kesalahan uncaught
    // console.error('Uncaught exception occurred:', err.message);
    // Mengembalikan false agar Cypress tidak menghentikan pengujian
    // return false;
  });

