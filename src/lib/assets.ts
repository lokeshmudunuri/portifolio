export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Prepends the base path (e.g. /portifolio) to local public asset URLs in production.
 */
export function assetPath(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
