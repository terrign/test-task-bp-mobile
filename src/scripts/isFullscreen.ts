const isFullscreen = () => {
  const isStandalone = 'standalone' in window.navigator && window.navigator['standalone'];

  const userAgent = window.navigator.userAgent.toLowerCase();
  const safari = /safari/.test(userAgent);
  const ios = /iphone|ipod|ipad/.test(userAgent);

  if (ios) {
    if (safari && isStandalone) {
      return true;
    }

    if (!safari) {
      return true;
    }
  }

  return false;
};

export { isFullscreen };
