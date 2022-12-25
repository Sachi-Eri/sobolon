jQuery(".drawer-icon").on("click", function(e) {
	e.preventDefault();

  jQuery(".drawer-icon").toggleClass("active");
  jQuery(".drawer-content").toggleClass("active");
  jQuery(".drawer-bg").toggleClass("active");

	return false;
});//アイコンがクリックされた時にactiveクラスの付け外しをする

$('.header-nav-item li a').on('click', function() {
  $('.header-nav-item li a').removeClass('active');
  $(this).addClass('active');
});

$('a[href^="#"]').on('click',  function() {
  var header = $('header').innerHeight(); //ヘッダーが浮いている場合要素が下に潜り込んでしまうのでヘッダーの高さ分下に下げる
  var id = $(this).attr('href');
  var position = 0;
  if(id != "#") {
    position = $(id).offset().top - header; //この記述がないとトップに戻る時にスクロールしない
  };
  $('html,body').animate({
    scrollTop: position
  },
  300);
});

//google formへ送信
  let $form = $('#js-form')
  $form.submit(function (e) {
    $.ajax({
      url: $form.attr('action'),
      data: $form.serialize(), 
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $form.slideUp();
          $("#js-success").slideDown();
        },
        200: function () {
          $form.slideUp();
          $("#js-error").slideDown();
        }
      }
    });
    return false;
  });

//formの入力確認
let $submit = $('#js-submit')
$('#js-form input, #js-form textarea').on('change',function() {
  if(
    $('#js-form input[type="text"]').val() !== "" &&
    $('#js-form input[type="email"]').val() !== "" &&
    $('#js-form input[name="entry.1423931828"]').prop('checked') === true
  ) {
    $submit.addClass('active')
    $submit.prop('disabled', false)
  } else {
    $submit.removeClass('active')
    $submit.prop('disabled', true)
  }
})

new WOW().init();
