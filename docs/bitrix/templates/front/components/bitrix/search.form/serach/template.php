<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>
<li class="menu-search">
	<i id="menu-search" class="icokiostom-search"></i>
	<div class="menu-search-block">
		<div class="menu-search-form">
			<form action="<?=$arResult["FORM_ACTION"]?>" method="POST">
				<input type="text" name="q" value="<?=$arResult["REQUEST"]["~QUERY"];?>" size="15" maxlength="50" />
				<button type="submit" class="icokiostom-search"></button>
			</form>
		</div>
	</div>
</li>