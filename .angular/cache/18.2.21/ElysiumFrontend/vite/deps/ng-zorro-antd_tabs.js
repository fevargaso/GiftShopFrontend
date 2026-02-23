import {
  A11yModule,
  CdkMonitorFocus,
  FocusKeyManager
} from "./chunk-XWVFFAIR.js";
import {
  NzDropDownDirective,
  NzDropdownMenuComponent
} from "./chunk-EEU54WEC.js";
import {
  NzMenuDirective,
  NzMenuItemComponent,
  NzMenuModule
} from "./chunk-ZA5PE4MZ.js";
import "./chunk-J64M767I.js";
import "./chunk-LDS4HVDD.js";
import {
  ViewportRuler
} from "./chunk-WTI5C2VR.js";
import "./chunk-7S7FNE45.js";
import {
  DOWN_ARROW,
  ENTER,
  LEFT_ARROW,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  hasModifierKey
} from "./chunk-L6TDEO2O.js";
import "./chunk-EBJHMG7D.js";
import "./chunk-UHKLWYS2.js";
import "./chunk-DA4QXVZZ.js";
import "./chunk-NDSETATD.js";
import "./chunk-C2E3BLEZ.js";
import "./chunk-WKX643AZ.js";
import {
  tabSwitchMotion
} from "./chunk-7UJESBFV.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-X7ZJCC2O.js";
import "./chunk-FF3CGWPP.js";
import "./chunk-BDNBJ7MQ.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-IHV2MBCH.js";
import {
  NavigationEnd,
  Router,
  RouterLink
} from "./chunk-SEBUTXYY.js";
import {
  NzResizeObserver
} from "./chunk-4QUY6JZX.js";
import {
  reqAnimFrame
} from "./chunk-XHVUBTOU.js";
import "./chunk-22ZON5OQ.js";
import "./chunk-KKAJIRPV.js";
import {
  Directionality
} from "./chunk-ZKBJSJEE.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-DXJSDFBE.js";
import {
  PREFIX,
  coerceNumberProperty,
  wrapIntoObservable
} from "./chunk-IVFCXUEV.js";
import "./chunk-G2DTOTJO.js";
import "./chunk-EKMOTXNM.js";
import {
  NgStyle,
  NgTemplateOutlet
} from "./chunk-AFWQCB6S.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-BD52RYQU.js";
import "./chunk-HIQUU2WY.js";
import {
  animationFrameScheduler,
  asapScheduler,
  fromEvent,
  merge
} from "./chunk-NHVCTQM5.js";
import {
  Subject,
  Subscription,
  __decorate,
  auditTime,
  delay,
  filter,
  first,
  of,
  startWith,
  takeUntil
} from "./chunk-4FM7L5J3.js";
import "./chunk-TXDUYLVM.js";

