// Created by iWeb 3.0.4 local-build-20210124

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,286),url:'Tuning_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Tuning_files/stroke_1.png'},{rect:new IWRect(2,-2,482,4),url:'Tuning_files/stroke_2.png'},{rect:new IWRect(484,-2,4,4),url:'Tuning_files/stroke_3.png'},{rect:new IWRect(484,2,4,286),url:'Tuning_files/stroke_4.png'},{rect:new IWRect(484,288,4,5),url:'Tuning_files/stroke_5.png'},{rect:new IWRect(2,288,482,5),url:'Tuning_files/stroke_6.png'},{rect:new IWRect(-2,288,4,5),url:'Tuning_files/stroke_7.png'}],new IWSize(486,290))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Tuning_files/TuningMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
