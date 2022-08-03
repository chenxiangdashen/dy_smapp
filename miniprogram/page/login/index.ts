// import config from "../../config/constant";
import { getCodeSession } from '../../api/login';

const app = getApp();

Page({
  data: {
    userInfo: null,
    avatarUrl: "/image/login/logo.png",
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
  },
  onLoad: function () {
    this.login();
    app.ready(() => {
      console.log(app.globalData);
      this.setData({
        userInfo: app.globalData.userInfo,
      });
    });
  },

  login() {
    console.log("登录");
    wx.login({
      success: (res) => {
        console.log(res);
        getCodeSession({js_code: res.code})
      },
    });
  },

  bindPhoneNumber(e: any) {
    var detail = e.detail;
    console.log({
      detail,
    });
    if (detail.iv) {
      // util
      //   .axios({
      //     url: "/wx/decryptPhone",
      //     method: "post",
      //     data: {
      //       encryptedData: detail.encryptedData,
      //       iv: detail.iv,
      //     },
      //   })
      //   .then(() => {});
    }
  },

  checkedPrivacyEvent(e: any) {
    //当用户点击了取消了checkbox，e.detail.value值就为undefined就为0
    this.setData({
      checkPrivacy: e.detail.value.length !== 0,
    });
  },
  gotoPrivacyPolicy() {
    wx.navigateTo({
      url: "/pages/privacyPolicy/index",
    });
  },
  gotoServePolicy() {
    wx.navigateTo({
      url: "/pages/servePolicy/index",
    });
  },
  onShow() {},
});
