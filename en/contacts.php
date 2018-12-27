<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width" />
	<title>ukriniurkoleguia</title>
	<!-- Preloader -->
	<link rel="stylesheet" type="text/css" href="../css/preloader.css">
	<!-- Fonts -->
	<link rel="stylesheet" type="text/css" href="../css/fonts.css">
	<!-- Reset CSS -->
	<link rel="stylesheet" type="text/css" href="../css/reset.css">
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="../css/contacts.css">

</head>
<body class="loading">
	<div class="loader__wrap"></div>
	<div class="loader">
		<div class="loader__bg"></div>
	</div>
	
	<?php include_once "../php/includ/menu_top_en.php";?>
	
	<div class="pages" id="form1">
		<section class="contacts">
			<div class="textWrap">
				<h1 class="head head_contacts anim__txt">Contacts</h1>
			</div>
			<div class="textWrap">
				<p class="contacts__txt anim__txt">To reach our regional representative offices in Ukraine, please select a region from the list below.</p>
			</div>
			<div class="textWrap">
				<div class="anim__txt input__style input__style_select">
					<select name="offices" id="officesList" form="feedback">
						<option value="kyiv">Kyiv</option>
						<option value="lviv">Lviv</option>
						<option value="uzhgorod">Uzhgorod</option>
						<option value="lutsk">Lutsk</option>
						<option value="frankovsk">Ivano-Frankivsk</option>
						<option value="donetsk">Donetsk</option>
						<option value="ternopil">Ternopil</option>
						<option value="chernivtsi">Chernivtsi</option>
						<option value="vinnytsia">Vinnytsia</option>
						<option value="zhytomyr">Zhytomyr</option>
						<option value="zaporizhia">Zaporizhia</option>
						<option value="kropyvnytskyi">Kropyvnytskyi</option>
						<option value="sumy">Sumy</option>
						<option value="kharkiv">Kharkiv</option>
						<option value="kherson">Kherson</option>
						<option value="khmelnytskyy">Khmelnytskyy</option>
						<option value="cherkasy">Cherkasy</option>
						<option value="dnipro">Dnipro</option>
					</select>
					<p class="contacts__offices">Kyiv</p>
				</div>
			</div>
			<div class="contactsOptions__wrap">
				<div class="contactsOptions__scroll">
					<ul class="contactsOptions">
						<li class="contactsOptions__item" id="kyiv">Kyiv</li>
						<li class="contactsOptions__item" id="lviv">Lviv</li>
						<li class="contactsOptions__item" id="uzhgorod">Uzhgorod</li>
						<li class="contactsOptions__item" id="lutsk">Lutsk</li>
						<li class="contactsOptions__item" id="frankovsk">Ivano-Frankivsk</li>
						<li class="contactsOptions__item" id="donetsk">Donetsk</li>
						<li class="contactsOptions__item" id="ternopil">Ternopil</li>
						<li class="contactsOptions__item" id="chernivtsi">Chernivtsi</li>
						<li class="contactsOptions__item" id="vinnytsia">Vinnytsia</li>
						<li class="contactsOptions__item" id="zhytomyr">Zhytomyr</li>
						<li class="contactsOptions__item" id="zaporizhia">Zaporizhia</li>
						<li class="contactsOptions__item" id="kropyvnytskyi">Kropyvnytskyi</li>
						<li class="contactsOptions__item" id="sumy">Sumy</li>
						<li class="contactsOptions__item" id="kharkiv">Kharkiv</li>
						<li class="contactsOptions__item" id="kherson">Kherson</li>
						<li class="contactsOptions__item" id="khmelnytskyy">Khmelnytskyy</li>
						<li class="contactsOptions__item" id="cherkasy">Cherkasy</li>
						<li class="contactsOptions__item" id="dnipro">Dnipro</li>
					</ul>
				</div>
			</div>
			<div class="textWrap">
				<h2 class="head head_office anim__txt contacts_office">Headquaters</h2>
			</div>
			<div class="textWrap">
				<p class="contacts__txt anim__txt">Address: <span class="contacts_adress">2-2А Zolotovoritska St., Kyiv 01030</span></p>
			</div>
			<div class="textWrap">
				<p class="contacts__txt anim__txt">Phone: <a class="contacts_phone1" href="tel:+380442880390">+38 (044) 288-03-90</a><a class="contacts_phone2" href="tel:+380442345208">+38 (044) 234-52-08</a></p>
			</div>
			<div class="textWrap">
				<p class="contacts__txt anim__txt">Fax: <a class="contacts_fax" href="tel:+380442792835">+38 (044) 279-28-35</a></p>
			</div>
			<div class="textWrap">
				<p class="contacts__txt anim__txt phoneFax">Phone/Fax: <a class="contacts_phoneFax" href="#"></a></p>
			</div>
			<div class="textWrap">
				<p class="contacts__txt anim__txt">E-mail: <a class="contacts_email" href="mailto:info@ukrinur.com">info@ukrinur.com</a></p>
			</div>
		</section>
		<section class="feedback">
			<div class="textWrap">
				<h2 class="head head_feedback anim__txt">Feedback</h2>
			</div>
			<div class="textWrap">
				<p class="contacts__txt anim__txt">To: <span class="contacts_office">Headquaters</span></p>
			</div>
			<form class="feedback__form" id="feedback">
				<div class="textWrap textWrap_input">
					<div class="anim__txt input__style">
						<input class="" type="text" name="name" placeholder="Name" required>
					</div>
				</div>
				<div class="textWrap textWrap_input">
					<div class="anim__txt input__style">
						<input class="" type="email" name="email" placeholder="E-mail" required>
					</div>
				</div>
				<div class="textWrap textWrap_input">
					<div class="anim__txt input__style">
						<input class="" type="tel" name="tel" placeholder="Phone" required>
					</div>
				</div>
				<div class="textWrap textWrap_input">
					<div class="anim__txt input__style input__style_textarea">
						<textarea class="" name="question" placeholder="Question" required></textarea>
					</div>
				</div>
				<div class="textWrap textWrap_input textWrap_submit">
					<div class="anim__txt input__style">
						<input class="" type="submit" value="Send">
					</div>
				</div>
			</form>
		</section>
	</div>
		<!-- jQuery -->
	<script type="text/javascript" src="../js/jquery-3.3.1.min.js"></script>
		<!-- Preloader -->
	<script type="text/javascript" src="../js/preloaderContacts.js"></script>
		<!-- Mobile Menu -->
	<script type="text/javascript" src="../js/mobMenu.js"></script>
	<script>
		m1 = new MobileMenu('#mobMenu');
	</script>
	<script type="text/javascript" src="../js/settings.js"></script>
	<script type="text/javascript" src="../js/init_settings_en.js"></script>
	<script type="text/javascript" src="../js/formControl.js"></script>
	<script>
		f1 = new FormControl('#form1');
	</script>
</body>
</html>