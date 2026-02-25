import {
  NzToolTipModule,
  NzTooltipDirective
} from "./chunk-PAMBDWCC.js";
import "./chunk-VK6IKY7V.js";
import "./chunk-PO6E6Y3J.js";
import "./chunk-AEUXLSPP.js";
import {
  DOWN_ARROW,
  LEFT_ARROW,
  RIGHT_ARROW,
  UP_ARROW
} from "./chunk-L6TDEO2O.js";
import "./chunk-566VGUUV.js";
import "./chunk-EDWEZ7BQ.js";
import "./chunk-JLQKZ77O.js";
import "./chunk-LO2Q6FY3.js";
import "./chunk-KBDOH27Z.js";
import "./chunk-EURECYGD.js";
import "./chunk-I4HQEHIX.js";
import "./chunk-U3FXVSFW.js";
import "./chunk-VJ6EFMY2.js";
import {
  Platform
} from "./chunk-UUWMY3QI.js";
import {
  Directionality
} from "./chunk-7DIMPZVY.js";
import "./chunk-FNQVWW6X.js";
import {
  arraysEqual,
  ensureNumberInRange,
  getElementOffset,
  getPercent,
  getPrecision,
  isNil,
  numberAttributeWithZeroFallback,
  silentEvent
} from "./chunk-CEGLWSSJ.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-EWEKPUBL.js";
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
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-IJAPRJ4V.js";
import {
  fromEvent,
  merge
} from "./chunk-TAJAR57M.js";
import "./chunk-IBPEAIWH.js";
import {
  Subject,
  distinctUntilChanged,
  filter,
  map,
  takeUntil,
  tap
} from "./chunk-LY5LHBYX.js";
import "./chunk-4JLIZ3DY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// ../node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-slider.mjs
var _c0 = ["handle"];
var _c1 = (a0) => ({
  $implicit: a0
});
var _forTrack0 = ($index, $item) => $item.value;
function NzSliderMarksComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const attr_r1 = ctx.$implicit;
    ɵɵclassProp("ant-slider-mark-active", attr_r1.active);
    ɵɵproperty("ngStyle", attr_r1.style)("innerHTML", attr_r1.label, ɵɵsanitizeHtml);
  }
}
function NzSliderStepComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    ɵɵclassProp("ant-slider-dot-active", step_r1.active);
    ɵɵproperty("ngStyle", step_r1.style);
  }
}
function NzSliderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-slider-step", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("vertical", ctx_r0.nzVertical)("min", ctx_r0.nzMin)("max", ctx_r0.nzMax)("lowerBound", ctx_r0.bounds.lower)("upperBound", ctx_r0.bounds.upper)("marksArray", ctx_r0.marksArray)("included", ctx_r0.nzIncluded)("reverse", ctx_r0.nzReverse);
  }
}
function NzSliderComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-slider-handle", 4);
    ɵɵlistener("focusin", function NzSliderComponent_For_4_Template_nz_slider_handle_focusin_0_listener() {
      const ɵ$index_8_r3 = ɵɵrestoreView(_r2).$index;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onHandleFocusIn(ɵ$index_8_r3));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const handle_r4 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("vertical", ctx_r0.nzVertical)("reverse", ctx_r0.nzReverse)("offset", handle_r4.offset)("value", handle_r4.value)("active", handle_r4.active)("tooltipFormatter", ctx_r0.nzTipFormatter)("tooltipVisible", ctx_r0.nzTooltipVisible)("tooltipPlacement", ctx_r0.nzTooltipPlacement)("dir", ctx_r0.dir);
  }
}
function NzSliderComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-slider-marks", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("vertical", ctx_r0.nzVertical)("min", ctx_r0.nzMin)("max", ctx_r0.nzMax)("lowerBound", ctx_r0.bounds.lower)("upperBound", ctx_r0.bounds.upper)("marksArray", ctx_r0.marksArray)("included", ctx_r0.nzIncluded)("reverse", ctx_r0.nzReverse);
  }
}
var NzSliderService = class _NzSliderService {
  constructor() {
    this.isDragging = false;
  }
  static {
    this.ɵfac = function NzSliderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSliderService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NzSliderService,
      factory: _NzSliderService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSliderService, [{
    type: Injectable
  }], null, null);
})();
var NzSliderHandleComponent = class _NzSliderHandleComponent {
  constructor(sliderService, cdr) {
    this.sliderService = sliderService;
    this.cdr = cdr;
    this.tooltipVisible = "default";
    this.active = false;
    this.dir = "ltr";
    this.style = {};
    this.enterHandle = () => {
      if (!this.sliderService.isDragging) {
        this.toggleTooltip(true);
        this.updateTooltipPosition();
        this.cdr.detectChanges();
      }
    };
    this.leaveHandle = () => {
      if (!this.sliderService.isDragging) {
        this.toggleTooltip(false);
        this.cdr.detectChanges();
      }
    };
  }
  ngOnChanges(changes) {
    const {
      offset,
      value,
      active,
      tooltipVisible,
      reverse,
      dir
    } = changes;
    if (offset || reverse || dir) {
      this.updateStyle();
    }
    if (value) {
      this.updateTooltipTitle();
      this.updateTooltipPosition();
    }
    if (active) {
      if (active.currentValue) {
        this.toggleTooltip(true);
      } else {
        this.toggleTooltip(false);
      }
    }
    if (tooltipVisible?.currentValue === "always") {
      Promise.resolve().then(() => this.toggleTooltip(true, true));
    }
  }
  focus() {
    this.handleEl?.nativeElement.focus();
  }
  toggleTooltip(show, force = false) {
    if (!force && (this.tooltipVisible !== "default" || !this.tooltip)) {
      return;
    }
    if (show) {
      this.tooltip?.show();
    } else {
      this.tooltip?.hide();
    }
  }
  updateTooltipTitle() {
    if (this.tooltipFormatter) {
      this.tooltipTitle = typeof this.tooltipFormatter === "function" ? this.tooltipFormatter(this.value) : this.tooltipFormatter;
    } else {
      this.tooltipTitle = `${this.value}`;
    }
  }
  updateTooltipPosition() {
    if (this.tooltip) {
      Promise.resolve().then(() => this.tooltip?.updatePosition());
    }
  }
  updateStyle() {
    const vertical = this.vertical;
    const reverse = this.reverse;
    const offset = this.offset;
    const positionStyle = vertical ? {
      [reverse ? "top" : "bottom"]: `${offset}%`,
      [reverse ? "bottom" : "top"]: "auto",
      transform: reverse ? null : `translateY(+50%)`
    } : __spreadProps(__spreadValues({}, this.getHorizontalStylePosition()), {
      transform: `translateX(${reverse ? this.dir === "rtl" ? "-" : "+" : this.dir === "rtl" ? "+" : "-"}50%)`
    });
    this.style = positionStyle;
    this.cdr.markForCheck();
  }
  getHorizontalStylePosition() {
    let left = this.reverse ? "auto" : `${this.offset}%`;
    let right = this.reverse ? `${this.offset}%` : "auto";
    if (this.dir === "rtl") {
      const tmp = left;
      left = right;
      right = tmp;
    }
    return {
      left,
      right
    };
  }
  static {
    this.ɵfac = function NzSliderHandleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSliderHandleComponent)(ɵɵdirectiveInject(NzSliderService), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzSliderHandleComponent,
      selectors: [["nz-slider-handle"]],
      viewQuery: function NzSliderHandleComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
          ɵɵviewQuery(NzTooltipDirective, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.handleEl = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltip = _t.first);
        }
      },
      hostBindings: function NzSliderHandleComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mouseenter", function NzSliderHandleComponent_mouseenter_HostBindingHandler() {
            return ctx.enterHandle();
          })("mouseleave", function NzSliderHandleComponent_mouseleave_HostBindingHandler() {
            return ctx.leaveHandle();
          });
        }
      },
      inputs: {
        vertical: [2, "vertical", "vertical", booleanAttribute],
        reverse: [2, "reverse", "reverse", booleanAttribute],
        offset: [2, "offset", "offset", numberAttributeWithZeroFallback],
        value: [2, "value", "value", numberAttributeWithZeroFallback],
        tooltipVisible: "tooltipVisible",
        tooltipPlacement: "tooltipPlacement",
        tooltipFormatter: "tooltipFormatter",
        active: [2, "active", "active", booleanAttribute],
        dir: "dir"
      },
      exportAs: ["nzSliderHandle"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 7,
      consts: [["handle", ""], ["tabindex", "0", "nz-tooltip", "", 1, "ant-slider-handle", 3, "ngStyle", "nzTooltipTitle", "nzTooltipTitleContext", "nzTooltipTrigger", "nzTooltipPlacement"]],
      template: function NzSliderHandleComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 1, 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngStyle", ctx.style)("nzTooltipTitle", ctx.tooltipFormatter === null || ctx.tooltipVisible === "never" ? null : ctx.tooltipTitle)("nzTooltipTitleContext", ɵɵpureFunction1(5, _c1, ctx.value))("nzTooltipTrigger", null)("nzTooltipPlacement", ctx.tooltipPlacement);
        }
      },
      dependencies: [NzToolTipModule, NzTooltipDirective, NgStyle],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSliderHandleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-slider-handle",
      exportAs: "nzSliderHandle",
      preserveWhitespaces: false,
      template: `
    <div
      #handle
      class="ant-slider-handle"
      tabindex="0"
      nz-tooltip
      [ngStyle]="style"
      [nzTooltipTitle]="tooltipFormatter === null || tooltipVisible === 'never' ? null : tooltipTitle"
      [nzTooltipTitleContext]="{ $implicit: value }"
      [nzTooltipTrigger]="null"
      [nzTooltipPlacement]="tooltipPlacement"
    ></div>
  `,
      host: {
        "(mouseenter)": "enterHandle()",
        "(mouseleave)": "leaveHandle()"
      },
      imports: [NzToolTipModule, NgStyle],
      standalone: true
    }]
  }], () => [{
    type: NzSliderService
  }, {
    type: ChangeDetectorRef
  }], {
    handleEl: [{
      type: ViewChild,
      args: ["handle", {
        static: false
      }]
    }],
    tooltip: [{
      type: ViewChild,
      args: [NzTooltipDirective, {
        static: false
      }]
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    reverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    offset: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    tooltipVisible: [{
      type: Input
    }],
    tooltipPlacement: [{
      type: Input
    }],
    tooltipFormatter: [{
      type: Input
    }],
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var NzSliderMarksComponent = class _NzSliderMarksComponent {
  constructor() {
    this.lowerBound = null;
    this.upperBound = null;
    this.marksArray = [];
    this.vertical = false;
    this.included = false;
    this.marks = [];
  }
  ngOnChanges(changes) {
    const {
      marksArray,
      lowerBound,
      upperBound,
      reverse
    } = changes;
    if (marksArray || reverse) {
      this.buildMarks();
    }
    if (marksArray || lowerBound || upperBound || reverse) {
      this.togglePointActive();
    }
  }
  buildMarks() {
    const range = this.max - this.min;
    this.marks = this.marksArray.map((mark) => {
      const {
        value,
        offset,
        config
      } = mark;
      const style = this.getMarkStyles(value, range, config);
      const label = isConfigObject(config) ? config.label : config;
      return {
        label,
        offset,
        style,
        value,
        config,
        active: false
      };
    });
  }
  getMarkStyles(value, range, config) {
    let style;
    const markValue = this.reverse ? this.max + this.min - value : value;
    if (this.vertical) {
      style = {
        marginBottom: "-50%",
        bottom: `${(markValue - this.min) / range * 100}%`
      };
    } else {
      style = {
        transform: `translate3d(-50%, 0, 0)`,
        left: `${(markValue - this.min) / range * 100}%`
      };
    }
    if (isConfigObject(config) && config.style) {
      style = __spreadValues(__spreadValues({}, style), config.style);
    }
    return style;
  }
  togglePointActive() {
    if (this.marks && this.lowerBound !== null && this.upperBound !== null) {
      this.marks.forEach((mark) => {
        const value = mark.value;
        const isActive = !this.included && value === this.upperBound || this.included && value <= this.upperBound && value >= this.lowerBound;
        mark.active = isActive;
      });
    }
  }
  static {
    this.ɵfac = function NzSliderMarksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSliderMarksComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzSliderMarksComponent,
      selectors: [["nz-slider-marks"]],
      hostAttrs: [1, "ant-slider-mark"],
      inputs: {
        lowerBound: "lowerBound",
        upperBound: "upperBound",
        marksArray: "marksArray",
        min: [2, "min", "min", numberAttribute],
        max: [2, "max", "max", numberAttribute],
        vertical: [2, "vertical", "vertical", booleanAttribute],
        included: [2, "included", "included", booleanAttribute],
        reverse: [2, "reverse", "reverse", booleanAttribute]
      },
      exportAs: ["nzSliderMarks"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 0,
      consts: [[1, "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]],
      template: function NzSliderMarksComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, NzSliderMarksComponent_For_1_Template, 1, 4, "span", 0, _forTrack0);
        }
        if (rf & 2) {
          ɵɵrepeater(ctx.marks);
        }
      },
      dependencies: [NgStyle],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSliderMarksComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      selector: "nz-slider-marks",
      exportAs: "nzSliderMarks",
      template: `
    @for (attr of marks; track attr.value) {
      <span
        class="ant-slider-mark-text"
        [class.ant-slider-mark-active]="attr.active"
        [ngStyle]="attr.style!"
        [innerHTML]="attr.label"
      ></span>
    }
  `,
      imports: [NgStyle],
      standalone: true,
      host: {
        class: "ant-slider-mark"
      }
    }]
  }], null, {
    lowerBound: [{
      type: Input
    }],
    upperBound: [{
      type: Input
    }],
    marksArray: [{
      type: Input
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    included: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    reverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function isConfigObject(config) {
  return typeof config !== "string";
}
var NzSliderStepComponent = class _NzSliderStepComponent {
  constructor() {
    this.lowerBound = null;
    this.upperBound = null;
    this.marksArray = [];
    this.vertical = false;
    this.included = false;
    this.steps = [];
  }
  ngOnChanges(changes) {
    const {
      marksArray,
      lowerBound,
      upperBound,
      reverse
    } = changes;
    if (marksArray || reverse) {
      this.buildSteps();
    }
    if (marksArray || lowerBound || upperBound || reverse) {
      this.togglePointActive();
    }
  }
  buildSteps() {
    const orient = this.vertical ? "bottom" : "left";
    this.steps = this.marksArray.map((mark) => {
      const {
        value,
        config
      } = mark;
      let offset = mark.offset;
      const range = this.max - this.min;
      if (this.reverse) {
        offset = (this.max - value) / range * 100;
      }
      return {
        value,
        offset,
        config,
        active: false,
        style: {
          [orient]: `${offset}%`,
          transform: this.vertical ? "translateY(50%)" : "translateX(-50%)"
        }
      };
    });
  }
  togglePointActive() {
    if (this.steps && this.lowerBound !== null && this.upperBound !== null) {
      this.steps.forEach((step) => {
        const value = step.value;
        const isActive = !this.included && value === this.upperBound || this.included && value <= this.upperBound && value >= this.lowerBound;
        step.active = isActive;
      });
    }
  }
  static {
    this.ɵfac = function NzSliderStepComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSliderStepComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzSliderStepComponent,
      selectors: [["nz-slider-step"]],
      hostAttrs: [1, "ant-slider-step"],
      inputs: {
        lowerBound: "lowerBound",
        upperBound: "upperBound",
        marksArray: "marksArray",
        min: [2, "min", "min", numberAttribute],
        max: [2, "max", "max", numberAttribute],
        vertical: [2, "vertical", "vertical", booleanAttribute],
        included: [2, "included", "included", booleanAttribute],
        reverse: [2, "reverse", "reverse", booleanAttribute]
      },
      exportAs: ["nzSliderStep"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 0,
      consts: [[1, "ant-slider-dot", 3, "ant-slider-dot-active", "ngStyle"], [1, "ant-slider-dot", 3, "ngStyle"]],
      template: function NzSliderStepComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, NzSliderStepComponent_For_1_Template, 1, 3, "span", 0, _forTrack0);
        }
        if (rf & 2) {
          ɵɵrepeater(ctx.steps);
        }
      },
      dependencies: [NgStyle],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSliderStepComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-slider-step",
      exportAs: "nzSliderStep",
      preserveWhitespaces: false,
      template: `
    @for (step of steps; track step.value) {
      <span class="ant-slider-dot" [class.ant-slider-dot-active]="step.active" [ngStyle]="step.style!"></span>
    }
  `,
      imports: [NgStyle],
      standalone: true,
      host: {
        class: "ant-slider-step"
      }
    }]
  }], null, {
    lowerBound: [{
      type: Input
    }],
    upperBound: [{
      type: Input
    }],
    marksArray: [{
      type: Input
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    included: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    reverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzSliderTrackComponent = class _NzSliderTrackComponent {
  constructor() {
    this.offset = 0;
    this.reverse = false;
    this.dir = "ltr";
    this.length = 0;
    this.vertical = false;
    this.included = false;
    this.style = {};
  }
  ngOnChanges() {
    const vertical = this.vertical;
    const reverse = this.reverse;
    const visibility = this.included ? "visible" : "hidden";
    const offset = this.offset;
    const length = this.length;
    const positonStyle = vertical ? {
      [reverse ? "top" : "bottom"]: `${offset}%`,
      [reverse ? "bottom" : "top"]: "auto",
      height: `${length}%`,
      visibility
    } : __spreadProps(__spreadValues({}, this.getHorizontalStylePosition()), {
      width: `${length}%`,
      visibility
    });
    this.style = positonStyle;
  }
  getHorizontalStylePosition() {
    let left = this.reverse ? "auto" : `${this.offset}%`;
    let right = this.reverse ? `${this.offset}%` : "auto";
    if (this.dir === "rtl") {
      const tmp = left;
      left = right;
      right = tmp;
    }
    return {
      left,
      right
    };
  }
  static {
    this.ɵfac = function NzSliderTrackComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSliderTrackComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzSliderTrackComponent,
      selectors: [["nz-slider-track"]],
      inputs: {
        offset: [2, "offset", "offset", numberAttribute],
        reverse: [2, "reverse", "reverse", booleanAttribute],
        dir: "dir",
        length: [2, "length", "length", numberAttribute],
        vertical: [2, "vertical", "vertical", booleanAttribute],
        included: [2, "included", "included", booleanAttribute]
      },
      exportAs: ["nzSliderTrack"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [[1, "ant-slider-track", 3, "ngStyle"]],
      template: function NzSliderTrackComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngStyle", ctx.style);
        }
      },
      dependencies: [NgStyle],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSliderTrackComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-slider-track",
      exportAs: "nzSliderTrack",
      preserveWhitespaces: false,
      template: ` <div class="ant-slider-track" [ngStyle]="style"></div> `,
      imports: [NgStyle],
      standalone: true
    }]
  }], null, {
    offset: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    reverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dir: [{
      type: Input
    }],
    length: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    included: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzSliderComponent = class _NzSliderComponent {
  constructor(slider, sliderService, cdr, platform, directionality) {
    this.slider = slider;
    this.sliderService = sliderService;
    this.cdr = cdr;
    this.platform = platform;
    this.directionality = directionality;
    this.nzDisabled = false;
    this.nzDots = false;
    this.nzIncluded = true;
    this.nzRange = false;
    this.nzVertical = false;
    this.nzReverse = false;
    this.nzMarks = null;
    this.nzMax = 100;
    this.nzMin = 0;
    this.nzStep = 1;
    this.nzTooltipVisible = "default";
    this.nzTooltipPlacement = "top";
    this.nzOnAfterChange = new EventEmitter();
    this.value = null;
    this.cacheSliderStart = null;
    this.cacheSliderLength = null;
    this.activeValueIndex = void 0;
    this.track = {
      offset: null,
      length: null
    };
    this.handles = [];
    this.marksArray = null;
    this.bounds = {
      lower: null,
      upper: null
    };
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.isNzDisableFirstChange = true;
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
      this.updateTrackAndHandles();
      this.onValueChange(this.getValue(true));
    });
    this.handles = generateHandlers(this.nzRange ? 2 : 1);
    this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
    this.bindDraggingHandlers();
    this.toggleDragDisabled(this.nzDisabled);
    if (this.getValue() === null) {
      this.setValue(this.formatValue(null));
    }
  }
  ngOnChanges(changes) {
    const {
      nzDisabled,
      nzMarks,
      nzRange
    } = changes;
    if (nzDisabled && !nzDisabled.firstChange) {
      this.toggleDragDisabled(nzDisabled.currentValue);
    } else if (nzMarks && !nzMarks.firstChange) {
      this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
    } else if (nzRange && !nzRange.firstChange) {
      this.handles = generateHandlers(nzRange.currentValue ? 2 : 1);
      this.setValue(this.formatValue(null));
    }
  }
  ngOnDestroy() {
    this.unsubscribeDrag();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  writeValue(val) {
    this.setValue(val, true);
  }
  onValueChange(_value) {
  }
  onTouched() {
  }
  registerOnChange(fn) {
    this.onValueChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.isNzDisableFirstChange = false;
    this.toggleDragDisabled(this.nzDisabled);
    this.cdr.markForCheck();
  }
  /**
   * Event handler is only triggered when a slider handler is focused.
   */
  onKeyDown(e) {
    if (this.nzDisabled) {
      return;
    }
    const code = e.keyCode;
    const isIncrease = code === RIGHT_ARROW || code === UP_ARROW;
    const isDecrease = code === LEFT_ARROW || code === DOWN_ARROW;
    if (!(isIncrease || isDecrease)) {
      return;
    }
    e.preventDefault();
    let step = (isDecrease ? -this.nzStep : this.nzStep) * (this.nzReverse ? -1 : 1);
    step = this.dir === "rtl" ? step * -1 : step;
    const newVal = this.nzRange ? this.value[this.activeValueIndex] + step : this.value + step;
    this.setActiveValue(ensureNumberInRange(newVal, this.nzMin, this.nzMax));
    this.nzOnAfterChange.emit(this.getValue(true));
  }
  onHandleFocusIn(index) {
    this.activeValueIndex = index;
  }
  setValue(value, isWriteValue = false) {
    if (isWriteValue) {
      this.value = this.formatValue(value);
      this.updateTrackAndHandles();
    } else if (!valuesEqual(this.value, value)) {
      this.value = value;
      this.updateTrackAndHandles();
      this.onValueChange(this.getValue(true));
    }
  }
  getValue(cloneAndSort = false) {
    if (cloneAndSort && this.value && isValueRange(this.value)) {
      return [...this.value].sort((a, b) => a - b);
    }
    return this.value;
  }
  /**
   * Clone & sort current value and convert them to offsets, then return the new one.
   */
  getValueToOffset(value) {
    let normalizedValue = value;
    if (typeof normalizedValue === "undefined") {
      normalizedValue = this.getValue(true);
    }
    return isValueRange(normalizedValue) ? normalizedValue.map((val) => this.valueToOffset(val)) : this.valueToOffset(normalizedValue);
  }
  /**
   * Find the closest value to be activated.
   */
  setActiveValueIndex(pointerValue) {
    const value = this.getValue();
    if (isValueRange(value)) {
      let minimal = null;
      let gap;
      let activeIndex = -1;
      value.forEach((val, index) => {
        gap = Math.abs(pointerValue - val);
        if (minimal === null || gap < minimal) {
          minimal = gap;
          activeIndex = index;
        }
      });
      this.activeValueIndex = activeIndex;
      this.handlerComponents.toArray()[activeIndex].focus();
    } else {
      this.handlerComponents.toArray()[0].focus();
    }
  }
  setActiveValue(pointerValue) {
    if (isValueRange(this.value)) {
      const newValue = [...this.value];
      newValue[this.activeValueIndex] = pointerValue;
      this.setValue(newValue);
    } else {
      this.setValue(pointerValue);
    }
  }
  /**
   * Update track and handles' position and length.
   */
  updateTrackAndHandles() {
    const value = this.getValue();
    const offset = this.getValueToOffset(value);
    const valueSorted = this.getValue(true);
    const offsetSorted = this.getValueToOffset(valueSorted);
    const boundParts = isValueRange(valueSorted) ? valueSorted : [0, valueSorted];
    const trackParts = isValueRange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
    this.handles.forEach((handle, index) => {
      handle.offset = isValueRange(offset) ? offset[index] : offset;
      handle.value = isValueRange(value) ? value[index] : value || 0;
    });
    [this.bounds.lower, this.bounds.upper] = boundParts;
    [this.track.offset, this.track.length] = trackParts;
    this.cdr.markForCheck();
  }
  onDragStart(value) {
    this.toggleDragMoving(true);
    this.cacheSliderProperty();
    this.setActiveValueIndex(this.getLogicalValue(value));
    this.setActiveValue(this.getLogicalValue(value));
    this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
  }
  onDragMove(value) {
    this.setActiveValue(this.getLogicalValue(value));
    this.cdr.markForCheck();
  }
  getLogicalValue(value) {
    if (this.nzReverse) {
      if (!this.nzVertical && this.dir === "rtl") {
        return value;
      }
      return this.nzMax - value + this.nzMin;
    }
    if (!this.nzVertical && this.dir === "rtl") {
      return this.nzMax - value + this.nzMin;
    }
    return value;
  }
  onDragEnd() {
    this.nzOnAfterChange.emit(this.getValue(true));
    this.toggleDragMoving(false);
    this.cacheSliderProperty(true);
    this.hideAllHandleTooltip();
    this.cdr.markForCheck();
  }
  /**
   * Create user interactions handles.
   */
  bindDraggingHandlers() {
    if (!this.platform.isBrowser) {
      return;
    }
    const pluckFunc = (keys) => (event) => keys.reduce((acc, key) => acc[key] || acc, event);
    const sliderDOM = this.slider.nativeElement;
    const orientField = this.nzVertical ? "pageY" : "pageX";
    const mouse = {
      start: "mousedown",
      move: "mousemove",
      end: "mouseup",
      pluckKey: [orientField]
    };
    const touch = {
      start: "touchstart",
      move: "touchmove",
      end: "touchend",
      pluckKey: ["touches", "0", orientField],
      filter: (e) => e instanceof TouchEvent
    };
    [mouse, touch].forEach((source) => {
      const {
        start,
        move,
        end,
        pluckKey,
        filter: filterFunc = () => true
      } = source;
      source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(silentEvent), map(pluckFunc(pluckKey)), map((position) => this.findClosestValue(position)));
      source.end$ = fromEvent(document, end);
      source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(silentEvent), map(pluckFunc(pluckKey)), distinctUntilChanged(), map((position) => this.findClosestValue(position)), distinctUntilChanged(), takeUntil(source.end$));
    });
    this.dragStart$ = merge(mouse.startPlucked$, touch.startPlucked$);
    this.dragMove$ = merge(mouse.moveResolved$, touch.moveResolved$);
    this.dragEnd$ = merge(mouse.end$, touch.end$);
  }
  subscribeDrag(periods = ["start", "move", "end"]) {
    if (periods.indexOf("start") !== -1 && this.dragStart$ && !this.dragStart_) {
      this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
    }
    if (periods.indexOf("move") !== -1 && this.dragMove$ && !this.dragMove_) {
      this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
    }
    if (periods.indexOf("end") !== -1 && this.dragEnd$ && !this.dragEnd_) {
      this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
    }
  }
  unsubscribeDrag(periods = ["start", "move", "end"]) {
    if (periods.indexOf("start") !== -1 && this.dragStart_) {
      this.dragStart_.unsubscribe();
      this.dragStart_ = null;
    }
    if (periods.indexOf("move") !== -1 && this.dragMove_) {
      this.dragMove_.unsubscribe();
      this.dragMove_ = null;
    }
    if (periods.indexOf("end") !== -1 && this.dragEnd_) {
      this.dragEnd_.unsubscribe();
      this.dragEnd_ = null;
    }
  }
  toggleDragMoving(movable) {
    const periods = ["move", "end"];
    if (movable) {
      this.sliderService.isDragging = true;
      this.subscribeDrag(periods);
    } else {
      this.sliderService.isDragging = false;
      this.unsubscribeDrag(periods);
    }
  }
  toggleDragDisabled(disabled) {
    if (disabled) {
      this.unsubscribeDrag();
    } else {
      this.subscribeDrag(["start"]);
    }
  }
  findClosestValue(position) {
    const sliderStart = this.getSliderStartPosition();
    const sliderLength = this.getSliderLength();
    const ratio = ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
    const val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
    const points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat).sort((a, b) => a - b);
    if (this.nzStep !== 0 && !this.nzDots) {
      const closestOne = Math.round(val / this.nzStep) * this.nzStep;
      points.push(closestOne);
    }
    const gaps = points.map((point) => Math.abs(val - point));
    const closest = points[gaps.indexOf(Math.min(...gaps))];
    return this.nzStep === 0 ? closest : parseFloat(closest.toFixed(getPrecision(this.nzStep)));
  }
  valueToOffset(value) {
    return getPercent(this.nzMin, this.nzMax, value);
  }
  getSliderStartPosition() {
    if (this.cacheSliderStart !== null) {
      return this.cacheSliderStart;
    }
    const offset = getElementOffset(this.slider.nativeElement);
    return this.nzVertical ? offset.top : offset.left;
  }
  getSliderLength() {
    if (this.cacheSliderLength !== null) {
      return this.cacheSliderLength;
    }
    const sliderDOM = this.slider.nativeElement;
    return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
  }
  /**
   * Cache DOM layout/reflow operations for performance (may not necessary?)
   */
  cacheSliderProperty(remove = false) {
    this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
    this.cacheSliderLength = remove ? null : this.getSliderLength();
  }
  formatValue(value) {
    if (isNil(value)) {
      return this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
    } else if (assertValueValid(value, this.nzRange)) {
      return isValueRange(value) ? value.map((val) => ensureNumberInRange(val, this.nzMin, this.nzMax)) : ensureNumberInRange(value, this.nzMin, this.nzMax);
    } else {
      return this.nzDefaultValue ? this.nzDefaultValue : this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
    }
  }
  /**
   * Show one handle's tooltip and hide others'.
   */
  showHandleTooltip(handleIndex = 0) {
    this.handles.forEach((handle, index) => {
      handle.active = index === handleIndex;
    });
  }
  hideAllHandleTooltip() {
    this.handles.forEach((handle) => handle.active = false);
  }
  generateMarkItems(marks) {
    const marksArray = [];
    for (const key in marks) {
      if (marks.hasOwnProperty(key)) {
        const mark = marks[key];
        const val = typeof key === "number" ? key : parseFloat(key);
        if (val >= this.nzMin && val <= this.nzMax) {
          marksArray.push({
            value: val,
            offset: this.valueToOffset(val),
            config: mark
          });
        }
      }
    }
    return marksArray.length ? marksArray : null;
  }
  static {
    this.ɵfac = function NzSliderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSliderComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzSliderService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzSliderComponent,
      selectors: [["nz-slider"]],
      viewQuery: function NzSliderComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(NzSliderHandleComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.handlerComponents = _t);
        }
      },
      hostAttrs: [1, "ant-slider"],
      hostVars: 8,
      hostBindings: function NzSliderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function NzSliderComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("ant-slider-rtl", ctx.dir === "rtl")("ant-slider-disabled", ctx.nzDisabled)("ant-slider-vertical", ctx.nzVertical)("ant-slider-with-marks", ctx.marksArray);
        }
      },
      inputs: {
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzDots: [2, "nzDots", "nzDots", booleanAttribute],
        nzIncluded: [2, "nzIncluded", "nzIncluded", booleanAttribute],
        nzRange: [2, "nzRange", "nzRange", booleanAttribute],
        nzVertical: [2, "nzVertical", "nzVertical", booleanAttribute],
        nzReverse: [2, "nzReverse", "nzReverse", booleanAttribute],
        nzDefaultValue: "nzDefaultValue",
        nzMarks: "nzMarks",
        nzMax: [2, "nzMax", "nzMax", numberAttribute],
        nzMin: [2, "nzMin", "nzMin", numberAttribute],
        nzStep: [2, "nzStep", "nzStep", numberAttributeWithZeroFallback],
        nzTooltipVisible: "nzTooltipVisible",
        nzTooltipPlacement: "nzTooltipPlacement",
        nzTipFormatter: "nzTipFormatter"
      },
      outputs: {
        nzOnAfterChange: "nzOnAfterChange"
      },
      exportAs: ["nzSlider"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NzSliderComponent),
        multi: true
      }, NzSliderService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 6,
      vars: 8,
      consts: [[1, "ant-slider-rail"], [3, "vertical", "included", "offset", "length", "reverse", "dir"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", "reverse"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dir"], [3, "focusin", "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dir"]],
      template: function NzSliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 0)(1, "nz-slider-track", 1);
          ɵɵtemplate(2, NzSliderComponent_Conditional_2_Template, 1, 8, "nz-slider-step", 2);
          ɵɵrepeaterCreate(3, NzSliderComponent_For_4_Template, 1, 9, "nz-slider-handle", 3, _forTrack0);
          ɵɵtemplate(5, NzSliderComponent_Conditional_5_Template, 1, 8, "nz-slider-marks", 2);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("vertical", ctx.nzVertical)("included", ctx.nzIncluded)("offset", ctx.track.offset)("length", ctx.track.length)("reverse", ctx.nzReverse)("dir", ctx.dir);
          ɵɵadvance();
          ɵɵconditional(ctx.marksArray ? 2 : -1);
          ɵɵadvance();
          ɵɵrepeater(ctx.handles);
          ɵɵadvance(2);
          ɵɵconditional(ctx.marksArray ? 5 : -1);
        }
      },
      dependencies: [NzSliderTrackComponent, NzSliderStepComponent, NzSliderHandleComponent, NzSliderMarksComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSliderComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-slider",
      exportAs: "nzSlider",
      preserveWhitespaces: false,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSliderComponent),
        multi: true
      }, NzSliderService],
      template: `
    <div class="ant-slider-rail"></div>
    <nz-slider-track
      [vertical]="nzVertical"
      [included]="nzIncluded"
      [offset]="track.offset!"
      [length]="track.length!"
      [reverse]="nzReverse"
      [dir]="dir"
    ></nz-slider-track>
    @if (marksArray) {
      <nz-slider-step
        [vertical]="nzVertical"
        [min]="nzMin"
        [max]="nzMax"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
        [reverse]="nzReverse"
      ></nz-slider-step>
    }
    @for (handle of handles; track handle.value; let handleIndex = $index) {
      <nz-slider-handle
        [vertical]="nzVertical"
        [reverse]="nzReverse"
        [offset]="handle.offset!"
        [value]="handle.value!"
        [active]="handle.active"
        [tooltipFormatter]="nzTipFormatter"
        [tooltipVisible]="nzTooltipVisible"
        [tooltipPlacement]="nzTooltipPlacement"
        [dir]="dir"
        (focusin)="onHandleFocusIn(handleIndex)"
      ></nz-slider-handle>
    }
    @if (marksArray) {
      <nz-slider-marks
        [vertical]="nzVertical"
        [min]="nzMin"
        [max]="nzMax"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
        [reverse]="nzReverse"
      ></nz-slider-marks>
    }
  `,
      imports: [NzSliderTrackComponent, NzSliderStepComponent, NzSliderHandleComponent, NzSliderMarksComponent],
      standalone: true,
      host: {
        class: "ant-slider",
        "[class.ant-slider-rtl]": `dir === 'rtl'`,
        "[class.ant-slider-disabled]": "nzDisabled",
        "[class.ant-slider-vertical]": "nzVertical",
        "[class.ant-slider-with-marks]": "marksArray",
        "(keydown)": "onKeyDown($event)"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NzSliderService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Platform
  }, {
    type: Directionality
  }], {
    handlerComponents: [{
      type: ViewChildren,
      args: [NzSliderHandleComponent]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDots: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzIncluded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzRange: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzVertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzReverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDefaultValue: [{
      type: Input
    }],
    nzMarks: [{
      type: Input
    }],
    nzMax: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzMin: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzStep: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzTooltipVisible: [{
      type: Input
    }],
    nzTooltipPlacement: [{
      type: Input
    }],
    nzTipFormatter: [{
      type: Input
    }],
    nzOnAfterChange: [{
      type: Output
    }]
  });
})();
function getValueTypeNotMatchError() {
  return new Error(`The "nzRange" can't match the "ngModel"'s type, please check these properties: "nzRange", "ngModel", "nzDefaultValue".`);
}
function isValueRange(value) {
  if (value instanceof Array) {
    return value.length === 2;
  } else {
    return false;
  }
}
function generateHandlers(amount) {
  return Array(amount).fill(0).map(() => ({
    offset: null,
    value: null,
    active: false
  }));
}
function assertValueValid(value, isRange) {
  if (!isValueRange(value) && isNaN(value) || isValueRange(value) && value.some((v) => isNaN(v))) {
    return false;
  }
  return assertValueTypeMatch(value, isRange);
}
function assertValueTypeMatch(value, isRange = false) {
  if (isValueRange(value) !== isRange) {
    throw getValueTypeNotMatchError();
  }
  return true;
}
function valuesEqual(valA, valB) {
  if (typeof valA !== typeof valB) {
    return false;
  }
  return isValueRange(valA) && isValueRange(valB) ? arraysEqual(valA, valB) : valA === valB;
}
var NzSliderModule = class _NzSliderModule {
  static {
    this.ɵfac = function NzSliderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSliderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzSliderModule,
      imports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
      exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzSliderComponent, NzSliderHandleComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSliderModule, [{
    type: NgModule,
    args: [{
      imports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
      exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent]
    }]
  }], null, null);
})();
var NzMarks = class {
};
export {
  NzMarks,
  NzSliderComponent,
  NzSliderModule,
  NzSliderHandleComponent as ɵNzSliderHandleComponent,
  NzSliderMarksComponent as ɵNzSliderMarksComponent,
  NzSliderService as ɵNzSliderService,
  NzSliderStepComponent as ɵNzSliderStepComponent,
  NzSliderTrackComponent as ɵNzSliderTrackComponent
};
//# sourceMappingURL=ng-zorro-antd_slider.js.map
