const create = <T extends keyof HTMLElementTagNameMap>(
  tag: T,
  props?: Partial<HTMLElementTagNameMap[T]>,
  ...children: HTMLElement[]
) => {
  const elem = document.createElement(tag);

  if (props) {
    for (const key in props) {
      elem[key] = props[key] as HTMLElementTagNameMap[T][typeof key];
    }
  }

  if (children.length > 0) {
    for (const child of children) {
      elem.appendChild(child);
    }
  }

  return elem;
};

export { create };
