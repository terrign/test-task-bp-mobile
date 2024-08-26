declare module '*.module.css' {
  export const classes: Record<string, string>;
  export default classes;
}

declare module '*?as=webp' {
  const t: string;
  export default t;
}

declare module '*?as=jpg' {
  const t: string;
  export default t;
}
