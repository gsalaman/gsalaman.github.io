// Created by iWeb 3.0.4 local-build-20210124

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,251),url:'Intro_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Intro_files/stroke_1.png'},{rect:new IWRect(2,-2,337,4),url:'Intro_files/stroke_2.png'},{rect:new IWRect(339,-2,5,4),url:'Intro_files/stroke_3.png'},{rect:new IWRect(339,2,5,251),url:'Intro_files/stroke_4.png'},{rect:new IWRect(339,253,5,4),url:'Intro_files/stroke_5.png'},{rect:new IWRect(2,253,337,4),url:'Intro_files/stroke_6.png'},{rect:new IWRect(-2,253,4,4),url:'Intro_files/stroke_7.png'}],new IWSize(341,255))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Intro_files/IntroMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
