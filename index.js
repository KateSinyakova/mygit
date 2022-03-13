window.addEventListener('DOMContentLoaded', function () {

  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);
    const link = document.querySelectorAll(`.${params.linkClass}`);


    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
      }
    });

    btn.addEventListener("click", function () {
      this.classList.toggle(params.activeClass);

      if (
        !menu.classList.contains(params.activeClass) &&
        !menu.classList.contains(params.hiddenClass)
      ) {
        menu.classList.add(params.activeClass);
        document.body.style.overflow = 'hidden';
      } else {
        menu.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
      }
    });

    link.forEach(function (m) {

      m.addEventListener("click", function () {
        this.classList.remove(params.activeClass);

        if (
          !menu.classList.contains(params.activeClass)&&
          !btn.classList.contains(params.activeClass)
        ) {
          menu.classList.remove(params.activeClass);

        } else {
          menu.classList.add(params.hiddenClass);
          document.body.removeAttribute('style');
        }
        btn.classList.remove(params.activeClass);
      });
    });
  }

  setBurger({
    btnClass: "header__burgrer-btn",
    menuClass: "header__menu-wrap",
    linkClass: "header__item-link",
    activeClass: "is-opened",
    hiddenClass: "is-closed",
  });


  function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

    search.addEventListener("animationend", function (evt) {
      if (this._isOpened) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        this._isOpened = false;
      } else {
        this._isOpened = true;
      }
    });

    search.addEventListener('click', function (evt) {
      evt._isSearch = true;
    });

    openBtn.addEventListener("click", function (evt) {
      this.disabled = true;

      if (
        !search.classList.contains(params.activeClass) &&
        !search.classList.contains(params.hiddenClass)
      ) {
        search.classList.add(params.activeClass);
      }
    });

    closeBtn.addEventListener('click', function () {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    });

    document.body.addEventListener('click', function (evt) {
      if (!evt._isSearch && search._isOpened) {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
      }
    });
  }

  setSearch({
    openBtnClass: "header__open-search-btn",
    closeBtnClass: "header__open-search-close-btn",
    searchClass: "header__open-search-form",
    activeClass: "is-opened",
    hiddenClass: "is-closed"
  });


  document.querySelectorAll('.header__bottom-item-btn').forEach(function (clickBtn) {
    clickBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.header__dropdown').forEach(function () {
        document.querySelector(`[data-target="${path}"]`).classList.toggle('is-active')
        document.querySelectorAll('.header__bottom-item-btn').forEach(function (btnArrow) {
          btnArrow.classList.toggle('btn-on')

        })
      })
    })
  })

  document.querySelectorAll('.catalog__tab-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__tab-card').forEach(function (tabsContent) {
        tabsContent.classList.remove('card-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('card-active')
      document.querySelectorAll('.catalog__tab-btn').forEach(function (btn) {
        btn.classList.remove('btn-active')
      })
      event.currentTarget.classList.add('btn-active')
    })
  })

  // hero


  new Swiper('.js-hero-swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 5000,
    autoplay: {
      delay: 5000
    }
  });

  // gallery


  const element = document.querySelector('select');
  const choices = new Choices(element, {
    allowHTML: true,
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    shouldSortItems: false,
  });


  const MOBILE_WIDTH = 768;

  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function scrollToContent(link, isMobile) {
    if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
      return;
    }

    const href = link.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  }

  document.querySelectorAll('.catalog__tab-btn').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      scrollToContent(this, true);
    });
  });

  // catalog

  new Accordion('.accordion-container', {
    duration: 400,
    openOnInit: [0],
  });


  // swiper


  new Swiper('.js-gallery-swiper', {

    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    speed: 1000,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.gallery__swiper-btn-next',
      prevEl: '.gallery__swiper-btn-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },

      761: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      1020: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },

      1600: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },
  });

  new Swiper('.js-events-swiper', {

    loop: false,
    speed: 1000,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    pagination: {
      el: '.events__swiper-pagination',
      type: 'bullets',
      dynamicMainBullets: 2,
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },

      761: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      1020: {
        slidesPerView: 3,
        spaceBetween: 27,

      },

      1600: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },

    navigation: {
      nextEl: '.events__btn-next',
      prevEl: '.events__btn-prev',
    },

  });

  new Swiper('.js-projects-swiper', {

    loop: false,
    speed: 1000,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },

      761: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      1020: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },

    navigation: {
      nextEl: '.projects__btn-next',
      prevEl: '.projects__btn-prev',
    },

  });


  var selector = document.querySelector("input[type='tel']");

  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  new window.JustValidate('.js-form');
  new JustValidate('.js-form', {
    rules: {
      tel: {
        required: true,
        minLength: 10,
        maxLength: 10,
      },
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },

    },
    colorWrong: '#D11616',
    messages: {
      name: {
        required: 'Введите Ваше имя',
        minLength: 'Введите более двух символов',
        maxLength: 'Введите не более десяти символов',
      },
      tel: {
        required: 'Введите Ваш телефон',
        minLength: 'Неверный формат',
        maxLength: 'Неверный формат',
      }
    },
    submitHandler: function (thisFrom) {
      let formDate = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      thisFrom.reset();
    }

  })




  tippy('.projects__tooltip', {
    theme: 'purple',
  });


  ymaps.ready(init);
  function init() {

    var myMap = new ymaps.Map("map", {

      center: [55.758468, 37.601088],
      controls: ['geolocationControl', 'zoomControl'],
      zoom: 14
    },

      {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: { top: "350px", right: "20px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "250px", right: "20px" }
      },

    );
    myMap.behaviors.disable('scrollZoom');

    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/contacts-map-icon.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [0, 0]
    });

    myMap.geoObjects.add(myPlacemark);
  }

  document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth',
      });
    });

  });

  const btns = document.querySelectorAll('.gallery__slide-link');
  const modalsOverlay = document.querySelector('.gallery__modals-overlay');
  const modals = document.querySelectorAll('.gallery__modal-card')
  const closeBtn = document.querySelectorAll('.gallery__modal-card-close-btn');

  btns.forEach((el) => {
    el.addEventListener('click', (on) => {
      let path = on.currentTarget.getAttribute('data-path');

      modals.forEach((el) => {
        el.classList.remove('gallery__modal-card--visible');
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal-card--visible');
      modalsOverlay.classList.add('gallery__modals-overlay--visible');

    });
  });
  closeBtn.forEach((e) => {
    e.addEventListener('click', (off) => {
      modalsOverlay.classList.remove('gallery__modals-overlay--visible');

      modals.forEach((e) => {
        e.classList.remove('gallery__modal-card--visible');

      })


    })
  })
})
