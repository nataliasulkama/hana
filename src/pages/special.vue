<template>
<f7-page name="special">
  <!-- Top Navbar -->
  <f7-navbar :sliding="false">
    <f7-nav-left back-link class="back-link-nav" @click="$f7router.back()">
      <div class="back-text" @click="$f7router.back()">
        戻る
      </div>
    </f7-nav-left>
    <f7-nav-title class="navbar-title">
      <img src="../assets/images/logo_menubar@3x.png" class="navbar-title-img">
    </f7-nav-title>
    <f7-link class="navbar-login-icon"></f7-link>
  </f7-navbar>

  <div class="main-content-product-page">
    <div class="banner-container">
      <img src="../assets/images/img_teiki_main@3x.png" class="banner-img">
    </div>

    <f7-block class="products-container">
      <div class="single-product-container">
        <f7-row class="single-product">
          <f7-col width="60" class="product-info">
            <h3 class="product-name">ノーマルコース</h3>
            <p class="product-price"><span class="grey">月額</span>3,620<span class="grey">円</span></p>
            <p class="product-desc">
              季節ごとに入荷したお花を我々が丁寧に選定してお送りいたします。
            </p>
          </f7-col>
          <f7-col width="40" class="product-image">
            <img src="../assets/images/img_teiki_01@3x.png" class="product-img">
          </f7-col>
        </f7-row>
        <f7-button fill class="product-btn">購入</f7-button>
      </div>
      <hr>

      <div class="single-product-container">
        <f7-row class="single-product">
          <f7-col width="60" class="product-info">
            <h3 class="product-name">プチコース</h3>
            <p class="product-price"><span class="grey">月額</span>1,620<span class="grey">円</span></p>
            <p class="product-desc">
              季節ごとに入荷したお花を我々が丁寧に選定してお送りいたします。
            </p>
          </f7-col>
          <f7-col width="40" class="product-image">
            <img src="../assets/images/img_teiki_02@3x.png" class="product-img">
          </f7-col>
        </f7-row>
        <f7-button fill class="product-btn">購入</f7-button>
      </div>
      <hr>
      <div class="single-product-container">
        <f7-row class="single-product">
          <f7-col width="60" class="product-info">
            <h3 class="product-name">ゴージャスコース</h3>
            <p class="product-price"><span class="grey">月額</span>8,620<span class="grey">円</span></p>
            <p class="product-desc">
              季節ごとに入荷したお花を我々が丁寧に選定してお送りいたします。
            </p>
          </f7-col>
          <f7-col width="40" class="product-image">
            <img src="../assets/images/img_teiki_03@3x.png" class="product-img">
          </f7-col>
        </f7-row>
        <f7-button fill class="product-btn">購入</f7-button>
      </div>
    </f7-block>
  </div>

</f7-page>
</template>
