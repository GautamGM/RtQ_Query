/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for src folder
      '@components': path.resolve(__dirname, './src/components'), // Alias for components
      '@utils': path.resolve(__dirname, './src/utils'), // Alias for utility functions
      '@assets': path.resolve(__dirname, './src/assets'), // Alias for assets like images
      '@store': path.resolve(__dirname, './src/store'), // Alias for Redux store
    },
  },
});
