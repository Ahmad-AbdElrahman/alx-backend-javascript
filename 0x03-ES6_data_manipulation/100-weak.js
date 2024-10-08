export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const currentCount = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, currentCount + 1);
  if (currentCount >= 4) throw new Error('Endpoint load is high');
}
