import {
  NzNoAnimationDirective
} from "./chunk-SJCITZUA.js";
import "./chunk-LZHLSWHV.js";
import "./chunk-ENGKBJDQ.js";
import {
  collapseMotion
} from "./chunk-PLSH35S5.js";
import "./chunk-VFJ3G2GQ.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-24FD55U4.js";
import "./chunk-BQ76GOFF.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-KCKBRW5C.js";
import {
  NzDestroyService
} from "./chunk-YBPL5W6X.js";
import "./chunk-4MSGGSW7.js";
import "./chunk-R6IJAHEZ.js";
import {
  Directionality
} from "./chunk-CGJQYKLH.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-XRYSGYAF.js";
import "./chunk-WKKYJIDN.js";
import "./chunk-HHQ7MW3F.js";
import "./chunk-FADEYHXQ.js";
import "./chunk-VFHRQ4OU.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-ZREUISJD.js";
import {
  fromEvent
} from "./chunk-IC62NIWK.js";
import "./chunk-ISM5WLAM.js";
import {
  __decorate,
  filter,
  takeUntil
} from "./chunk-ZZ67MR3E.js";
import "./chunk-TXDUYLVM.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-collapse.mjs
var _c0 = ["*"];
var _c1 = ["collapseHeader"];
function NzCollapsePanelComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const expandedIcon_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzType", expandedIcon_r1 || "right")("nzRotate", ctx_r1.nzActive ? 90 : 0);
  }
}
function NzCollapsePanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NzCollapsePanelComponent_Conditional_2_ng_container_1_Template, 2, 2, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzExpandedIcon);
  }
}
function NzCollapsePanelComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzHeader);
  }
}
function NzCollapsePanelComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzExtra);
  }
}
function NzCollapsePanelComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, NzCollapsePanelComponent_Conditional_5_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzExtra);
  }
}
var NZ_CONFIG_MODULE_NAME$1 = "collapse";
var NzCollapseComponent = class _NzCollapseComponent {
  constructor(nzConfigService, cdr, directionality, destroy$) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this.destroy$ = destroy$;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME$1;
    this.nzAccordion = false;
    this.nzBordered = true;
    this.nzGhost = false;
    this.nzExpandIconPosition = "start";
    this.dir = "ltr";
    this.listOfNzCollapsePanelComponent = [];
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME$1).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  addPanel(value) {
    this.listOfNzCollapsePanelComponent.push(value);
  }
  removePanel(value) {
    this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
  }
  click(collapse) {
    if (this.nzAccordion && !collapse.nzActive) {
      this.listOfNzCollapsePanelComponent.filter((item) => item !== collapse).forEach((item) => {
        if (item.nzActive) {
          item.nzActive = false;
          item.nzActiveChange.emit(item.nzActive);
          item.markForCheck();
        }
      });
    }
    collapse.nzActive = !collapse.nzActive;
    collapse.nzActiveChange.emit(collapse.nzActive);
  }
  static {
    this.ɵfac = function NzCollapseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzCollapseComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality), ɵɵdirectiveInject(NzDestroyService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzCollapseComponent,
      selectors: [["nz-collapse"]],
      hostAttrs: [1, "ant-collapse"],
      hostVars: 10,
      hostBindings: function NzCollapseComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-collapse-icon-position-start", ctx.nzExpandIconPosition === "start")("ant-collapse-icon-position-end", ctx.nzExpandIconPosition === "end")("ant-collapse-ghost", ctx.nzGhost)("ant-collapse-borderless", !ctx.nzBordered)("ant-collapse-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzAccordion: [2, "nzAccordion", "nzAccordion", booleanAttribute],
        nzBordered: [2, "nzBordered", "nzBordered", booleanAttribute],
        nzGhost: [2, "nzGhost", "nzGhost", booleanAttribute],
        nzExpandIconPosition: "nzExpandIconPosition"
      },
      exportAs: ["nzCollapse"],
      standalone: true,
      features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzCollapseComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
