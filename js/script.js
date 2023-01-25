// ヘッダースクロール制御（関数）
function FixedAnime() {
  var headerH = 80;  // -80はヘッダーぶんの位置調整用
  var scroll = $(window).scrollTop();
  if (scroll >= headerH) {  //.headerの高さ以上になったら（CSS変化）
      $('.header').css('background-color', '#ffffff');
      $('.header-logo > a > img').attr('src', 'img/sub-header-logo.png');
      $('.nav-items__item > a').css('color', '#000000');
      $(".c-hamburger > span").css('background-color', '#000000');
    } else {  //それ以外は（CSSを戻す）
      $('.header').css('background-color', 'transparent');
      $('.header-logo > a > img').attr('src', 'img/top-header-logo.png');
      $('.nav-items__item > a').css('color', '#ffffff');
      $(".c-hamburger > span").css('background-color', '#ffffff');
  }
}
// ヘッダースクロール制御（実行部分）
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();  /* スクロールした瞬間からヘッダーを変化させる関数を呼ぶ*/
});


// モーダル
$(function() {
  //is-showクラスのつけ外しだけでモーダル表示非表示できるようにしています
  //アニメーションはcss側に記載しています
  $('#openModal').on('click', function () {
    $('#modalArea').toggleClass('is-show');
  });
  $('#closeModal').on('click', function () {
    $('#modalArea').toggleClass('is-show');
  });
  $('#modalBg').on('click', function () {
    $('#modalArea').toggleClass('is-show');
  });
});


// セレクトボックス選択時の色変更（JavaScript）
function changeColor(hoge){
  if (hoge.value == 0) {
      hoge.style.color = '';
  } else {
      hoge.style.color = '#000000';
  }
}


// Flatpickrの設定関数
const config = {
  locale: "ja",  // 日本語化
  minDate: "today",  // 本日以降の日付が選択可能
  mode: "range"  // 日付の期間選択可能
}
// Flatpickrの使用宣言
flatpickr('#js-datepicker', config);


// タブ
$(function () {
  $('.js-tab-trigger').on('click', function () {
      //まずは全triggerからclass削除
      $('.js-tab-trigger').removeClass('is-active');
      //次に全targetからclass削除
      $('.js-tab-target').removeClass('is-active');
      //次にクリックした要素にis-active
      $(this).addClass('is-active');
      //data属性を取得する
      let id = $(this).data("id");
      //data属性値=idが等しいものにclass付与
      $('#' + id).addClass('is-active');
  });
});

// ハンバーガーメニュー&ドロワー
$(function(){
  const hamburger = $('#js-hamburger');
  const drawer = $('#js-drawer');
  const oheya = $('#js-oheya');
  const menu = $('#js-menu');
  const onsen = $('#js-onsen');

  // ハンバーガーメニュークリック後にドロワー表示
  hamburger.on('click',function(){
    hamburger.toggleClass("is-checked")
    drawer.toggleClass("is-checked")
  })

  // ドロワー内の「お部屋」クリック後にドロワーを閉じ、元に戻る
  oheya.on('click',function(){
    hamburger.removeClass("is-checked")
    drawer.removeClass("is-checked")
  })

  // ドロワー内の「お料理」クリック後にドロワーを閉じ、元に戻る
  menu.on('click',function(){
    hamburger.removeClass("is-checked")
    drawer.removeClass("is-checked")
  })

  // ドロワー内の「温泉」クリック後にドロワーを閉じ、元に戻る
  onsen.on('click',function(){
    hamburger.removeClass("is-checked")
    drawer.removeClass("is-checked")
  })
})

// ハンバーガーメニュー&ドロワー（tab + enterキーのみ操作仕様）
$(function () {
  $('#js-hamburger').click(function () {
    $('body').toggleClass('is-drawerActive')

    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true')
      $('#js-drawer').attr('area-hidden','false')
    } else {
      $(this).attr('aria-expanded', 'false')
      $('#js-drawer').attr('area-hidden','true')
    }
  })

  //スマホ用メニューの背景ボックスクリックでもドロワーが消えるようにする
  $('#js-drawer').click(function () {
    $('body').removeClass('is-drawerActive')
    $('#js-hamburger').attr('aria-expanded', 'false')
    $('#js-drawer').attr('area-hidden','true')
  })
});