"use strict";

let setFont = fz => Cookies.set('fontsize', fz, {
  expires: 9999
});
let getFont = () => Cookies.get('fontsize');
let showFont = () => Layouts.control.prefs.font = getFont();

let setTheme = t => Cookies.set('theme', t, {
  expires: 9999
});
let getTheme = () => Cookies.get('theme');

let setAlertInfo = f => Cookies.set('alertinfo', f, {
  expires: 9999
});
let getAlertInfo = () => Cookies.get('alertinfo');

let Layouts = {

  tab = {
    color: document.querySelector('#theme-color'),
    colorMs: document.querySelector('#theme-color-ms'),
    favicon: document.querySelector('[data-script-role="favicon"]')
  },

  header = {
    element: document.querySelector('[data-script-role="header"]'),
    logo: document.querySelector('[data-script-role="header-logo"]'),
  },

  control = {
    element: document.querySelector('[data-script-role="control"]'),
    trigger: document.querySelector('[data-script-role="control-trigger"]'),
    icon: document.querySelector('[data-script-role="control-trigger"] i'),
    prefs = {
      theme: document.querySelector('[data-script-role="theme"]'),
      
      incFont: document.querySelector('[data-script-role="inc-font"]'),
      font: document.querySelector('[data-script-role="current-fontsize"]'),
      decFont: document.querySelector('[data-script-role="dec-font"]'),
      reset: document.querySelector('[data-script-role="reset"]'),
      theming: [
        '.header', '.control', '.a', 'article', '.header-logo img', '.header-title h1', '.header-button', '.control-option', '.control-button', '.header-button i', 'blockquote.a', 'blockquote.p', '.image-block .caption', '.image-block .caption:before', '.contents', '.contents *', '.alert', '.alert-text', '.alert-button',
      ],
      fontsizing: ['p', 'a.a', 'h1.a', 'h2.a', 'h3.a', 'h4.a', 'blockquote.a', 'blockquote.p', ]
    }
  },

  contents = {
    element: document.querySelector('[data-script-role="contents"]'),
    trigger: document.querySelector('[data-script-role="contents-trigger"]'),
    icon: document.querySelector('[data-script-role="contents-trigger"] i'),
  },

  alert = {
    element: document.querySelector('[data-script-role="alert"]'),
    close: document.querySelector('[data-script-role="close-alert"]')
  },

  navigation = {
    element: document.querySelector('[data-script-role="navigation"]'),
    trigger: document.querySelector('[data-script-role="navigation-trigger"]'),
    close: document.querySelector('[data-script-role="navigation-trigger"]'),
  }
}

let Config = {
  pathToDayLogo = '/motherland/dist/images/mm/logoday.png',
  pathToNightLogo = '/motherland/dist/images/mm/logonight.png'
}

function initFontSize() {
  for (var i = 0; i < Layouts.control.prefs.fontsizing.length; i++) {
    for (var j = 0; j <= 10; j++) {
      document.querySelector(Layouts.control.prefs.fontsizing[i]).classList.remove('fz-' + j + 'x');
    }
  }



  switch (getFont()) {
    case '0':
      {
        for (let i = 0; i < amountOfFZels; i++) {
          document.querySelector(Layouts.control.prefs.fontsizing[i]).classList.add('fz-0x');
        }
        showFont()
        break;
      }

    case '1':
      {
        for (let i = 0; i < amountOfFZels; i++) {
          document.querySelector(Layouts.control.prefs.fontsizing[i]).classList.add('fz-1x');
        }
        showFont()
        break;
      }

    case '2':
      {
        for (let i = 0; i < amountOfFZels; i++) {
          document.querySelector(Layouts.control.prefs.fontsizing[i]).classList.add('fz-2x');
        }
        showFont()
        break;
      }

    case '3':
      {
        for (let i = 0; i < amountOfFZels; i++) {
          document.querySelector(Layouts.control.prefs.fontsizing[i]).classList.add('fz-3x');
        }
        showFont()
        break;
      }

    case '4':
      {
        for (let i = 0; i < amountOfFZels; i++) {
          document.querySelector(Layouts.control.prefs.fontsizing[i]).classList.add('fz-4x');
        }
        showFont()
        break;
      }
    case '5':
      {
        for (let i = 0; i < amountOfFZels; i++) {
          document.querySelector(Layouts.control.prefs.fontsizing[i]).classList.add('fz-5x');
        }
        showFont()
        break;
      }
    case '6':
      {
        for (let i = 0; i < amountOfFZels; i++) {
          document.querySelector(Layouts.control.prefs.fontsizing[i]).classList.add('fz-6x');
        }
        showFont()
        break;
      }
    case '7':
      {
        for (let i = 0; i < amountOfFZels; i++) {
          document.querySelector(Layouts.control.prefs.fontsizing[i]).classList.add('fz-7x');
        }
        showFont()
        break;
      }
    case '8':
      {
        for (let i = 0; i < amountOfFZels; i++) {
          document.querySelector(Layouts.control.prefs.fontsizing[i]).classList.add('fz-8x');
        }
        showFont()
        break;
      }

    case '9':
      {
        for (let i = 0; i < amountOfFZels; i++) {
          document.querySelector(Layouts.control.prefs.fontsizing[i]).classList.add('fz-9x');
        }
        showFont()
        break;
      }

    case '10':
      {
        for (let i = 0; i < amountOfFZels; i++) {
          document.querySelector(Layouts.control.prefs.fontsizing[i]).classList.add('fz-10x');
        }
        showFont()
        break;
      }
  }

}

function initTheme() {
  switch (getTheme()) {
    case 'light':
      {
        applyLightTheme();
        break;
      }

    case 'dark':
      {
        applyDarkTheme();
        break;
      }
  }
}

function changeTheme() {
  switch (getTheme()) {
    case 'dark':
      {
        applyLightTheme();
        break;
      }

    case 'light':
      {
        applyDarkTheme();
        break;
      }
  }
}

function applyLightTheme() {
  for (let i = 0; i < Layouts.control.prefs.theming.length; i++) {
    for (let j = 0; j < Layouts.control.prefs.theming[i].length; j++) {
      if (document.querySelector(Layouts.control.prefs.theming[j])) {
        document.querySelector(Layouts.control.prefs.theming[j]).classList.remove('dark-theme');
      }
    }
  }
  setTheme('light')
  Layouts.header.logo.setAttribute('src', Config.pathToDayLogo)
  Layouts.tab.favicon.setAttribute('href', Config.pathToDayLogo)
  Layouts.tab.color.setAttribute('content', '#ffffff');
  Layouts.tab.colorMs.setAttribute('content', '#ffffff');
}

function applyDarkTheme() {
  for (let i = 0; i < Layouts.control.prefs.theming.length; i++) {
    for (let j = 0; j < Layouts.control.prefs.theming[i].length; j++) {
      if (document.querySelector(Layouts.control.prefs.theming[j])) {
        document.querySelector(Layouts.control.prefs.theming[j]).classList.add('dark-theme');
      }
    }
  }
  setTheme('dark')
  Layouts.header.logo.setAttribute('src', Config.pathToNightLogo)
  Layouts.tab.favicon.setAttribute('href', Config.pathToNightLogo)
  Layouts.tab.color.setAttribute('content', '#0c0c0c');
  Layouts.tab.colorMs.setAttribute('content', '#0c0c0c');
}


function hide(el) {
  el.classList.add('l-dn')
}

function show(el) {
  el.classList.remove('l-dn')
}
