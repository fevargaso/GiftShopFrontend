import {
  FocusMonitor
} from "./chunk-VZYBL45G.js";
import {
  ENTER,
  LEFT_ARROW,
  RIGHT_ARROW,
  SPACE
} from "./chunk-3YLFXDIK.js";
import {
  NzWaveDirective,
  NzWaveModule
} from "./chunk-TL6W2KGG.js";
import "./chunk-LZHLSWHV.js";
import "./chunk-ENGKBJDQ.js";
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
import {
  NG_VALUE_ACCESSOR
} from "./chunk-RQXZNNU5.js";
import "./chunk-HHQ7MW3F.js";
import "./chunk-FADEYHXQ.js";
import "./chunk-VFHRQ4OU.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgModule,
  NgZone,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  forwardRef,
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
  Subject,
  __decorate,
  takeUntil
} from "./chunk-ZZ67MR3E.js";
import "./chunk-TXDUYLVM.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-switch.mjs
var _c0 = ["switchElement"];
function NzSwitchComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 3);
  }
}
function NzSwitchComponent_Conditional_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzCheckedChildren);
  }
}
function NzSwitchComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzSwitchComponent_Conditional_5_ng_container_0_Template, 2, 1, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzCheckedChildren);
  }
}
function NzSwitchComponent_Conditional_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzUnCheckedChildren);
  }
}
function NzSwitchComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzSwitchComponent_Conditional_6_ng_container_0_Template, 2, 1, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzUnCheckedChildren);
  }
}
var NZ_CONFIG_MODULE_NAME = "switch";
var NzSwitchComponent = class _NzSwitchComponent {
  updateValue(value) {
    if (this.isChecked !== value) {
      this.isChecked = value;
      this.onChange(this.isChecked);
    }
  }
  focus() {
    this.focusMonitor.focusVia(this.switchElement.nativeElement, "keyboard");
  }
  blur() {
    this.switchElement.nativeElement.blur();
  }
  constructor(nzConfigService, host, ngZone, cdr, focusMonitor, directionality) {
    this.nzConfigService = nzConfigService;
    this.host = host;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.focusMonitor = focusMonitor;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.isChecked = false;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.nzLoading = false;
    this.nzDisabled = false;
    this.nzControl = false;
    this.nzCheckedChildren = null;
    this.nzUnCheckedChildren = null;
    this.nzSize = "default";
    this.nzId = null;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.isNzDisableFirstChange = true;
  }
  ngOnInit() {
    this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.host.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        event.preventDefault();
        if (this.nzControl || this.nzDisabled || this.nzLoading) {
          return;
        }
        this.ngZone.run(() => {
          this.updateValue(!this.isChecked);
          this.cdr.markForCheck();
        });
      });
      fromEvent(this.switchElement.nativeElement, "keydown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (this.nzControl || this.nzDisabled || this.nzLoading) {
          return;
        }
        const {
          keyCode
        } = event;
        if (keyCode !== LEFT_ARROW && keyCode !== RIGHT_ARROW && keyCode !== SPACE && keyCode !== ENTER) {
          return;
        }
        event.preventDefault();
        this.ngZone.run(() => {
          if (keyCode === LEFT_ARROW) {
            this.updateValue(false);
          } else if (keyCode === RIGHT_ARROW) {
            this.updateValue(true);
          } else if (keyCode === SPACE || keyCode === ENTER) {
            this.updateValue(!this.isChecked);
          }
          this.cdr.markForCheck();
        });
      });
    });
  }
  ngAfterViewInit() {
    this.focusMonitor.monitor(this.switchElement.nativeElement, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
      }
    });
  }
  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
    this.destroy$.next();
    this.destroy$.complete();
  }
  writeValue(value) {
    this.isChecked = value;
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
    this.isNzDisableFirstChange = false;
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function NzSwitchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSwitchComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzSwitchComponent,
      selectors: [["nz-switch"]],
      viewQuery: function NzSwitchComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.switchElement = _t.first);
        }
      },
      inputs: {
        nzLoading: [2, "nzLoading", "nzLoading", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzControl: [2, "nzControl", "nzControl", booleanAttribute],
        nzCheckedChildren: "nzCheckedChildren",
        nzUnCheckedChildren: "nzUnCheckedChildren",
        nzSize: "nzSize",
        nzId: "nzId"
      },
      exportAs: ["nzSwitch"],
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NzSwitchComponent),
        multi: true
      }]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      decls: 8,
      vars: 15,
      consts: [["switchElement", ""], ["nz-wave", "", "type", "button", 1, "ant-switch", 3, "disabled", "nzWaveExtraNode"], [1, "ant-switch-handle"], ["nz-icon", "", "nzType", "loading", 1, "ant-switch-loading-icon"], [1, "ant-switch-inner"], [1, "ant-click-animating-node"], [4, "nzStringTemplateOutlet"]],
      template: function NzSwitchComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "button", 1, 0)(2, "span", 2);
          ɵɵtemplate(3, NzSwitchComponent_Conditional_3_Template, 1, 0, "span", 3);
          ɵɵelementEnd();
          ɵɵelementStart(4, "span", 4);
          ɵɵtemplate(5, NzSwitchComponent_Conditional_5_Template, 1, 1, "ng-container")(6, NzSwitchComponent_Conditional_6_Template, 1, 1, "ng-container");
          ɵɵelementEnd();
          ɵɵelement(7, "div", 5);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassProp("ant-switch-checked", ctx.isChecked)("ant-switch-loading", ctx.nzLoading)("ant-switch-disabled", ctx.nzDisabled)("ant-switch-small", ctx.nzSize === "small")("ant-switch-rtl", ctx.dir === "rtl");
          ɵɵproperty("disabled", ctx.nzDisabled)("nzWaveExtraNode", true);
          ɵɵattribute("id", ctx.nzId);
          ɵɵadvance(3);
          ɵɵconditional(ctx.nzLoading ? 3 : -1);
          ɵɵadvance(2);
          ɵɵconditional(ctx.isChecked ? 5 : 6);
        }
      },
      dependencies: [NzWaveModule, NzWaveDirective, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
__decorate([WithConfig()], NzSwitchComponent.prototype, "nzSize", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSwitchComponent, [{
    type: Component,
    args: [{
      selector: "nz-switch",
      exportAs: "nzSwitch",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSwitchComponent),
        multi: true
      }],
      template: `
    <button
      nz-wave
      type="button"
      class="ant-switch"
      #switchElement
      [attr.id]="nzId"
      [disabled]="nzDisabled"
      [class.ant-switch-checked]="isChecked"
      [class.ant-switch-loading]="nzLoading"
      [class.ant-switch-disabled]="nzDisabled"
      [class.ant-switch-small]="nzSize === 'small'"
      [class.ant-switch-rtl]="dir === 'rtl'"
      [nzWaveExtraNode]="true"
    >
      <span class="ant-switch-handle">
        @if (nzLoading) {
          <span nz-icon nzType="loading" class="ant-switch-loading-icon"></span>
        }
      </span>
      <span class="ant-switch-inner">
        @if (isChecked) {
          <ng-container *nzStringTemplateOutlet="nzCheckedChildren">{{ nzCheckedChildren }}</ng-container>
        } @else {
          <ng-container *nzStringTemplateOutlet="nzUnCheckedChildren">{{ nzUnCheckedChildren }}</ng-container>
        }
      </span>
      <div class="ant-click-animating-node"></div>
    </button>
  `,
      imports: [NzWaveModule, NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusMonitor
  }, {
    type: Directionality
  }], {
    switchElement: [{
      type: ViewChild,
      args: ["switchElement", {
        static: true
      }]
    }],
    nzLoading: [{
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
    nzControl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCheckedChildren: [{
      type: Input
    }],
    nzUnCheckedChildren: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzId: [{
      type: Input
    }]
  });
})();
var NzSwitchModule = class _NzSwitchModule {
  static {
    this.ɵfac = function NzSwitchModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSwitchModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzSwitchModule,
      imports: [NzSwitchComponent],
      exports: [NzSwitchComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzSwitchComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSwitchModule, [{
    type: NgModule,
    args: [{
      imports: [NzSwitchComponent],
      exports: [NzSwitchComponent]
    }]
  }], null, null);
})();
export {
  NzSwitchComponent,
  NzSwitchModule
};
//# sourceMappingURL=ng-zorro-antd_switch.js.map
