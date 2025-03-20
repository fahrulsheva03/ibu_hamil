class Notifies{constructor(){jQuery.notify?(this._initBasic(),this._initDirections(),this._initColors(),this._initIcons(),this._initImage(),this._initHtml(),this._initProgress()):console.log("notify is null!")}_initBasic(){jQuery("#defaultNotifyButton").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:""},{type:"primary",delay:5e3})}))}_initDirections(){jQuery("#notifyButtonTopLeft").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"primary",delay:5e3,placement:{from:"top",align:"left"}})})),jQuery("#notifyButtonTopCenter").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"primary",delay:5e3,placement:{from:"top",align:"center"}})})),jQuery("#notifyButtonTopRight").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"primary",delay:5e3,placement:{from:"top",align:"right"}})})),jQuery("#notifyButtonBottomLeft").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"primary",delay:5e3,placement:{from:"bottom",align:"left"}})})),jQuery("#notifyButtonBottomCenter").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"primary",delay:5e3,placement:{from:"bottom",align:"center"}})})),jQuery("#notifyButtonBottomRight").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"primary",delay:5e3,placement:{from:"bottom",align:"right"}})}))}_initColors(){jQuery("#notifyButtonPrimary").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"primary",delay:5e3})})),jQuery("#notifyButtonSecondary").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"secondary",delay:5e3})})),jQuery("#notifyButtonTertiary").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"tertiary",delay:5e3})})),jQuery("#notifyButtonQuaternary").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"quaternary",delay:5e3})})),jQuery("#notifyButtonSuccess").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"success",delay:5e3})})),jQuery("#notifyButtonDanger").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"danger",delay:5e3})})),jQuery("#notifyButtonWarning").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"warning",delay:5e3})})),jQuery("#notifyButtonInfo").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"info",delay:5e3})})),jQuery("#notifyButtonLight").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"light",delay:5e3})})),jQuery("#notifyButtonDark").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"dark",delay:5e3})}))}_initIcons(){jQuery("#notifyButtonErrorIcon").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification.",icon:"cs-error-hexagon"},{type:"primary",delay:5e3})})),jQuery("#notifyButtonInfoIcon").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification.",icon:"cs-info-hexagon"},{type:"primary",delay:5e3})})),jQuery("#notifyButtonNoteIcon").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification.",icon:"cs-file-text"},{type:"primary",delay:5e3})})),jQuery("#notifyButtonSendIcon").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification.",icon:"cs-send"},{type:"primary",delay:5e3})}))}_initImage(){jQuery("#notifyButtonImage").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"",icon:"img/profile/profile-1.webp"},{type:"primary",icon_type:"image"})}))}_initHtml(){jQuery("#notifyButtonHtml").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"<strong>Bold Title</strong> ",message:'Acorn is created by <a href="https://themeforest.net/user/coloredstrategies" target="_blank">ColoredStrategies</a>'},{type:"primary",icon_type:"image"})}))}_initProgress(){jQuery("#notifyButtonProgress").on("click",(e=>{e.preventDefault(),jQuery.notify({title:"Hello World!",message:"Here is a notification."},{type:"primary",showProgressbar:!0})}))}}