// ../node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tabs.mjs
function NzTabAddButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("nzType", icon_r1);
  }
}
var _c0 = () => ({
  minWidth: "46px"
});
var _c1 = () => ({
  visible: false
});
function NzTabNavOperationComponent_Conditional_5_For_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r3.tab.label, " ");
  }
}
function NzTabNavOperationComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 7);
    ɵɵlistener("click", function NzTabNavOperationComponent_Conditional_5_For_2_Template_li_click_0_listener() {
      const item_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onSelect(item_r3));
    })("contextmenu", function NzTabNavOperationComponent_Conditional_5_For_2_Template_li_contextmenu_0_listener($event) {
      const item_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onContextmenu(item_r3, $event));
    });
    ɵɵtemplate(1, NzTabNavOperationComponent_Conditional_5_For_2_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵɵclassProp("ant-tabs-dropdown-menu-item-disabled", item_r3.disabled);
    ɵɵproperty("nzSelected", item_r3.active)("nzDisabled", item_r3.disabled);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", item_r3.tab.label)("nzStringTemplateOutletContext", ɵɵpureFunction0(6, _c1));
  }
}
function NzTabNavOperationComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 4);
    ɵɵrepeaterCreate(1, NzTabNavOperationComponent_Conditional_5_For_2_Template, 2, 7, "li", 6, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ctx_r3.items);
  }
}
function NzTabNavOperationComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function NzTabNavOperationComponent_Conditional_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.addClicked.emit());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("addIcon", ctx_r3.addIcon);
  }
}
var _c2 = ["navWarp"];
var _c3 = ["navList"];
var _c4 = ["*"];
function NzTabNavBarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function NzTabNavBarComponent_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.addClicked.emit());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("addIcon", ctx_r2.addIcon);
    ɵɵattribute("tabindex", -1);
  }
}
function NzTabNavBarComponent_Conditional_8_ng_template_1_Template(rf, ctx) {
}
function NzTabNavBarComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, NzTabNavBarComponent_Conditional_8_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.extraTemplate);
  }
}
var _c5 = ["nz-tab-body", ""];
function NzTabBodyComponent_ng_template_0_Template(rf, ctx) {
}
function NzTabCloseButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("nzType", icon_r1);
  }
}
var _c6 = ["contentTemplate"];
var _c7 = [[["", "nz-tab-link", ""]], "*"];
var _c8 = ["[nz-tab-link]", "*"];
function NzTabComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzTabComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
var _c9 = () => ({
  visible: true
});
function NzTabSetComponent_Conditional_0_For_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tab_r5 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(tab_r5.label);
  }
}
function NzTabSetComponent_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function NzTabSetComponent_Conditional_0_For_2_Conditional_3_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ɵ$index_4_r6 = ɵɵnextContext().$index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClose(ɵ$index_4_r6, $event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tab_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("closeIcon", tab_r5.nzCloseIcon);
  }
}
function NzTabSetComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function NzTabSetComponent_Conditional_0_For_2_Template_div_click_0_listener($event) {
      const ctx_r3 = ɵɵrestoreView(_r3);
      const tab_r5 = ctx_r3.$implicit;
      const ɵ$index_4_r6 = ctx_r3.$index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.clickNavItem(tab_r5, ɵ$index_4_r6, $event));
    })("contextmenu", function NzTabSetComponent_Conditional_0_For_2_Template_div_contextmenu_0_listener($event) {
      const tab_r5 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.contextmenuNavItem(tab_r5, $event));
    });
    ɵɵelementStart(1, "button", 7);
    ɵɵtemplate(2, NzTabSetComponent_Conditional_0_For_2_ng_container_2_Template, 2, 1, "ng-container", 8)(3, NzTabSetComponent_Conditional_0_For_2_Conditional_3_Template, 1, 1, "button", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const ɵ$index_4_r6 = ctx.$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleProp("margin-right", ctx_r1.position === "horizontal" ? ctx_r1.nzTabBarGutter : null, "px")("margin-bottom", ctx_r1.position === "vertical" ? ctx_r1.nzTabBarGutter : null, "px");
    ɵɵclassProp("ant-tabs-tab-active", ctx_r1.nzSelectedIndex === ɵ$index_4_r6)("ant-tabs-tab-disabled", tab_r5.nzDisabled);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r1.getTabContentId(ɵ$index_4_r6))("disabled", tab_r5.nzDisabled)("tab", tab_r5)("active", ctx_r1.nzSelectedIndex === ɵ$index_4_r6);
    ɵɵattribute("tabIndex", ctx_r1.getTabIndex(tab_r5, ɵ$index_4_r6))("aria-disabled", tab_r5.nzDisabled)("aria-selected", ctx_r1.nzSelectedIndex === ɵ$index_4_r6 && !ctx_r1.nzHideAll)("aria-controls", ctx_r1.getTabContentId(ɵ$index_4_r6));
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", tab_r5.label)("nzStringTemplateOutletContext", ɵɵpureFunction0(19, _c9));
    ɵɵadvance();
    ɵɵconditional(tab_r5.nzClosable && ctx_r1.closable && !tab_r5.nzDisabled ? 3 : -1);
  }
}
function NzTabSetComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-tabs-nav", 4);
    ɵɵlistener("tabScroll", function NzTabSetComponent_Conditional_0_Template_nz_tabs_nav_tabScroll_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nzTabListScroll.emit($event));
    })("selectFocusedIndex", function NzTabSetComponent_Conditional_0_Template_nz_tabs_nav_selectFocusedIndex_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setSelectedIndex($event));
    })("addClicked", function NzTabSetComponent_Conditional_0_Template_nz_tabs_nav_addClicked_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAdd());
    });
    ɵɵrepeaterCreate(1, NzTabSetComponent_Conditional_0_For_2_Template, 4, 20, "div", 5, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r1.nzTabBarStyle)("selectedIndex", ctx_r1.nzSelectedIndex || 0)("inkBarAnimated", ctx_r1.inkBarAnimated)("addable", ctx_r1.addable)("addIcon", ctx_r1.nzAddIcon)("hideBar", ctx_r1.nzHideAll)("position", ctx_r1.position)("extraTemplate", ctx_r1.nzTabBarExtraContent);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.tabs);
  }
}
function NzTabSetComponent_Conditional_3_For_1_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzTabSetComponent_Conditional_3_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTabSetComponent_Conditional_3_For_1_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 11);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const tabpaneTmpl_r8 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", tabpaneTmpl_r8);
  }
}
function NzTabSetComponent_Conditional_3_For_1_Conditional_1_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzTabSetComponent_Conditional_3_For_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTabSetComponent_Conditional_3_For_1_Conditional_1_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 11);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const tabpaneTmpl_r8 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", tabpaneTmpl_r8);
  }
}
function NzTabSetComponent_Conditional_3_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTabSetComponent_Conditional_3_For_1_Conditional_1_Conditional_0_Template, 1, 1, null, 11);
  }
  if (rf & 2) {
    const ɵ$index_22_r9 = ɵɵnextContext().$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r1.nzSelectedIndex === ɵ$index_22_r9 ? 0 : -1);
  }
}
function NzTabSetComponent_Conditional_3_For_1_Conditional_2_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzTabSetComponent_Conditional_3_For_1_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTabSetComponent_Conditional_3_For_1_Conditional_2_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 11);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const tabpaneTmpl_r8 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", tabpaneTmpl_r8);
  }
}
function NzTabSetComponent_Conditional_3_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTabSetComponent_Conditional_3_For_1_Conditional_2_Conditional_0_Template, 1, 1, null, 11);
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    const tab_r11 = ctx_r9.$implicit;
    const ɵ$index_22_r9 = ctx_r9.$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r1.nzSelectedIndex === ɵ$index_22_r9 || tab_r11.hasBeenActive ? 0 : -1);
  }
}
function NzTabSetComponent_Conditional_3_For_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 12);
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    const tab_r11 = ctx_r9.$implicit;
    const ɵ$index_22_r9 = ctx_r9.$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("id", ctx_r1.getTabContentId(ɵ$index_22_r9))("active", ctx_r1.nzSelectedIndex === ɵ$index_22_r9)("content", tab_r11.content)("animated", ctx_r1.tabPaneAnimated);
    ɵɵattribute("aria-labelledby", ctx_r1.getTabContentId(ɵ$index_22_r9));
  }
}
function NzTabSetComponent_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTabSetComponent_Conditional_3_For_1_Conditional_0_Template, 1, 1, null, 11)(1, NzTabSetComponent_Conditional_3_For_1_Conditional_1_Template, 1, 1)(2, NzTabSetComponent_Conditional_3_For_1_Conditional_2_Template, 1, 1)(3, NzTabSetComponent_Conditional_3_For_1_ng_template_3_Template, 1, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const tab_r11 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(tab_r11.nzForceRender ? 0 : ctx_r1.nzDestroyInactiveTabPane ? 1 : 2);
  }
}
function NzTabSetComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzTabSetComponent_Conditional_3_For_1_Template, 5, 1, null, null, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵrepeater(ctx_r1.tabs);
  }
}
var NzTabAddButtonComponent = class _NzTabAddButtonComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.addIcon = "plus";
    this.element = this.elementRef.nativeElement;
  }
  getElementWidth() {
    return this.element?.offsetWidth || 0;
  }
  getElementHeight() {
    return this.element?.offsetHeight || 0;
  }
  static {
    this.ɵfac = function NzTabAddButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabAddButtonComponent)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTabAddButtonComponent,
      selectors: [["nz-tab-add-button"], ["button", "nz-tab-add-button", ""]],
      hostAttrs: ["aria-label", "Add tab", "type", "button", 1, "ant-tabs-nav-add"],
      inputs: {
        addIcon: "addIcon"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]],
      template: function NzTabAddButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzTabAddButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("nzStringTemplateOutlet", ctx.addIcon);
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabAddButtonComponent, [{
    type: Component,
    args: [{
      selector: "nz-tab-add-button, button[nz-tab-add-button]",
      template: `
    <ng-container *nzStringTemplateOutlet="addIcon; let icon">
      <span nz-icon [nzType]="icon" nzTheme="outline"></span>
    </ng-container>
  `,
      host: {
        class: "ant-tabs-nav-add",
        "aria-label": "Add tab",
        type: "button"
      },
      imports: [NzOutletModule, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    addIcon: [{
      type: Input
    }]
  });
})();
var NzTabsInkBarDirective = class _NzTabsInkBarDirective {
  get _animated() {
    return this.animationMode !== "NoopAnimations" && this.animated;
  }
  constructor(elementRef, ngZone) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.position = "horizontal";
    this.animated = true;
    this.animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
  }
  alignToElement(element) {
    this.ngZone.runOutsideAngular(() => {
      reqAnimFrame(() => this.setStyles(element));
    });
  }
  setStyles(element) {
    const inkBar = this.elementRef.nativeElement;
    if (this.position === "horizontal") {
      inkBar.style.top = "";
      inkBar.style.height = "";
      inkBar.style.left = this.getLeftPosition(element);
      inkBar.style.width = this.getElementWidth(element);
    } else {
      inkBar.style.left = "";
      inkBar.style.width = "";
      inkBar.style.top = this.getTopPosition(element);
      inkBar.style.height = this.getElementHeight(element);
    }
  }
  getLeftPosition(element) {
    return element ? `${element.offsetLeft || 0}px` : "0";
  }
  getElementWidth(element) {
    return element ? `${element.offsetWidth || 0}px` : "0";
  }
  getTopPosition(element) {
    return element ? `${element.offsetTop || 0}px` : "0";
  }
  getElementHeight(element) {
    return element ? `${element.offsetHeight || 0}px` : "0";
  }
  static {
    this.ɵfac = function NzTabsInkBarDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabsInkBarDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTabsInkBarDirective,
      selectors: [["nz-tabs-ink-bar"], ["", "nz-tabs-ink-bar", ""]],
      hostAttrs: [1, "ant-tabs-ink-bar"],
      hostVars: 2,
      hostBindings: function NzTabsInkBarDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-tabs-ink-bar-animated", ctx._animated);
        }
      },
      inputs: {
        position: "position",
        animated: "animated"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabsInkBarDirective, [{
    type: Directive,
    args: [{
      selector: "nz-tabs-ink-bar, [nz-tabs-ink-bar]",
      host: {
        class: "ant-tabs-ink-bar",
        "[class.ant-tabs-ink-bar-animated]": "_animated"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    position: [{
      type: Input
    }],
    animated: [{
      type: Input
    }]
  });
})();
var NzTabNavItemDirective = class _NzTabNavItemDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.disabled = false;
    this.active = false;
    this.el = elementRef.nativeElement;
    this.parentElement = this.el.parentElement;
  }
  focus() {
    this.el.focus();
  }
  get width() {
    return this.parentElement.offsetWidth;
  }
  get height() {
    return this.parentElement.offsetHeight;
  }
  get left() {
    return this.parentElement.offsetLeft;
  }
  get top() {
    return this.parentElement.offsetTop;
  }
  static {
    this.ɵfac = function NzTabNavItemDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabNavItemDirective)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTabNavItemDirective,
      selectors: [["", "nzTabNavItem", ""]],
      inputs: {
        disabled: [2, "disabled", "disabled", booleanAttribute],
        tab: "tab",
        active: [2, "active", "active", booleanAttribute]
      },
      standalone: true,
      features: [ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabNavItemDirective, [{
    type: Directive,
    args: [{
      selector: "[nzTabNavItem]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tab: [{
      type: Input
    }],
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzTabNavOperationComponent = class _NzTabNavOperationComponent {
  constructor(cdr, elementRef) {
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.items = [];
    this.addable = false;
    this.addIcon = "plus";
    this.addClicked = new EventEmitter();
    this.selected = new EventEmitter();
    this.menuOpened = false;
    this.element = this.elementRef.nativeElement;
  }
  onSelect(item) {
    if (!item.disabled) {
      item.tab.nzClick.emit();
      this.selected.emit(item);
    }
  }
  onContextmenu(item, e) {
    if (!item.disabled) {
      item.tab.nzContextmenu.emit(e);
    }
  }
  showItems() {
    clearTimeout(this.closeAnimationWaitTimeoutId);
    this.menuOpened = true;
    this.cdr.markForCheck();
  }
  menuVisChange(visible) {
    if (!visible) {
      this.closeAnimationWaitTimeoutId = setTimeout(() => {
        this.menuOpened = false;
        this.cdr.markForCheck();
      }, 150);
    }
  }
  getElementWidth() {
    return this.element?.offsetWidth || 0;
  }
  getElementHeight() {
    return this.element?.offsetHeight || 0;
  }
  ngOnDestroy() {
    clearTimeout(this.closeAnimationWaitTimeoutId);
  }
  static {
    this.ɵfac = function NzTabNavOperationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabNavOperationComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTabNavOperationComponent,
      selectors: [["nz-tab-nav-operation"]],
      hostAttrs: [1, "ant-tabs-nav-operations"],
      hostVars: 2,
      hostBindings: function NzTabNavOperationComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-tabs-nav-operations-hidden", ctx.items.length === 0);
        }
      },
      inputs: {
        items: "items",
        addable: [2, "addable", "addable", booleanAttribute],
        addIcon: "addIcon"
      },
      outputs: {
        addClicked: "addClicked",
        selected: "selected"
      },
      exportAs: ["nzTabNavOperation"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      decls: 7,
      vars: 6,
      consts: [["dropdownTrigger", "nzDropdown"], ["menu", "nzDropdownMenu"], ["nz-dropdown", "", "type", "button", "tabindex", "-1", "aria-hidden", "true", "nzOverlayClassName", "nz-tabs-dropdown", 1, "ant-tabs-nav-more", 3, "nzVisibleChange", "mouseenter", "nzDropdownMenu", "nzOverlayStyle", "nzMatchWidthElement"], ["nz-icon", "", "nzType", "ellipsis"], ["nz-menu", ""], ["nz-tab-add-button", "", 3, "addIcon"], ["nz-menu-item", "", 1, "ant-tabs-dropdown-menu-item", 3, "ant-tabs-dropdown-menu-item-disabled", "nzSelected", "nzDisabled"], ["nz-menu-item", "", 1, "ant-tabs-dropdown-menu-item", 3, "click", "contextmenu", "nzSelected", "nzDisabled"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-tab-add-button", "", 3, "click", "addIcon"]],
      template: function NzTabNavOperationComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "button", 2, 0);
          ɵɵlistener("nzVisibleChange", function NzTabNavOperationComponent_Template_button_nzVisibleChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.menuVisChange($event));
          })("mouseenter", function NzTabNavOperationComponent_Template_button_mouseenter_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.showItems());
          });
          ɵɵelement(2, "span", 3);
          ɵɵelementEnd();
          ɵɵelementStart(3, "nz-dropdown-menu", null, 1);
          ɵɵtemplate(5, NzTabNavOperationComponent_Conditional_5_Template, 3, 0, "ul", 4);
          ɵɵelementEnd();
          ɵɵtemplate(6, NzTabNavOperationComponent_Conditional_6_Template, 1, 1, "button", 5);
        }
        if (rf & 2) {
          const menu_r6 = ɵɵreference(4);
          ɵɵproperty("nzDropdownMenu", menu_r6)("nzOverlayStyle", ɵɵpureFunction0(5, _c0))("nzMatchWidthElement", null);
          ɵɵadvance(5);
          ɵɵconditional(ctx.menuOpened ? 5 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.addable ? 6 : -1);
        }
      },
      dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective, NzTabAddButtonComponent, NzDropdownMenuComponent, NzMenuModule, NzMenuDirective, NzMenuItemComponent, NzDropDownDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabNavOperationComponent, [{
    type: Component,
    args: [{
      selector: "nz-tab-nav-operation",
      exportAs: "nzTabNavOperation",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <button
      nz-dropdown
      class="ant-tabs-nav-more"
      type="button"
      tabindex="-1"
      aria-hidden="true"
      nzOverlayClassName="nz-tabs-dropdown"
      #dropdownTrigger="nzDropdown"
      [nzDropdownMenu]="menu"
      [nzOverlayStyle]="{ minWidth: '46px' }"
      [nzMatchWidthElement]="null"
      (nzVisibleChange)="menuVisChange($event)"
      (mouseenter)="showItems()"
    >
      <span nz-icon nzType="ellipsis"></span>
    </button>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      @if (menuOpened) {
        <ul nz-menu>
          @for (item of items; track item) {
            <li
              nz-menu-item
              class="ant-tabs-dropdown-menu-item"
              [class.ant-tabs-dropdown-menu-item-disabled]="item.disabled"
              [nzSelected]="item.active"
              [nzDisabled]="item.disabled"
              (click)="onSelect(item)"
              (contextmenu)="onContextmenu(item, $event)"
            >
              <ng-container *nzStringTemplateOutlet="item.tab.label; context: { visible: false }">
                {{ item.tab.label }}
              </ng-container>
            </li>
          }
        </ul>
      }
    </nz-dropdown-menu>
    @if (addable) {
      <button nz-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
    }
  `,
      host: {
        class: "ant-tabs-nav-operations",
        "[class.ant-tabs-nav-operations-hidden]": "items.length === 0"
      },
      imports: [NzIconModule, NzOutletModule, NzTabAddButtonComponent, NzDropdownMenuComponent, NzMenuModule, NzDropDownDirective],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    items: [{
      type: Input
    }],
    addable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    addIcon: [{
      type: Input
    }],
    addClicked: [{
      type: Output
    }],
    selected: [{
      type: Output
    }]
  });
})();
var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = 0.995 ** REFRESH_INTERVAL;
var NzTabScrollListDirective = class _NzTabScrollListDirective {
  constructor(ngZone, elementRef) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.lastWheelDirection = null;
    this.lastWheelTimestamp = 0;
    this.lastTimestamp = 0;
    this.lastTimeDiff = 0;
    this.lastMixedWheel = 0;
    this.lastWheelPrevent = false;
    this.touchPosition = null;
    this.lastOffset = null;
    this.motion = -1;
    this.unsubscribe = () => void 0;
    this.offsetChange = new EventEmitter();
    this.tabScroll = new EventEmitter();
    this.onTouchEnd = (e) => {
      if (!this.touchPosition) {
        return;
      }
      const lastOffset = this.lastOffset;
      const lastTimeDiff = this.lastTimeDiff;
      this.lastOffset = this.touchPosition = null;
      if (lastOffset) {
        const distanceX = lastOffset.x / lastTimeDiff;
        const distanceY = lastOffset.y / lastTimeDiff;
        const absX = Math.abs(distanceX);
        const absY = Math.abs(distanceY);
        if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) {
          return;
        }
        let currentX = distanceX;
        let currentY = distanceY;
        this.motion = window.setInterval(() => {
          if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
            window.clearInterval(this.motion);
            return;
          }
          currentX *= SPEED_OFF_MULTIPLE;
          currentY *= SPEED_OFF_MULTIPLE;
          this.onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL, e);
        }, REFRESH_INTERVAL);
      }
    };
    this.onTouchMove = (e) => {
      if (!this.touchPosition) {
        return;
      }
      e.preventDefault();
      const {
        screenX,
        screenY
      } = e.touches[0];
      const offsetX = screenX - this.touchPosition.x;
      const offsetY = screenY - this.touchPosition.y;
      this.onOffset(offsetX, offsetY, e);
      const now = Date.now();
      this.lastTimeDiff = now - this.lastTimestamp;
      this.lastTimestamp = now;
      this.lastOffset = {
        x: offsetX,
        y: offsetY
      };
      this.touchPosition = {
        x: screenX,
        y: screenY
      };
    };
    this.onTouchStart = (e) => {
      const {
        screenX,
        screenY
      } = e.touches[0];
      this.touchPosition = {
        x: screenX,
        y: screenY
      };
      window.clearInterval(this.motion);
    };
    this.onWheel = (e) => {
      const {
        deltaX,
        deltaY
      } = e;
      let mixed;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);
      if (absX === absY) {
        mixed = this.lastWheelDirection === "x" ? deltaX : deltaY;
      } else if (absX > absY) {
        mixed = deltaX;
        this.lastWheelDirection = "x";
      } else {
        mixed = deltaY;
        this.lastWheelDirection = "y";
      }
      const now = Date.now();
      const absMixed = Math.abs(mixed);
      if (now - this.lastWheelTimestamp > 100 || absMixed - this.lastMixedWheel > 10) {
        this.lastWheelPrevent = false;
      }
      this.onOffset(-mixed, -mixed, e);
      if (e.defaultPrevented || this.lastWheelPrevent) {
        this.lastWheelPrevent = true;
      }
      this.lastWheelTimestamp = now;
      this.lastMixedWheel = absMixed;
    };
  }
  ngOnInit() {
    this.unsubscribe = this.ngZone.runOutsideAngular(() => {
      const el = this.elementRef.nativeElement;
      const wheel$ = fromEvent(el, "wheel");
      const touchstart$ = fromEvent(el, "touchstart");
      const touchmove$ = fromEvent(el, "touchmove");
      const touchend$ = fromEvent(el, "touchend");
      const subscription = new Subscription();
      subscription.add(this.subscribeWrap("wheel", wheel$, this.onWheel));
      subscription.add(this.subscribeWrap("touchstart", touchstart$, this.onTouchStart));
      subscription.add(this.subscribeWrap("touchmove", touchmove$, this.onTouchMove));
      subscription.add(this.subscribeWrap("touchend", touchend$, this.onTouchEnd));
      return () => {
        subscription.unsubscribe();
      };
    });
  }
  subscribeWrap(type, observable, handler) {
    return observable.subscribe((event) => {
      this.tabScroll.emit({
        type,
        event
      });
      if (!event.defaultPrevented) {
        handler(event);
      }
    });
  }
  onOffset(x, y, event) {
    this.ngZone.run(() => {
      this.offsetChange.emit({
        x,
        y,
        event
      });
    });
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
  static {
    this.ɵfac = function NzTabScrollListDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabScrollListDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTabScrollListDirective,
      selectors: [["", "nzTabScrollList", ""]],
      outputs: {
        offsetChange: "offsetChange",
        tabScroll: "tabScroll"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabScrollListDirective, [{
    type: Directive,
    args: [{
      selector: "[nzTabScrollList]",
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }], {
    offsetChange: [{
      type: Output
    }],
    tabScroll: [{
      type: Output
    }]
  });
})();
var RESIZE_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CSS_TRANSFORM_TIME = 150;
var NzTabNavBarComponent = class _NzTabNavBarComponent {
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    const newValue = coerceNumberProperty(value);
    if (this._selectedIndex !== newValue) {
      this._selectedIndex = value;
      this.selectedIndexChanged = true;
      if (this.keyManager) {
        this.keyManager.updateActiveItem(value);
      }
    }
  }
  /** Tracks which element has focus; used for keyboard navigation */
  get focusIndex() {
    return this.keyManager ? this.keyManager.activeItemIndex : 0;
  }
  /** When the focus index is set, we must manually send focus to the correct label */
  set focusIndex(value) {
    if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
      return;
    }
    this.keyManager.setActiveItem(value);
  }
  get showAddButton() {
    return this.hiddenItems.length === 0 && this.addable;
  }
  constructor(cdr, ngZone, viewportRuler, nzResizeObserver, dir) {
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.viewportRuler = viewportRuler;
    this.nzResizeObserver = nzResizeObserver;
    this.dir = dir;
    this.indexFocused = new EventEmitter();
    this.selectFocusedIndex = new EventEmitter();
    this.addClicked = new EventEmitter();
    this.tabScroll = new EventEmitter();
    this.position = "horizontal";
    this.addable = false;
    this.hideBar = false;
    this.addIcon = "plus";
    this.inkBarAnimated = true;
    this.translate = null;
    this.transformX = 0;
    this.transformY = 0;
    this.pingLeft = false;
    this.pingRight = false;
    this.pingTop = false;
    this.pingBottom = false;
    this.hiddenItems = [];
    this.destroy$ = new Subject();
    this._selectedIndex = 0;
    this.wrapperWidth = 0;
    this.wrapperHeight = 0;
    this.scrollListWidth = 0;
    this.scrollListHeight = 0;
    this.operationWidth = 0;
    this.operationHeight = 0;
    this.addButtonWidth = 0;
    this.addButtonHeight = 0;
    this.selectedIndexChanged = false;
  }
  ngAfterViewInit() {
    const dirChange = this.dir ? this.dir.change.asObservable() : of(null);
    const resize = this.viewportRuler.change(150);
    const realign = () => {
      this.updateScrollListPosition();
      this.alignInkBarToSelectedTab();
    };
    this.keyManager = new FocusKeyManager(this.items).withHorizontalOrientation(this.getLayoutDirection()).withWrap();
    this.keyManager.updateActiveItem(this.selectedIndex);
    reqAnimFrame(realign);
    merge(this.nzResizeObserver.observe(this.navWarpRef), this.nzResizeObserver.observe(this.navListRef)).pipe(takeUntil(this.destroy$), auditTime(16, RESIZE_SCHEDULER)).subscribe(() => {
      realign();
    });
    merge(dirChange, resize, this.items.changes).pipe(takeUntil(this.destroy$)).subscribe(() => {
      Promise.resolve().then(realign);
      this.keyManager.withHorizontalOrientation(this.getLayoutDirection());
    });
    this.keyManager.change.pipe(takeUntil(this.destroy$)).subscribe((newFocusIndex) => {
      this.indexFocused.emit(newFocusIndex);
      this.setTabFocus(newFocusIndex);
      this.scrollToTab(this.keyManager.activeItem);
    });
  }
  ngAfterContentChecked() {
    if (this.selectedIndexChanged) {
      this.updateScrollListPosition();
      this.alignInkBarToSelectedTab();
      this.selectedIndexChanged = false;
      this.cdr.markForCheck();
    }
  }
  ngOnDestroy() {
    clearTimeout(this.lockAnimationTimeoutId);
    clearTimeout(this.cssTransformTimeWaitingId);
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSelectedFromMenu(tab) {
    const tabIndex = this.items.toArray().findIndex((e) => e === tab);
    if (tabIndex !== -1) {
      this.keyManager.updateActiveItem(tabIndex);
      if (this.focusIndex !== this.selectedIndex) {
        this.selectFocusedIndex.emit(this.focusIndex);
        this.scrollToTab(tab);
      }
    }
  }
  onOffsetChange(e) {
    if (this.position === "horizontal") {
      if (!this.lockAnimationTimeoutId) {
        if (this.transformX >= 0 && e.x > 0) {
          return;
        }
        if (this.transformX <= this.wrapperWidth - this.scrollListWidth && e.x < 0) {
          return;
        }
      }
      e.event.preventDefault();
      this.transformX = this.clampTransformX(this.transformX + e.x);
      this.setTransform(this.transformX, 0);
    } else {
      if (!this.lockAnimationTimeoutId) {
        if (this.transformY >= 0 && e.y > 0) {
          return;
        }
        if (this.transformY <= this.wrapperHeight - this.scrollListHeight && e.y < 0) {
          return;
        }
      }
      e.event.preventDefault();
      this.transformY = this.clampTransformY(this.transformY + e.y);
      this.setTransform(0, this.transformY);
    }
    this.lockAnimation();
    this.setVisibleRange();
    this.setPingStatus();
  }
  handleKeydown(event) {
    const inNavigationList = this.navWarpRef.nativeElement.contains(event.target);
    if (hasModifierKey(event) || !inNavigationList) {
      return;
    }
    switch (event.keyCode) {
      case LEFT_ARROW:
      case UP_ARROW:
      case RIGHT_ARROW:
      case DOWN_ARROW:
        this.lockAnimation();
        this.keyManager.onKeydown(event);
        break;
      case ENTER:
      case SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          this.selectFocusedIndex.emit(this.focusIndex);
        }
        break;
      default:
        this.keyManager.onKeydown(event);
    }
  }
  isValidIndex(index) {
    if (!this.items) {
      return true;
    }
    const tab = this.items ? this.items.toArray()[index] : null;
    return !!tab && !tab.disabled;
  }
  scrollToTab(tab) {
    if (!this.items.find((e) => e === tab)) {
      return;
    }
    const tabs = this.items.toArray();
    if (this.position === "horizontal") {
      let newTransform = this.transformX;
      if (this.getLayoutDirection() === "rtl") {
        const right = tabs[0].left + tabs[0].width - tab.left - tab.width;
        if (right < this.transformX) {
          newTransform = right;
        } else if (right + tab.width > this.transformX + this.wrapperWidth) {
          newTransform = right + tab.width - this.wrapperWidth;
        }
      } else if (tab.left < -this.transformX) {
        newTransform = -tab.left;
      } else if (tab.left + tab.width > -this.transformX + this.wrapperWidth) {
        newTransform = -(tab.left + tab.width - this.wrapperWidth);
      }
      this.transformX = newTransform;
      this.transformY = 0;
      this.setTransform(newTransform, 0);
    } else {
      let newTransform = this.transformY;
      if (tab.top < -this.transformY) {
        newTransform = -tab.top;
      } else if (tab.top + tab.height > -this.transformY + this.wrapperHeight) {
        newTransform = -(tab.top + tab.height - this.wrapperHeight);
      }
      this.transformY = newTransform;
      this.transformX = 0;
      this.setTransform(0, newTransform);
    }
    clearTimeout(this.cssTransformTimeWaitingId);
    this.cssTransformTimeWaitingId = setTimeout(() => {
      this.setVisibleRange();
    }, CSS_TRANSFORM_TIME);
  }
  lockAnimation() {
    if (!this.lockAnimationTimeoutId) {
      this.ngZone.runOutsideAngular(() => {
        this.navListRef.nativeElement.style.transition = "none";
        this.lockAnimationTimeoutId = setTimeout(() => {
          this.navListRef.nativeElement.style.transition = "";
          this.lockAnimationTimeoutId = void 0;
        }, CSS_TRANSFORM_TIME);
      });
    }
  }
  setTransform(x, y) {
    this.navListRef.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
  }
  clampTransformX(transform) {
    const scrollWidth = this.wrapperWidth - this.scrollListWidth;
    if (this.getLayoutDirection() === "rtl") {
      return Math.max(Math.min(scrollWidth, transform), 0);
    } else {
      return Math.min(Math.max(scrollWidth, transform), 0);
    }
  }
  clampTransformY(transform) {
    return Math.min(Math.max(this.wrapperHeight - this.scrollListHeight, transform), 0);
  }
  updateScrollListPosition() {
    this.resetSizes();
    this.transformX = this.clampTransformX(this.transformX);
    this.transformY = this.clampTransformY(this.transformY);
    this.setVisibleRange();
    this.setPingStatus();
    if (this.keyManager) {
      this.keyManager.updateActiveItem(this.keyManager.activeItemIndex);
      if (this.keyManager.activeItem) {
        this.scrollToTab(this.keyManager.activeItem);
      }
    }
  }
  resetSizes() {
    this.addButtonWidth = this.addBtnRef ? this.addBtnRef.getElementWidth() : 0;
    this.addButtonHeight = this.addBtnRef ? this.addBtnRef.getElementHeight() : 0;
    this.operationWidth = this.operationRef.getElementWidth();
    this.operationHeight = this.operationRef.getElementHeight();
    this.wrapperWidth = this.navWarpRef.nativeElement.offsetWidth || 0;
    this.wrapperHeight = this.navWarpRef.nativeElement.offsetHeight || 0;
    this.scrollListHeight = this.navListRef.nativeElement.offsetHeight || 0;
    this.scrollListWidth = this.navListRef.nativeElement.offsetWidth || 0;
  }
  alignInkBarToSelectedTab() {
    const selectedItem = this.items && this.items.length ? this.items.toArray()[this.selectedIndex] : null;
    const selectedItemElement = selectedItem ? selectedItem.elementRef.nativeElement : null;
    if (selectedItemElement) {
      this.inkBar.alignToElement(selectedItemElement.parentElement);
    }
  }
  setPingStatus() {
    const ping = {
      top: false,
      right: false,
      bottom: false,
      left: false
    };
    const navWarp = this.navWarpRef.nativeElement;
    if (this.position === "horizontal") {
      if (this.getLayoutDirection() === "rtl") {
        ping.right = this.transformX > 0;
        ping.left = this.transformX + this.wrapperWidth < this.scrollListWidth;
      } else {
        ping.left = this.transformX < 0;
        ping.right = -this.transformX + this.wrapperWidth < this.scrollListWidth;
      }
    } else {
      ping.top = this.transformY < 0;
      ping.bottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
    }
    Object.keys(ping).forEach((pos) => {
      const className = `ant-tabs-nav-wrap-ping-${pos}`;
      if (ping[pos]) {
        navWarp.classList.add(className);
      } else {
        navWarp.classList.remove(className);
      }
    });
  }
  setVisibleRange() {
    let unit;
    let position;
    let transformSize;
    let basicSize;
    let tabContentSize;
    let addSize;
    const tabs = this.items.toArray();
    const DEFAULT_SIZE = {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      right: 0
    };
    const getOffset = (index) => {
      let offset;
      const size = tabs[index] || DEFAULT_SIZE;
      if (position === "right") {
        offset = tabs[0].left + tabs[0].width - tabs[index].left - tabs[index].width;
      } else {
        offset = size[position];
      }
      return offset;
    };
    if (this.position === "horizontal") {
      unit = "width";
      basicSize = this.wrapperWidth;
      tabContentSize = this.scrollListWidth - (this.hiddenItems.length ? this.operationWidth : 0);
      addSize = this.addButtonWidth;
      transformSize = Math.abs(this.transformX);
      if (this.getLayoutDirection() === "rtl") {
        position = "right";
        this.pingRight = this.transformX > 0;
        this.pingLeft = this.transformX + this.wrapperWidth < this.scrollListWidth;
      } else {
        this.pingLeft = this.transformX < 0;
        this.pingRight = -this.transformX + this.wrapperWidth < this.scrollListWidth;
        position = "left";
      }
    } else {
      unit = "height";
      basicSize = this.wrapperHeight;
      tabContentSize = this.scrollListHeight - (this.hiddenItems.length ? this.operationHeight : 0);
      addSize = this.addButtonHeight;
      position = "top";
      transformSize = -this.transformY;
      this.pingTop = this.transformY < 0;
      this.pingBottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
    }
    let mergedBasicSize = basicSize;
    if (tabContentSize + addSize > basicSize) {
      mergedBasicSize = basicSize - addSize;
    }
    if (!tabs.length) {
      this.hiddenItems = [];
      this.cdr.markForCheck();
      return;
    }
    const len = tabs.length;
    let endIndex = len;
    for (let i = 0; i < len; i += 1) {
      const offset = getOffset(i);
      const size = tabs[i] || DEFAULT_SIZE;
      if (offset + size[unit] > transformSize + mergedBasicSize) {
        endIndex = i - 1;
        break;
      }
    }
    let startIndex = 0;
    for (let i = len - 1; i >= 0; i -= 1) {
      const offset = getOffset(i);
      if (offset < transformSize) {
        startIndex = i + 1;
        break;
      }
    }
    const startHiddenTabs = tabs.slice(0, startIndex);
    const endHiddenTabs = tabs.slice(endIndex + 1);
    this.hiddenItems = [...startHiddenTabs, ...endHiddenTabs];
    this.cdr.markForCheck();
  }
  getLayoutDirection() {
    return this.dir && this.dir.value === "rtl" ? "rtl" : "ltr";
  }
  setTabFocus(_tabIndex) {
  }
  ngOnChanges(changes) {
    const {
      position
    } = changes;
    if (position && !position.isFirstChange()) {
      this.alignInkBarToSelectedTab();
      this.lockAnimation();
      this.updateScrollListPosition();
    }
  }
  static {
    this.ɵfac = function NzTabNavBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabNavBarComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTabNavBarComponent,
      selectors: [["nz-tabs-nav"]],
      contentQueries: function NzTabNavBarComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NzTabNavItemDirective, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        }
      },
      viewQuery: function NzTabNavBarComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c2, 7);
          ɵɵviewQuery(_c3, 7);
          ɵɵviewQuery(NzTabNavOperationComponent, 7);
          ɵɵviewQuery(NzTabAddButtonComponent, 5);
          ɵɵviewQuery(NzTabsInkBarDirective, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navWarpRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navListRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.operationRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.addBtnRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inkBar = _t.first);
        }
      },
      hostAttrs: [1, "ant-tabs-nav"],
      hostBindings: function NzTabNavBarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function NzTabNavBarComponent_keydown_HostBindingHandler($event) {
            return ctx.handleKeydown($event);
          });
        }
      },
      inputs: {
        position: "position",
        addable: [2, "addable", "addable", booleanAttribute],
        hideBar: [2, "hideBar", "hideBar", booleanAttribute],
        addIcon: "addIcon",
        inkBarAnimated: "inkBarAnimated",
        extraTemplate: "extraTemplate",
        selectedIndex: "selectedIndex"
      },
      outputs: {
        indexFocused: "indexFocused",
        selectFocusedIndex: "selectFocusedIndex",
        addClicked: "addClicked",
        tabScroll: "tabScroll"
      },
      exportAs: ["nzTabsNav"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c4,
      decls: 9,
      vars: 16,
      consts: [["navWarp", ""], ["navList", ""], [1, "ant-tabs-nav-wrap"], ["nzTabScrollList", "", "role", "tablist", 1, "ant-tabs-nav-list", 3, "offsetChange", "tabScroll"], ["role", "tab", "nz-tab-add-button", "", 3, "addIcon"], ["nz-tabs-ink-bar", "", 3, "hidden", "position", "animated"], [3, "addClicked", "selected", "addIcon", "addable", "items"], [1, "ant-tabs-extra-content"], ["role", "tab", "nz-tab-add-button", "", 3, "click", "addIcon"], [3, "ngTemplateOutlet"]],
      template: function NzTabNavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 2, 0)(2, "div", 3, 1);
          ɵɵlistener("offsetChange", function NzTabNavBarComponent_Template_div_offsetChange_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onOffsetChange($event));
          })("tabScroll", function NzTabNavBarComponent_Template_div_tabScroll_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.tabScroll.emit($event));
          });
          ɵɵprojection(4);
          ɵɵtemplate(5, NzTabNavBarComponent_Conditional_5_Template, 1, 2, "button", 4);
          ɵɵelement(6, "div", 5);
          ɵɵelementEnd()();
          ɵɵelementStart(7, "nz-tab-nav-operation", 6);
          ɵɵlistener("addClicked", function NzTabNavBarComponent_Template_nz_tab_nav_operation_addClicked_7_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.addClicked.emit());
          })("selected", function NzTabNavBarComponent_Template_nz_tab_nav_operation_selected_7_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onSelectedFromMenu($event));
          });
          ɵɵelementEnd();
          ɵɵtemplate(8, NzTabNavBarComponent_Conditional_8_Template, 2, 1, "div", 7);
        }
        if (rf & 2) {
          ɵɵclassProp("ant-tabs-nav-wrap-ping-left", ctx.pingLeft)("ant-tabs-nav-wrap-ping-right", ctx.pingRight)("ant-tabs-nav-wrap-ping-top", ctx.pingTop)("ant-tabs-nav-wrap-ping-bottom", ctx.pingBottom);
          ɵɵadvance(5);
          ɵɵconditional(ctx.showAddButton ? 5 : -1);
          ɵɵadvance();
          ɵɵproperty("hidden", ctx.hideBar)("position", ctx.position)("animated", ctx.inkBarAnimated);
          ɵɵadvance();
          ɵɵproperty("addIcon", ctx.addIcon)("addable", ctx.addable)("items", ctx.hiddenItems);
          ɵɵadvance();
          ɵɵconditional(ctx.extraTemplate ? 8 : -1);
        }
      },
      dependencies: [NzTabScrollListDirective, NzTabAddButtonComponent, NzTabsInkBarDirective, NzTabNavOperationComponent, NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabNavBarComponent, [{
    type: Component,
    args: [{
      selector: "nz-tabs-nav",
      exportAs: "nzTabsNav",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <div
      class="ant-tabs-nav-wrap"
      [class.ant-tabs-nav-wrap-ping-left]="pingLeft"
      [class.ant-tabs-nav-wrap-ping-right]="pingRight"
      [class.ant-tabs-nav-wrap-ping-top]="pingTop"
      [class.ant-tabs-nav-wrap-ping-bottom]="pingBottom"
      #navWarp
    >
      <div
        class="ant-tabs-nav-list"
        #navList
        nzTabScrollList
        (offsetChange)="onOffsetChange($event)"
        (tabScroll)="tabScroll.emit($event)"
        role="tablist"
      >
        <ng-content></ng-content>
        @if (showAddButton) {
          <button
            role="tab"
            [attr.tabindex]="-1"
            nz-tab-add-button
            [addIcon]="addIcon"
            (click)="addClicked.emit()"
          ></button>
        }
        <div nz-tabs-ink-bar [hidden]="hideBar" [position]="position" [animated]="inkBarAnimated"></div>
      </div>
    </div>
    <nz-tab-nav-operation
      (addClicked)="addClicked.emit()"
      (selected)="onSelectedFromMenu($event)"
      [addIcon]="addIcon"
      [addable]="addable"
      [items]="hiddenItems"
    ></nz-tab-nav-operation>
    @if (extraTemplate) {
      <div class="ant-tabs-extra-content">
        <ng-template [ngTemplateOutlet]="extraTemplate"></ng-template>
      </div>
    }
  `,
      host: {
        class: "ant-tabs-nav",
        "(keydown)": "handleKeydown($event)"
      },
      imports: [NzTabScrollListDirective, NzTabAddButtonComponent, NzTabsInkBarDirective, NzTabNavOperationComponent, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: ViewportRuler
  }, {
    type: NzResizeObserver
  }, {
    type: Directionality
  }], {
    indexFocused: [{
      type: Output
    }],
    selectFocusedIndex: [{
      type: Output
    }],
    addClicked: [{
      type: Output
    }],
    tabScroll: [{
      type: Output
    }],
    position: [{
      type: Input
    }],
    addable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideBar: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    addIcon: [{
      type: Input
    }],
    inkBarAnimated: [{
      type: Input
    }],
    extraTemplate: [{
      type: Input
    }],
    selectedIndex: [{
      type: Input
    }],
    navWarpRef: [{
      type: ViewChild,
      args: ["navWarp", {
        static: true
      }]
    }],
    navListRef: [{
      type: ViewChild,
      args: ["navList", {
        static: true
      }]
    }],
    operationRef: [{
      type: ViewChild,
      args: [NzTabNavOperationComponent, {
        static: true
      }]
    }],
    addBtnRef: [{
      type: ViewChild,
      args: [NzTabAddButtonComponent, {
        static: false
      }]
    }],
    inkBar: [{
      type: ViewChild,
      args: [NzTabsInkBarDirective, {
        static: true
      }]
    }],
    items: [{
      type: ContentChildren,
      args: [NzTabNavItemDirective, {
        descendants: true
      }]
    }]
  });
})();
var NzTabBodyComponent = class _NzTabBodyComponent {
  constructor() {
    this.content = null;
    this.active = false;
    this.animated = true;
  }
  static {
    this.ɵfac = function NzTabBodyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabBodyComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTabBodyComponent,
      selectors: [["", "nz-tab-body", ""]],
      hostAttrs: [1, "ant-tabs-tabpane"],
      hostVars: 10,
      hostBindings: function NzTabBodyComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tabSwitchMotion", ctx.active ? "enter" : "leave")("@.disabled", !ctx.animated);
          ɵɵattribute("tabindex", ctx.active ? 0 : -1)("aria-hidden", !ctx.active);
          ɵɵstyleProp("overflow-y", ctx.animated ? ctx.active ? null : "none" : null);
          ɵɵclassProp("ant-tabs-tabpane-active", ctx.active)("ant-tabs-tabpane-hidden", ctx.animated ? null : !ctx.active);
        }
      },
      inputs: {
        content: "content",
        active: "active",
        animated: "animated"
      },
      exportAs: ["nzTabBody"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c5,
      decls: 1,
      vars: 1,
      consts: [[3, "ngTemplateOutlet"]],
      template: function NzTabBodyComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzTabBodyComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngTemplateOutlet", ctx.content);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      data: {
        animation: [tabSwitchMotion]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabBodyComponent, [{
    type: Component,
    args: [{
      selector: "[nz-tab-body]",
      exportAs: "nzTabBody",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-template [ngTemplateOutlet]="content"></ng-template> `,
      host: {
        class: "ant-tabs-tabpane",
        "[class.ant-tabs-tabpane-active]": "active",
        "[class.ant-tabs-tabpane-hidden]": "animated ? null : !active",
        "[attr.tabindex]": "active ? 0 : -1",
        "[attr.aria-hidden]": "!active",
        "[style.overflow-y]": 'animated ? active ? null : "none" : null',
        "[@tabSwitchMotion]": `active ? 'enter' : 'leave'`,
        "[@.disabled]": `!animated`
      },
      imports: [NgTemplateOutlet],
      standalone: true,
      animations: [tabSwitchMotion]
    }]
  }], null, {
    content: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    animated: [{
      type: Input
    }]
  });
})();
var NzTabCloseButtonComponent = class _NzTabCloseButtonComponent {
  constructor() {
    this.closeIcon = "close";
  }
  static {
    this.ɵfac = function NzTabCloseButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabCloseButtonComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTabCloseButtonComponent,
      selectors: [["nz-tab-close-button"], ["button", "nz-tab-close-button", ""]],
      hostAttrs: ["aria-label", "Close tab", "type", "button", 1, "ant-tabs-tab-remove"],
      inputs: {
        closeIcon: "closeIcon"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]],
      template: function NzTabCloseButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzTabCloseButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("nzStringTemplateOutlet", ctx.closeIcon);
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabCloseButtonComponent, [{
    type: Component,
    args: [{
      selector: "nz-tab-close-button, button[nz-tab-close-button]",
      template: `
    <ng-container *nzStringTemplateOutlet="closeIcon; let icon">
      <span nz-icon [nzType]="icon" nzTheme="outline"></span>
    </ng-container>
  `,
      host: {
        class: "ant-tabs-tab-remove",
        "aria-label": "Close tab",
        type: "button"
      },
      imports: [NzOutletModule, NzIconModule],
      standalone: true
    }]
  }], () => [], {
    closeIcon: [{
      type: Input
    }]
  });
})();
var NzTabLinkTemplateDirective = class _NzTabLinkTemplateDirective {
  constructor() {
    this.templateRef = inject(TemplateRef, {
      host: true
    });
  }
  static {
    this.ɵfac = function NzTabLinkTemplateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabLinkTemplateDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTabLinkTemplateDirective,
      selectors: [["ng-template", "nzTabLink", ""]],
      exportAs: ["nzTabLinkTemplate"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabLinkTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[nzTabLink]",
      exportAs: "nzTabLinkTemplate",
      standalone: true
    }]
  }], null, null);
})();
var NzTabLinkDirective = class _NzTabLinkDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.routerLink = inject(RouterLink, {
      self: true,
      optional: true
    });
  }
  static {
    this.ɵfac = function NzTabLinkDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabLinkDirective)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTabLinkDirective,
      selectors: [["a", "nz-tab-link", ""]],
      exportAs: ["nzTabLink"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabLinkDirective, [{
    type: Directive,
    args: [{
      selector: "a[nz-tab-link]",
      exportAs: "nzTabLink",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var NzTabDirective = class _NzTabDirective {
  static {
    this.ɵfac = function NzTabDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzTabDirective,
      selectors: [["", "nz-tab", ""]],
      exportAs: ["nzTab"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-tab]",
      exportAs: "nzTab",
      standalone: true
    }]
  }], null, null);
})();
var NZ_TAB_SET = new InjectionToken("NZ_TAB_SET");
var NzTabComponent = class _NzTabComponent {
  constructor() {
    this.nzTitle = "";
    this.nzClosable = false;
    this.nzCloseIcon = "close";
    this.nzDisabled = false;
    this.nzForceRender = false;
    this.nzSelect = new EventEmitter();
    this.nzDeselect = new EventEmitter();
    this.nzClick = new EventEmitter();
    this.nzContextmenu = new EventEmitter();
    this.template = null;
    this.isActive = false;
    this.hasBeenActive = false;
    this.position = null;
    this.origin = null;
    this.closestTabSet = inject(NZ_TAB_SET);
    this.stateChanges = new Subject();
  }
  get content() {
    return this.template || this.contentTemplate;
  }
  get label() {
    return this.nzTitle || this.nzTabLinkTemplateDirective?.templateRef;
  }
  ngOnChanges(changes) {
    const {
      nzTitle,
      nzDisabled,
      nzForceRender
    } = changes;
    if (nzTitle || nzDisabled || nzForceRender) {
      this.stateChanges.next();
    }
  }
  ngOnDestroy() {
    this.stateChanges.complete();
  }
  setActive(active) {
    this.isActive = active;
    if (active) {
      this.hasBeenActive = true;
    }
  }
  static {
    this.ɵfac = function NzTabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTabComponent,
      selectors: [["nz-tab"]],
      contentQueries: function NzTabComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NzTabLinkTemplateDirective, 5);
          ɵɵcontentQuery(dirIndex, NzTabDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, NzTabLinkDirective, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTabLinkTemplateDirective = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.linkDirective = _t.first);
        }
      },
      viewQuery: function NzTabComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c6, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        }
      },
      inputs: {
        nzTitle: "nzTitle",
        nzClosable: [2, "nzClosable", "nzClosable", booleanAttribute],
        nzCloseIcon: "nzCloseIcon",
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzForceRender: [2, "nzForceRender", "nzForceRender", booleanAttribute]
      },
      outputs: {
        nzSelect: "nzSelect",
        nzDeselect: "nzDeselect",
        nzClick: "nzClick",
        nzContextmenu: "nzContextmenu"
      },
      exportAs: ["nzTab"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c8,
      decls: 4,
      vars: 0,
      consts: [["tabLinkTemplate", ""], ["contentTemplate", ""]],
      template: function NzTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c7);
          ɵɵtemplate(0, NzTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabComponent, [{
    type: Component,
    args: [{
      selector: "nz-tab",
      exportAs: "nzTab",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #tabLinkTemplate>
      <ng-content select="[nz-tab-link]"></ng-content>
    </ng-template>
    <ng-template #contentTemplate><ng-content></ng-content></ng-template>
  `,
      standalone: true
    }]
  }], null, {
    nzTitle: [{
      type: Input
    }],
    nzClosable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCloseIcon: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzForceRender: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSelect: [{
      type: Output
    }],
    nzDeselect: [{
      type: Output
    }],
    nzClick: [{
      type: Output
    }],
    nzContextmenu: [{
      type: Output
    }],
    nzTabLinkTemplateDirective: [{
      type: ContentChild,
      args: [NzTabLinkTemplateDirective, {
        static: false
      }]
    }],
    template: [{
      type: ContentChild,
      args: [NzTabDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    linkDirective: [{
      type: ContentChild,
      args: [NzTabLinkDirective, {
        static: false
      }]
    }],
    contentTemplate: [{
      type: ViewChild,
      args: ["contentTemplate", {
        static: true
      }]
    }]
  });
})();
var NzTabChangeEvent = class {
};
var NZ_CONFIG_MODULE_NAME = "tabs";
var nextId = 0;
var NzTabSetComponent = class _NzTabSetComponent {
  get nzSelectedIndex() {
    return this.selectedIndex;
  }
  set nzSelectedIndex(value) {
    this.indexToSelect = coerceNumberProperty(value, null);
  }
  get position() {
    return ["top", "bottom"].indexOf(this.nzTabPosition) === -1 ? "vertical" : "horizontal";
  }
  get addable() {
    return this.nzType === "editable-card" && !this.nzHideAdd;
  }
  get closable() {
    return this.nzType === "editable-card";
  }
  get line() {
    return this.nzType === "line";
  }
  get inkBarAnimated() {
    return this.line && (typeof this.nzAnimated === "boolean" ? this.nzAnimated : this.nzAnimated.inkBar);
  }
  get tabPaneAnimated() {
    return typeof this.nzAnimated === "boolean" ? this.nzAnimated : this.nzAnimated.tabPane;
  }
  constructor(nzConfigService, ngZone, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzTabPosition = "top";
    this.nzCanDeactivate = null;
    this.nzAddIcon = "plus";
    this.nzTabBarStyle = null;
    this.nzType = "line";
    this.nzSize = "default";
    this.nzAnimated = true;
    this.nzTabBarGutter = void 0;
    this.nzHideAdd = false;
    this.nzCentered = false;
    this.nzHideAll = false;
    this.nzLinkRouter = false;
    this.nzLinkExact = true;
    this.nzDestroyInactiveTabPane = false;
    this.nzSelectChange = new EventEmitter(true);
    this.nzSelectedIndexChange = new EventEmitter();
    this.nzTabListScroll = new EventEmitter();
    this.nzClose = new EventEmitter();
    this.nzAdd = new EventEmitter();
    this.allTabs = new QueryList();
    this.tabs = new QueryList();
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.indexToSelect = 0;
    this.selectedIndex = null;
    this.tabLabelSubscription = Subscription.EMPTY;
    this.tabsSubscription = Subscription.EMPTY;
    this.canDeactivateSubscription = Subscription.EMPTY;
    this.router = inject(Router, {
      optional: true
    });
    this.tabSetId = nextId++;
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.tabs.destroy();
    this.tabLabelSubscription.unsubscribe();
    this.tabsSubscription.unsubscribe();
    this.canDeactivateSubscription.unsubscribe();
  }
  ngAfterContentInit() {
    this.ngZone.runOutsideAngular(() => {
      Promise.resolve().then(() => this.setUpRouter());
    });
    this.subscribeToTabLabels();
    this.subscribeToAllTabChanges();
    this.tabsSubscription = this.tabs.changes.subscribe(() => {
      const indexToSelect = this.clampTabIndex(this.indexToSelect);
      if (indexToSelect === this.selectedIndex) {
        const tabs = this.tabs.toArray();
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            this.indexToSelect = this.selectedIndex = i;
            break;
          }
        }
      }
      this.subscribeToTabLabels();
      this.cdr.markForCheck();
    });
  }
  ngAfterContentChecked() {
    const indexToSelect = this.indexToSelect = this.clampTabIndex(this.indexToSelect);
    if (this.selectedIndex !== indexToSelect) {
      const isFirstRun = this.selectedIndex == null;
      if (!isFirstRun) {
        this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
      }
      Promise.resolve().then(() => {
        this.tabs.forEach((tab, index) => tab.setActive(index === indexToSelect));
        if (!isFirstRun) {
          this.nzSelectedIndexChange.emit(indexToSelect);
        }
      });
    }
    this.tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect;
      if (this.selectedIndex != null && tab.position === 0 && !tab.origin) {
        tab.origin = indexToSelect - this.selectedIndex;
      }
    });
    if (this.selectedIndex !== indexToSelect) {
      this.selectedIndex = indexToSelect;
      this.cdr.markForCheck();
    }
  }
  onClose(index, e) {
    e.preventDefault();
    e.stopPropagation();
    this.nzClose.emit({
      index
    });
  }
  onAdd() {
    this.nzAdd.emit();
  }
  clampTabIndex(index) {
    return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
  }
  createChangeEvent(index) {
    const event = new NzTabChangeEvent();
    event.index = index;
    if (this.tabs && this.tabs.length) {
      event.tab = this.tabs.toArray()[index];
      this.tabs.forEach((tab, i) => {
        if (i !== index) {
          tab.nzDeselect.emit();
        }
      });
      event.tab.nzSelect.emit();
    }
    return event;
  }
  subscribeToTabLabels() {
    if (this.tabLabelSubscription) {
      this.tabLabelSubscription.unsubscribe();
    }
    this.tabLabelSubscription = merge(...this.tabs.map((tab) => tab.stateChanges)).subscribe(() => this.cdr.markForCheck());
  }
  subscribeToAllTabChanges() {
    this.allTabs.changes.pipe(startWith(this.allTabs)).subscribe((tabs) => {
      this.tabs.reset(tabs.filter((tab) => tab.closestTabSet === this));
      this.tabs.notifyOnChanges();
    });
  }
  canDeactivateFun(pre, next) {
    if (typeof this.nzCanDeactivate === "function") {
      const observable = wrapIntoObservable(this.nzCanDeactivate(pre, next));
      return observable.pipe(first(), takeUntil(this.destroy$));
    } else {
      return of(true);
    }
  }
  clickNavItem(tab, index, e) {
    if (!tab.nzDisabled) {
      tab.nzClick.emit();
      if (!this.isRouterLinkClickEvent(index, e)) {
        this.setSelectedIndex(index);
      }
    }
  }
  isRouterLinkClickEvent(index, event) {
    const target = event.target;
    if (this.nzLinkRouter) {
      return !!this.tabs.toArray()[index]?.linkDirective?.elementRef.nativeElement.contains(target);
    } else {
      return false;
    }
  }
  contextmenuNavItem(tab, e) {
    if (!tab.nzDisabled) {
      tab.nzContextmenu.emit(e);
    }
  }
  setSelectedIndex(index) {
    this.canDeactivateSubscription.unsubscribe();
    this.canDeactivateSubscription = this.canDeactivateFun(this.selectedIndex, index).subscribe((can) => {
      if (can) {
        this.nzSelectedIndex = index;
        this.tabNavBarRef.focusIndex = index;
        this.cdr.markForCheck();
      }
    });
  }
  getTabIndex(tab, index) {
    if (tab.nzDisabled) {
      return null;
    }
    return this.selectedIndex === index ? 0 : -1;
  }
  getTabContentId(i) {
    return `nz-tabs-${this.tabSetId}-tab-${i}`;
  }
  setUpRouter() {
    if (this.nzLinkRouter) {
      if (!this.router) {
        throw new Error(`${PREFIX} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);
      }
      this.router.events.pipe(takeUntil(this.destroy$), filter((e) => e instanceof NavigationEnd), startWith(true), delay(0)).subscribe(() => {
        this.updateRouterActive();
        this.cdr.markForCheck();
      });
    }
  }
  updateRouterActive() {
    if (this.router?.navigated) {
      const index = this.findShouldActiveTabIndex();
      if (index !== this.selectedIndex) {
        this.setSelectedIndex(index);
      }
      this.nzHideAll = index === -1;
    }
  }
  findShouldActiveTabIndex() {
    const tabs = this.tabs.toArray();
    const isActive = this.isLinkActive(this.router);
    return tabs.findIndex((tab) => {
      const c = tab.linkDirective;
      return c ? isActive(c.routerLink) : false;
    });
  }
  isLinkActive(router) {
    return (link) => link ? !!router?.isActive(link.urlTree || "", {
      paths: this.nzLinkExact ? "exact" : "subset",
      queryParams: this.nzLinkExact ? "exact" : "subset",
      fragment: "ignored",
      matrixParams: "ignored"
    }) : false;
  }
  static {
    this.ɵfac = function NzTabSetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabSetComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTabSetComponent,
      selectors: [["nz-tabset"]],
      contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NzTabComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.allTabs = _t);
        }
      },
      viewQuery: function NzTabSetComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(NzTabNavBarComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabNavBarRef = _t.first);
        }
      },
      hostAttrs: [1, "ant-tabs"],
      hostVars: 24,
      hostBindings: function NzTabSetComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-tabs-card", ctx.nzType === "card" || ctx.nzType === "editable-card")("ant-tabs-editable", ctx.nzType === "editable-card")("ant-tabs-editable-card", ctx.nzType === "editable-card")("ant-tabs-centered", ctx.nzCentered)("ant-tabs-rtl", ctx.dir === "rtl")("ant-tabs-top", ctx.nzTabPosition === "top")("ant-tabs-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-left", ctx.nzTabPosition === "left")("ant-tabs-right", ctx.nzTabPosition === "right")("ant-tabs-default", ctx.nzSize === "default")("ant-tabs-small", ctx.nzSize === "small")("ant-tabs-large", ctx.nzSize === "large");
        }
      },
      inputs: {
        nzSelectedIndex: "nzSelectedIndex",
        nzTabPosition: "nzTabPosition",
        nzTabBarExtraContent: "nzTabBarExtraContent",
        nzCanDeactivate: "nzCanDeactivate",
        nzAddIcon: "nzAddIcon",
        nzTabBarStyle: "nzTabBarStyle",
        nzType: "nzType",
        nzSize: "nzSize",
        nzAnimated: "nzAnimated",
        nzTabBarGutter: "nzTabBarGutter",
        nzHideAdd: [2, "nzHideAdd", "nzHideAdd", booleanAttribute],
        nzCentered: [2, "nzCentered", "nzCentered", booleanAttribute],
        nzHideAll: [2, "nzHideAll", "nzHideAll", booleanAttribute],
        nzLinkRouter: [2, "nzLinkRouter", "nzLinkRouter", booleanAttribute],
        nzLinkExact: [2, "nzLinkExact", "nzLinkExact", booleanAttribute],
        nzDestroyInactiveTabPane: [2, "nzDestroyInactiveTabPane", "nzDestroyInactiveTabPane", booleanAttribute]
      },
      outputs: {
        nzSelectChange: "nzSelectChange",
        nzSelectedIndexChange: "nzSelectedIndexChange",
        nzTabListScroll: "nzTabListScroll",
        nzClose: "nzClose",
        nzAdd: "nzAdd"
      },
      exportAs: ["nzTabset"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: NZ_TAB_SET,
        useExisting: _NzTabSetComponent
      }]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      decls: 4,
      vars: 12,
      consts: [["tabpaneTmpl", ""], [3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate"], [1, "ant-tabs-content-holder"], [1, "ant-tabs-content"], [3, "tabScroll", "selectFocusedIndex", "addClicked", "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate"], [1, "ant-tabs-tab", 3, "margin-right", "margin-bottom", "ant-tabs-tab-active", "ant-tabs-tab-disabled"], [1, "ant-tabs-tab", 3, "click", "contextmenu"], ["type", "button", "role", "tab", "nzTabNavItem", "", "cdkMonitorElementFocus", "", 1, "ant-tabs-tab-btn", 3, "id", "disabled", "tab", "active"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["type", "button", "nz-tab-close-button", "", 3, "closeIcon"], ["type", "button", "nz-tab-close-button", "", 3, "click", "closeIcon"], [3, "ngTemplateOutlet"], ["role", "tabpanel", "nz-tab-body", "", 3, "id", "active", "content", "animated"]],
      template: function NzTabSetComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzTabSetComponent_Conditional_0_Template, 3, 8, "nz-tabs-nav", 1);
          ɵɵelementStart(1, "div", 2)(2, "div", 3);
          ɵɵtemplate(3, NzTabSetComponent_Conditional_3_Template, 2, 0);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵconditional(ctx.tabs.length || ctx.addable ? 0 : -1);
          ɵɵadvance(2);
          ɵɵclassProp("ant-tabs-content-top", ctx.nzTabPosition === "top")("ant-tabs-content-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-content-left", ctx.nzTabPosition === "left")("ant-tabs-content-right", ctx.nzTabPosition === "right")("ant-tabs-content-animated", ctx.tabPaneAnimated);
          ɵɵadvance();
          ɵɵconditional(!ctx.nzHideAll ? 3 : -1);
        }
      },
      dependencies: [NzTabNavBarComponent, NgStyle, NgTemplateOutlet, NzTabNavItemDirective, A11yModule, CdkMonitorFocus, NzOutletModule, NzStringTemplateOutletDirective, NzTabCloseButtonComponent, NzTabBodyComponent],
      encapsulation: 2
    });
  }
};
__decorate([WithConfig()], NzTabSetComponent.prototype, "nzType", void 0);
__decorate([WithConfig()], NzTabSetComponent.prototype, "nzSize", void 0);
__decorate([WithConfig()], NzTabSetComponent.prototype, "nzAnimated", void 0);
__decorate([WithConfig()], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabSetComponent, [{
    type: Component,
    args: [{
      selector: "nz-tabset",
      exportAs: "nzTabset",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: NZ_TAB_SET,
        useExisting: NzTabSetComponent
      }],
      template: `
    @if (tabs.length || addable) {
      <nz-tabs-nav
        [ngStyle]="nzTabBarStyle"
        [selectedIndex]="nzSelectedIndex || 0"
        [inkBarAnimated]="inkBarAnimated"
        [addable]="addable"
        [addIcon]="nzAddIcon"
        [hideBar]="nzHideAll"
        [position]="position"
        [extraTemplate]="nzTabBarExtraContent"
        (tabScroll)="nzTabListScroll.emit($event)"
        (selectFocusedIndex)="setSelectedIndex($event)"
        (addClicked)="onAdd()"
      >
        @for (tab of tabs; track tab; let i = $index) {
          <div
            class="ant-tabs-tab"
            [style.margin-right.px]="position === 'horizontal' ? nzTabBarGutter : null"
            [style.margin-bottom.px]="position === 'vertical' ? nzTabBarGutter : null"
            [class.ant-tabs-tab-active]="nzSelectedIndex === i"
            [class.ant-tabs-tab-disabled]="tab.nzDisabled"
            (click)="clickNavItem(tab, i, $event)"
            (contextmenu)="contextmenuNavItem(tab, $event)"
          >
            <button
              type="button"
              role="tab"
              [id]="getTabContentId(i)"
              [attr.tabIndex]="getTabIndex(tab, i)"
              [attr.aria-disabled]="tab.nzDisabled"
              [attr.aria-selected]="nzSelectedIndex === i && !nzHideAll"
              [attr.aria-controls]="getTabContentId(i)"
              [disabled]="tab.nzDisabled"
              [tab]="tab"
              [active]="nzSelectedIndex === i"
              class="ant-tabs-tab-btn"
              nzTabNavItem
              cdkMonitorElementFocus
            >
              <ng-container *nzStringTemplateOutlet="tab.label; context: { visible: true }">{{
                tab.label
              }}</ng-container>
              @if (tab.nzClosable && closable && !tab.nzDisabled) {
                <button
                  type="button"
                  nz-tab-close-button
                  [closeIcon]="tab.nzCloseIcon"
                  (click)="onClose(i, $event)"
                ></button>
              }
            </button>
          </div>
        }
      </nz-tabs-nav>
    }
    <div class="ant-tabs-content-holder">
      <div
        class="ant-tabs-content"
        [class.ant-tabs-content-top]="nzTabPosition === 'top'"
        [class.ant-tabs-content-bottom]="nzTabPosition === 'bottom'"
        [class.ant-tabs-content-left]="nzTabPosition === 'left'"
        [class.ant-tabs-content-right]="nzTabPosition === 'right'"
        [class.ant-tabs-content-animated]="tabPaneAnimated"
      >
        @if (!nzHideAll) {
          @for (tab of tabs; track tab; let i = $index) {
            @if (tab.nzForceRender) {
              <ng-template [ngTemplateOutlet]="tabpaneTmpl"></ng-template>
            } @else if (nzDestroyInactiveTabPane) {
              @if (nzSelectedIndex === i) {
                <ng-template [ngTemplateOutlet]="tabpaneTmpl"></ng-template>
              }
            } @else {
              @if (nzSelectedIndex === i || tab.hasBeenActive) {
                <ng-template [ngTemplateOutlet]="tabpaneTmpl"></ng-template>
              }
            }

            <ng-template #tabpaneTmpl>
              <div
                role="tabpanel"
                [id]="getTabContentId(i)"
                [attr.aria-labelledby]="getTabContentId(i)"
                nz-tab-body
                [active]="nzSelectedIndex === i"
                [content]="tab.content"
                [animated]="tabPaneAnimated"
              ></div>
            </ng-template>
          }
        }
      </div>
    </div>
  `,
      host: {
        class: "ant-tabs",
        "[class.ant-tabs-card]": `nzType === 'card' || nzType === 'editable-card'`,
        "[class.ant-tabs-editable]": `nzType === 'editable-card'`,
        "[class.ant-tabs-editable-card]": `nzType === 'editable-card'`,
        "[class.ant-tabs-centered]": `nzCentered`,
        "[class.ant-tabs-rtl]": `dir === 'rtl'`,
        "[class.ant-tabs-top]": `nzTabPosition === 'top'`,
        "[class.ant-tabs-bottom]": `nzTabPosition === 'bottom'`,
        "[class.ant-tabs-left]": `nzTabPosition === 'left'`,
        "[class.ant-tabs-right]": `nzTabPosition === 'right'`,
        "[class.ant-tabs-default]": `nzSize === 'default'`,
        "[class.ant-tabs-small]": `nzSize === 'small'`,
        "[class.ant-tabs-large]": `nzSize === 'large'`
      },
      imports: [NzTabNavBarComponent, NgStyle, NgTemplateOutlet, NzTabNavItemDirective, A11yModule, NzOutletModule, NzTabCloseButtonComponent, NzTabBodyComponent],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    nzSelectedIndex: [{
      type: Input
    }],
    nzTabPosition: [{
      type: Input
    }],
    nzTabBarExtraContent: [{
      type: Input
    }],
    nzCanDeactivate: [{
      type: Input
    }],
    nzAddIcon: [{
      type: Input
    }],
    nzTabBarStyle: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzAnimated: [{
      type: Input
    }],
    nzTabBarGutter: [{
      type: Input
    }],
    nzHideAdd: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCentered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHideAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLinkRouter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLinkExact: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDestroyInactiveTabPane: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSelectChange: [{
      type: Output
    }],
    nzSelectedIndexChange: [{
      type: Output
    }],
    nzTabListScroll: [{
      type: Output
    }],
    nzClose: [{
      type: Output
    }],
    nzAdd: [{
      type: Output
    }],
    allTabs: [{
      type: ContentChildren,
      args: [NzTabComponent, {
        descendants: true
      }]
    }],
    tabNavBarRef: [{
      type: ViewChild,
      args: [NzTabNavBarComponent, {
        static: false
      }]
    }]
  });
})();
var DIRECTIVES = [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective];
var NzTabsModule = class _NzTabsModule {
  static {
    this.ɵfac = function NzTabsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTabsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzTabsModule,
      imports: [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective],
      exports: [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzTabSetComponent, NzTabNavBarComponent, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabsModule, [{
    type: NgModule,
    args: [{
      imports: [DIRECTIVES],
      exports: [DIRECTIVES]
    }]
  }], null, null);
})();
export {
  NZ_TAB_SET,
  NzTabChangeEvent,
  NzTabComponent,
  NzTabDirective,
  NzTabLinkDirective,
  NzTabLinkTemplateDirective,
  NzTabSetComponent,
  NzTabsModule,
  NzTabAddButtonComponent as ɵNzTabAddButtonComponent,
  NzTabBodyComponent as ɵNzTabBodyComponent,
  NzTabCloseButtonComponent as ɵNzTabCloseButtonComponent,
  NzTabNavBarComponent as ɵNzTabNavBarComponent,
  NzTabNavItemDirective as ɵNzTabNavItemDirective,
  NzTabNavOperationComponent as ɵNzTabNavOperationComponent,
  NzTabScrollListDirective as ɵNzTabScrollListDirective,
  NzTabsInkBarDirective as ɵNzTabsInkBarDirective
};
//# sourceMappingURL=ng-zorro-antd_tabs.js.map
