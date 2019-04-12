<template>
<f7-page name="home">
  <!-- Top Navbar -->
  <f7-navbar :sliding="false">
    <f7-nav-left>
      <f7-link class="left-panel-icon" panel-open="left"></f7-link>
    </f7-nav-left>
    <f7-nav-title class="navbar-title">
      <img src="../assets/images/logo_menubar@3x.png" class="navbar-title-img">
    </f7-nav-title>
    <f7-link class="navbar-login-icon"></f7-link>
  </f7-navbar>

  <div class="main-content">
    <div class="left-content">
      <f7-block class="searchbar-container">
        <f7-searchbar search-container=".search-list" search-in=".item-title" :disable-button="!$theme.aurora" class="search-bar" no-shadow placeholder="商品を探す" :clear-button="false">
        </f7-searchbar>
        <img src="../assets/images/ico_search.png" class="navbar-search-icon">
      </f7-block>

      <f7-swiper pagination class="carousel-container" :params="{loop: true, autoplay: true}">
        <f7-swiper-slide class="single-slide"><img src="../assets/images/img_top_main@3x.png" class="slide-img"></f7-swiper-slide>
        <f7-swiper-slide class="single-slide"><img src="../assets/images/bunner_04@3x.png" class="slide-img"></f7-swiper-slide>
        <f7-swiper-slide class="single-slide"><img src="../assets/images/bunner_05@3x.png" class="slide-img"></f7-swiper-slide>
      </f7-swiper>

      <f7-block class="category-swiper">
        <f7-row class="category-header-container">
          <f7-col class="category-header">
            <h2>おすすめ商品</h2>
          </f7-col>
          <f7-col class="category-link">
            <f7-link @click="$f7router.navigate('/best/')">一覧で見る</f7-link>
          </f7-col>
        </f7-row>
        <f7-swiper :params="{slidesPerView: 3, spaceBetween: 20, freeMode: true, freeModeMomentum: false, loop: true}">
          <f7-swiper-slide>
            <div class="product-img-container">
              <img class="product-img " src="../assets/images/img_top_01@3x.png">
            </div>
            <p class="product-name">オレンジブーケ</p>
            <p class="product-price">2,460円</p>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="product-img-container">
              <img class="product-img " src="../assets/images/img_top_02@3x.png">
            </div>
            <p class="product-name">イエローブーケ</p>
            <p class="product-price">1,890円</p>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="product-img-container">
              <img class="product-img " src="../assets/images/img_top_03@3x.png">
            </div>
            <p class="product-name">レッドブーケ</p>
            <p class="product-price">2,460円</p>
          </f7-swiper-slide>
        </f7-swiper>
      </f7-block>

      <f7-block class="category-swiper">
        <f7-row class="category-header-container">
          <f7-col class="category-header">
            <h2>お花の定期便</h2>
          </f7-col>
          <f7-col class="category-link">
            <f7-link @click="$f7router.navigate('/special/')">一覧で見る</f7-link>
          </f7-col>
        </f7-row>
        <f7-swiper :params="{slidesPerView: 3, spaceBetween: 20, freeMode: true, freeModeMomentum: false, loop: true}">
          <f7-swiper-slide>
            <div class="product-img-container">
              <img class="product-img " src="../assets/images/img_top_04@3x.png">
            </div>
            <p class="product-name">ノーマルコース</p>
            <p class="product-price">3,620円</p>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="product-img-container">
              <img class="product-img " src="../assets/images/img_top_05@3x.png">
            </div>
            <p class="product-name">プチコース</p>
            <p class="product-price">1,620円</p>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="product-img-container">
              <img class="product-img " src="../assets/images/img_top_06@3x.png">
            </div>
            <p class="product-name">ゴージャスコース</p>
            <p class="product-price">8,620円</p>
          </f7-swiper-slide>
        </f7-swiper>
      </f7-block>
    </div>

    <f7-block class="home-banners">
      <img class="banner-img" src="../assets/images/bunner_02@3x.png" @click="$f7router.navigate('/fair/')">
      <img class="banner-img" src="../assets/images/bunner_03@3x.png">
      <img class="banner-img" src="../assets/images/bunner_06@3x.png" @click="$f7router.navigate('/special/')">
    </f7-block>
  </div>

  <!-- <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
    </f7-list> -->

</f7-page>
</template>

<style media="screen" scoped>
.searchbar-container {
  border: 1px solid #e2e2e2;
  border-radius: 50px !important;
  margin-top: 10px;
  margin-left: 2.5%;
  width: 95%;
  height: 50px;
  overflow: hidden;
  margin-bottom: 10px;
}

.searchbar {
  box-shadow: none !important;
  height: 70%;
  margin-left: -50px !important;
  z-index: 1;
}

.navbar-search-icon {
  position: absolute;
  right: 25px;
  top: 12px;
  margin-left: 50px;
  z-index: 2;
}

.carousel-container {
  max-width: 950px;
}

.slide-img {
  width: 100%;
}

.single-slide {
  margin-bottom: 30px;
}

.category-link {
  margin-top: 20px;
  text-align: right;
  font-size: 18px;
}

.category-header-container {
  margin: -30px 30px 0px 10px;
}

.product-img-container {
  width: 90%;
}

.product-img {
  width: 100%;
}

.product-name {
  margin-top: 0;
}

.product-price {
  margin-top: -10px;
  font-weight: 500;
  ;
}

.home-banners {
  width: 100%;
}

.banner-img {
  width: 100%;
  margin-bottom: 20px;
}
</style>
