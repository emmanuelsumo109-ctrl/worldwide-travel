import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        visa: resolve(__dirname, 'visa.html'),
        training: resolve(__dirname, 'training.html'),
        contact: resolve(__dirname, 'contact.html'),
        flightBookingMonrovia: resolve(__dirname, 'flight-booking-monrovia.html'),
        corporateTravelLiberia: resolve(__dirname, 'corporate-travel-liberia.html'),
        airlineTicketingTrainingLiberia: resolve(__dirname, 'airline-ticketing-training-liberia.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
      },
    },
  },
});
