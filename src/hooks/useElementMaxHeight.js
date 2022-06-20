const elementScrollHeight = (selector) => {
  const el = document.querySelector(selector);

  return el.scrollHeight;
};

export default elementScrollHeight;
