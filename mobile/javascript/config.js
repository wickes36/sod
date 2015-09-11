	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	


bookConfig.loadingCaption="Loading";
bookConfig.loadingCaptionColor="#DDDDDD";
bookConfig.loadingBackground="#C10D0E";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.toolbarColor="#C10D0E";
bookConfig.iconColor="#CCCCCC";
bookConfig.pageNumColor="#333333";
bookConfig.FlipSound="Enable";
bookConfig.QRCode="Hide";
bookConfig.logoHeight="25";
bookConfig.logoPadding="10";
bookConfig.logoTop="8";
bookConfig.HomeButtonVisible="YES";
bookConfig.ShareButtonVisible="Show";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.ZoomButtonVisible="Yes";
bookConfig.BookMarkButtonVisible="Hide";
bookConfig.TableOfContentButtonVisible="Hide";
bookConfig.bookmarkBackground="#000000";
bookConfig.bookmarkFontColor="#CCCCCC";
bookConfig.SearchButtonVisible="Show";
bookConfig.leastSearchChar="3";
bookConfig.searchFontColor="#000000";
bookConfig.PrintButtonVisible="Yes";
bookConfig.BackgroundSoundButtonVisible="Enable";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.AutoPlayButtonVisible="Yes";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="9";
bookConfig.autoPlayLoopCount="1";
bookConfig.minZoomWidth="700";
bookConfig.minZoomHeight="518";
bookConfig.mouseWheelFlip="yes";
bookConfig.DownloadButtonVisible="Hide";
bookConfig.bgBeginColor="#E2E2E2";
bookConfig.bgEndColor="#E2E2E2";
bookConfig.bgMRotation="90";
bookConfig.LeftShadowWidth="90";
bookConfig.LeftShadowAlpha="0.6";
bookConfig.RightShadowWidth="55";
bookConfig.RightShadowAlpha="0.6";
bookConfig.pageBackgroundColor="#E8E8E8";
bookConfig.flipshortcutbutton="Show";
bookConfig.HardPageEnable="No";
bookConfig.RightToLeft="No";
bookConfig.flippingTime="0.3";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.showDoublePage="Yes";
bookConfig.addPaperCoil="No";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="10";
bookConfig.rightMargin="10";
bookConfig.LinkDownColor="#C10D0E";
bookConfig.LinkAlpha="0.2";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";



