$('document').ready(function() {


function slider(className) {
    $('.form-item figure').hide();
    $(className).find('figure').show();
  }

  $('#value-1').change(function() {
    if (window.innerWidth < 1024) slider('.item-1');    
  });

  $('#value-2').change(function() {
    if (window.innerWidth < 1024) slider('.item-2');
  });

  $('#value-3').change(function() {
    if (window.innerWidth < 1024) slider('.item-3');
  });

  if (window.innerWidth < 1024) {
    var isMobile = true;
    $('.form-item figure').hide();
    slider('.item-1');
  } else {
    var isMobile = false;
  }

  if ((window.innerWidth < 1024) && (!isMobile)) {
    $('.form-item figure').hide();
    slider('.item-1');
  }

  $(window).resize(function () {
    if ((window.innerWidth < 1024) && (!isMobile)) {
      $('.form-item figure').hide();
      slider('.item-1');
      isMobile = true;
    } else if ((window.innerWidth < 1024) && (isMobile)) {

    } else {
      $('.form-item figure').show();
      isMobile = false;
    }
  })

 
	
//
$('.b-middle__form.form-2 dl dd .big-btn').click(function () {
    var trigger = true
    $(this).closest('form').find('.validate').each(function (i) {
      var _this = this
      if (!validate(_this, trigger)) {
        $(this).closest('.b-middle__form.form-2 dl dd').addClass('danger')
        trigger = false
      }
    })
    if (!trigger) return false
  })

  function validate (_this, trigger) {
    var ckName = /^[А-Яа-яA-Za-z\s]{1,20}$/
    var ckText = /^[А-Яа-яA-Za-z0-9,.!?\s]{1,5000}$/
    var ckTel = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    var ckNumber = /^\d+$/
    var ckDate = /^(\d{1,2}).(\d{1,2}).(\d{2}|\d{4})$/
    var ckEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

    var type = $(_this).attr('type')
    // console.log(type)
    if (type === 'number') {
      if (!ckNumber.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'text') {
      if (!ckText.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'password') {
      if (!ckText.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'date') {
      console.log('date')
      if (!ckDate.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'email') {
      if (!ckEmail.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'tel') {
      if (!ckTel.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } if (type === 'name') {
      if (!ckName.test($(_this).val())) {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }	
	








	

});