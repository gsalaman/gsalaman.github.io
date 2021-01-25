// Created by iWeb 3.0.4 local-build-20210123

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id5" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="281" height="512" style="height: 512px; left: 403px; position: absolute; top: 9px; width: 281px; z-index: 1; "><param name="src" value="../../../../Media/VIDEO0007.mp4" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id5" type="video/quicktime" width="281" height="512" style="height: 512px; left: 403px; position: absolute; top: 9px; width: 281px; z-index: 1; "><param name="src" value="2_Allis_to_do_list_files/VIDEO0007.jpg"/><param name="target" value="myself"/><param name="href" value="../../../../../Media/VIDEO0007.mp4"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id5" type="video/quicktime" width="281" height="512" data="../../../../Media/VIDEO0007.mp4" style="height: 512px; left: 403px; position: absolute; top: 9px; width: 281px; z-index: 1; "><param name="src" value="../../../../Media/VIDEO0007.mp4"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,606),url:'2_Allis_to_do_list_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'2_Allis_to_do_list_files/stroke_1.png'},{rect:new IWRect(1,-1,341,2),url:'2_Allis_to_do_list_files/stroke_2.png'},{rect:new IWRect(342,-1,2,2),url:'2_Allis_to_do_list_files/stroke_3.png'},{rect:new IWRect(342,1,2,606),url:'2_Allis_to_do_list_files/stroke_4.png'},{rect:new IWRect(342,607,2,3),url:'2_Allis_to_do_list_files/stroke_5.png'},{rect:new IWRect(1,607,341,3),url:'2_Allis_to_do_list_files/stroke_6.png'},{rect:new IWRect(-1,607,2,3),url:'2_Allis_to_do_list_files/stroke_7.png'}],new IWSize(343,608)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('2_Allis_to_do_list_files/2_Allis_to_do_listMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('../../../../Media/transparent.gif');BlogFixupPreviousNext();applyEffects()}
function onPageUnload()
{Widget.onunload();}
