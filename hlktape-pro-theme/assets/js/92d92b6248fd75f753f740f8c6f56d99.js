$(function () {
  const featureArea = document.querySelector(".transpak_feature_area");

  if (featureArea) {
    // 根据元素的高度设置 margin-top
    const adjustMarginTop = () => {
      const screenHeight = window.innerHeight;
      if (screenHeight < 1000) {
        featureArea.style.marginTop = "0px";
      }
    };

    // 初次调整
    adjustMarginTop();

    // 监听窗口大小变化，调整 margin-top
    window.addEventListener("resize", adjustMarginTop);
  }
});
