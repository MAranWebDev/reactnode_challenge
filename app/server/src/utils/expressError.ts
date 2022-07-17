const expressError = (message: any, statusCode: number) => {
  return { message, statusCode, ...Error };
};

export { expressError };
