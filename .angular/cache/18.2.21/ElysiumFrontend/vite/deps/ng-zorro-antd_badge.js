import {
  NzNoAnimationDirective
} from "./chunk-EDWEZ7BQ.js";
import "./chunk-JLQKZ77O.js";
import "./chunk-LO2Q6FY3.js";
import {
  zoomBadgeMotion
} from "./chunk-KBDOH27Z.js";
import "./chunk-EURECYGD.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-I4HQEHIX.js";
import {
  Directionality
} from "./chunk-7DIMPZVY.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-FNQVWW6X.js";
import "./chunk-CEGLWSSJ.js";
import "./chunk-SN4CB355.js";
import "./chunk-IGUNWB7S.js";
import {
  NgStyle
} from "./chunk-P5AJ7EIU.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgModule,
  Renderer2,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
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
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IJAPRJ4V.js";
import "./chunk-TAJAR57M.js";
import "./chunk-IBPEAIWH.js";
import {
  Subject,
  takeUntil
} from "./chunk-LY5LHBYX.js";
import {
  __decorate
} from "./chunk-4JLIZ3DY.js";
import "./chunk-TXDUYLVM.js";

// ../node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-badge.mjs
function NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ɵ$index_2_r2 = ɵɵnextContext(2).$index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("current", p_r1 === ctx_r2.countArray[ɵ$index_2_r2]);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", p_r1, " ");
  }
}
function NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_For_1_Template, 2, 3, "p", 2, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵrepeater(ctx_r2.countSingleArray);
  }
}
function NzBadgeSupComponent_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵtemplate(1, NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_Template, 2, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ɵ$index_2_r2 = ctx.$index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleProp("transform", "translateY(" + -ctx_r2.countArray[ɵ$index_2_r2] * 100 + "%)");
    ɵɵproperty("nzNoAnimation", ctx_r2.noAnimation);
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.nzDot && ctx_r2.countArray[ɵ$index_2_r2] !== void 0 ? 1 : -1);
  }
}
function NzBadgeSupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzBadgeSupComponent_Conditional_0_For_1_Template, 2, 4, "span", 0, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵrepeater(ctx_r2.maxNumberArray);
  }
}
function NzBadgeSupComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r2.nzOverflowCount, "+ ");
  }
}
var _c0 = ["*"];
function NzBadgeComponent_Conditional_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzText);
  }
}
function NzBadgeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
    ɵɵelementStart(1, "span", 2);
    ɵɵtemplate(2, NzBadgeComponent_Conditional_0_ng_container_2_Template, 2, 1, "ng-container", 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ant-badge-status-dot ant-badge-status-", ctx_r0.nzStatus || ctx_r0.presetColor, "");
    ɵɵstyleProp("background", !ctx_r0.presetColor && ctx_r0.nzColor);
    ɵɵproperty("ngStyle", ctx_r0.nzStyle);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzText);
  }
}
function NzBadgeComponent_ng_container_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-badge-sup", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("nzOffset", ctx_r0.nzOffset)("nzSize", ctx_r0.nzSize)("nzTitle", ctx_r0.nzTitle)("nzStyle", ctx_r0.nzStyle)("nzDot", ctx_r0.nzDot)("nzOverflowCount", ctx_r0.nzOverflowCount)("disableAnimation", !!(ctx_r0.nzStandalone || ctx_r0.nzStatus || ctx_r0.nzColor || (ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)))("nzCount", ctx_r0.nzCount)("noAnimation", !!(ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation));
  }
}
function NzBadgeComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzBadgeComponent_ng_container_2_Conditional_1_Template, 1, 9, "nz-badge-sup", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.showSup ? 1 : -1);
  }
}
function NzRibbonComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.nzText);
  }
}
var NzBadgeSupComponent = class _NzBadgeSupComponent {
  constructor() {
    this.nzStyle = null;
    this.nzDot = false;
    this.nzOverflowCount = 99;
    this.disableAnimation = false;
    this.noAnimation = false;
    this.nzSize = "default";
    this.maxNumberArray = [];
    this.countArray = [];
    this.count = 0;
    this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  generateMaxNumberArray() {
    this.maxNumberArray = this.nzOverflowCount.toString().split("").map((value, index) => `${value}-${index}`);
  }
  ngOnInit() {
    this.generateMaxNumberArray();
  }
  ngOnChanges(changes) {
    const {
      nzOverflowCount,
      nzCount
    } = changes;
    if (nzCount && typeof nzCount.currentValue === "number") {
      this.count = Math.max(0, nzCount.currentValue);
      this.countArray = this.count.toString().split("").map((item) => +item);
    }
    if (nzOverflowCount) {
      this.generateMaxNumberArray();
    }
  }
  static {
    this.ɵfac = function NzBadgeSupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzBadgeSupComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzBadgeSupComponent,
      selectors: [["nz-badge-sup"]],
      hostAttrs: [1, "ant-scroll-number"],
      hostVars: 17,
      hostBindings: function NzBadgeSupComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@.disabled", ctx.disableAnimation)("@zoomBadgeMotion", void 0);
          ɵɵattribute("title", ctx.nzTitle === null ? "" : ctx.nzTitle || ctx.nzCount);
          ɵɵstyleMap(ctx.nzStyle);
          ɵɵstyleProp("right", ctx.nzOffset && ctx.nzOffset[0] ? -ctx.nzOffset[0] : null, "px")("margin-top", ctx.nzOffset && ctx.nzOffset[1] ? ctx.nzOffset[1] : null, "px");
          ɵɵclassProp("ant-badge-count", !ctx.nzDot)("ant-badge-count-sm", ctx.nzSize === "small")("ant-badge-dot", ctx.nzDot)("ant-badge-multiple-words", ctx.countArray.length >= 2);
        }
      },
      inputs: {
        nzOffset: "nzOffset",
        nzTitle: "nzTitle",
        nzStyle: "nzStyle",
        nzDot: "nzDot",
        nzOverflowCount: [2, "nzOverflowCount", "nzOverflowCount", numberAttribute],
        disableAnimation: "disableAnimation",
        nzCount: "nzCount",
        noAnimation: "noAnimation",
        nzSize: "nzSize"
      },
      exportAs: ["nzBadgeSup"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 1,
      consts: [[1, "ant-scroll-number-only", 3, "nzNoAnimation", "transform"], [1, "ant-scroll-number-only", 3, "nzNoAnimation"], [1, "ant-scroll-number-only-unit", 3, "current"], [1, "ant-scroll-number-only-unit"]],
      template: function NzBadgeSupComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzBadgeSupComponent_Conditional_0_Template, 2, 0)(1, NzBadgeSupComponent_Conditional_1_Template, 1, 1);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.count <= ctx.nzOverflowCount ? 0 : 1);
        }
      },
      dependencies: [NzNoAnimationDirective],
      encapsulation: 2,
      data: {
        animation: [zoomBadgeMotion]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBadgeSupComponent, [{
    type: Component,
    args: [{
      selector: "nz-badge-sup",
      exportAs: "nzBadgeSup",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [zoomBadgeMotion],
      standalone: true,
      imports: [NzNoAnimationDirective],
      template: `
    @if (count <= nzOverflowCount) {
      @for (n of maxNumberArray; track n; let i = $index) {
        <span
          [nzNoAnimation]="noAnimation"
          class="ant-scroll-number-only"
          [style.transform]="'translateY(' + -countArray[i] * 100 + '%)'"
        >
          @if (!nzDot && countArray[i] !== undefined) {
            @for (p of countSingleArray; track p) {
              <p class="ant-scroll-number-only-unit" [class.current]="p === countArray[i]">
                {{ p }}
              </p>
            }
          }
        </span>
      }
    } @else {
      {{ nzOverflowCount }}+
    }
  `,
      host: {
        class: "ant-scroll-number",
        "[@.disabled]": `disableAnimation`,
        "[@zoomBadgeMotion]": "",
        "[attr.title]": `nzTitle === null ? '' : nzTitle || nzCount`,
        "[style]": `nzStyle`,
        "[style.right.px]": `nzOffset && nzOffset[0] ? -nzOffset[0] : null`,
        "[style.margin-top.px]": `nzOffset && nzOffset[1] ? nzOffset[1] : null`,
        "[class.ant-badge-count]": `!nzDot`,
        "[class.ant-badge-count-sm]": `nzSize === 'small'`,
        "[class.ant-badge-dot]": `nzDot`,
        "[class.ant-badge-multiple-words]": `countArray.length >= 2`
      }
    }]
  }], () => [], {
    nzOffset: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzStyle: [{
      type: Input
    }],
    nzDot: [{
      type: Input
    }],
    nzOverflowCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    disableAnimation: [{
      type: Input
    }],
    nzCount: [{
      type: Input
    }],
    noAnimation: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var badgePresetColors = ["pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime"];
var NZ_CONFIG_MODULE_NAME = "badge";
var NzBadgeComponent = class _NzBadgeComponent {
  constructor(nzConfigService, renderer, cdr, elementRef, directionality) {
    this.nzConfigService = nzConfigService;
    this.renderer = renderer;
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.showSup = false;
    this.presetColor = null;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.nzShowZero = false;
    this.nzShowDot = true;
    this.nzStandalone = false;
    this.nzDot = false;
    this.nzOverflowCount = 99;
    this.nzColor = void 0;
    this.nzStyle = null;
    this.nzText = null;
    this.nzSize = "default";
    this.noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.prepareBadgeForRtl();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.prepareBadgeForRtl();
  }
  ngOnChanges(changes) {
    const {
      nzColor,
      nzShowDot,
      nzDot,
      nzCount,
      nzShowZero
    } = changes;
    if (nzColor) {
      this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
    }
    if (nzShowDot || nzDot || nzCount || nzShowZero) {
      this.showSup = this.nzShowDot && this.nzDot || typeof this.nzCount === "number" && this.nzCount > 0 || typeof this.nzCount === "number" && this.nzCount <= 0 && this.nzShowZero;
    }
  }
  prepareBadgeForRtl() {
    if (this.isRtlLayout) {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-badge-rtl");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-badge-rtl");
    }
  }
  get isRtlLayout() {
    return this.dir === "rtl";
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzBadgeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzBadgeComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzBadgeComponent,
      selectors: [["nz-badge"]],
      hostAttrs: [1, "ant-badge"],
      hostVars: 4,
      hostBindings: function NzBadgeComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-badge-status", ctx.nzStatus)("ant-badge-not-a-wrapper", !!(ctx.nzStandalone || ctx.nzStatus || ctx.nzColor));
        }
      },
      inputs: {
        nzShowZero: [2, "nzShowZero", "nzShowZero", booleanAttribute],
        nzShowDot: [2, "nzShowDot", "nzShowDot", booleanAttribute],
        nzStandalone: [2, "nzStandalone", "nzStandalone", booleanAttribute],
        nzDot: [2, "nzDot", "nzDot", booleanAttribute],
        nzOverflowCount: "nzOverflowCount",
        nzColor: "nzColor",
        nzStyle: "nzStyle",
        nzText: "nzText",
        nzTitle: "nzTitle",
        nzStatus: "nzStatus",
        nzCount: "nzCount",
        nzOffset: "nzOffset",
        nzSize: "nzSize"
      },
      exportAs: ["nzBadge"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 2,
      consts: [[4, "nzStringTemplateOutlet"], [3, "ngStyle"], [1, "ant-badge-status-text"], [3, "nzOffset", "nzSize", "nzTitle", "nzStyle", "nzDot", "nzOverflowCount", "disableAnimation", "nzCount", "noAnimation"]],
      template: function NzBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NzBadgeComponent_Conditional_0_Template, 3, 7);
          ɵɵprojection(1);
          ɵɵtemplate(2, NzBadgeComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.nzStatus || ctx.nzColor ? 0 : -1);
          ɵɵadvance(2);
          ɵɵproperty("nzStringTemplateOutlet", ctx.nzCount);
        }
      },
      dependencies: [NgStyle, NzBadgeSupComponent, NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      data: {
        animation: [zoomBadgeMotion]
      },
      changeDetection: 0
    });
  }
};
__decorate([WithConfig()], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
__decorate([WithConfig()], NzBadgeComponent.prototype, "nzColor", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBadgeComponent, [{
    type: Component,
    args: [{
      selector: "nz-badge",
      exportAs: "nzBadge",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [zoomBadgeMotion],
      standalone: true,
      imports: [NgStyle, NzBadgeSupComponent, NzOutletModule],
      template: `
    @if (nzStatus || nzColor) {
      <span
        class="ant-badge-status-dot ant-badge-status-{{ nzStatus || presetColor }}"
        [style.background]="!presetColor && nzColor"
        [ngStyle]="nzStyle"
      ></span>
      <span class="ant-badge-status-text">
        <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
      </span>
    }
    <ng-content />
    <ng-container *nzStringTemplateOutlet="nzCount">
      @if (showSup) {
        <nz-badge-sup
          [nzOffset]="nzOffset"
          [nzSize]="nzSize"
          [nzTitle]="nzTitle"
          [nzStyle]="nzStyle"
          [nzDot]="nzDot"
          [nzOverflowCount]="nzOverflowCount"
          [disableAnimation]="!!(nzStandalone || nzStatus || nzColor || noAnimation?.nzNoAnimation)"
          [nzCount]="nzCount"
          [noAnimation]="!!noAnimation?.nzNoAnimation"
        />
      }
    </ng-container>
  `,
      host: {
        class: "ant-badge",
        "[class.ant-badge-status]": "nzStatus",
        "[class.ant-badge-not-a-wrapper]": "!!(nzStandalone || nzStatus || nzColor)"
      }
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Directionality
  }], {
    nzShowZero: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowDot: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzStandalone: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDot: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOverflowCount: [{
      type: Input
    }],
    nzColor: [{
      type: Input
    }],
    nzStyle: [{
      type: Input
    }],
    nzText: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzCount: [{
      type: Input
    }],
    nzOffset: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var NzRibbonComponent = class _NzRibbonComponent {
  constructor() {
    this.nzPlacement = "end";
    this.nzText = null;
    this.presetColor = null;
  }
  ngOnChanges(changes) {
    const {
      nzColor
    } = changes;
    if (nzColor) {
      this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
    }
  }
  static {
    this.ɵfac = function NzRibbonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzRibbonComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzRibbonComponent,
      selectors: [["nz-ribbon"]],
      hostAttrs: [1, "ant-ribbon-wrapper"],
      inputs: {
        nzColor: "nzColor",
        nzPlacement: "nzPlacement",
        nzText: "nzText"
      },
      exportAs: ["nzRibbon"],
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 4,
      vars: 11,
      consts: [[1, "ant-ribbon"], [4, "nzStringTemplateOutlet"], [1, "ant-ribbon-corner"], [1, "ant-ribbon-text"]],
      template: function NzRibbonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵelementStart(1, "div", 0);
          ɵɵtemplate(2, NzRibbonComponent_ng_container_2_Template, 3, 1, "ng-container", 1);
          ɵɵelement(3, "div", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵclassMap(ctx.presetColor && "ant-ribbon-color-" + ctx.presetColor);
          ɵɵstyleProp("background-color", !ctx.presetColor && ctx.nzColor);
          ɵɵclassProp("ant-ribbon-placement-end", ctx.nzPlacement === "end")("ant-ribbon-placement-start", ctx.nzPlacement === "start");
          ɵɵadvance();
          ɵɵproperty("nzStringTemplateOutlet", ctx.nzText);
          ɵɵadvance();
          ɵɵstyleProp("color", !ctx.presetColor && ctx.nzColor);
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRibbonComponent, [{
    type: Component,
    args: [{
      selector: "nz-ribbon",
      exportAs: "nzRibbon",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NzOutletModule],
      template: `
    <ng-content></ng-content>
    <div
      class="ant-ribbon"
      [class]="presetColor && 'ant-ribbon-color-' + presetColor"
      [class.ant-ribbon-placement-end]="nzPlacement === 'end'"
      [class.ant-ribbon-placement-start]="nzPlacement === 'start'"
      [style.background-color]="!presetColor && nzColor"
    >
      <ng-container *nzStringTemplateOutlet="nzText">
        <span class="ant-ribbon-text">{{ nzText }}</span>
      </ng-container>
      <div class="ant-ribbon-corner" [style.color]="!presetColor && nzColor"></div>
    </div>
  `,
      host: {
        class: "ant-ribbon-wrapper"
      }
    }]
  }], () => [], {
    nzColor: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzText: [{
      type: Input
    }]
  });
})();
var NzBadgeModule = class _NzBadgeModule {
  static {
    this.ɵfac = function NzBadgeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzBadgeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzBadgeModule,
      imports: [NzBadgeComponent, NzRibbonComponent],
      exports: [NzBadgeComponent, NzRibbonComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzBadgeComponent, NzRibbonComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBadgeModule, [{
    type: NgModule,
    args: [{
      exports: [NzBadgeComponent, NzRibbonComponent],
      imports: [NzBadgeComponent, NzRibbonComponent]
    }]
  }], null, null);
})();
export {
  NzBadgeComponent,
  NzBadgeModule,
  NzRibbonComponent
};
//# sourceMappingURL=ng-zorro-antd_badge.js.map
