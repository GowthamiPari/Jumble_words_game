export { };
declare global {
namespace NodeJS {
    interface ProcessEnv {
      TIME_LIMIT: number;
    }
  }
}
  