// Created by iWeb 3.0.4 local-build-20210123

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,314),url:'2014_2015_files/stroke_8.png'},{rect:new IWRect(-1,-1,2,2),url:'2014_2015_files/stroke_9.png'},{rect:new IWRect(1,-1,523,2),url:'2014_2015_files/stroke_10.png'},{rect:new IWRect(524,-1,2,2),url:'2014_2015_files/stroke_11.png'},{rect:new IWRect(524,1,2,314),url:'2014_2015_files/stroke_12.png'},{rect:new IWRect(524,315,2,3),url:'2014_2015_files/stroke_13.png'},{rect:new IWRect(1,315,523,3),url:'2014_2015_files/stroke_14.png'},{rect:new IWRect(-1,315,2,3),url:'2014_2015_files/stroke_15.png'}],new IWSize(525,316))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://matrix-pi1.local/mountain_house/Mountain_House/2014_2015/rss.xml");}
function onPageLoad()
{loadMozillaCSS('2014_2015_files/2014_2015Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
