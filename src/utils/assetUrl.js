/**
 * Resolves static asset paths taking into account Vite's base URL.
 * In local development: base is '/' -> returns '/images/...'
 * On GitHub Pages: base is '/inkora-black-ink/' -> returns '/inkora-black-ink/images/...'
 * 
 * Idempotent: If an asset URL is already prefixed, it returns it unchanged.
 */
export function getAssetUrl(path) {
  if (!path || typeof path !== 'string') return path;

  // External URLs or data URIs
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const baseUrl = import.meta.env.BASE_URL || '/';

  // Already prefixed with baseUrl
  if (baseUrl !== '/' && path.startsWith(baseUrl)) {
    return path;
  }

  // Remove leading slash if any
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  if (baseUrl === './') {
    return `./${cleanPath}`;
  }

  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
}
