//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 2000,
    duration: 1000,
    proList: [
      {
        logo: '/images/pro_01.jpg',
        title: 'test',
        desc: 'testing'
      },
      {
        logo: '/images/pro_02.jpg',
        title: 'test',
        desc: 'testing'
      },
      {
        logo: '/images/pro_03.jpg',
        title: 'test',
        desc: 'testing'
      }
    ]
  },
  onLoad: function () {
  },
  toDetail: function (e) {
    console.log(e);
    console.log(e.currentTarget.dataset.index);
  }
})
