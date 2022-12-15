export function singleton<T>(initializer: () => T): () => T {
  let instance: T | null;
  instance = null;
  return function () {
    if (instance !== null) {
      return instance;
    }
    return (instance = initializer());
  };
}
