const Http = (data, time) => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(data);
    }, time || 1)
  );
};
