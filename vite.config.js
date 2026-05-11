import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function normalizeBase(basePath) {
  const value = String(basePath || '/').trim();
  if (!value || value === '/') return '/';
  return `/${value.replace(/^\/+|\/+$/g, '')}/`;
}

function getBasePath() {
  if (process.env.VITE_BASE_PATH) return normalizeBase(process.env.VITE_BASE_PATH);
  const parts = String(process.env.GITHUB_REPOSITORY || '').split('/');
  if (parts.length !== 2) return '/';
  const owner = parts[0].trim();
  const repoName = parts[1].trim();
  if (!owner || !repoName) return '/';
  if (process.env.GITHUB_ACTIONS === 'true') {
    if (repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`) return '/';
    return normalizeBase(repoName);
  }
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
