/*
 * 首页 资讯 数据
 */
let getZxData = function() {
    var arr = [
        {
            title: "西狮独品美容美发有限公司",
            message:'从事美发行业60余年，有丰富经验, 从事美发行业60余年，有丰富经验',
            pic: "../../images/skilledt_img_01.png",
            date: '2018/05/22'
        },
        {
            title: "圆月亮美甲沙龙",
            message: '从事美发行业60余年，有丰富经验, 从事美发行业60余年，有丰富经验',
            pic: "../../images/skilledt_img_02.png",
            date: '2018/05/28'
        },
        {
            title: "璀璨美睫会所",
            message: '从事美发行业60余年，有丰富经验, 从事美发行业60余年，有丰富经验',
            pic: "../../images/skilledt_img_03.png",
            date: '2018/05/21'
        },
        {
            title: "柔丝妮美容养生馆",
            message: '从事美发行业60余年，有丰富经验, 从事美发行业60余年，有丰富经验',
            pic: "../../images/skilledt_img_04.png",
            date: '2018/05/24'
        }
    ]
    return arr
};
/*
 * 首页 navnav 数据
 */
let getIndexNavData = function() {
  var arr = [
    {
      id: 1,
      icon: "../../images/nav_icon_01.png",
      title: "英语"
    },
    {
      id: 2,
      icon: "../../images/nav_icon_02.png",
      title: "艺术"
    },
    {
      id: 3,
      icon: "../../images/nav_icon_03.png",
      title: "户外拓展"
    },
    {
      id: 4,
      icon: "../../images/nav_icon_04.png",
      title: "亲子教育"
    },
    {
      id: 5,
      icon: "../../images/nav_icon_05.png",
      title: "体能训练"
    }
  ]
  return arr
};

/**
 * banner数据
 */
let getBannerData = function () {
  var arr = ['../../images/banner/banner_01.png', '../../images/banner/banner_02.png', '../../images/banner/banner_03.png', '../../images/banner/banner_04.png']
  return arr
};

let getJgListData = function () {
  var arr = [
    {
      title: "少儿英语1",
      rate:1,
      pic: "../../images/skilledt_img_01.png",
      message: '免费送你价值399课程',
      marks:["国内领先","10年行内经验"],
      dates:["2018-5-19", "2019-5-6"]
    },
    {
      title: "少儿英语2",
      rate:2,
      pic: "../../images/skilledt_img_01.png",
      message: '免费送你价值399课程',
      marks:["国内领先","10年行内经验"],
      dates:["2018-5-19", "2019-5-6"]
    },
    {
      title: "少儿英语3",
      rate: 3,
      pic: "../../images/skilledt_img_01.png",
      message: '免费送你价值399课程',
      marks:["国内领先","10年行内经验"],
      dates:["2018-5-19", "2019-5-6"]
    },
    {
      title: "少儿英语4",
      rate: 4,
      pic: "../../images/skilledt_img_01.png",
      message: '免费送你价值399课程',
      marks:["国内领先","10年行内经验"],
      dates:["2018-5-19", "2019-5-6"]
    }
  ]
  return arr
};
/*
 * 对外暴露接口
 */
module.exports = {
    getZxData: getZxData,
    getIndexNavData: getIndexNavData,
  getBannerData: getBannerData,
  getJgListData: getJgListData
}