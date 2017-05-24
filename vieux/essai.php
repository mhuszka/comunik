<?php
// Couleur du texte des champs si erreur saisie utilisateur
$color_font_warn="#FF0000";
// Couleur de fond des champs si erreur saisie utilisateur
$color_form_warn="#FFCC66";
// Ne rien modifier ci-dessous si vous n’êtes pas certain de ce que vous faites !
$list['f_1']=array("Sélectionnez","Professionnel, Particulier, Association");
if(isset($_POST['submit'])){
	$erreur="";
	// Nettoyage des entrées
	while(list($var,$val)=each($_POST)){
	if(!is_array($val)){
		$$var=strip_tags($val);
	}else{
		while(list($arvar,$arval)=each($val)){
				$$var[$arvar]=strip_tags($arval);
			}
		}
	}
	// Formatage des entrées
	$f_2=trim(ucwords(eregi_replace("[^a-zA-Z0-9éèàäö\ -]", "", $f_2)));
	$f_3=strip_tags(trim($f_3));
	// Verification des champs
	if($f_1==0){
		$erreur.="<li><span class='txterror'>Le champ &laquo; Sélectionnez votre catégorie &raquo; n'a pas été défini.</span>";
		$errf_1=1;
	}
	if(strlen($f_2)<2){
		$erreur.="<li><span class='txterror'>Le champ &laquo; Nom Prénom / Nom de l'entreprise ou de l'association* &raquo; est vide ou incomplet.</span>";
		$errf_2=1;
	}
	if(strlen($f_3)<2){
		$erreur.="<li><span class='txterror'>Le champ &laquo; Email* &raquo; est vide ou incomplet.</span>";
		$errf_3=1;
	}else{
		if(!ereg('^[-!#$%&\'*+\./0-9=?A-Z^_`a-z{|}~]+'.
		'@'.
		'[-!#$%&\'*+\/0-9=?A-Z^_`a-z{|}~]+\.'.
		'[-!#$%&\'*+\./0-9=?A-Z^_`a-z{|}~]+$',
		$f_3)){
			$erreur.="<li><span class='txterror'>La syntaxe de votre adresse e-mail n'est pas correcte.</span>";
			$errf_3=1;
		}
	}
	if(strlen($f_4)<2){
		$erreur.="<li><span class='txterror'>Le champ &laquo; Message &raquo; est vide ou incomplet.</span>";
		$errf_4=1;
	}
	if($erreur==""){
		// Création du message
		$titre="Message de votre site";
		$tete="From:Site@Clacla.com\n";
		$corps.="Sélectionnez votre catégorie : ".$list['f_1'][$f_1]."\n";
		$corps.="Nom Prénom / Nom de l'entreprise ou de l'association* : ".$f_2."\n";
		$corps.="Email* : ".$f_3."\n";
		$corps.="Message : ".$f_4."\n";
		if(mail("clacla.gmail.com", $titre, stripslashes($corps), $tete)){
			$ok_mail="true";
		}else{
			$erreur.="<li><span class='txterror'>Une erreur est survenue lors de l'envoi du message, veuillez refaire une tentative.</span>";
		}
	}
}
?>