// Created by iWeb 3.0.4 local-build-20210124

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,332),url:'Recaps_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Recaps_files/stroke_1.png'},{rect:new IWRect(2,-2,356,4),url:'Recaps_files/stroke_2.png'},{rect:new IWRect(358,-2,4,4),url:'Recaps_files/stroke_3.png'},{rect:new IWRect(358,2,4,332),url:'Recaps_files/stroke_4.png'},{rect:new IWRect(358,334,4,4),url:'Recaps_files/stroke_5.png'},{rect:new IWRect(2,334,356,4),url:'Recaps_files/stroke_6.png'},{rect:new IWRect(-2,334,4,4),url:'Recaps_files/stroke_7.png'}],new IWSize(360,336))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://matrix-pi1.local/10-11_take2/2010-2011/Recaps/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Recaps_files/RecapsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
