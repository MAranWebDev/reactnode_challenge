const expressError = (message: any, statusCode: number) => {
  const props = { message, statusCode };
  return Object.assign(props, Error);
};

export { expressError };