bookConfig.totalPageCount=21;
bookConfig.largePageWidth=1024;
bookConfig.largePageHeight=768;
bookConfig.bookTitle="Learning With Sodexo";
bookConfig.normalPath="../files/mobile/";
bookConfig.largePath="../files/mobile/";
bookConfig.productName="Flip PDF Professional";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="../files/thumb/";
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next Page","btnLastPage" : "Last","btnPrePage" : "Previous Page","btnDownload" : "Download","btnPrint" : "Print","btnSearch" : "Search","btnClearSearch" : "Clear","btnBookMark" : "Table of content","btnHelp" : "Help","btnFullScreen" : "Enable FullScreen","btnDisableFullScreen" : "Disable FullScreen","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnShareEmail" : "Share","btnSocialShare" : "Social Share","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnDragToMove" : "Drag move mode","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnGoToHome" : "Return Home","frmHelpCaption" : "Help","frmHelpTip1" : "Double click to zoom in or out","frmHelpTip2" : "Drag the page corner to view","frmPrintCaption" : "Print","frmPrintBtnCaption" : "Print","frmPrintPrintAll" : "Print All Pages","frmPrintPrintCurrentPage" : "Print Current Page","frmPrintPrintRange" : "Print Range","frmPrintExampleCaption" : "Example: 2,5,8-26","frmPrintPreparePage" : "Preparing Page:","frmPrintPrintFailed" : "Print Failed:","pnlSearchInputInvalid" : "(Minimal request length is 3 symbols)","loginCaption" : "Login","loginInvalidPassword" : "Not a valid password!","loginPasswordLabel" : "Password:","loginBtnLogin" : "Login","loginBtnCancel" : "Cancel","btnThumb" : "Thumbnails","lblPages" : "Pages:","lblPagesFound" : "Pages:","lblPageIndex" : "Page","btnAbout" : "About","frnAboutCaption" : "About & Contact","btnSinglePage" : "Single Page","btnDoublePage" : "Double Page","btnSwicthLanguage" : "Switch Language","tipChangeLanguage" : "Please select a language below...","btnMoreOptionsLeft" : "More Options","btnMoreOptionsRight" : "More Options","btnFit" : "Fit Window","smallModeCaption" : "Click to view in fullscreen","btnAddAnnotation" : "Add Annotations","btnAnnotation" : "Annotations","FlipPageEditor_SaveAndExit" : "Save and Exit","FlipPageEditor_Exit" : "Exit","DrawToolWindow_Redo" : "Redo","DrawToolWindow_Undo" : "Undo","DrawToolWindow_Clear" : "Clear","DrawToolWindow_Brush" : "Brush","DrawToolWindow_Width" : "Width","DrawToolWindow_Alpha" : "Alpha","DrawToolWindow_Color" : "Color","DrawToolWindow_Eraser" : "Eraser","DrawToolWindow_Rectangular" : "Rectangular","DrawToolWindow_Ellipse" : "Ellipse","TStuff_BorderWidth" : "Border Width","TStuff_BorderAlph" : "Border Alpha","TStuff_BorderColor" : "Border Color","DrawToolWindow_TextNote" : "Text Note","AnnotMark" : "Book Mark","lastpagebtnHelp" : "Last page","firstpagebtnHelp" : "First page","homebtnHelp" : "Return to home page","aboubtnHelp" : "About","screenbtnHelp" : "Open this application in full-screen mode","helpbtnHelp" : "Show help","searchbtnHelp" : "Search from pages","pagesbtnHelp" : "Take a look at the thumbnail of this brochure","bookmarkbtnHelp" : "Open Bookmark","AnnotmarkbtnHelp" : "Open Table of content","printbtnHelp" : "Print the brochure","soundbtnHelp" : "Turn on or off the sound","sharebtnHelp" : "Send Email to","socialSharebtnHelp" : "Social Share","zoominbtnHelp" : "Zoom in","downloadbtnHelp" : "Downdlaod this brochure","pagemodlebtnHelp" : "Switch Single and double page mode","languagebtnHelp" : "Switch Lauguage","annotationbtnHelp" : "Add Annotation","addbookmarkbtnHelp" : "Add Bookmark","removebookmarkbtnHelp" : "Remove BookMark","updatebookmarkbtnHelp" : "Update Bookmark","btnShoppingCart" : "Shopping Cart","Help_ShoppingCartbtn" : "Shopping Cart","Help_btnNextPage" : "Next page","Help_btnPrePage" : "Previous page","Help_btnAutoFlip" : "Auto filp","Help_StopAutoFlip" : "Stop atuo filp","btnaddbookmark" : "Add","btndeletebookmark" : "Delete","btnupdatebookmark" : "Update","frmyourbookmarks" : "Your bookmarks","frmitems" : "items","DownloadFullPublication" : "Full Publication","DownloadCurrentPage" : "Current Page","DownloadAttachedFiles" : "Attached Files","lblLink" : "Link","btnCopy" : "Copy Button","restorePage" : "Would you like to restore previous session","tmpl_Backgoundsoundon" : "Background Sound On","tmpl_Backgoundsoundoff" : "Background Sound Off","tmpl_Flipsoundon" : "Flip Sound On","tmpl_Flipsoundoff" : "Flip Sound Off","Help_PageIndex" : "The current page number","tmpl_PrintPageRanges" : "PAGE RANGES","tmpl_PrintPreview" : "PREVIEW","btnSelection" : "Select Text","loginNameLabel" : "Name:","btnGotoPage" : "Go","btnSettings" : "Setting","soundSettingTitle" : "Sound Setting","closeFlipSound" : "Close Flip Sound","closeBackgroundSound" : "Close Backgorund Sound","frmShareCaption" : "Share","frmShareLinkLabel" : "Link:","frmShareBtnCopy" : "Copy","frmShareItemsGroupCaption" : "Social Share","TAnnoActionPropertyStuff_GotoPage" : "Go to page","btnPageBack" : "Back","btnPageForward" : "Forward","SelectTextCopy" : "Copy Text","selectCopyButton" : "Copy","TStuffCart_TypeCart" : "Shopping Cart","TStuffCart_DetailedQuantity" : "Quantity","TStuffCart_DetailedPrice" : "Price","ShappingCart_Close" : "Close","ShappingCart_CheckOut" : "Checkout","ShappingCart_Item" : "Item","ShappingCart_Total" : "Total","ShappingCart_AddCart" : "Add to cart","ShappingCart_InStock" : "In Stock","TStuffCart_DetailedCost" : "Shipping cost","TStuffCart_DetailedTime" : "Delivery time","TStuffCart_DetailedDay" : "day(s)","ShappingCart_NotStock" : "Not enough in stock"}];var pageEditor =[[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoMovie",alpha:"1",moviePlayTriggerEvt:"none",movieStopTriggerEvt:"EVT_PageOffView",replayWhenPlayEventTrigger:"0",location:{tannoName:"movie1",x:"0.076171875",y:"0.14192708333333334",width:"0.3157949472402597",height:"0.2371719426406926",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"8388736",hintShapeAlpha:"1",hintW:"1",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},cpName:"fbp",className:"com.mobiano.flipbook.movie.TAnnoMovie",url:"files/pageConfig/video_1.mp4",skinColor:"10066329",skin:"Skin 1",sizeBool:"false",previewUrl:"",isShowTimer:"false"}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.595703",y:"0.227104",width:"0.079734",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"4"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.595703",y:"0.26590600000000003",width:"0.176986",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"6"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.595703",y:"0.30470800000000003",width:"0.100296",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"8"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.630859",y:"0.34351",width:"0.05699",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"9"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.630859",y:"0.382312",width:"0.066864",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"10"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.630859",y:"0.4211150000000001",width:"0.061537",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"11"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.630859",y:"0.4599170000000001",width:"0.078267",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"12"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.595703",y:"0.49871900000000013",width:"0.062312",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"13"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.595703",y:"0.5375210000000001",width:"0.233971",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"14"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.595703",y:"0.5763230000000001",width:"0.129135",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"16"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.605576",y:"0.615125",width:"0.123815",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"17"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.595703",y:"0.653927",width:"0.24612",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"19"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.595703",y:"0.692729",width:"0.118508",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"20"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.595703",y:"0.731531",width:"0.074441",height:"0.020473",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"21"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.069336",y:"0.31056500000000004",width:"0.177574",height:"0.020471",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.sodexo.peterhoney.com",linkTarget:"Blank"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.102919",y:"0.765466",width:"0.122405",height:"0.035095",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"9"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.751461",y:"0.765466",width:"0.168835",height:"0.035095",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"12"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.544897",y:"0.742889",width:"0.134124",height:"0.062879",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"11"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.308824",y:"0.765466",width:"0.158433",height:"0.035095",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"10"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link1",x:"0.076172",y:"0.9401040000000002",width:"0.125",height:"0.052083",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"3"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link2",x:"0.1767578125",y:"0.3059895833333333",width:"0.0732421875",height:"0.022135416666666668",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"8388736",hintShapeAlpha:"1",hintW:"1",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"4",shadowAngle:"270",shadowColor:"0",shadowAlpha:"0.6",shadowBlurX:"4",shadowBlurY:"4"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.sodexonet.com",linkTarget:"_blank"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",alpha:"1",overColor:"12651790",downColor:"12651790",outColor:"11184810",overAlpha:"0.2",downAlpha:"0.2",outAlpha:"0",pageViewedBool:"true",ellipseH:"0",ellipseW:"0",location:{tannoName:"link1",x:"0.1396484375",y:"0.3020833333333333",width:"0.188683",height:"0.020471",rotation:"0",reflection:"false",reflectionType:"0",reflectionAlpha:"0"},hint:{hintShapeColor:"0",hintShapeColor2:"0",hintShapeAlpha:"0",hintW:"0",hintH:"0",hintAuto:"true",hintShapeType:"2",text:""},shadow:{hasDropShadow:"false",shadowDistance:"0",shadowAngle:"0",shadowColor:"0",shadowAlpha:"0",shadowBlurX:"0",shadowBlurY:"0"},highlightsBool:"false",linkStatus:"1",mouseOver:"false",borderColor:"16737792",action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:peoplecentre.uk@sodexo.com",linkTarget:"_blank"}}]];
;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}