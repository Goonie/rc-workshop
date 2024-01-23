import { defineConfig } from 'vite';

import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [basicSsl(), react()],
  resolve: { alias: { '~': '/src' } },
  server: { port: 3000 },
});
