(function () {
    const changeContent = () => {
      if (location.hash === '#register') {
        window.open('');
      } else if (location.hash === '#confirm') {
        window.open('');
      } else if (location.hash === '#login') {
        window.open('');
      } else if (location.hash === '#status'){
        window.open('');
      } else if (location.hash === '#home') {
        window.open('');
      } else if (location.hash === '#submit') {
        window.open('');
      } else {
          window.open('');
      }
    };
    
    window.onhashchange = () => {
      changeContent();
    };
    window.onload = () => {
      changeContent();
    };
  }());