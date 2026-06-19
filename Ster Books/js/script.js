$(function () {
  // ドムが読み込まれてから以下のコードを実行

  // 1. 要素を取得する
  const hamburger = document.getElementById("js-hamburger");
  const nav = document.getElementById("js-nav");
  const body = document.body;

  // 2. ハンバーガーボタンを押した時の開閉処理（そのまま）
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-open");
    nav.classList.toggle("is-open");
    body.classList.toggle("u-noscroll");
  });

  // 3. ★【PC・スマホ共通】すべてのページ内リンクを緩やかにスクロールさせる
  $('a[href^="#"]').click(function () {
    // ① スマホ版だったときのために、メニューを閉じる処理を入れておく
    // （PC版のときにこれが実行されても、元々クラスが付いていないだけなのでエラーになりません）
    hamburger.classList.remove("is-open");
    nav.classList.remove("is-open");
    body.classList.remove("u-noscroll");

    // ② 速度をコントロールしてスムーズスクロール
    const speed = 800; // ★ここで移動時間を調整（800 = 0.8秒、1000 = 1秒）
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);

    if (target.length) {
      const position = target.offset().top;
      // 目的の場所まで指定スピードでなめらかに動かす
      $("html, body").animate({ scrollTop: position }, speed, "swing");
    }

    return false; // aタグ本来の瞬間ジャンプの動きを無効化する
  });
});
