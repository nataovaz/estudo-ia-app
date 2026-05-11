import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function normalizeBase(basePath) {
  const value = String(basePath || '/').trim();
  if (!value || value === '/') return '/';
  return `/${value.replace(/^\/+|\/+$/g, '')}/`;
}

function getBasePath() {
  if (process.env.VITE_BASE_PATH) return normalizeBase(process.env.VITE_BASE_PATH);
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
  if (process.env.GITHUB_ACTIONS === 'true' && repoName) return normalizeBase(repoName);
  return '/';
}

export default defineConfig({
  base: getBasePath(),
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    proxy: {
      '/api': 'http://127.0.0.1:3001'
    }
  }
});
