import {
  thumbMotion
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
import "./chunk-R6IJAHEZ.js";
import {
  Directionality
} from "./chunk-CGJQYKLH.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-XRYSGYAF.js";
import "./chunk-WKKYJIDN.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-RQXZNNU5.js";
import "./chunk-HHQ7MW3F.js";
import "./chunk-FADEYHXQ.js";
import {
  NgClass
} from "./chunk-VFHRQ4OU.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChildren,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-ZREUISJD.js";
import "./chunk-IC62NIWK.js";
import "./chunk-ISM5WLAM.js";
import {
  Subject,
  __decorate,
  takeUntil
} from "./chunk-ZZ67MR3E.js";
import "./chunk-TXDUYLVM.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-segmented.mjs
var _c0 = ["itemLabels"];
var _c1 = () => ({
  "ant-segmented-thumb": true,
  "ant-segmented-thumb-motion": true
});
var _c2 = (a0, a1) => ({
  "ant-segmented-item": true,
  "ant-segmented-item-selected": a0,
  "ant-segmented-item-disabled": a1
});
var _c3 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function NzSegmentedComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵlistener("@thumbMotion.done", function NzSegmentedComponent_Conditional_1_Template_div_animation_thumbMotion_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleThumbAnimationDone($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction0(2, _c1))("@thumbMotion", ctx_r1.animationState);
  }
}
function NzSegmentedComponent_For_3_Conditional_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r5.label, " ");
  }
}
function NzSegmentedComponent_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "span", 6);
    ɵɵelementEnd();
    ɵɵelementStart(2, "span");
    ɵɵtemplate(3, NzSegmentedComponent_For_3_Conditional_4_ng_container_3_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const item_r5 = ctx_r6.$implicit;
    const ɵ$index_6_r6 = ctx_r6.$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzType", item_r5.icon);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", item_r5.useTemplate && ctx_r1.nzLabelTemplate)("nzStringTemplateOutletContext", ɵɵpureFunction2(3, _c3, item_r5, ɵ$index_6_r6));
  }
}
function NzSegmentedComponent_For_3_Conditional_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r5.label, " ");
  }
}
function NzSegmentedComponent_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzSegmentedComponent_For_3_Conditional_5_ng_container_0_Template, 2, 1, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const item_r5 = ctx_r6.$implicit;
    const ɵ$index_6_r6 = ctx_r6.$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzStringTemplateOutlet", item_r5.useTemplate && ctx_r1.nzLabelTemplate)("nzStringTemplateOutletContext", ɵɵpureFunction2(2, _c3, item_r5, ɵ$index_6_r6));
  }
}
function NzSegmentedComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 2, 0);
    ɵɵelement(2, "input", 3);
    ɵɵelementStart(3, "div", 4);
    ɵɵlistener("click", function NzSegmentedComponent_For_3_Template_div_click_3_listener() {
      const ctx_r3 = ɵɵrestoreView(_r3);
      const item_r5 = ctx_r3.$implicit;
      const ɵ$index_6_r6 = ctx_r3.$index;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(!item_r5.disabled && ctx_r1.handleOptionClick(ɵ$index_6_r6));
    });
    ɵɵtemplate(4, NzSegmentedComponent_For_3_Conditional_4_Template, 4, 6)(5, NzSegmentedComponent_For_3_Conditional_5_Template, 1, 5, "ng-container");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ɵ$index_6_r6 = ctx.$index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c2, ɵ$index_6_r6 === ctx_r1.selectedIndex, !!ctx_r1.nzDisabled || item_r5.disabled));
    ɵɵadvance(2);
    ɵɵproperty("checked", ɵ$index_6_r6 === ctx_r1.selectedIndex);
    ɵɵadvance(2);
    ɵɵconditional(item_r5.icon ? 4 : 5);
  }
}
function normalizeOptions(unnormalized) {
  return unnormalized.map((item) => {
    if (typeof item === "string" || typeof item === "number") {
      return {
        label: `${item}`,
        value: item
      };
    }
    return item;
  });
}
var NZ_CONFIG_MODULE_NAME = "segmented";
var NzSegmentedComponent = class _NzSegmentedComponent {
  constructor(nzConfigService, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzBlock = false;
    this.nzDisabled = false;
    this.nzOptions = [];
    this.nzSize = "default";
    this.nzLabelTemplate = null;
    this.nzValueChange = new EventEmitter();
    this.dir = "ltr";
    this.selectedIndex = 0;
    this.transitionedToIndex = -1;
    this.animationState = null;
    this.normalizedOptions = [];
    this.destroy$ = new Subject();
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnChanges(changes) {
    const {
      nzOptions
    } = changes;
    if (nzOptions) {
      this.normalizedOptions = normalizeOptions(nzOptions.currentValue);
    }
  }
  handleOptionClick(index) {
    if (this.nzDisabled) {
      return;
    }
    this.changeSelectedIndex(index);
    this.onChange(index);
    this.nzValueChange.emit(index);
  }
  handleThumbAnimationDone(e) {
    if (e.fromState === "from") {
      this.selectedIndex = this.transitionedToIndex;
      this.transitionedToIndex = -1;
      this.animationState = null;
      this.cdr.detectChanges();
    }
  }
  writeValue(value) {
    if (typeof value === "number" && value > -1) {
      this.changeSelectedIndex(value);
      this.cdr.markForCheck();
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  changeSelectedIndex(index) {
    if (!this.listOfOptions || this.selectedIndex === -1 || this.selectedIndex === index) {
      return;
    }
    this.animationState = {
      value: "from",
      params: getThumbAnimationProps(this.listOfOptions.get(this.selectedIndex).nativeElement)
    };
    this.selectedIndex = -1;
    this.cdr.detectChanges();
    this.animationState = {
      value: "to",
      params: getThumbAnimationProps(this.listOfOptions.get(index).nativeElement)
    };
    this.transitionedToIndex = index;
    this.cdr.detectChanges();
  }
  static {
    this.ɵfac = function NzSegmentedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSegmentedComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzSegmentedComponent,
      selectors: [["nz-segmented"]],
      viewQuery: function NzSegmentedComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfOptions = _t);
        }
      },
      hostAttrs: [1, "ant-segmented"],
      hostVars: 10,
      hostBindings: function NzSegmentedComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-segmented-disabled", !!ctx.nzDisabled)("ant-segmented-rtl", ctx.dir === "rtl")("ant-segmented-lg", ctx.nzSize === "large")("ant-segmented-sm", ctx.nzSize === "small")("ant-segmented-block", !!ctx.nzBlock);
        }
      },
      inputs: {
        nzBlock: [2, "nzBlock", "nzBlock", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzOptions: "nzOptions",
        nzSize: "nzSize",
        nzLabelTemplate: "nzLabelTemplate"
      },
      outputs: {
        nzValueChange: "nzValueChange"
      },
      exportAs: ["nzSegmented"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NzSegmentedComponent),
        multi: true
      }]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 4,
      vars: 1,
      consts: [["itemLabels", ""], [1, "ant-segmented-group"], [3, "ngClass"], ["type", "radio", 1, "ant-segmented-item-input", 3, "checked"], [1, "ant-segmented-item-label", 3, "click"], [1, "ant-segmented-item-icon"], ["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
      template: function NzSegmentedComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1);
          ɵɵtemplate(1, NzSegmentedComponent_Conditional_1_Template, 1, 3, "div", 2);
          ɵɵrepeaterCreate(2, NzSegmentedComponent_For_3_Template, 6, 6, "label", 2, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.animationState ? 1 : -1);
          ɵɵadvance();
          ɵɵrepeater(ctx.normalizedOptions);
        }
      },
      dependencies: [NgClass, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      data: {
        animation: [thumbMotion]
      },
      changeDetection: 0
    });
  }
};
__decorate([WithConfig()], NzSegmentedComponent.prototype, "nzSize", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSegmentedComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-segmented",
      exportAs: "nzSegmented",
      template: `
    <!-- thumb motion div -->
    <div class="ant-segmented-group">
      @if (animationState) {
        <div
          [ngClass]="{ 'ant-segmented-thumb': true, 'ant-segmented-thumb-motion': true }"
          [@thumbMotion]="animationState"
          (@thumbMotion.done)="handleThumbAnimationDone($event)"
        ></div>
      }

      @for (item of normalizedOptions; track item; let i = $index) {
        <label
          #itemLabels
          [ngClass]="{
            'ant-segmented-item': true,
            'ant-segmented-item-selected': i === selectedIndex,
            'ant-segmented-item-disabled': !!nzDisabled || item.disabled
          }"
        >
          <input class="ant-segmented-item-input" type="radio" [checked]="i === selectedIndex" />
          <div class="ant-segmented-item-label" (click)="!item.disabled && handleOptionClick(i)">
            @if (item.icon) {
              <span class="ant-segmented-item-icon"><span nz-icon [nzType]="item.icon"></span></span>
              <span>
                <ng-container
                  *nzStringTemplateOutlet="item.useTemplate && nzLabelTemplate; context: { $implicit: item, index: i }"
                >
                  {{ item.label }}
                </ng-container>
              </span>
            } @else {
              <ng-container
                *nzStringTemplateOutlet="item.useTemplate && nzLabelTemplate; context: { $implicit: item, index: i }"
              >
                {{ item.label }}
              </ng-container>
            }
          </div>
        </label>
      }
    </div>
  `,
      host: {
        class: "ant-segmented",
        "[class.ant-segmented-disabled]": "!!nzDisabled",
        "[class.ant-segmented-rtl]": `dir === 'rtl'`,
        "[class.ant-segmented-lg]": `nzSize === 'large'`,
        "[class.ant-segmented-sm]": `nzSize === 'small'`,
        "[class.ant-segmented-block]": `!!nzBlock`
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSegmentedComponent),
        multi: true
      }],
      animations: [thumbMotion],
      imports: [NgClass, NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    listOfOptions: [{
      type: ViewChildren,
      args: ["itemLabels", {
        read: ElementRef
      }]
    }],
    nzBlock: [{
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
    nzOptions: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzLabelTemplate: [{
      type: Input
    }],
    nzValueChange: [{
      type: Output
    }]
  });
})();
function getThumbAnimationProps(element) {
  return {
    transform: element.offsetLeft,
    width: element.clientWidth
  };
}
var NzSegmentedModule = class _NzSegmentedModule {
  static {
    this.ɵfac = function NzSegmentedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSegmentedModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzSegmentedModule,
      imports: [NzSegmentedComponent],
      exports: [NzSegmentedComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzSegmentedComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSegmentedModule, [{
    type: NgModule,
    args: [{
      imports: [NzSegmentedComponent],
      exports: [NzSegmentedComponent]
    }]
  }], null, null);
})();
export {
  NzSegmentedComponent,
  NzSegmentedModule,
  normalizeOptions
};
//# sourceMappingURL=ng-zorro-antd_segmented.js.map
