type RetryOptions = {
  retries?: number; // Number of retry attempts (default: 3)
  delay?: number; // Delay between attempts in milliseconds (default: 500)
  shouldRetry?: (error: any, attempt: number) => boolean; // Condition to determine whether to retry
};

export const retryPromise = async <T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> => {
  const {
    retries = 3,
    delay = 500,
    shouldRetry = () => true,
  } = options;

  let attempt = 0;

  while (true) {
    try {
      return await fn();
    } catch (error) {
      attempt++;
      const canRetry = attempt <= retries && shouldRetry(error, attempt);
      if (!canRetry) {
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
