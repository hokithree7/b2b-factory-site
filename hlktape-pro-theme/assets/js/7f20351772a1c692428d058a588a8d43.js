$(document).ready(function () {
  var phoneCode = [
    { "areaEn": "Albania", "areaCode": "+355" },
    { "areaEn": "Algeria", "areaCode": "+213" },
    { "areaEn": "Afghanistan", "areaCode": "+93" },
    { "areaEn": "Argentina", "areaCode": "+54" },
    { "areaEn": "United Arab Emirates", "areaCode": "+971" },
    { "areaEn": "Aruba", "areaCode": "+297" },
    { "areaEn": "Oman", "areaCode": "+968" },
    { "areaEn": "Azerbaijan", "areaCode": "+994" },
    { "areaEn": "Ascension Island", "areaCode": "+247" },
    { "areaEn": "Egypt", "areaCode": "+20" },
    { "areaEn": "Ethiopia", "areaCode": "+251" },
    { "areaEn": "Ireland", "areaCode": "+353" },
    { "areaEn": "Estonia", "areaCode": "+372" },
    { "areaEn": "Andorra", "areaCode": "+376" },
    { "areaEn": "Angola", "areaCode": "+244" },
    { "areaEn": "Antigua and Barbuda", "areaCode": "+1" },
    { "areaEn": "Austria", "areaCode": "+43" },
    { "areaEn": "Australia", "areaCode": "+61" },
    { "areaEn": "Macao Special Administrative Region", "areaCode": "+853" },
    { "areaEn": "Barbados", "areaCode": "+1" },
    { "areaEn": "Papua New Guinea", "areaCode": "+675" },
    { "areaEn": "Bahamas", "areaCode": "+1" },
    { "areaEn": "Pakistan", "areaCode": "+92" },
    { "areaEn": "Paraguay", "areaCode": "+595" },
    { "areaEn": "Palestinian National Authority", "areaCode": "+970" },
    { "areaEn": "Bahrain", "areaCode": "+973" },
    { "areaEn": "Panama", "areaCode": "+507" },
    { "areaEn": "Brazil", "areaCode": "+55" },
    { "areaEn": "Belarus", "areaCode": "+375" },
    { "areaEn": "Bermuda", "areaCode": "+1" },
    { "areaEn": "Bulgaria", "areaCode": "+359" },
    { "areaEn": "Northern Mariana Islands", "areaCode": "+1" },
    { "areaEn": "Benin", "areaCode": "+229" },
    { "areaEn": "Belgium", "areaCode": "+32" },
    { "areaEn": "Iceland", "areaCode": "+354" },
    { "areaEn": "Poland", "areaCode": "+48" },
    { "areaEn": "Bosnia and Herzegovina", "areaCode": "+387" },
    { "areaEn": "Bolivia", "areaCode": "+591" },
    { "areaEn": "Belize", "areaCode": "+501" },
    { "areaEn": "Botswana", "areaCode": "+267" },
    { "areaEn": "Bonaire", "areaCode": "+599" },
    { "areaEn": "Bhutan", "areaCode": "+975" },
    { "areaEn": "Burkina Faso", "areaCode": "+226" },
    { "areaEn": "Burundi", "areaCode": "+257" },
    { "areaEn": "Bouvet Island", "areaCode": "+47" },
    { "areaEn": "Korea", "areaCode": "+850" },
    { "areaEn": "Equatorial Guinea", "areaCode": "+240" },
    { "areaEn": "Denmark", "areaCode": "+45" },
    { "areaEn": "Germany", "areaCode": "+49" },
    { "areaEn": "East Timor", "areaCode": "+670" },
    { "areaEn": "Togo", "areaCode": "+228" },
    { "areaEn": "Dominican Republic", "areaCode": "+1809" },
    { "areaEn": "Dominic", "areaCode": "+1" },
    { "areaEn": "Russia", "areaCode": "+7" },
    { "areaEn": "Ecuador", "areaCode": "+593" },
    { "areaEn": "Eritrea", "areaCode": "+291" },
    { "areaEn": "France", "areaCode": "+33" },
    { "areaEn": "Faroe Islands", "areaCode": "+298" },
    { "areaEn": "French Polynesia", "areaCode": "+689" },
    { "areaEn": "French Guiana", "areaCode": "+594" },
    { "areaEn": "Vatican", "areaCode": "+379" },
    { "areaEn": "Philippines", "areaCode": "+63" },
    { "areaEn": "Fiji", "areaCode": "+679" },
    { "areaEn": "Finland", "areaCode": "+358" },
    { "areaEn": "Cape Verde", "areaCode": "+238" },
    { "areaEn": "Falkland Islands", "areaCode": "+500" },
    { "areaEn": "Gambia", "areaCode": "+220" },
    { "areaEn": "Republic of Congo)", "areaCode": "+242" },
    { "areaEn": "Congo (Gold)", "areaCode": "+243" },
    { "areaEn": "Colombia", "areaCode": "+57" },
    { "areaEn": "Costa Rica", "areaCode": "+506" },
    { "areaEn": "Guernsey", "areaCode": "+44" },
    { "areaEn": "Grenada", "areaCode": "+1" },
    { "areaEn": "Greenland", "areaCode": "+299" },
    { "areaEn": "Georgia", "areaCode": "+995" },
    { "areaEn": "Cuba", "areaCode": "+53" },
    { "areaEn": "Guadeloupe", "areaCode": "+590" },
    { "areaEn": "Guam", "areaCode": "+1" },
    { "areaEn": "Guyana", "areaCode": "+592" },
    { "areaEn": "Kazakhstan", "areaCode": "+7" },
    { "areaEn": "Haiti", "areaCode": "+509" },
    { "areaEn": "Korea", "areaCode": "+82" },
    { "areaEn": "Netherlands", "areaCode": "+31" },
    { "areaEn": "Netherlands Antilles (front)", "areaCode": "+599" },
    { "areaEn": "Montenegro", "areaCode": "+382" },
    { "areaEn": "Honduras", "areaCode": "+504" },
    { "areaEn": "Kiribati", "areaCode": "+686" },
    { "areaEn": "Djibouti", "areaCode": "+253" },
    { "areaEn": "Kyrgyzstan", "areaCode": "+996" },
    { "areaEn": "Guinea", "areaCode": "+224" },
    { "areaEn": "Guinea-Bissau", "areaCode": "+245" },
    { "areaEn": "Canada", "areaCode": "+1" },
    { "areaEn": "Ghana", "areaCode": "+233" },
    { "areaEn": "Gabon", "areaCode": "+241" },
    { "areaEn": "Cambodia", "areaCode": "+855" },
    { "areaEn": "Czech Republic", "areaCode": "+420" },
    { "areaEn": "Zimbabwe", "areaCode": "+263" },
    { "areaEn": "Cameroon", "areaCode": "+237" },
    { "areaEn": "Qatar", "areaCode": "+974" },
    { "areaEn": "Cayman Islands", "areaCode": "+1" },
    { "areaEn": "Cocos Islands (Keeling Islands)", "areaCode": "+61" },
    { "areaEn": "Comoros Union", "areaCode": "+269" },
    { "areaEn": "Kosovo", "areaCode": "+383" },
    { "areaEn": "Cote d'Ivoire", "areaCode": "+225" },
    { "areaEn": "Kuwait", "areaCode": "+965" },
    { "areaEn": "Croatia", "areaCode": "+385" },
    { "areaEn": "Kenya", "areaCode": "+254" },
    { "areaEn": "Kuco Islands", "areaCode": "+682" },
    { "areaEn": "Curacao", "areaCode": "+599" },
    { "areaEn": "Latvia", "areaCode": "+371" },
    { "areaEn": "Lesotho", "areaCode": "+266" },
    { "areaEn": "Laos", "areaCode": "+856" },
    { "areaEn": "Lebanon", "areaCode": "+961" },
    { "areaEn": "Lithuania", "areaCode": "+370" },
    { "areaEn": "Liberia", "areaCode": "+231" },
    { "areaEn": "Libya", "areaCode": "+218" },
    { "areaEn": "Liechtenstein", "areaCode": "+423" },
    { "areaEn": "Reunion", "areaCode": "+262" },
    { "areaEn": "Luxembourg", "areaCode": "+352" },
    { "areaEn": "Rwanda", "areaCode": "+250" },
    { "areaEn": "Romania", "areaCode": "+40" },
    { "areaEn": "Madagascar", "areaCode": "+261" },
    { "areaEn": "Isle of Man", "areaCode": "+44" },
    { "areaEn": "Maldives", "areaCode": "+960" },
    { "areaEn": "Malta", "areaCode": "+356" },
    { "areaEn": "Malawi", "areaCode": "+265" },
    { "areaEn": "Malaysia", "areaCode": "+60" },
    { "areaEn": "Mali", "areaCode": "+223" },
    { "areaEn": "Marshall Islands", "areaCode": "+692" },
    { "areaEn": "Martinique", "areaCode": "+596" },
    { "areaEn": "Mayotte", "areaCode": "+262" },
    { "areaEn": "Mauritius", "areaCode": "+230" },
    { "areaEn": "Mauritania", "areaCode": "+222" },
    { "areaEn": "United States", "areaCode": "+1" },
    { "areaEn": "US outer island", "areaCode": "+1" },
    { "areaEn": "United States Virgin Islands", "areaCode": "+1" },
    { "areaEn": "Mongolia", "areaCode": "+976" },
    { "areaEn": "Montserrat", "areaCode": "+1" },
    { "areaEn": "Bangladesh", "areaCode": "+880" },
    { "areaEn": "Peru", "areaCode": "+51" },
    { "areaEn": "Micronesia", "areaCode": "+691" },
    { "areaEn": "Myanmar", "areaCode": "+95" },
    { "areaEn": "Moldova", "areaCode": "+373" },
    { "areaEn": "Morocco", "areaCode": "+212" },
    { "areaEn": "Monaco", "areaCode": "+377" },
    { "areaEn": "Mozambique", "areaCode": "+258" },
    { "areaEn": "Mexico", "areaCode": "+52" },
    { "areaEn": "Namibia", "areaCode": "+264" },
    { "areaEn": "South Africa", "areaCode": "+27" },
    { "areaEn": "Antarctica", "areaCode": "+672" },
    { "areaEn": "South Sudan", "areaCode": "+211" },
    { "areaEn": "Nauru", "areaCode": "+674" },
    { "areaEn": "Nepal", "areaCode": "+977" },
    { "areaEn": "Nicaragua", "areaCode": "+505" },
    { "areaEn": "Niger", "areaCode": "+227" },
    { "areaEn": "Nigeria", "areaCode": "+234" },
    { "areaEn": "Niue", "areaCode": "+683" },
    { "areaEn": "Norway", "areaCode": "+47" },
    { "areaEn": "Palau", "areaCode": "+680" },
    { "areaEn": "Portugal", "areaCode": "+351" },
    { "areaEn": "The former Yugoslav Republic of Macedonia", "areaCode": "+389" },
    { "areaEn": "Japan", "areaCode": "+81" },
    { "areaEn": "Sweden", "areaCode": "+46" },
    { "areaEn": "Switzerland", "areaCode": "+41" },
    { "areaEn": "Salvador", "areaCode": "+503" },
    { "areaEn": "Samoa", "areaCode": "+685" },
    { "areaEn": "Republic of Serbia", "areaCode": "+381" },
    { "areaEn": "Sierra Leone", "areaCode": "+232" },
    { "areaEn": "Senegal", "areaCode": "+221" },
    { "areaEn": "Cyprus", "areaCode": "+357" },
    { "areaEn": "Seychelles", "areaCode": "+248" },
    { "areaEn": "Sabah", "areaCode": "+599" },
    { "areaEn": "Saudi Arabia", "areaCode": "+966" },
    { "areaEn": "Christmas Island", "areaCode": "+61" },
    { "areaEn": "Sao Tome and Principe", "areaCode": "+239" },
    {
      "areaEn": "St. Helena, Ascension and Tristan da Cunha",
      "areaCode": "+290"
    },
    { "areaEn": "Saint Kitts and Nevis", "areaCode": "+1" },
    { "areaEn": "Saint Lucia", "areaCode": "+1" },
    { "areaEn": "San Marino", "areaCode": "+378" },
    { "areaEn": "Saint Pierre and Miquelon", "areaCode": "+508" },
    { "areaEn": "Saint Vincent and the Grenadines", "areaCode": "+1" },
    { "areaEn": "Sint Eustatius", "areaCode": "+599" },
    { "areaEn": "Sri Lanka", "areaCode": "+94" },
    { "areaEn": "Slovakia", "areaCode": "+421" },
    { "areaEn": "Slovenia", "areaCode": "+386" },
    { "areaEn": "Svalbard", "areaCode": "+47" },
    { "areaEn": "Swaziland", "areaCode": "+268" },
    { "areaEn": "Sudan", "areaCode": "+249" },
    { "areaEn": "Suriname", "areaCode": "+597" },
    { "areaEn": "Solomon Islands", "areaCode": "+677" },
    { "areaEn": "Somalia", "areaCode": "+252" },
    { "areaEn": "Tajikistan", "areaCode": "+992" },
    { "areaEn": "Taiwan", "areaCode": "+886" },
    { "areaEn": "Thailand", "areaCode": "+66" },
    { "areaEn": "Tanzania", "areaCode": "+255" },
    { "areaEn": "Tonga", "areaCode": "+676" },
    { "areaEn": "Turks and Caicos Islands", "areaCode": "+1" },
    { "areaEn": "Tristanda Kunha", "areaCode": "+290" },
    { "areaEn": "Trinidad and Tobago", "areaCode": "+1" },
    { "areaEn": "Tunisia", "areaCode": "+216" },
    { "areaEn": "Tuvalu", "areaCode": "+688" },
    { "areaEn": "Turkey", "areaCode": "+90" },
    { "areaEn": "Turkmenistan", "areaCode": "+993" },
    { "areaEn": "Tokelau", "areaCode": "+690" },
    { "areaEn": "Wallis and Futuna", "areaCode": "+681" },
    { "areaEn": "Vanuatu", "areaCode": "+678" },
    { "areaEn": "Guatemala", "areaCode": "+502" },
    { "areaEn": "Venezuela", "areaCode": "+58" },
    { "areaEn": "Brunei", "areaCode": "+673" },
    { "areaEn": "Uganda", "areaCode": "+256" },
    { "areaEn": "Ukraine", "areaCode": "+380" },
    { "areaEn": "Uruguay", "areaCode": "+598" },
    { "areaEn": "Uzbekistan", "areaCode": "+998" },
    { "areaEn": "Spain", "areaCode": "+34" },
    { "areaEn": "Greece", "areaCode": "+30" },
    { "areaEn": "Hong Kong Special Administrative Region", "areaCode": "+852" },
    { "areaEn": "Singapore", "areaCode": "+65" },
    { "areaEn": "New Caledonia", "areaCode": "+687" },
    { "areaEn": "new Zealand", "areaCode": "+64" },
    { "areaEn": "Hungary", "areaCode": "+36" },
    { "areaEn": "Syria", "areaCode": "+963" },
    { "areaEn": "Jamaica", "areaCode": "+1" },
    { "areaEn": "Armenia", "areaCode": "+374" },
    { "areaEn": "Jan Mayen Island", "areaCode": "+47" },
    { "areaEn": "Yemen", "areaCode": "+967" },
    { "areaEn": "Iraq", "areaCode": "+964" },
    { "areaEn": "Iran", "areaCode": "+98" },
    { "areaEn": "Israel", "areaCode": "+972" },
    { "areaEn": "Italy", "areaCode": "+39" },
    { "areaEn": "India", "areaCode": "+91" },
    { "areaEn": "Indonesia", "areaCode": "+62" },
    { "areaEn": "United Kingdom", "areaCode": "+44" },
    { "areaEn": "The British Virgin Islands", "areaCode": "+1" },
    { "areaEn": "British Indian Ocean Territory", "areaCode": "+44" },
    { "areaEn": "Jordan", "areaCode": "+962" },
    { "areaEn": "Vietnam", "areaCode": "+84" },
    { "areaEn": "Zambia", "areaCode": "+260" },
    { "areaEn": "Jersey", "areaCode": "+44" },
    { "areaEn": "Chad", "areaCode": "+235" },
    { "areaEn": "Gibraltar", "areaCode": "+350" },
    { "areaEn": "Chile", "areaCode": "+56" },
    { "areaEn": "Central African Republic", "areaCode": "+236" },
    { "areaEn": "China", "areaCode": "+86" }
  ]

  var countryList = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo", "Cook Islands", "Costa Rica", "Croatia", "Curaçao", "Cyprus", "Czech Republic", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russian Federation", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "The Dominican Republic", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "United States Virgin Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe", "Åaland Islands"]

  var $INQURY_BOX = $(".crm_inquiry_form_boxcustom_inquiry_form_1754537749455290");
  var crmEmailStr = "Please enter a valid email address";
  var pagetitle = '';
  $('#pagetitle').val(document.title);

  var crmValidStr = "This field is required";
  var crmFailedStr = "Send failed";
  var apiPath = $('#apiPath').attr('value');
  var siteId = $('#siteId').attr('value');
  var clientId = $('#clientId').attr('value');

  $INQURY_BOX.find("[name='product_name']").each(function () {
    var i = $(this);
    var api = apiPath + `/shop-api/External/SearchProduct?clientId=${clientId}&siteId=${siteId}&linkUrl=${window.location.href}`;

    $.get(api).done(function (response) {
      if (response.code == 0) {
        i.val(response.data.product_name)
      }
    }).fail(function (error) {
      console.log(error);
    });
  })

  // 单行文本
  $INQURY_BOX.find('.textarea-input, .one-line-input, .phone_number').each(function () {
    var input = $(this);
    var charCount = input.parent().find('.char-count');
    var maxLength = input.prop('maxlength');
    charCount.text(`0/${maxLength}`);
    input.on('input', function () {
      var text = input.val();
      charCount.text(text.length + '/' + maxLength);

      if (input.attr('name') == 'mobile' && text.length < 5) {
        input.addClass('error')
        input.parent().find(".crmForm-error").remove();
        input.after('<div class="crmForm-error">Minimum 5 characters, please re-enter</div>')
      }

      if (input.attr('name') == 'mobile' && text.length > 4) {
        if (!$INQURY_BOX.find('#phoneCode').val() && $INQURY_BOX.find('#phoneCode').attr('required')) {
          input.removeClass('error')
          $INQURY_BOX.find('#phoneCode').addClass('error')
          input.parent().find(".crmForm-error").remove();
          input.after('<div class="crmForm-error">This field is required</div>')
        } else {
          input.removeClass('error')
          input.parent().find(".crmForm-error").remove();
        }
      }

      if (text.length > maxLength) {
        input.val(text.substring(0, maxLength));
        charCount.text(maxLength + '/' + maxLength);
      }

    })
  });

  // country下拉
  var $countrySelect = $INQURY_BOX.find('.country-select>select')
  $.each(countryList, function (index, item) {
    let optionElement = $("<option>").attr("value", item).text(item);
    $countrySelect.append(optionElement);
  })

  // phoneCode 
  var $codeSelect = $INQURY_BOX.find(".phone-wrap #phoneCode");
  $.each(phoneCode, function (index, item) {
    let optionElement = $("<option>").attr("value", item.areaCode).text(item.areaCode).attr("data-subtext", "(" + item.areaEn + ")");
    $codeSelect.append(optionElement);
  });

  // checkbox
  $INQURY_BOX.find('.checkbox-wrap-listen').off('click');
  $INQURY_BOX.find('.checkbox-wrap-listen').on('click', function (event) {
    event.stopPropagation();
    var checkbox = $(this).find('input[type="checkbox"]');
    checkbox.prop('checked', !checkbox.prop('checked'));
  });

  // 上传附件
  $INQURY_BOX.find("#uploadContainer").on("click", function () {
    $INQURY_BOX.find("#fileInput").click();
  });
  $INQURY_BOX.find("#fileInput").on("change", function () {
    var maxFiles = $(this).attr('data-max');
    var v = $INQURY_BOX.find('.attachment-value').val()
    var uploadedFiles = v ? v.split(',').length : 0;
    // 获取用户选择的文件
    var files = this.files;
    if (uploadedFiles + files.length > maxFiles) {
      this.value = '';
      alert(`Up to ${maxFiles} uploads`);
      return;
    }

    var uploadUrl = apiPath + `/shop-api/External/UploadFile?clientId=${clientId}&siteId=${siteId}`;

    for (let i = 0; i < files.length; i++) {
      let formData = new FormData();
      formData.append('file', files[i]);
      formData.append('name', files[i].name);
      let [name, type] = splitFileName(files[i].name)

      if (files[i].size > 30 * 1024 * 1024) {
        // 文件size大于30m，不上传，直接add item
        var listItemError = $('<div class="attachment-file-item error">')
        listItemError.append($('<i class="iconfont iconfont-File file-icon">'))
        var te = $('<div class="attachment-file-name">')
        te.append($("<div class='attachment-file-name-text'></div>").text(name + "."))
        te.append($("<div class='attachment-file-name-type'></div>").text(type))
        listItemError.append(te)
        listItemError.append($('<i class="iconfont iconfont-shanchu del-icon">'))
        listItemError.append($('<div class="file-error">').text("Maximum 30MB, please re-upload"))
        $INQURY_BOX.find('.attachment-file').append(listItemError);
      } else {
        $.ajax({
          url: uploadUrl,
          type: 'POST',
          data: formData,
          processData: false,
          contentType: false,
          success: function (result) {
            console.log('result', result);
            let r = result.code
            let u = result.data?.url
            var listItem = $(`<div class="attachment-file-item  ${r === -1 ? "error" : ""}">`);
            if (type == "jpg" || type == "png" || type == "jpeg") {
              listItem.append($('<img>').attr('src', u))
            } else {
              listItem.append($('<i class="iconfont iconfont-File file-icon">'))
            }
            var te = $('<div class="attachment-file-name">')
            te.append($("<div class='attachment-file-name-text'></div>").text(name + "."))
            te.append($("<div class='attachment-file-name-type'></div>").text(type))
            listItem.append(te)
            listItem.append($('<i class="iconfont iconfont-shanchu del-icon">'))
            $INQURY_BOX.find('.attachment-file').append(listItem);

            if (r === 0) {
              var o = $('.attachment-value').val()
              $INQURY_BOX.find(".attachment-value").val(o ? o + ',' + u : u);
              $INQURY_BOX.find(".attachment>.crmForm-error").remove();
              $INQURY_BOX.find(".attachment>input.error").removeClass('error')
            } else {
              // 第一次上传文件失败，需要清空值
              if (!uploadedFiles) {
                $INQURY_BOX.find("#fileInput").val('');
              }
              listItem.append($('<div class="file-error">').text(result.msg))
            }
          },
          error: function (xhr, status, error) {
            console.error('上传文件时出错：', error);
          }
        });
      }
    }
  });

  // 删除附件
  $INQURY_BOX.find(".attachment-file").on("click", ".del-icon", function () {
    var d = $(this).closest(".attachment-file-item");
    var i = d.index(); d.remove();
    var $attachmentValue = $INQURY_BOX.find(".attachment-value");
    var values = $attachmentValue.val().split(",");
    values.splice(i, 1);
    $attachmentValue.val(values.join(","));

    if (!$attachmentValue.val()) {
      $INQURY_BOX.find("#fileInput").val('');
    }
  });

  $INQURY_BOX.find(':input[required]').bind("keyup blur", function () {
    var element = $(this);
    var value = element.val();

    if (Array.isArray(value)) {
      value = value.join('');
    }
      // 如果输入的全是空格
    if (value && value.trim() === '') {
      element.addClass('error');
      // 移除旧的错误提示
      element.parent().find('.crmForm-error').remove();
      // 添加新的错误提示
      element.after('<div class="crmForm-error">Cannot contain only spaces</div>');
      return;
    }
    
    // 如果开头结尾是空格
    if (value && value.startsWith(' ')) {
      element.val(value.trim());
    }
    
    // 如果有值且不是纯空格，移除错误状态
    if (value && value.trim() && element.attr("name") !== "mobile") {
      element.removeClass('error');
      element.parent().find('.crmForm-error').remove();
    }

    // 如果是email，验证邮箱格式
    if (element.attr("name") == "email") {
      _crmEmailVali($(this), crmEmailStr);
    } else {
      _crmEmailVali($(this), crmValidStr);
    }

  });

  $INQURY_BOX.find('input[type="checkbox"] , input[type="radio"]').change(function () {
    var element = $(this);
    if (element.is(':checked')) {
      element.parent().parent().find(".crmForm-error").remove();
    }
  });

  $INQURY_BOX.find('.selectpicker').on('change.bs.select', function (e) {
    if ($(this).val()) {
      $(this).removeClass('error');
      $(this).parent().find(".crmForm-error").remove();
    }

    if ($(this).attr('name') == 'code' && $(this).val() && $INQURY_BOX.find(".phone-wrap input").val().length > 4) {
      // 判断字符
      $INQURY_BOX.find(".phone-wrap .crmForm-error").remove()
    }
  });

  // 提交的校验
  $INQURY_BOX.find("form").submit(function () {
    var form = $(this);

    if (checkBeforeSubmit(form)) {
      // 验证成功，继续处理表单提交逻辑
      form.find(".create-form-submit").attr("disabled", "disabled").append('<span class="crm-submit-load"></span>');
      var url = apiPath + "/managedata/aifeedback/add.php?";
      var parsedDict = parseQueryString(form.serialize());
      var outputString = generateQueryString(parsedDict);
      var dataObject = Object.fromEntries(new URLSearchParams(outputString));
      dataObject.pagetitle = document.title;
      dataObject.page_link = window.location.href;
      var parseCookie = (value) =>
        value
          .split(';')
          .map(v => v.split('='))
          .reduce((acc, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1]?.trim());
            return acc;
          }, {});
      dataObject.gclid = parseCookie(document.cookie).gclid || "";
      dataObject.site_session_id = window.matomo_site_id_cookie_key || "";
      var modifiedData = new URLSearchParams(dataObject).toString();
      $.post(url + $.param({ siteId: siteId, clientId: clientId }), modifiedData, function (result) {
        handleSubmitResult(form, result);
        console.log('result', result)
      }, 'json');
    }
    return false;
  });

  function checkBeforeSubmit(form) {
    // 如果tel长度小于5 直接返回false
    var isTelValid = form.find("input[name='mobile']").val() && form.find("input[name='mobile']").val().length < 5;
    if (isTelValid) {
      return false
    }

    var isValid = form[0].checkValidity();
    $(form[0].querySelectorAll('.crmForm-error')).remove();

    if (!isValid) {
      // 验证失败，加error样式和统一错误文案
      var invalidElements = $(form[0].querySelectorAll(':invalid'));
      var radioName = []

      invalidElements.each(function () {
        var element = $(this);
        element.removeClass('error')

        // raido
        if (element.is(':radio')) {
          var groupName = element.attr('name');
          if (!radioName.includes(groupName) && $INQURY_BOX.find(':input[name="' + groupName + '"]:checked').length === 0) {
            !radioName.includes(groupName) && radioName.push(groupName)
            element.addClass('error');
            element.parent().last().after('<div class="crmForm-error">This is a required field</div>')
          }
        }

        if (element.val() == '' || element.val() == null || element.val() == []) {
          element.addClass('error')
          element.after('<div class="crmForm-error">This is a required field</div>')
        }
      });
    }

    // 检查所有必填输入框
    form.find(':input[required]').each(function () {
      var $input = $(this);
      var value = $input.val();

      // Check if value is an array and concatenate if necessary
      if (Array.isArray(value)) {
        value = value.join('').trim();
      } else {
        value = value.trim();
      }
    
      // 如果全是空格
      if (!value) {
        isValid = false;
        $input.addClass('error');
        // 移除旧的错误提示
        $input.parent().find('.crmForm-error').remove();
        // 添加新的错误提示
        $input.after('<div class="crmForm-error">This is a required field</div>');
        return false;
      }
    });

    var isCheckboxValid = true;
    var checkboxName = []
    $INQURY_BOX.find(':checkbox').each(function () {
      var element = $(this);
      var groupName = element.attr('name');
      var isrequired = element.parent().attr('data-required')

      // 检查复选框组是否已经在 checkboxName 数组中，如果不在且未选中任何复选框，则将其添加到数组中
      if (isrequired && !checkboxName.includes(groupName) && $INQURY_BOX.find(':input[name="' + groupName + '"]:checked').length === 0) {
        isCheckboxValid = false;
        checkboxName.push(groupName);
        element.addClass('error');
        element.parent().last().after('<div class="crmForm-error">This is a required field</div>');
      }
    });

    var isEmialValid = true;
    form.find("input[name='email']").each(function () {
      if (!_crmEmailVali($(this), "Please enter a valid email address")) { isEmialValid = false; }
    });
    return isValid && isCheckboxValid && isEmialValid;
  }

  function _crmEmailVali(item, text) {
    item.removeClass('error');
    item.parent().find(".crmForm-error").remove();
    var value = $.trim(item.val());
    var re = /[A-Za-z0-9.\-+_]+@[a-z0-9.\-+_]+\.[a-z]{2,3}/;
    if (item.attr("name") == "email") {
      if (item.attr('required') && value == '') { item.after('<div class="crmForm-error">' + text + '</div>'); item.addClass('error'); return false; }
      if (value && !re.test(value)) { text = 'Your email is invalid'; item.after('<div class="crmForm-error">' + text + '</div>'); item.addClass('error'); return false; }
      return true;
    } else if (!value) {
      item.after('<div class="crmForm-error">' + text + '</div>'); return false;
    } else {
      return true;
    }
  }

  function _crmAlertText(type, text) {
    $("body").addClass("crm-body-clear");
    var succ = '<div id="crmMailMask"><div class="crmMailMask-box"><div class="crmMailMask-boxTop">' + text + '</div><div class="crmMailMask-boxBot"><button type="button" class="crmMailMask-close"> OK </button></div></div></div>';
    if (type == 1) {
      $("body").find("#crmMailMask").remove();
      $("body").append(succ);
    }
    $(".crmMailMask-close").click(function () {
      $("#crmMailMask").remove();
      $("body").removeClass("crm-body-clear");
    });
  }

  function handleSubmitResult(form, result) {
    try {
      form.find(".create-form-submit").removeAttr("disabled").find(".crm-submit-load").remove();
      if (result.code == '0') {
        form[0].reset();
        resetOtherData();
        $('.click-popup').removeClass('is-visible');

        $INQURY_BOX.find('.char-count').each(function (_index, element) {
          var $element = $(element);
          var t = $element.text();
          var parts = t.split('/');
          if (!parts[0]) {
            parts[0] = '0';
            $element.text(parts.join('/'));
          }
        });

        if (typeof gtag_report_conversion === "function") {
          gtag_report_conversion();
        } else {
          console.log('不存在谷歌表单函数');
        }
        var lang = '';
        var currentLang = $(':visible').filter('.current-lang em');
        if (currentLang.length > 0) {
          lang = currentLang.eq(0).text().trim().toLowerCase();
        } else {
          lang = $('html').attr('lang');
        }
        window.location.href = lang ? `/${lang}/inquiry_success`: '/inquiry_success';
      } else {
        _crmAlertText(1, crmFailedStr);
      }
    } catch (error) {
      _crmAlertText(1, error.message || crmFailedStr);
    }
  }


  function parseQueryString(queryString) {
    var parsedDict = {};
    var pairs = queryString.split('&');
    for (pair of pairs) {
      var [key, value] = pair.split('=');
      var decodedKey = decodeURIComponent(key);
      var decodedValue = decodeURIComponent(value);
      if (decodedKey in parsedDict) {
        if (Array.isArray(parsedDict[decodedKey])) {
          parsedDict[decodedKey].push(decodedValue);
        } else {
          parsedDict[decodedKey] = [parsedDict[decodedKey], decodedValue];
        }
      } else {
        parsedDict[decodedKey] = decodedValue;
      }
    }

    // code和phone合并
    if (parsedDict.code || parsedDict.mobile) {
      parsedDict.mobile = "" + parsedDict.code + parsedDict.mobile
      delete parsedDict.code;
    }

    return parsedDict;
  }

  function generateQueryString(parsedDict) {
    var pairs = [];
    for (const [key, value] of Object.entries(parsedDict)) {
      pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
    return pairs.join('&');
  }

  function splitFileName(string) {
    const parts = string.split('.'); // 将字符串按句点分割成数组
    const type = parts.pop(); // 弹出数组的最后一个元素
    const name = parts.join('.'); // 将剩余的部分重新组合成字符串
    return [name, type];
  }

  function resetOtherData() {
    // 获取选择框元素
    var selectElement = $INQURY_BOX.find('.mul-select-wrap .selectpicker');
    selectElement.each(function () {
      var sl = $(this);
      sl.val(''); sl.selectpicker('refresh');
    })
    // 删除code
    var phonecode = $INQURY_BOX.find(".phone-wrap .selectpicker");
    phonecode.each(function () {
      var c = $(this);
      c.val(''); c.selectpicker('refresh');
    })
    // 删除附件的item
    $INQURY_BOX.find(".attachment-file").empty();
    $(".click-popup").removeClass("is-visible");
  }
})