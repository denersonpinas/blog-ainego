/* Newsletter Subscribe Spotlight JS ------------------------------------------------------ */

$(document).ready(function(){
	var newsletterValidation = {
		email: false
	}

	function validateNewsletter(){
		submitNewsletterButton = document.querySelector('#input-submit');
		if(newsletterValidation.email){
			submitNewsletterButton.disabled = false;
		}else{
			submitNewsletterButton.disabled = true;
		}
	}

	var inputEmail = document.querySelector('#newsletter-email');
	var emailValidation = document.querySelector('.email-validation');

	var inputEmailValue = '';

	inputEmail.addEventListener('input', function(e){
		inputEmailValue = e.target.value;

		if(/(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/.test(inputEmailValue)){
			emailValidation.classList.remove('user-invalid');
			emailValidation.classList.add('valid');
			newsletterValidation.email = true;
			validateNewsletter();
		}else{
			emailValidation.classList.remove('valid');
			emailValidation.classList.add('user-invalid');
			newsletterValidation.email = false;
			validateNewsletter();
		}
	});

	function subscribe_newsletter_invest() {
		//var URL = "http://localhost/nu-br/wp-admin/admin-ajax.php?action=subscribe_newsletter";
		var URL = document.querySelector('#admin-page').value;
		console.log(URL)
		var contact_form = document.querySelector('.newsletter-box-form')
		var form_data = new FormData(contact_form);

		axios({
			method: 'post',
			url: URL,
			data: form_data
		}).then(resp => {
			console.log(URL)
			if(resp.data.success)
				$('.newsletter-form-response').show();
		});

	}

	$('.newsletter-box-form').submit(function(e){
		e.preventDefault();

		subscribe_newsletter_invest();

	});

})

/* Form ------------------------------------------------------ */
function TestaCPF(strCPF) {
	var Soma;
	var Resto;
	Soma = 0;
	if (strCPF == "00000000000") return false;
	for (i=1; i<=9; i++)
		Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;

	if ((Resto == 10) || (Resto == 11))  Resto = 0;
	if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

	Soma = 0;
	for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
	Resto = (Soma * 10) % 11;

	if ((Resto == 10) || (Resto == 11))  Resto = 0;
	if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
	return true;
}

$(document).ready(function(){
	var formValidation = {
		name: false,
		cpf: false,
		email: false,
		emailConfirmation: false,
		privacyPolicy: false
	}

	function validateForm(){
		submitButton = document.querySelector('.aquisition-form-submit');
		if(formValidation.name && formValidation.cpf && formValidation.email && formValidation.emailConfirmation && formValidation.privacyPolicy){
			submitButton.disabled = false;
		}else{
			submitButton.disabled = true;
		}
	}

	var headerCtas = document.querySelectorAll('.cta-button');
	var aquisitionFormWrapper = document.querySelector('.aquisition-form-wrapper');
	var aquisitionFormOverlay = document.querySelector('.aquisition-form-overlay');
	var aquisitionFormCloseButton = document.querySelector('.aquisition-form-close-button');

	headerCtas.forEach( item => item.addEventListener('click', function(e){
		gtag('event', 'conversion', {'send_to': 'AW-963026780/cyo6CJyZ890BENy-mssD'});
		dataLayer.push({event: 'click-cta', locationCta: 'Header'});
		aquisitionFormWrapper.classList.toggle('opened');
	}));
	aquisitionFormOverlay.addEventListener('click', function(e){
		aquisitionFormWrapper.classList.remove('opened');
	});
	aquisitionFormCloseButton.addEventListener('click', function(e){
		aquisitionFormWrapper.classList.remove('opened');
	});

	var checkboxWrappers = document.querySelectorAll('.checkbox-wrapper');
	for(i = 0; i < checkboxWrappers.length; i++){
		let spanCheckbox = checkboxWrappers[i].querySelector('.span-checkbox'); 
		checkboxWrappers[i].addEventListener('click', function(e){
			if(e.target.id == 'field-accepted'){
				formValidation.privacyPolicy = !formValidation.privacyPolicy;
				validateForm();
			}
			if(e.target.classList.contains('checkbox-input'))
				spanCheckbox.classList.toggle('checked');
		});
	}

	var inputName = document.querySelector('#field-name');
	var inputCpf = document.querySelector('#field-cpf');
	var inputEmail = document.querySelector('#field-email');
	var inputEmailConfirmation = document.querySelector('#field-emailConfirmation');

	var inputEmailValue = '';
	var inputEmailConfirmationValue = '';
	var emailInputsMatch = true;



	inputName.addEventListener('input', function(e){
		if(/[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+\s[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+/.test(e.target.value)){
			inputName.classList.remove('user-invalid');
			inputName.classList.add('valid');
			formValidation.name = true;
			validateForm();
		}else{
			inputName.classList.remove('valid');
			inputName.classList.add('user-invalid');
			formValidation.name = false;
			validateForm();
		}
	});

	inputCpf.addEventListener('input', function(e){
		if(/^[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}$/.test(e.target.value) && TestaCPF(e.target.value.replace(/[\.-]/g,''))){
			inputCpf.classList.remove('user-invalid');
			inputCpf.classList.add('valid');
			formValidation.cpf = true;
			validateForm();
		}else{
			inputCpf.classList.remove('valid');
			inputCpf.classList.add('user-invalid');
			formValidation.cpf = false;
			validateForm();
		}
	});

	inputEmail.addEventListener('input', function(e){
		inputEmailValue = e.target.value;
		if(inputEmailValue == inputEmailConfirmationValue){
			inputEmailConfirmation.classList.remove('user-invalid');
			inputEmailConfirmation.classList.add('valid');
			formValidation.emailConfirmation = true;
			validateForm();
		}else{
			inputEmailConfirmation.classList.remove('valid');
			inputEmailConfirmation.classList.add('user-invalid');
			formValidation.emailConfirmation = false;
			validateForm();
		}
		if(/(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/.test(inputEmailValue)){
			inputEmail.classList.remove('user-invalid');
			inputEmail.classList.add('valid');
			formValidation.email = true;
			validateForm();
		}else{
			inputEmail.classList.remove('valid');
			inputEmail.classList.add('user-invalid');
			formValidation.email = false;
			validateForm();
		}
	});

	inputEmailConfirmation.addEventListener('input', function(e){
		inputEmailConfirmationValue = e.target.value;
		if(inputEmailConfirmationValue == inputEmailValue){
			inputEmailConfirmation.classList.remove('user-invalid');
			inputEmailConfirmation.classList.add('valid');
			formValidation.emailConfirmation = true;
			validateForm();
		}else{
			inputEmailConfirmation.classList.remove('valid');
			inputEmailConfirmation.classList.add('user-invalid');
			formValidation.emailConfirmation = false;
			validateForm();
		}
	});

	function randomB64() {
		const base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		let s = '';
		while (s.length < 5) {
			s += base64[Math.floor(Math.random() * base64.length)];
		}

		return s;
	}

	function populate_with_query_string(data) {

		var query_url = window.location.search;

		if(query_url == "") return data;

		query_url = query_url.replace("?", "");
		var queries = query_url.split("&");
		for(i = 0; i < queries.length; i++) {
			var parts = queries[i].split("=");
			data[parts[0]] = parts[1];
		}

		return data;
	}

	function create_data_prospect() {

		var data = {};

		var name = document.querySelector("#field-name").value;
		var cpf = document.querySelector("#field-cpf").value;
		var email = document.querySelector("#field-email").value;

		var data_parameters = {
			"landing_url": window.location.href,
			"current_url": window.location.href,
			"project": "nubank-blog",
			"version": "2.0.0"
		};
		data_parameters = populate_with_query_string(data_parameters);

		data = {
			"prospect": {
				"name": name,
				"cpf": cpf,
				"email": email
			},
			"marketing": {
				"parameters": JSON.stringify(data_parameters)
			},
			"accepted-contracts": [ 
				{ "name": "politica_privacidade_2020_08_10" }
			]
		};

		if(data_parameters.utm_source) {
			data.marketing.network = data_parameters.utm_source;
		}

		if(document.referrer) {
			data.marketing.referrer = document.referrer;
		}

		return JSON.stringify(data);

	}

	function send_request_prospect() {
		var URL_API = "https://prod-global-webapp-proxy.nubank.com.br/api/discovery";
		var formError = document.querySelector('#form-error');

		$.ajax({
			url: URL_API,
			type: "GET",
			success: function(data) {
				if(data.register_prospect_global_web) {
					var URL_REGISTER_PROSPECT = data.register_prospect_global_web;
					insert_prospect(URL_REGISTER_PROSPECT);
				} else {
					formError.hidden = false;
				}
			},
			error: function(data) {
				formError.hidden = false;
			}
		});
	}

	function insert_prospect(URL_REGISTER_PROSPECT) {

		var data = create_data_prospect();

		var formError = document.querySelector('#form-error');

		$.ajax({
			url: URL_REGISTER_PROSPECT,
			type: "POST",
			contentType: 'application/json; charset=utf-8',
			dataType: "json",
			data: data,
			headers: {"X-Correlation-ID": "LP_AVV" + randomB64()},
			success: function(data) {
				if(data.prospect_id) {
					dataLayer.push({event: 'nuconta-success'});
					gtag_report_conversion(window.location.href);
					formSuccess = document.querySelector('#form-success');
					aquisitionForm = document.getElementById('aquisition-form');
					userEmail = document.querySelector("#field-email").value;
					responseEmailSpan = formSuccess.querySelector('.submited-email');
					responseEmailSpan.textContent = userEmail;
					aquisitionForm.hidden = true;
					formSuccess.hidden = false;
				} else {
					formError.hidden = false;
				}
			},
			error: function(data) {
				formError.hidden = false;
			}
		});
	}

	$('#aquisition-form').submit(function(e){
		e.preventDefault();

		send_request_prospect();

	});
})

function gtag_report_conversion(url) {
	var callback = function () {
	  if (typeof(url) != 'undefined') {
		window.location = url;
	  }
	};
	gtag('event', 'conversion', {
		'send_to': 'AW-963026780/i_VqCNGJj94BENy-mssD',
		'event_callback': callback
	});
	return false;
  }