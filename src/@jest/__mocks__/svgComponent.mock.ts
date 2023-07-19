function SVGComponent(props: unknown) {
  const suffix = props && Object.keys(props).length ? `-${JSON.stringify(props)}` : '';
  return `IconMock${suffix}`;
}

export default SVGComponent;
