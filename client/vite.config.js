import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@features': '/src/features',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@services': '/src/services',
      '@recoil': '/src/recoil',
      '@validators': '/src/validators',
    },
  },
});
