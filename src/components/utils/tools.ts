// Return the "prefix-classname" if there's a prefix
export const returnClassName = (classPrefix: string, className: string) =>
  classPrefix ? `${classPrefix + '-' + className}` : className;
