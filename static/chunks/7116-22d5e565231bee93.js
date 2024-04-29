"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7116],{37116:function(e,s,i){var a=i(85893),n=i(41664),l=i.n(n),c=i(38989),r=i(67294),h=i(11163);let t={activeMenu:"",activeSubMenu:"",isSidebarOpen:!1,isLeftSidebarOpen:!1,isSearchBarOpen:!1,isLang:!1};function d(e,s){switch(s.type){case"TOGGLE_MENU":return{...e,activeMenu:e.activeMenu===s.menu?"":s.menu,activeSubMenu:e.activeMenu===s.menu?e.activeSubMenu:""};case"TOGGLE_SUB_MENU":return{...e,activeSubMenu:e.activeSubMenu===s.subMenu?"":s.subMenu};case"TOGGLE_SIDEBAR":return{...e,isSidebarOpen:!e.isSidebarOpen};case"setScrollY":return{...e,scrollY:s.payload};case"TOGGLE_LEFT_SIDEBAR":return{...e,isLeftSidebarOpen:!e.isLeftSidebarOpen};case"TOGGLE_SEARCHBAR":return{...e,isSearchBarOpen:!e.isSearchBarOpen};case"TOGGLE_LANG":return{...e,isLang:!e.isLang};default:return e}}s.Z=()=>{let[e,s]=(0,r.useReducer)(d,t),i=(0,h.useRouter)().pathname,n=e=>{s({type:"TOGGLE_MENU",menu:e})},C=e=>{s({type:"TOGGLE_SUB_MENU",subMenu:e})};return(0,a.jsxs)("div",{className:"header-topbar-area",children:[(0,a.jsxs)("div",{className:"topbar-area style-2",children:[(0,a.jsxs)("ul",{className:"topbar-left",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{legacyBehavior:!0,href:"/online-gatherings#schedule",children:(0,a.jsx)("a",{children:"Schedule"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{legacyBehavior:!0,href:"/event#events",children:(0,a.jsx)("a",{children:"Upcoming Events"})})})]}),(0,a.jsxs)("ul",{className:"topbar-right",children:[(0,a.jsx)("li",{children:"Mon-Fri (10:00 am-7.00 pm)"}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:"mailto:prayers.jsm@gmail.com",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:10,viewBox:"0 0 14 10",children:(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:"M12.8333 0H1.16668C0.523223 0 0 0.498307 0 1.11112V8.88891C0 9.50169 0.523223 10 1.16668 10H12.8334C13.4768 10 14 9.50169 14 8.88888V1.11112C14 0.498307 13.4768 0 12.8333 0ZM1.16668 0.555547H12.8334C12.8763 0.555547 12.9142 0.570469 12.9545 0.578906C11.9445 1.4593 8.59532 4.37732 7.42328 5.38302C7.33157 5.46169 7.18375 5.55555 7.00003 5.55555C6.8163 5.55555 6.66848 5.46169 6.57647 5.38276C5.40455 4.37721 2.05518 1.45904 1.0453 0.578958C1.08571 0.570521 1.12366 0.555547 1.16668 0.555547ZM0.583324 8.88888V1.11112C0.583324 1.05669 0.600551 1.00732 0.615973 0.957578C1.38904 1.63143 3.72594 3.66747 5.24122 4.97979C3.73086 6.21539 1.39336 8.32602 0.614141 9.03367C0.600387 8.98643 0.583324 8.94023 0.583324 8.88888ZM12.8333 9.44445H1.16668C1.12008 9.44445 1.07866 9.42898 1.03515 9.41909C1.84034 8.68805 4.19273 6.56529 5.67654 5.35635C5.8461 5.50294 6.0159 5.64928 6.18595 5.79536C6.42636 6.00208 6.70775 6.11112 7 6.11112C7.29225 6.11112 7.57364 6.00206 7.81375 5.79562C7.98389 5.64945 8.1538 5.50303 8.32347 5.35635C9.80736 6.56516 12.1594 8.68776 12.9648 9.41909C12.9213 9.42898 12.88 9.44445 12.8333 9.44445ZM13.4167 8.88888C13.4167 8.94021 13.3996 8.98643 13.3859 9.03367C12.6064 8.32565 10.2691 6.21526 8.7588 4.97982C10.2741 3.6675 12.6107 1.63164 13.384 0.957526C13.3994 1.00727 13.4167 1.05667 13.4167 1.11109V8.88888Z"})})}),"prayers.jsm@gmail.com"]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:"tel:+919840156777",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 14 14",children:(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:"M12.8766 9.18937C12.0195 9.18937 11.1779 9.05531 10.3804 8.79176C9.98274 8.65617 9.53004 8.76139 9.27064 9.02571L7.69648 10.214C5.87091 9.23954 4.74639 8.11538 3.7852 6.30352L4.93856 4.77038C5.23821 4.47113 5.34569 4.03399 5.21692 3.62384C4.95223 2.82212 4.81777 1.98092 4.81777 1.12342C4.81781 0.503962 4.31385 0 3.69442 0H1.12335C0.503962 0 0 0.503962 0 1.12335C0 8.22363 5.77637 14 12.8766 14C13.496 14 14 13.496 14 12.8766V10.3127C14 9.69333 13.496 9.18937 12.8766 9.18937ZM13.2222 12.8766C13.2222 13.0673 13.0673 13.2222 12.8766 13.2222C6.20512 13.2222 0.7778 7.79484 0.7778 1.12339C0.7778 0.932747 0.932748 0.7778 1.12339 0.7778H3.69446C3.8851 0.7778 4.04005 0.932747 4.04005 1.12339C4.04005 2.06408 4.18778 2.98731 4.47678 3.86195C4.51703 3.99108 4.48436 4.12474 4.35373 4.26073L3.01692 6.03118C2.97302 6.08933 2.94633 6.15864 2.93988 6.23121C2.93344 6.30379 2.9475 6.37672 2.98046 6.4417C4.07155 8.58628 5.39735 9.91208 7.5571 11.0187C7.6885 11.0875 7.84953 11.0731 7.96879 10.983L9.77992 9.61094C9.8252 9.56579 9.88218 9.53419 9.94445 9.5197C10.0067 9.50521 10.0718 9.5084 10.1324 9.52891C11.013 9.81981 11.9363 9.96717 12.8766 9.96717C13.0673 9.96717 13.2222 10.1221 13.2222 10.3128V12.8766Z"})})})," ","+91 98401 56777"]})})]})]}),(0,a.jsxs)("header",{className:"header-area style-2",children:[(0,a.jsx)("div",{className:"header-logo",children:(0,a.jsx)(l(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{alt:"image",className:"img-fluid",src:"/assets/img/white-logo.png"})})})}),(0,a.jsxs)("div",{className:"menu-wrap",children:[(0,a.jsxs)("div",{className:"main-menu ".concat(e.isSidebarOpen?"show-menu":""),children:[(0,a.jsx)("div",{className:"mobile-logo-area d-lg-none d-flex justify-content-between align-items-center",children:(0,a.jsx)("div",{className:"mobile-logo-wrap",children:(0,a.jsx)(l(),{legacyBehavior:!0,href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{alt:"image",src:"/assets/img/white-logo.png"})})})})}),(0,a.jsx)("ul",{className:"menu-list",children:c.map(s=>{let{id:c,label:r,link:h,icon:t,subMenu:d}=s;return(0,a.jsxs)("li",{className:i===h?"active":"",children:[(0,a.jsx)(l(),{legacyBehavior:!0,href:h,children:(0,a.jsx)("a",{className:"drop-down ".concat(e.activeMenu===r?"active":""),children:r})}),t&&(0,a.jsx)("i",{onClick:()=>n(r),className:"bi bi-".concat(e.activeMenu===r?"dash":"plus"," dropdown-icon")}),d&&(0,a.jsx)("ul",{className:"sub-menu ".concat(e.activeMenu===r?"d-block":""),children:d.map((s,i)=>(0,a.jsxs)("li",{className:"menu-item-has-children",children:[(0,a.jsx)(l(),{legacyBehavior:!0,href:s.link,children:(0,a.jsx)("a",{children:s.label})}),s.icon&&s.icon?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("i",{className:"d-lg-flex d-none bi bi-chevron-right dropdown-icon"}),(0,a.jsx)("i",{onClick:()=>C(s.label),className:"d-lg-none d-flex bi bi-".concat(e.activeSubMenu===s.label?"dash":"plus"," dropdown-icon ")})]}):"",s.subMenu&&(0,a.jsx)("ul",{className:"sub-menu ".concat(e.activeSubMenu===s.label?"d-block":""),children:s.subMenu.map((e,s)=>(0,a.jsx)("li",{className:"menu-item-has-children",children:(0,a.jsx)(l(),{legacyBehavior:!0,href:e.link,children:(0,a.jsx)("a",{children:e.label})})},e.id))})]},i))})]},c)})}),(0,a.jsxs)("div",{className:"d-lg-none d-block",children:[(0,a.jsxs)("ul",{className:"topbar-right",children:[(0,a.jsx)("li",{children:"Sun-Tue (9:00 am-7.00 pm)"}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:"mailto:prayers.jsm@gmail.com",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:10,viewBox:"0 0 14 10",children:(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:"M12.8333 0H1.16668C0.523223 0 0 0.498307 0 1.11112V8.88891C0 9.50169 0.523223 10 1.16668 10H12.8334C13.4768 10 14 9.50169 14 8.88888V1.11112C14 0.498307 13.4768 0 12.8333 0ZM1.16668 0.555547H12.8334C12.8763 0.555547 12.9142 0.570469 12.9545 0.578906C11.9445 1.4593 8.59532 4.37732 7.42328 5.38302C7.33157 5.46169 7.18375 5.55555 7.00003 5.55555C6.8163 5.55555 6.66848 5.46169 6.57647 5.38276C5.40455 4.37721 2.05518 1.45904 1.0453 0.578958C1.08571 0.570521 1.12366 0.555547 1.16668 0.555547ZM0.583324 8.88888V1.11112C0.583324 1.05669 0.600551 1.00732 0.615973 0.957578C1.38904 1.63143 3.72594 3.66747 5.24122 4.97979C3.73086 6.21539 1.39336 8.32602 0.614141 9.03367C0.600387 8.98643 0.583324 8.94023 0.583324 8.88888ZM12.8333 9.44445H1.16668C1.12008 9.44445 1.07866 9.42898 1.03515 9.41909C1.84034 8.68805 4.19273 6.56529 5.67654 5.35635C5.8461 5.50294 6.0159 5.64928 6.18595 5.79536C6.42636 6.00208 6.70775 6.11112 7 6.11112C7.29225 6.11112 7.57364 6.00206 7.81375 5.79562C7.98389 5.64945 8.1538 5.50303 8.32347 5.35635C9.80736 6.56516 12.1594 8.68776 12.9648 9.41909C12.9213 9.42898 12.88 9.44445 12.8333 9.44445ZM13.4167 8.88888C13.4167 8.94021 13.3996 8.98643 13.3859 9.03367C12.6064 8.32565 10.2691 6.21526 8.7588 4.97982C10.2741 3.6675 12.6107 1.63164 13.384 0.957526C13.3994 1.00727 13.4167 1.05667 13.4167 1.11109V8.88888Z"})})}),"prayers.jsm@gmail.com"]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:"tel:+919840156777",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 14 14",children:(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:"M12.8766 9.18937C12.0195 9.18937 11.1779 9.05531 10.3804 8.79176C9.98274 8.65617 9.53004 8.76139 9.27064 9.02571L7.69648 10.214C5.87091 9.23954 4.74639 8.11538 3.7852 6.30352L4.93856 4.77038C5.23821 4.47113 5.34569 4.03399 5.21692 3.62384C4.95223 2.82212 4.81777 1.98092 4.81777 1.12342C4.81781 0.503962 4.31385 0 3.69442 0H1.12335C0.503962 0 0 0.503962 0 1.12335C0 8.22363 5.77637 14 12.8766 14C13.496 14 14 13.496 14 12.8766V10.3127C14 9.69333 13.496 9.18937 12.8766 9.18937ZM13.2222 12.8766C13.2222 13.0673 13.0673 13.2222 12.8766 13.2222C6.20512 13.2222 0.7778 7.79484 0.7778 1.12339C0.7778 0.932747 0.932748 0.7778 1.12339 0.7778H3.69446C3.8851 0.7778 4.04005 0.932747 4.04005 1.12339C4.04005 2.06408 4.18778 2.98731 4.47678 3.86195C4.51703 3.99108 4.48436 4.12474 4.35373 4.26073L3.01692 6.03118C2.97302 6.08933 2.94633 6.15864 2.93988 6.23121C2.93344 6.30379 2.9475 6.37672 2.98046 6.4417C4.07155 8.58628 5.39735 9.91208 7.5571 11.0187C7.6885 11.0875 7.84953 11.0731 7.96879 10.983L9.77992 9.61094C9.8252 9.56579 9.88218 9.53419 9.94445 9.5197C10.0067 9.50521 10.0718 9.5084 10.1324 9.52891C11.013 9.81981 11.9363 9.96717 12.8766 9.96717C13.0673 9.96717 13.2222 10.1221 13.2222 10.3128V12.8766Z"})})})," ","+91 98401 56777"]})})]}),(0,a.jsx)(l(),{legacyBehavior:!0,href:"/contact",children:(0,a.jsxs)("a",{className:"primary-btn1 btn-hover",children:["Get in Touch",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:12,viewBox:"0 0 12 12",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"})}),(0,a.jsx)("span",{})]})})]})]}),(0,a.jsxs)("div",{className:"nav-right d-flex jsutify-content-end align-items-center",children:[(0,a.jsx)(l(),{legacyBehavior:!0,href:"/contact",children:(0,a.jsxs)("a",{className:"primary-btn1 btn-hover",children:["Get in Touch",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:12,viewBox:"0 0 12 12",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"})})]})}),(0,a.jsx)("div",{className:"sidebar-button mobile-menu-btn ".concat(e.isSidebarOpen?"active":""),onClick:()=>{s({type:"TOGGLE_MENU",menu:""}),s({type:"TOGGLE_SUB_MENU",subMenu:""}),s({type:"TOGGLE_SIDEBAR"})},children:(0,a.jsx)("span",{})})]})]})]})]})}}}]);