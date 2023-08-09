(self.webpackChunkangular_eslint_husky_test=self.webpackChunkangular_eslint_husky_test||[]).push([[858],{"./src/app/components/atoms/button/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Loading:()=>Loading,Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/components/atoms/button/button.component.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Atom/Button",component:_button_component__WEBPACK_IMPORTED_MODULE_0__.r,tags:["autodocs"],argTypes:{buttonLabel:{control:"text",type:"string",description:"Button contents",table:{type:{summary:"string"}}},buttonType:{control:"select",options:[_button_component__WEBPACK_IMPORTED_MODULE_0__.L.PRIMARY,_button_component__WEBPACK_IMPORTED_MODULE_0__.L.LOADING],description:"Button types",table:{type:{summary:[_button_component__WEBPACK_IMPORTED_MODULE_0__.L.PRIMARY,_button_component__WEBPACK_IMPORTED_MODULE_0__.L.LOADING]},defaultValue:{summary:_button_component__WEBPACK_IMPORTED_MODULE_0__.L.PRIMARY}}}}},Primary={args:{buttonType:_button_component__WEBPACK_IMPORTED_MODULE_0__.L.PRIMARY,buttonLabel:"Button",buttonDisable:!0}},Error={args:{buttonType:_button_component__WEBPACK_IMPORTED_MODULE_0__.L.ERROR,buttonLabel:"Button",buttonDisable:!0}},Loading={args:{buttonType:_button_component__WEBPACK_IMPORTED_MODULE_0__.L.LOADING,buttonLabel:"Button",buttonDisable:!1}}},"./src/app/components/atoms/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent,L:()=>ButtonType});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,button_componentngResource=__webpack_require__("./src/app/components/atoms/button/button.component.css?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ButtonComponent=((_class=class ButtonComponent{constructor(){this.buttonLabel="",this.onClick=new core.EventEmitter,this.buttonType=ButtonType.PRIMARY,this.buttonDisable=!0}click(event){this.buttonType===ButtonType.PRIMARY&&this.onClick.emit(event)}}).propDecorators={buttonLabel:[{type:core.Input}],onClick:[{type:core.Output}],buttonType:[{type:core.Input}],buttonDisable:[{type:core.Input}]},_class);var ButtonType;ButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-button",template:'<button\n  (click)="click($event)"\n  [ngClass]="buttonType"\n  [disabled]="buttonDisable">\n  <div class="label">{{ buttonLabel }}</div>\n</button>\n',styles:[button_componentngResource_default()]})],ButtonComponent),function(ButtonType){ButtonType.PRIMARY="primary",ButtonType.ERROR="error",ButtonType.LOADING="loading"}(ButtonType||(ButtonType={}))},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/components/atoms/button/button.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"button {\n  padding: 15px 50px;\n  border-radius: 10px;\n  color: white;\n  font-weight: 800;\n}\n\n.primary {\n  background: #262528;\n}\n\n.primary:hover {\n  opacity: 0.5;\n}\n\n.primary.required {\n  opacity: 0.5;\n}\n\n.error {\n  background: #f6564e;\n}\n\n.error:hover {\n  opacity: 1;\n  cursor: not-allowed;\n}\n\n.primary:disabled {\n  background: #262528;\n  opacity: 0.5;\n}\n\n.primary:disabled:hover {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.loading {\n  background: #195704;\n  padding: 10px 56px;\n}\n\n.loading .label {\n  display: none;\n}\n\n.loading:hover {\n  opacity: 1;\n  cursor: not-allowed;\n}\n\n.loading::before {\n  content: '';\n  display: flex;\n  width: 10px;\n  height: 10px;\n  padding: 5px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  border-top-color: #fff;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n}\n\n@keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);