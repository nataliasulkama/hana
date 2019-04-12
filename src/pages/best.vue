<template>
<f7-page name="best">
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
      <img src="../assets/images/img_best_main@3x.png" class="banner-img">
    </div>

    <f7-block class="products-container">
      <div class="single-product-container">
        <f7-row class="single-product">
          <f7-col width="60" class="product-info">
            <h3 class="product-name">オレンジブーケ</h3>
            <p class="product-price">2,460<span class="grey">円</span></p>
            <p class="product-desc">
              季節ごとに入荷したお花を我々が丁寧に選定してお送りいたします。
            </p>
          </f7-col>
          <f7-col width="40" class="product-image">
            <img src="../assets/images/img_best_01@3x.png" class="product-img">
          </f7-col>
        </f7-row>
        <f7-button fill class="product-btn">購入</f7-button>
        <hr>
      </div>

      <div class="single-product-container">
        <f7-row class="single-product">
          <f7-col width="60" class="product-info">
            <h3 class="product-name">イエローブーケ</h3>
            <p class="product-price">1,890<span class="grey">円</span></p>
            <p class="product-desc">
              季節ごとに入荷したお花を我々が丁寧に選定してお送りいたします。
            </p>
          </f7-col>
          <f7-col width="40" class="product-image">
            <img src="../assets/images/img_best_02@3x.png" class="product-img">
          </f7-col>
        </f7-row>
        <f7-button fill class="product-btn">購入</f7-button>
        <hr>
      </div>

      <div class="single-product-container">
        <f7-row class="single-product">
          <f7-col width="60" class="product-info">
            <h3 class="product-name">レッドブーケ</h3>
            <p class="product-price">2,460<span class="grey">円</span></p>
            <p class="product-desc">
              季節ごとに入荷したお花を我々が丁寧に選定してお送りいたします。
            </p>
          </f7-col>
          <f7-col width="40" class="product-image">
            <img src="../assets/images/img_best_03@3x.png" class="product-img">
          </f7-col>
        </f7-row>
        <f7-button fill class="product-btn">購入</f7-button>
      </div>
    </f7-block>
  </div>

</f7-page>
</template>

<style media="screen" scoped>
</style>
