!function(e){function o(o){for(var n,i,s=o[0],c=o[1],l=o[2],m=0,u=[];m<s.length;m++)i=s[m],r[i]&&u.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(o);u.length;)u.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,o=0;o<a.length;o++){for(var t=a[o],n=!0,s=1;s<t.length;s++){var c=t[s];0!==r[c]&&(n=!1)}n&&(a.splice(o--,1),e=i(i.s=t[0]))}return e}var n={},r={3:0},a=[];function i(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(){return Promise.resolve()},i.m=e,i.c=n,i.d=function(e,o,t){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,o){if(1&o&&(e=i(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)i.d(t,n,function(o){return e[o]}.bind(null,n));return t},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="/custom-hubs-template/",i.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=o,s=s.slice();for(var l=0;l<s.length;l++)o(s[l]);var d=c;a.push([1355,0]),t()}({1355:function(e,o,t){"use strict";t.r(o);var n=t(53),r=t.n(n),a=t(0),i=t.n(a),s=(t(4),t(3)),c=t(81),l=t.n(c),d=t(729),m=t.n(d),u=t(730),p=t.n(u),h=t(65),b=t(86),_=t.n(b),g=t(15);Object(h.a)("/cloud","Hubs Cloud Landing Page"),Object(s.c)([..._.a]);const f="https://aws.amazon.com/marketplace/pp/B084WNGRRP",y="https://aws.amazon.com/marketplace/pp/B084RZH56R",v="https://hubs.mozilla.com/docs/hubs-cloud-aws-quick-start.html";class w extends a.Component{componentDidMount(){}render(){return i.a.createElement(s.b,{locale:g.a,messages:g.b},i.a.createElement("div",{className:l.a.ui},i.a.createElement("div",{className:l.a.header},i.a.createElement("div",{className:l.a.headerLinks},i.a.createElement("a",{href:"/",rel:"noreferrer noopener"},"Try Hubs"))),i.a.createElement("div",{className:l.a.content},i.a.createElement("div",{className:l.a.heroPane},i.a.createElement("div",{className:l.a.heroMessage},i.a.createElement("div",{className:l.a.cloudLogo},i.a.createElement("img",{src:m.a})),i.a.createElement("div",{className:l.a.primaryTagline},i.a.createElement(s.a,{id:"cloud.primary_tagline"})),i.a.createElement("div",{className:l.a.secondaryTagline},i.a.createElement(s.a,{id:"cloud.secondary_tagline"})),i.a.createElement("div",{className:l.a.actionButtons},i.a.createElement("a",{href:f,className:l.a.downloadButton},i.a.createElement("div",null,i.a.createElement(s.a,{id:"cloud.call_to_action_enterprise"})))),i.a.createElement("div",{className:l.a.actionButtons},i.a.createElement("a",{href:y,className:l.a.downloadButton},i.a.createElement("div",null,i.a.createElement(s.a,{id:"cloud.call_to_action_personal"})))),i.a.createElement("div",{className:l.a.docLink},i.a.createElement("a",{href:v},i.a.createElement("div",null,i.a.createElement(s.a,{id:"cloud.aws_quick_start"}))))),i.a.createElement("div",{className:l.a.heroSplash},i.a.createElement("img",{src:p.a}),i.a.createElement("div",{className:l.a.splashTagline},i.a.createElement(s.a,{id:"cloud.splash_tag"}))))),i.a.createElement("div",{className:l.a.bg})))}}document.addEventListener("DOMContentLoaded",()=>{r.a.render(i.a.createElement(w,null),document.getElementById("ui-root"))})},15:function(e,o,t){"use strict";t.d(o,"a",function(){return i}),t.d(o,"b",function(){return c});var n=t(4),r=t(37);const a=(navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage).toLowerCase().split(/[_-]+/)[0],i=r[a]&&a||"en",s=r[i]||r.en;if(n.a.APP_CONFIG&&n.a.APP_CONFIG.translations&&n.a.APP_CONFIG.translations[i]){const e=n.a.APP_CONFIG.translations[i];for(const o in e)e.hasOwnProperty(o)&&e[o]&&(s[o]=e[o])}const c=Object.entries(s).map(([e,o])=>[e,o.replace(/%([\w-.]+)%/i,(e,o)=>s[o])]).reduce((e,o)=>(e[o[0]]=o[1],e),{})},158:function(e,o){},159:function(e,o){},160:function(e,o){},161:function(e,o){},167:function(e,o){},184:function(e,o){},185:function(e,o){},37:function(e){e.exports={en:{"app-name":"App","editor-name":"Scene Editor","contact-email":"app@company.com","company-name":"Company","share-hashtag":"#app","app-description":"Share a virtual room with friends.\nWatch videos, play with 3D objects, or just hang out.","app-tagline":"Private social VR in your web browser","auth.verified-title":"Email Verified!","auth.verify-failed":"Unable to sign in with this link. It may have already been used or has expired.","auth.verified":"Your email has been verified!\nYou can now close this browser tab and return to %app-name%.","auth.spoke-verified":"Your email has been verified!\nYou can now close this browser tab and return to %editor-name%.","sign-in.prompt":"Sign in to pin objects in rooms.","sign-in.admin":"Check your email for a verification email. Once verified, enter your email to create your account or sign in.","sign-in.admin-no-permission":"You don't have access to admin tools. Sign into another account or ask an administrator to grant you permission.","sign-in.hub":"An account is required to join rooms.\n\nEnter your email to create your account or sign in.","sign-in.auth-started":"Email sent!\n\nTo continue, click on the link in the email using your phone, tablet, or PC.\n\nNo email? You may not be able to create an account.","sign-in.pin":"You'll need to sign in to pin objects.","sign-in.pin-complete":"You are now signed in.","sign-in.unpin":"You'll need to sign in to un-pin objects.","sign-in.unpin-complete":"You are now signed in.","sign-in.change-scene":"You'll need to sign in to change the scene.","sign-in.change-scene-complete":"You are now signed in.","sign-in.room-settings":"You'll need to sign in to change the room's settings.","sign-in.room-settings-complete":"You are now signed in.","sign-in.close-room":"You'll need to sign in to close the room.","sign-in.close-room-complete":"You are now signed in.","sign-in.mute-user":"You'll need to sign in to mute other users.","sign-in.mute-user-complete":"You are now signed in.","sign-in.kick-user":"You'll need to sign in to kick other users.","sign-in.kick-user-complete":"You are now signed in.","sign-in.add-owner":"You'll need to sign in to assign moderators.","sign-in.add-owner-complete":"You are now signed in.","sign-in.remove-owner":"You'll need to sign in to assign moderators.","sign-in.remove-owner-complete":"You are now signed in.","sign-in.create-avatar":"You'll need to sign in to create avatars.","sign-in.create-avatar-complete":"You are now signed in.","sign-in.favorite-room":"You'll need to sign in to add this room to your favorites.","sign-in.favorite-rooms":"You'll need to sign in to add favorite rooms.","sign-in.favorite-room-complete":"You are now signed in.","sign-in.favorite-rooms-complete":"You are now signed in.","sign-in.tweet":"You'll need to sign in to send tweets.","sign-in.tweet-complete":"You are now signed in.","sign-in.as":"Signed in as","sign-in.in":"Sign In","sign-in.out":"Sign Out","room-settings.apply":"Apply","room-settings.name-subtitle":"Room Name","room-settings.description-subtitle":"Room Description","room-settings.room-access-subtitle":"Room Access","room-settings.permissions-subtitle":"Room Member Permissions","room-settings.room-size-subtitle":"Room Size","room-settings.spawn_and_move_media":"Create and move objects","room-settings.spawn_camera":"Create cameras","room-settings.spawn_drawing":"Create drawings","room-settings.pin_objects":"Pin objects","room-settings.access-private":"Private","room-settings.access-private-subtitle":"Only those with the link can join","room-settings.access-public":"Public","room-settings.access-public-subtitle":"Listed on the homepage","room-info.title":"Room & Scene Info","room-info.scene-info":"Scene Info","close-room.message":"Closing this room will remove yourself and others from the room, shutting it down permanently.\n\nAre you sure? This action cannot be undone.","close-room.confirm":"Yes, Close Room","close-room.cancel":"Cancel","promote.message":"Promoting a user will grant full access to room settings and moderation tools.\n\nAre you sure?","promote.confirm-prefix":"Yes, Promote ","promote.cancel":"Cancel","entry.room":"lobby","entry.enter-room-title":"Lobby","entry.enter-room":"Enter Room","entry.leave-room":"Leave Room","entry.change-scene":"Choose Scene","entry.in-lobby-notice":"You are viewing this room from the lobby.","entry.screen-prefix":"Enter on ","entry.desktop-screen":"Screen","entry.mobile-screen":"Phone","entry.mobile-safari":"Safari","entry.generic-prefix":" ","entry.generic-medium":"Connected VR Headset","entry.generic-subtitle-desktop":"Oculus or SteamVR","entry.gearvr-prefix":"Enter on ","entry.gearvr-medium":"Gear VR","entry.choose-device":"Choose Device","entry.device-medium":"Enter on Standalone VR","entry.device-subtitle-desktop":"Wireless VR Headsets","entry.device-subtitle-mobile":"Wireless VR Headsets","entry.device-subtitle-vr":"Phone or PC","entry.entry-disallowed":"Watch from Lobby","entry.entry-disallowed-subtitle":"Room is Full","entry.watch-from-lobby":"Watch from Lobby","entry.watch-from-lobby-subtitle":"Others will not be able to see or hear you","entry.cardboard":"Enter on Google Cardboard","entry.daydream-prefix":"Enter on ","entry.daydream-medium":"Daydream","entry.daydream-via-chrome":"Using Google Chrome","entry.invite-others":"invite others","entry.share-button":"Share","entry.desktop.invite-tip":"Nobody is here yet. Share this room to get together.","entry.mobile.invite-tip":"Share to get together.","entry.return-to-vr":"Return to VR","entry.open-in-window":"Open in Tab","entry.lobby":"Lobby","entry.back":"Back","entry.notify_me":"Notify me when others arrive","entry.mute-on-entry":"Mute my microphone","profile.save":"Accept","profile.display_name.validation_warning":"Alphanumerics and hyphens. At least 3 characters, no more than 32","profile.header":"Name & Avatar","profile.terms_of_use":"Terms of Use","profile.privacy_notice":"Privacy Notice","profile.choose_avatar":"Browse Avatars","profile.tabs.legacy":"Default","profile.tabs.skinnable":"Custom Skin","profile.tabs.url":"Custom Model","avatar-editor.info":"Find more custom avatar resources","avatar-editor.info-link":"here","avatar-editor.external-editor-info":"Create a custom skin for this avatar: ","avatar-preview.loading-failed":"Loading failed\nPlease choose another avatar","media-browser.search-placeholder.scenes":"Search Scenes...","media-browser.search-placeholder.avatars":"Search Avatars...","media-browser.search-placeholder.videos":"Search for Videos...","media-browser.search-placeholder.images":"Search for Images...","media-browser.search-placeholder.youtube":"Search for Youtube videos...","media-browser.search-placeholder.gifs":"Search for GIFs...","media-browser.search-placeholder.twitch":"Search for Twitch streams...","media-browser.search-placeholder.sketchfab":"Search Sketchfab Models...","media-browser.search-placeholder.poly":"Search Google Poly Models...","media-browser.search-placeholder.base":"Search...","media-browser.favorites-header":"Favorite Rooms","media-browser.add_custom_object":"Custom URL or File","media-browser.add_custom_scene":"Custom Scene","media-browser.add_custom_avatar":"Avatar GLB URL","media-browser.privacy_policy":"Privacy Policy","media-browser.report_issue":"Report Issue","media-browser.powered_by.images":"Search by Bing | ","media-browser.powered_by.videos":"Search by Bing | ","media-browser.powered_by.youtube":"Search by Google | ","media-browser.powered_by.gifs":"Search by Tenor | ","media-browser.powered_by.sketchfab":"Search by Sketchfab | ","media-browser.powered_by.poly":"Search by Google | ","media-browser.powered_by.twitch":"Search by Twitch | ","media-browser.powered_by.scenes":"Made with ","media-browser.powered_by.avatars":" ","media-browser.empty.images":"No results. Try entering a new search above.","media-browser.empty.videos":"No results. Try entering a new search above.","media-browser.empty.youtube":"No results. Try entering a new search above.","media-browser.empty.gifs":"No result. Try entering a new search above.","media-browser.empty.sketchfab":"No results. Try entering a new search above.","media-browser.empty.poly":"No results. Try entering a new search above.","media-browser.empty.twitch":"No results. Try entering a new search above.","media-browser.empty.favorites":"You don't have any favorites. Click a ⭐ to add to your favorites.","media-browser.nav_title.youtube":"YouTube","media-browser.nav_title.videos":"Videos","media-browser.nav_title.images":"Images","media-browser.nav_title.gifs":"GIFs","media-browser.nav_title.scenes":"Scenes","media-browser.nav_title.avatars":"Avatars","media-browser.nav_title.sketchfab":"Sketchfab","media-browser.nav_title.poly":"Google Poly","media-browser.nav_title.twitch":"Twitch","media-browser.create-avatar":"Create Avatar","media-browser.create-scene":"Create Scene with %editor-name%","media-browser.hub.joined-prefix":"Visited ","media-browser.similar-to-facet":'Similar to: "{name}"',"audio.title":"Audio Setup","audio.talk_to_test":"talk","audio.click_to_test":"click","audio.subtitle-desktop":"Confirm HMD speaker output","audio.subtitle-mobile":"Earphones are recommended","audio.enter-now":"Enter Now","audio.hmd-mic-warning":"Your HMD mic is not chosen","audio.grant-title":"Grant mic permissions","audio.grant-subtitle":"Mic access needed to be heard by others","audio.granted-title":"Mic permissions granted","audio.granted-subtitle":"You can still mute yourself in-game","audio.granted-next":"Next","exit.subtitle.exited":"Your session has ended. Refresh your browser to start a new one.","exit.subtitle.closed":"This room is no longer available.","exit.subtitle.denied":"You are not permitted to join this room. Please request permission from the room creator.","exit.subtitle.disconnected":"You have disconnected from the room. Refresh the page to try to reconnect.","exit.subtitle.left":"You have left the room.","exit.subtitle.full":"This room is full, please try again later.","exit.subtitle.scene_error":"The scene failed to load.","exit.subtitle.connect_error":"Unable to connect to this room, please try again later.","exit.subtitle.version_mismatch":"The version you deployed is not available yet. Your browser will refresh in 5 seconds.","autoexit.title":"Auto-ending session in ","autoexit.title_units":" seconds","autoexit.concurrent_subtitle":"You have started another session.","autoexit.idle_subtitle":"You have been idle for too long.","autoexit.cancel":"CANCEL","presence.entered_room":"entered the room.","presence.entered_lobby":"entered the lobby.","presence.join_lobby":"joined the lobby.","presence.join_room":"joined the room.","presence.leave":"left.","presence.name_change":"is now known as","presence.scene_change":"changed the scene to","presence.hub_name_change":"changed the name of the room to","presence.in_lobby":"Lobby","presence.entering":"Entering Room","presence.in_room":"In Room","home.create_a_room":"Create a Room","home.desktop.add_pwa":"Install Desktop App","home.mobile.add_pwa":"Add to Home Screen","home.take_a_tour":"Take a Tour","home.room_create_options":"options","home.room_create_button":"Create Room","home.create_name.validation_warning":"Invalid name, limited to 4 to 64 characters and limited symbols.","home.powered_by_prefix":"Powered by","home.powered_by_link":"Hubs Cloud","home.join_us":"Join the Conversation","home.have_code":"Have a room code?","home.add_to_discord_1":"Add the","home.add_to_discord_2":"%app-name% Bot","home.add_to_discord_3":"to Discord","home.create_with_spoke":"Create a Scene","home.report_issue":"Report Issues","home.source_link":"Source","home.whats_new_link":"What's New","home.about_link":"About","home.community_link":"Community","home.cloud_link":"Hubs Cloud","home.admin":"Admin","home.privacy_notice":"Privacy Notice","home.terms_of_use":"Terms of Use","home.made_with_love":"made with 🦆 by ","home.environment_author_by":" by ","dialog.close":"close","link.link_page_header_entry":"Enter your code:","link.link_page_header_headset":"Enter code:","link.linking_a_headset":"Have a letter code?","link.create_a_room":"Create a new room","link.try_again":"We couldn't find that code.\nPlease try again.","help.report_issue":"Report an Issue","scene.create_button":"Create a room with this scene","scene.tweet_button":"Share on Twitter","scene.unavailable":"This scene is no longer available.","scene.remix_button":"Remix in %editor-name%","scene.edit_button":"Edit in %editor-name%","link.in_your_browser":"In your device's web browser, go to:","link.enter_code":"Then, enter this one-time letter code:","link.do_not_close":"Your account and avatar will be transferred to the device.\nKeep this page open to use this code.","link.connect_headset":"Enter on Device","link.cancel":"cancel","invite.enter_via":"Or use expiring ","invite.enter_via_modal":"Others may enter via ","invite.tweet":"tweet","invite.and_enter_code":" code:","invite.duration_of_code":"new code every 72 hours","invite.or_visit":"Share room link:","invite.or_visit_modal":"or by visiting permalink","invite.embed":"or embed on a page","invite.embed-tip":"Please be mindful of where you embed a %app-name% room.\nGo to Room Settings to lock down permissions for this room.","commands.fly":"Toggle fly mode.","commands.grow":"Increase your avatar's size.","commands.shrink":"Decrease your avatar's size.","commands.scene":"Change the scene.","commands.rename":"Rename the room.","commands.help":"Show help.","commands.leave":"Disconnect from the room.","commands.duck":"The duck tested well. Quack.","commands.capture":"Capture a 15 second video.","commands.debug":"Toggle physics debug rendering.","commands.vrstats":"Toggle stats in VR.","preferences.muteMicOnEntry":"Mute microphone on entry","preferences.enableOnScreenJoystickLeft":"Enable left on-screen joystick for moving around","preferences.enableOnScreenJoystickRight":"Enable right on-screen joystick for looking around","preferences.onlyShowNametagsInFreeze":"Only show nametags while frozen","preferences.maxResolution":"Max Resolution (width x height in pixels)","preferences.globalVoiceVolume":"Incoming Voice Volume","preferences.globalMediaVolume":"Media Volume","preferences.materialQualitySetting":"Material quality (requires restart)","preferences.snapRotationDegrees":"Rotation per snap (in degrees)","preferences.allowMultipleHubsInstances":"Disable check for multiple hubs instances","preferences.baseMovementSpeed":"Base movement speed","preferences.disableMovement":"Disable movement","preferences.disableBackwardsMovement":"Disable backwards movement","preferences.disableStrafing":"Disable strafing","preferences.disableTeleporter":"Disable teleporter","settings.return-to-vr":"Return to VR","settings.change-avatar":"Set Name & Avatar","settings.change-scene":"Choose a Scene","settings.favorites":"Favorite Rooms","settings.preferences":"Preferences","settings.room-settings":"Room Settings","settings.close-room":"Close Room...","settings.room-info":"Room & Scene Info","settings.create-room":"New Room","settings.enable-streamer-mode":"Camera Mode","settings.disable-streamer-mode":"Exit Camera Mode","settings.send-feedback":"Send Feedback","settings.whats-new":"What's New","settings.features":"Help","settings.controls":"Controls","settings.community":"Join Discord","settings.tips":"Start Tour","settings.report":"Report Issue","settings.terms":"Terms of Use","settings.privacy":"Privacy Notice","settings.help":"Help","settings.row-profile":"You","settings.row-room":"Room","settings.row-tools":"Tools","tips.mobile.video_share_mode":"Tap to stop sharing video.","tips.mobile.pen_mode":"Tap icon again to end drawing.","tips.mobile.mute_mode":"You are muted. Tap to unmute.","tips.mobile.freeze_mode":"Two-finger tap to hide menus.","tips.mobile.look":"Welcome! 👋 Tap and drag to look around.","tips.mobile.locomotion":"Great! To move, pinch with two fingers.","tips.mobile.spawn_menu-pre":"Use the ","tips.mobile.spawn_menu-post":"at the top to create objects.","tips.mobile.freeze_gesture":"Two-finger tap to show menus.","tips.mobile.object_grab":"Drag an object to move or throw it.","tips.mobile.object_rotate_button-pre":"Tap and drag ","tips.mobile.object_rotate_button-post":" to rotate.","tips.mobile.object_scale_button-pre":"Tap and drag ","tips.mobile.object_scale_button-post":" to scale.","tips.mobile.object_recenter_button-pre":"Tap ","tips.mobile.object_recenter_button-post":" to have the object face you.","tips.mobile.object_pin":"Pin an object to save it to the room.","tips.mobile.video_share_failed":"No permission granted.","tips.mobile.invite":"Use the Share button to share this room.","tips.mobile.feedback":"🦆 Quack! Want to help Hubs?","tips.mobile.feedback-link":"Tell the Duck.","tips.desktop.video_share_mode":"You're streaming. Select again to stop sharing video.","tips.desktop.pen_mode":"Press ESC or right click to drop pen. Ctrl-Z to undo.","tips.desktop.mute_mode":"You are muted. Click or press M to un-mute.","tips.desktop.look":"Welcome to %app-name%! Let's take a quick tour. 👋 Click and drag to look around.","tips.desktop.locomotion":"Use the W A S D keys to move. Hold shift to boost.","tips.desktop.turning":"Perfect. Use the Q and E keys to rotate.","tips.desktop.spawn_menu-pre":"To create objects, click the ","tips.desktop.spawn_menu-post":"button at the top of the screen, or press Ctrl 1 through 7.","tips.desktop.freeze_gesture":"Press and hold spacebar to show object menus.","tips.desktop.menu_hover":"Now, point the cursor at an object to show the menu.","tips.desktop.object_grab":"Click and drag an object to move it. Or, flick to throw it!","tips.desktop.object_pin":"Pin an object to save it to the room.","tips.desktop.object_zoom":"Scroll to move this object towards and away from you.","tips.desktop.object_rotate_button-pre":"Click and drag ","tips.desktop.object_rotate_button-post":" to rotate the object.","tips.desktop.object_scale_button-pre":"Click and drag ","tips.desktop.object_scale_button-post":" to scale the object.","tips.desktop.object_recenter_button-pre":"Click ","tips.desktop.object_recenter_button-post":" to rotate the object to face you. Helpful if you drop it!","tips.desktop.object_scale":"Hold shift and scroll to scale it bigger and smaller.","tips.desktop.pen_color":"Use Shift-Q and Shift-E to change the pen color.","tips.desktop.pen_size":"Hold Shift and scroll to change the pen size.","tips.desktop.invite":"Nobody else is here. Use the Share button at the top to share this room.","tips.desktop.video_share_failed":"You need to grant permissions to stream video.","tips.streaming":"Now broadcasting to the lobby. Click to exit.","tips.desktop.watching":"You're in the lobby. Others cannot see or hear you.","tips.desktop.feedback":"🦆 Quack! Want to help us make Hubs better?","tips.desktop.feedback-link":"Talk to the Feedback Duck.","tips.watching.back":"Enter Room","tips.mobile.watching":"You're in the lobby.","tips.watching-exit":"Back","lobby.watching":"Watching ","loader.entering_lobby":"Entering lobby...","loader.loading":"Loading ","loader.connecting":"Connecting...","loader.connected":"Connected.","loader.object":"object","loader.objects":"objects","change-scene-dialog.change-scene":"Change Scene","change-scene-dialog.create-in-spoke":"Or, create a new scene using %editor-name%.","change-scene-dialog.new-spoke-project":"Launch %editor-name%","invalid-scene-url":"This URL does not point to a scene or valid GLB.","avatar-url-dialog.apply":"Apply","interstitial.prompt":"Continue","feedback.prompt":"🦆 Feedback ","help.prompt":"Help","help.docs_url":"https://github.com/mozilla/hubs/wiki/Hubs-Features","hide-ui.prompt":"Hide All","discord.primary_tagline":"Share a virtual room with your community.\nWatch videos, play with 3D objects, or just hang out.","discord.secondary_tagline":"No downloads or sign up. Full VR support too.","discord.contact_us":"Invite Bot to Server","discord.community_link":"Hubs Discord","discord.splash_tag":"Designed for serious businessing.","client-info.kick-button":"Kick","client-info.hide-button":"Hide","client-info.unhide-button":"Un-hide ","client-info.mute-button":"Mute","client-info.cancel":"Cancel","client-info.add-owner":"Promote","client-info.remove-owner":"Demote","object-info.remove-button":"Remove","object-info.open-link":"Open Link","object-info.waypoint":"Go To","object-info.pin-button":"Pin","object-info.raise-lights":"Show Background","object-info.lower-lights":"Hide Background","object-info.unpin-button":"Unpin","avatar-landing.select":"Select","avatar-landing.selected":"This is your current avatar","leave-room-dialog.join-room.message":"Joining a new room will leave this one. Are you sure?","leave-room-dialog.join-room.confirm":"Join Room","leave-room-dialog.create-room.message":"Creating a new room will leave this one. Are you sure?","leave-room-dialog.create-room.confirm":"Leave Room","embed.load-button":"Load Room","embed.presence-warning":"This room is embedded, so may be visible to visitors on other websites.","tweet-dialog.tweet":"Tweet","tweet-dialog.posted":"Your tweet has been posted.","tweet-dialog.close":"close","oauth-dialog.sign-in.twitter":"Connect to Twitter","oauth-dialog.sign-in.discord":"Sign in to Discord","oauth-dialog.message.twitter":"Connect to Twitter to send tweets from %app-name%.","cloud.primary_tagline":"Hubs Cloud deploys server infrastructure for private,\ncollaborative 3D rooms that can be accessed on your\ndesktop, mobile phone, or VR headset.","cloud.secondary_tagline":"Get it today on the AWS Marketplace.","cloud.call_to_action_personal":"Get Hubs Cloud Personal","cloud.call_to_action_enterprise":"Get Hubs Cloud Enterprise","cloud.aws_quick_start":"Quick Start Guide","cloud.splash_tag":"Configurable infrastructure for your own Hubs stack"}}},4:function(e,o,t){"use strict";t(54),t(55),t(56);var n=t(71),r=t.n(n);const a={};let i=!1;if(["RETICULUM_SERVER","THUMBNAIL_SERVER","CORS_PROXY_SERVER","NON_CORS_PROXY_DOMAINS","SENTRY_DSN","GA_TRACKING_ID","SHORTLINK_DOMAIN","BASE_ASSETS_PATH"].forEach(e=>{const o=document.querySelector(`meta[name='env:${e.toLowerCase()}']`);a[e]=o?o.getAttribute("content"):{NODE_ENV:"production",SHORTLINK_DOMAIN:"hubs-link.ieeevr.online",RETICULUM_SERVER:"hubs.ieeevr.online",THUMBNAIL_SERVER:"ieeevr-nearspark.ieeevr-hubs-internal.net",CORS_PROXY_SERVER:"ieeevr-cors-proxy.ieeevr-hubs-internal.net",NON_CORS_PROXY_DOMAINS:",hubs.ieeevr.online",POSTGREST_SERVER:"",BASE_ASSETS_PATH:"/custom-hubs-template/"}[e],"BASE_ASSETS_PATH"===e&&a[e]&&(t.p=a[e],r.a.GlobalWorkerOptions.workerSrc=`${a[e]}../assets/js/pdfjs-dist@2.1.266/build/pdf.worker.js`)}),a.AVAILABLE_INTEGRATIONS=window.AVAILABLE_INTEGRATIONS||{},window.APP_CONFIG){a.APP_CONFIG=window.APP_CONFIG;const{theme:e}=a.APP_CONFIG;if(e){const o=[];for(const t in e)e.hasOwnProperty(t)&&o.push(`--${t}: ${e[t]};`);const t=document.createElement("style");t.innerHTML=`:root{${o.join("\n")}}`,document.head.prepend(t)}a.APP_CONFIG.features||(a.APP_CONFIG.features={})}else a.APP_CONFIG={features:{}};a.feature=e=>{const o=a.APP_CONFIG.features[e];if("boolean"==typeof o||"enable_spoke"===e){const t=!1;return"enable_spoke"===e&&i||t||o}return o};let s={};a.image=(e,o)=>{const t=a.APP_CONFIG&&a.APP_CONFIG.images&&a.APP_CONFIG.images[e]||s[e];return t&&o?`url(${t})`:t},a.link=(e,o)=>a.APP_CONFIG&&a.APP_CONFIG.links&&a.APP_CONFIG.links[e]||o,a.setIsAdmin=e=>{i=e},a.isAdmin=()=>i,o.a=a},54:function(e,o,t){e.exports=t.p+"assets/images/app-logo-157c06cff6c80227eb577f35c79e58b6.png"},55:function(e,o,t){e.exports=t.p+"assets/images/company-logo-8f6f7c3b303004256295b45c2eee5117.png"},56:function(e,o,t){e.exports=t.p+"assets/images/editor-logo-6f885a1543496ebc23a21b7fea82b255.png"},65:function(e,o,t){"use strict";t.d(o,"a",function(){return s});var n=t(100),r=t.n(n),a=t(4);const i=window.ga;function s(e,o){const t=a.a.SENTRY_DSN,n=a.a.GA_TRACKING_ID;t&&(console.log("Tracking: Sentry DSN: "+t),r.a.config(t).install()),i&&n&&(console.log("Tracking: Google Analytics ID: "+n),i("create",n,"auto"),e&&i("set","page",e),o&&i("set","title",o),i("send","pageview"))}},729:function(e,o,t){e.exports=t.p+"assets/images/hubs-cloud-light-39f841eb06cbd6d4c6af4c94da4201f0.png"},730:function(e,o,t){e.exports=t.p+"assets/images/hubs-cloud-diagram-005225cf2a38532e56c5e3f5670d2b12.png"},81:function(e,o,t){e.exports={"download-button":"cloud__download-button__1xb0_",downloadButton:"cloud__download-button__1xb0_","loading-text":"cloud__loading-text__3Um7C",loadingText:"cloud__loading-text__3Um7C",bg:"cloud__bg__2Akff",ui:"cloud__ui__1o2nx",content:"cloud__content__391Or",header:"cloud__header__1FlYS","header-links":"cloud__header-links__1_Oz7",headerLinks:"cloud__header-links__1_Oz7","hero-pane":"cloud__hero-pane__HIcLr",heroPane:"cloud__hero-pane__HIcLr","cloud-logo":"cloud__cloud-logo__3KVAP",cloudLogo:"cloud__cloud-logo__3KVAP","primary-tagline":"cloud__primary-tagline__3ETHH",primaryTagline:"cloud__primary-tagline__3ETHH","secondary-tagline":"cloud__secondary-tagline__2k1ru",secondaryTagline:"cloud__secondary-tagline__2k1ru","hero-message":"cloud__hero-message__21ezn",heroMessage:"cloud__hero-message__21ezn","hero-splash":"cloud__hero-splash__2DkIb",heroSplash:"cloud__hero-splash__2DkIb","splash-tagline":"cloud__splash-tagline__3BM__",splashTagline:"cloud__splash-tagline__3BM__","preview-video":"cloud__preview-video__3RbXQ",previewVideo:"cloud__preview-video__3RbXQ","doc-link":"cloud__doc-link__3QozX",docLink:"cloud__doc-link__3QozX","tutorial-buttons":"cloud__tutorial-buttons__1_xIG",tutorialButtons:"cloud__tutorial-buttons__1_xIG","thank-you":"cloud__thank-you__11qC4",thankYou:"cloud__thank-you__11qC4","player-overlay":"cloud__player-overlay__YjgWu",playerOverlay:"cloud__player-overlay__YjgWu","player-content":"cloud__player-content__328BH",playerContent:"cloud__player-content__328BH","player-video":"cloud__player-video__3irun",playerVideo:"cloud__player-video__3irun",attribution:"cloud__attribution___ppAe"}}});
//# sourceMappingURL=cloud-28eb503dfdab36552bd3.js.map