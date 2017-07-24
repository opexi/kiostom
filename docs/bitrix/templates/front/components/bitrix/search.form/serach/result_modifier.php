<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) die();

if(CModule::IncludeModule("search")):
	$arResult["REQUEST"] = Array(
		"~QUERY"=>false,
		"QUERY"=>false
	);
	if(isset($_REQUEST["q"]))
		$q = trim($_REQUEST["q"]);
	else
		$q = false;
	
	if($q!==false):
		if(isset($_REQUEST["spell"])):
			$arResult["REQUEST"]["~QUERY"] = $q;
			$arResult["REQUEST"]["QUERY"] = htmlspecialcharsex($q);
		else:
			$arLang = CSearchLanguage::GuessLanguage($q);
			if(is_array($arLang) && $arLang["from"] != $arLang["to"]):
				$arResult["REQUEST"]["~ORIGINAL_QUERY"] = $q;
				$arResult["REQUEST"]["ORIGINAL_QUERY"] = htmlspecialcharsex($q);

				$arResult["REQUEST"]["~QUERY"] = CSearchLanguage::ConvertKeyboardLayout($arResult["REQUEST"]["~ORIGINAL_QUERY"], $arLang["from"], $arLang["to"]);
				$arResult["REQUEST"]["QUERY"] = htmlspecialcharsex($arResult["REQUEST"]["~QUERY"]);
			else:
				$arResult["REQUEST"]["~QUERY"] = $q;
				$arResult["REQUEST"]["QUERY"] = htmlspecialcharsex($q);
			endif;
		endif;
	endif;
endif;