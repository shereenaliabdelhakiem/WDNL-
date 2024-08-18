$('.partners_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    centerMode: true,
    autoplaySpeed:600,
    speed: 600,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
   ]
});
$('.portfolio-sider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 3,
      }
    }
  ]
});
$('.true_dir').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  centerMode: true,
  centerPadding: '60px',
  autoplaySpeed:2500,
  speed: 2500,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px',
        autoplaySpeed:500,
        speed: 2000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px',
        autoplaySpeed:500,
        speed: 2000,
      }
    }
 ]
});
$('.reverse_dir').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  rtl: true,
  autoplay: true,
  centerMode: true,
  centerPadding: '60px',
  autoplaySpeed:2500,
  speed: 2500,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px',
        autoplaySpeed:500,
        speed: 2000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px',
        autoplaySpeed:500,
        speed: 2000,
      }
    }
 ]
})