__decorate([WithConfig()], NzCollapseComponent.prototype, "nzAccordion", void 0);
__decorate([WithConfig()], NzCollapseComponent.prototype, "nzBordered", void 0);
__decorate([WithConfig()], NzCollapseComponent.prototype, "nzGhost", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapseComponent, [{
    type: Component,
    args: [{
      selector: "nz-collapse",
      exportAs: "nzCollapse",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-collapse",
        "[class.ant-collapse-icon-position-start]": `nzExpandIconPosition === 'start'`,
        "[class.ant-collapse-icon-position-end]": `nzExpandIconPosition === 'end'`,
        "[class.ant-collapse-ghost]": `nzGhost`,
        "[class.ant-collapse-borderless]": "!nzBordered",
        "[class.ant-collapse-rtl]": "dir === 'rtl'"
      },
      providers: [NzDestroyService],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }, {
    type: NzDestroyService
  }], {
    nzAccordion: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzGhost: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExpandIconPosition: [{
      type: Input
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "collapsePanel";
var NzCollapsePanelComponent = class _NzCollapsePanelComponent {
  markForCheck() {
    this.cdr.markForCheck();
  }
  constructor(nzConfigService, ngZone, cdr, destroy$) {
    this.nzConfigService = nzConfigService;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.destroy$ = destroy$;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzActive = false;
    this.nzDisabled = false;
    this.nzShowArrow = true;
    this.nzActiveChange = new EventEmitter();
    this.nzCollapseComponent = inject(NzCollapseComponent, {
      host: true
    });
    this.noAnimation = inject(NzNoAnimationDirective, {
      optional: true
    });
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    this.nzCollapseComponent.addPanel(this);
    this.ngZone.runOutsideAngular(() => fromEvent(this.collapseHeader.nativeElement, "click").pipe(filter(() => !this.nzDisabled), takeUntil(this.destroy$)).subscribe(() => {
      this.ngZone.run(() => {
        this.nzCollapseComponent.click(this);
        this.cdr.markForCheck();
      });
    }));
  }
  ngOnDestroy() {
    this.nzCollapseComponent.removePanel(this);
  }
  static {
    this.ɵfac = function NzCollapsePanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzCollapsePanelComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzDestroyService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzCollapsePanelComponent,
      selectors: [["nz-collapse-panel"]],
      viewQuery: function NzCollapsePanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c1, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.collapseHeader = _t.first);
        }
      },
      hostAttrs: [1, "ant-collapse-item"],
      hostVars: 6,
      hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
        }
      },
      inputs: {
        nzActive: [2, "nzActive", "nzActive", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzShowArrow: [2, "nzShowArrow", "nzShowArrow", booleanAttribute],
        nzExtra: "nzExtra",
        nzHeader: "nzHeader",
        nzExpandedIcon: "nzExpandedIcon"
      },
      outputs: {
        nzActiveChange: "nzActiveChange"
      },
      exportAs: ["nzCollapsePanel"],
      standalone: true,
      features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 9,
      vars: 8,
      consts: [["collapseHeader", ""], ["role", "button", 1, "ant-collapse-header"], [1, "ant-collapse-header-text"], [4, "nzStringTemplateOutlet"], [1, "ant-collapse-extra"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"]],
      template: function NzCollapsePanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵtemplate(2, NzCollapsePanelComponent_Conditional_2_Template, 2, 1, "div");
          ɵɵelementStart(3, "span", 2);
          ɵɵtemplate(4, NzCollapsePanelComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
          ɵɵelementEnd();
          ɵɵtemplate(5, NzCollapsePanelComponent_Conditional_5_Template, 2, 1, "div", 4);
          ɵɵelementEnd();
          ɵɵelementStart(6, "div", 5)(7, "div", 6);
          ɵɵprojection(8);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵattribute("aria-expanded", ctx.nzActive);
          ɵɵadvance(2);
          ɵɵconditional(ctx.nzShowArrow ? 2 : -1);
          ɵɵadvance(2);
          ɵɵproperty("nzStringTemplateOutlet", ctx.nzHeader);
          ɵɵadvance();
          ɵɵconditional(ctx.nzExtra ? 5 : -1);
          ɵɵadvance();
          ɵɵclassProp("ant-collapse-content-active", ctx.nzActive);
          ɵɵproperty("@.disabled", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
      encapsulation: 2,
      data: {
        animation: [collapseMotion]
      },
      changeDetection: 0
    });
  }
};
__decorate([WithConfig()], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapsePanelComponent, [{
    type: Component,
    args: [{
      selector: "nz-collapse-panel",
      exportAs: "nzCollapsePanel",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      animations: [collapseMotion],
      template: `
    <div #collapseHeader role="button" [attr.aria-expanded]="nzActive" class="ant-collapse-header">
      @if (nzShowArrow) {
        <div>
          <ng-container *nzStringTemplateOutlet="nzExpandedIcon; let expandedIcon">
            <span
              nz-icon
              [nzType]="expandedIcon || 'right'"
              class="ant-collapse-arrow"
              [nzRotate]="nzActive ? 90 : 0"
            ></span>
          </ng-container>
        </div>
      }
      <span class="ant-collapse-header-text">
        <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
      </span>
      @if (nzExtra) {
        <div class="ant-collapse-extra">
          <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
        </div>
      }
    </div>
    <div
      class="ant-collapse-content"
      [class.ant-collapse-content-active]="nzActive"
      [@.disabled]="!!noAnimation?.nzNoAnimation"
      [@collapseMotion]="nzActive ? 'expanded' : 'hidden'"
    >
      <div class="ant-collapse-content-box">
        <ng-content></ng-content>
      </div>
    </div>
  `,
      host: {
        class: "ant-collapse-item",
        "[class.ant-collapse-no-arrow]": "!nzShowArrow",
        "[class.ant-collapse-item-active]": "nzActive",
        "[class.ant-collapse-item-disabled]": "nzDisabled"
      },
      providers: [NzDestroyService],
      imports: [NzOutletModule, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzDestroyService
  }], {
    nzActive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowArrow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExtra: [{
      type: Input
    }],
    nzHeader: [{
      type: Input
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzActiveChange: [{
      type: Output
    }],
    collapseHeader: [{
      type: ViewChild,
      args: ["collapseHeader", {
        static: true
      }]
    }]
  });
})();
var NzCollapseModule = class _NzCollapseModule {
  static {
    this.ɵfac = function NzCollapseModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzCollapseModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzCollapseModule,
      imports: [NzCollapsePanelComponent, NzCollapseComponent],
      exports: [NzCollapsePanelComponent, NzCollapseComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzCollapsePanelComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapseModule, [{
    type: NgModule,
    args: [{
      imports: [NzCollapsePanelComponent, NzCollapseComponent],
      exports: [NzCollapsePanelComponent, NzCollapseComponent]
    }]
  }], null, null);
})();
export {
  NzCollapseComponent,
  NzCollapseModule,
  NzCollapsePanelComponent
};
//# sourceMappingURL=ng-zorro-antd_collapse.js.map
