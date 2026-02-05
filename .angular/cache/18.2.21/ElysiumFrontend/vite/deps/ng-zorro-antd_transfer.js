import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-HYP2EO45.js";
import {
  NzEmbedEmptyComponent,
  NzEmptyModule
} from "./chunk-Z4VTKPBM.js";
import {
  NzI18nService
} from "./chunk-CBSEVPVM.js";
import "./chunk-FVLDSEMJ.js";
import "./chunk-LIAMBE52.js";
import {
  NzFormNoStatusService,
  NzFormStatusService
} from "./chunk-MZIFUISN.js";
import "./chunk-3YLFXDIK.js";
import "./chunk-WTSRJ4ZB.js";
import "./chunk-XECNEXJM.js";
import {
  NzButtonComponent,
  NzButtonModule
} from "./chunk-WA2UB2PD.js";
import {
  NzWaveDirective
} from "./chunk-E37JKKFX.js";
import {
  NzTransitionPatchDirective
} from "./chunk-VDILG7EH.js";
import "./chunk-IJ5SIUDS.js";
import "./chunk-PEDD5AHM.js";
import "./chunk-O2KJ4HO4.js";
import "./chunk-ZUJHHEWT.js";
import {
  Directionality
} from "./chunk-JWXJAX4E.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-VPMN4NOA.js";
import "./chunk-BQ76GOFF.js";
import "./chunk-NT2VFEI2.js";
import "./chunk-VBRHEHWF.js";
import {
  getStatusClassNames,
  toArray
} from "./chunk-45PTXMFP.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-C3P2YCDL.js";
import "./chunk-TAIIUZZD.js";
import "./chunk-6HQWDNO4.js";
import {
  NgClass,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-P7XZQWMR.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-E2LL2ENA.js";
import {
  fromEvent,
  merge
} from "./chunk-XSUPIODI.js";
import "./chunk-RRANXKLR.js";
import {
  Observable,
  Subject,
  distinctUntilChanged,
  map,
  of,
  startWith,
  switchMap,
  takeUntil,
  withLatestFrom
} from "./chunk-V7EGFIMY.js";
import "./chunk-TXDUYLVM.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-transfer.mjs
var _c0 = ["nz-transfer-search", ""];
var _c1 = (a0) => ({
  "ant-input-disabled": a0
});
function NzTransferSearchComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 4);
    ɵɵlistener("click", function NzTransferSearchComponent_Conditional_3_Template_span_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1._clear());
    });
    ɵɵelement(1, "span", 5);
    ɵɵelementEnd();
  }
}
var _c2 = ["headerCheckbox"];
var _c3 = ["checkboxes"];
var _c4 = (a0) => ({
  "ant-transfer__nodata": a0
});
var _c5 = (a0, a1, a2, a3, a4, a5) => ({
  $implicit: a0,
  direction: a1,
  disabled: a2,
  onItemSelectAll: a3,
  onItemSelect: a4,
  stat: a5
});
var _c6 = (a0) => ({
  "ant-transfer-list-content-item-disabled": a0
});
var _c7 = (a0) => ({
  $implicit: a0
});
function NzTransferListComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 10, 0);
    ɵɵlistener("nzCheckedChange", function NzTransferListComponent_Conditional_1_Template_label_nzCheckedChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemSelectAll($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzChecked", ctx_r1.stat.checkAll)("nzIndeterminate", ctx_r1.stat.checkHalf)("nzDisabled", ctx_r1.stat.availableCount === 0 || ctx_r1.disabled);
  }
}
function NzTransferListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.titleText);
  }
}
function NzTransferListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7)(1, "span", 11);
    ɵɵlistener("valueChanged", function NzTransferListComponent_Conditional_7_Template_span_valueChanged_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleFilter($event));
    })("valueClear", function NzTransferListComponent_Conditional_7_Template_span_valueClear_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleClear());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("placeholder", ctx_r1.searchPlaceholder)("disabled", ctx_r1.disabled)("value", ctx_r1.filter);
  }
}
function NzTransferListComponent_Conditional_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzTransferListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, NzTransferListComponent_Conditional_8_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.renderList)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c5, ctx_r1.validData, ctx_r1.direction, ctx_r1.disabled, ctx_r1.onItemSelectAll, ctx_r1.onItemSelect, ctx_r1.stat));
  }
}
function NzTransferListComponent_Conditional_9_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", item_r5.title, " ");
  }
}
function NzTransferListComponent_Conditional_9_Conditional_0_For_2_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function NzTransferListComponent_Conditional_9_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTransferListComponent_Conditional_9_Conditional_0_For_2_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 18);
  }
  if (rf & 2) {
    const item_r5 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.render)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c7, item_r5));
  }
}
function NzTransferListComponent_Conditional_9_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 16);
    ɵɵlistener("click", function NzTransferListComponent_Conditional_9_Conditional_0_For_2_Template_li_click_0_listener() {
      const item_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onItemSelect(item_r5));
    });
    ɵɵelementStart(1, "label", 17, 1);
    ɵɵlistener("nzCheckedChange", function NzTransferListComponent_Conditional_9_Conditional_0_For_2_Template_label_nzCheckedChange_1_listener() {
      const item_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onItemSelect(item_r5));
    });
    ɵɵtemplate(3, NzTransferListComponent_Conditional_9_Conditional_0_For_2_Conditional_3_Template, 1, 1)(4, NzTransferListComponent_Conditional_9_Conditional_0_For_2_Conditional_4_Template, 1, 4, null, 18);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c6, ctx_r1.disabled || item_r5.disabled));
    ɵɵadvance();
    ɵɵproperty("nzChecked", item_r5.checked)("nzDisabled", ctx_r1.disabled || item_r5.disabled);
    ɵɵadvance(2);
    ɵɵconditional(!ctx_r1.render ? 3 : 4);
  }
}
function NzTransferListComponent_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 13);
    ɵɵrepeaterCreate(1, NzTransferListComponent_Conditional_9_Conditional_0_For_2_Template, 5, 6, "li", 15, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.validData);
  }
}
function NzTransferListComponent_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵelement(1, "nz-embed-empty", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzComponentName", "transfer")("specificContent", ctx_r1.notFoundContent);
  }
}
function NzTransferListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTransferListComponent_Conditional_9_Conditional_0_Template, 3, 0, "ul", 13)(1, NzTransferListComponent_Conditional_9_Conditional_1_Template, 2, 2, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.stat.shownCount > 0 ? 0 : 1);
  }
}
function NzTransferListComponent_Conditional_10_ng_template_1_Template(rf, ctx) {
}
function NzTransferListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, NzTransferListComponent_Conditional_10_ng_template_1_Template, 0, 0, "ng-template", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footer)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c7, ctx_r1.direction));
  }
}
function NzTransferComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzOperations[1]);
  }
}
function NzTransferComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzOperations[0]);
  }
}
function NzTransferComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "button", 3);
    ɵɵlistener("click", function NzTransferComponent_Conditional_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.moveToLeft());
    });
    ɵɵelement(2, "span", 4);
    ɵɵtemplate(3, NzTransferComponent_Conditional_1_Conditional_3_Template, 2, 1, "span");
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 3);
    ɵɵlistener("click", function NzTransferComponent_Conditional_1_Template_button_click_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.moveToRight());
    });
    ɵɵelement(5, "span", 5);
    ɵɵtemplate(6, NzTransferComponent_Conditional_1_Conditional_6_Template, 2, 1, "span");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.nzDisabled || !ctx_r1.leftActive)("nzType", "primary")("nzSize", "small");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.nzOperations[1] ? 3 : -1);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.nzDisabled || !ctx_r1.rightActive)("nzType", "primary")("nzSize", "small");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.nzOperations[0] ? 6 : -1);
  }
}
function NzTransferComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzOperations[0]);
  }
}
function NzTransferComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzOperations[1]);
  }
}
function NzTransferComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "button", 3);
    ɵɵlistener("click", function NzTransferComponent_Conditional_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.moveToRight());
    });
    ɵɵelement(2, "span", 4);
    ɵɵtemplate(3, NzTransferComponent_Conditional_2_Conditional_3_Template, 2, 1, "span");
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 3);
    ɵɵlistener("click", function NzTransferComponent_Conditional_2_Template_button_click_4_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.moveToLeft());
    });
    ɵɵelement(5, "span", 5);
    ɵɵtemplate(6, NzTransferComponent_Conditional_2_Conditional_6_Template, 2, 1, "span");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.nzDisabled || !ctx_r1.rightActive)("nzType", "primary")("nzSize", "small");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.nzOperations[0] ? 3 : -1);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.nzDisabled || !ctx_r1.leftActive)("nzType", "primary")("nzSize", "small");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.nzOperations[1] ? 6 : -1);
  }
}
var NzTransferSearchComponent = class _NzTransferSearchComponent {
  // endregion
  constructor(cdr) {
    this.cdr = cdr;
    this.disabled = false;
    this.valueChanged = new EventEmitter();
    this.valueClear = new EventEmitter();
  }
  _handle() {
    this.valueChanged.emit(this.value);
  }
  _clear() {
    if (this.disabled) {
      return;
    }
    this.value = "";
    this.valueClear.emit();
  }
  ngOnChanges() {
    this.cdr.detectChanges();
  }
  static {
    this.ɵfac = function NzTransferSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTransferSearchComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTransferSearchComponent,
      selectors: [["", "nz-transfer-search", ""]],
      inputs: {
        placeholder: "placeholder",
        value: "value",
        disabled: [2, "disabled", "disabled", booleanAttribute]
      },
      outputs: {
        valueChanged: "valueChanged",
        valueClear: "valueClear"
      },
      exportAs: ["nzTransferSearch"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      attrs: _c0,
      decls: 4,
      vars: 7,
      consts: [[1, "ant-input-prefix"], ["nz-icon", "", "nzType", "search"], [1, "ant-input", 3, "ngModelChange", "ngModel", "disabled", "placeholder", "ngClass"], [1, "ant-input-suffix"], [1, "ant-input-suffix", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-input-clear-icon"]],
      template: function NzTransferSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "span", 0);
          ɵɵelement(1, "span", 1);
          ɵɵelementEnd();
          ɵɵelementStart(2, "input", 2);
          ɵɵtwoWayListener("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_2_listener($event) {
            ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
            return $event;
          });
          ɵɵlistener("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_2_listener() {
            return ctx._handle();
          });
          ɵɵelementEnd();
          ɵɵtemplate(3, NzTransferSearchComponent_Conditional_3_Template, 2, 0, "span", 3);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtwoWayProperty("ngModel", ctx.value);
          ɵɵproperty("disabled", ctx.disabled)("placeholder", ctx.placeholder)("ngClass", ɵɵpureFunction1(5, _c1, ctx.disabled));
          ɵɵadvance();
          ɵɵconditional(ctx.value && ctx.value.length > 0 ? 3 : -1);
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzIconModule, NzIconDirective, NgClass],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransferSearchComponent, [{
    type: Component,
    args: [{
      selector: "[nz-transfer-search]",
      exportAs: "nzTransferSearch",
      preserveWhitespaces: false,
      template: `
    <span class="ant-input-prefix">
      <span nz-icon nzType="search"></span>
    </span>
    <input
      [(ngModel)]="value"
      (ngModelChange)="_handle()"
      [disabled]="disabled"
      [placeholder]="placeholder"
      class="ant-input"
      [ngClass]="{ 'ant-input-disabled': disabled }"
    />
    @if (value && value.length > 0) {
      <span class="ant-input-suffix" (click)="_clear()">
        <span nz-icon nzType="close-circle" nzTheme="fill" class="ant-input-clear-icon"></span>
      </span>
    }
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [FormsModule, NzIconModule, NgClass],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    placeholder: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    valueChanged: [{
      type: Output
    }],
    valueClear: [{
      type: Output
    }]
  });
})();
var NzTransferListComponent = class _NzTransferListComponent {
  get validData() {
    return this.dataSource.filter((w) => !w.hide);
  }
  get availableData() {
    return this.validData.filter((w) => !w.disabled);
  }
  updateCheckStatus() {
    const validCount = this.dataSource.filter((w) => !w.disabled).length;
    this.stat.checkCount = this.dataSource.filter((w) => w.checked && !w.disabled).length;
    this.stat.shownCount = this.validData.length;
    this.stat.availableCount = this.availableData.length;
    this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
    this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    this.headerCheckbox && (this.headerCheckbox.nzChecked = this.stat.checkAll);
  }
  // #endregion
  // #region search
  handleFilter(value) {
    this.filter = value;
    this.dataSource.forEach((item) => {
      item.hide = value.length > 0 && !this.matchFilter(value, item);
    });
    this.stat.shownCount = this.validData.length;
    this.stat.availableCount = this.availableData.length;
    this.filterChange.emit({
      direction: this.direction,
      value
    });
  }
  handleClear() {
    this.handleFilter("");
  }
  matchFilter(text, item) {
    if (this.filterOption) {
      return this.filterOption(text, item);
    }
    return item.title.includes(text);
  }
  // #endregion
  constructor(ngZone, cdr) {
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.direction = "left";
    this.titleText = "";
    this.showSelectAll = true;
    this.dataSource = [];
    this.itemUnit = "";
    this.itemsUnit = "";
    this.filter = "";
    this.disabled = false;
    this.renderList = null;
    this.render = null;
    this.footer = null;
    this.handleSelectAll = new EventEmitter();
    this.handleSelect = new EventEmitter();
    this.filterChange = new EventEmitter();
    this.stat = {
      checkAll: false,
      checkHalf: false,
      checkCount: 0,
      shownCount: 0,
      availableCount: 0
    };
    this.onItemSelect = (item) => {
      if (this.disabled || item.disabled) {
        return;
      }
      item.checked = !item.checked;
      this.updateCheckStatus();
      this.handleSelect.emit(item);
    };
    this.onItemSelectAll = (status) => {
      this.dataSource.forEach((item) => {
        if (!item.disabled && !item.hide) {
          item.checked = status;
        }
      });
      this.updateCheckStatus();
      this.handleSelectAll.emit(status);
    };
  }
  markForCheck() {
    this.updateCheckStatus();
    this.cdr.markForCheck();
  }
  ngAfterViewInit() {
    this.checkboxes.changes.pipe(startWith(this.checkboxes), switchMap(() => {
      const checkboxes = this.checkboxes.toArray();
      return new Observable((subscriber) => this.ngZone.runOutsideAngular(() => merge(...checkboxes.map((checkbox) => fromEvent(checkbox.nativeElement, "click"))).subscribe(subscriber)));
    })).subscribe((event) => {
      event.stopPropagation();
    });
  }
  static {
    this.ɵfac = function NzTransferListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTransferListComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTransferListComponent,
      selectors: [["nz-transfer-list"]],
      viewQuery: function NzTransferListComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c2, 5, NzCheckboxComponent);
          ɵɵviewQuery(_c3, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerCheckbox = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.checkboxes = _t);
        }
      },
      hostAttrs: [1, "ant-transfer-list"],
      hostVars: 2,
      hostBindings: function NzTransferListComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-transfer-list-with-footer", !!ctx.footer);
        }
      },
      inputs: {
        direction: "direction",
        titleText: "titleText",
        showSelectAll: "showSelectAll",
        dataSource: "dataSource",
        itemUnit: "itemUnit",
        itemsUnit: "itemsUnit",
        filter: "filter",
        disabled: [2, "disabled", "disabled", booleanAttribute],
        showSearch: [2, "showSearch", "showSearch", booleanAttribute],
        searchPlaceholder: "searchPlaceholder",
        notFoundContent: "notFoundContent",
        filterOption: "filterOption",
        renderList: "renderList",
        render: "render",
        footer: "footer"
      },
      outputs: {
        handleSelectAll: "handleSelectAll",
        handleSelect: "handleSelect",
        filterChange: "filterChange"
      },
      exportAs: ["nzTransferList"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      decls: 11,
      vars: 13,
      consts: [["headerCheckbox", ""], ["checkboxes", ""], [1, "ant-transfer-list-header"], ["nz-checkbox", "", 1, "ant-transfer-list-checkbox", 3, "nzChecked", "nzIndeterminate", "nzDisabled"], [1, "ant-transfer-list-header-selected"], [1, "ant-transfer-list-header-title"], [3, "ngClass"], [1, "ant-transfer-list-body-search-wrapper"], [1, "ant-transfer-list-body-customize-wrapper"], [1, "ant-transfer-list-footer"], ["nz-checkbox", "", 1, "ant-transfer-list-checkbox", 3, "nzCheckedChange", "nzChecked", "nzIndeterminate", "nzDisabled"], ["nz-transfer-search", "", 1, "ant-input-affix-wrapper", "ant-transfer-list-search", 3, "valueChanged", "valueClear", "placeholder", "disabled", "value"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-transfer-list-content"], [1, "ant-transfer-list-body-not-found"], [1, "ant-transfer-list-content-item", 3, "ngClass"], [1, "ant-transfer-list-content-item", 3, "click", "ngClass"], ["nz-checkbox", "", 3, "nzCheckedChange", "nzChecked", "nzDisabled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "nzComponentName", "specificContent"]],
      template: function NzTransferListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 2);
          ɵɵtemplate(1, NzTransferListComponent_Conditional_1_Template, 2, 3, "label", 3);
          ɵɵelementStart(2, "span", 4)(3, "span");
          ɵɵtext(4);
          ɵɵelementEnd()();
          ɵɵtemplate(5, NzTransferListComponent_Conditional_5_Template, 2, 1, "span", 5);
          ɵɵelementEnd();
          ɵɵelementStart(6, "div", 6);
          ɵɵtemplate(7, NzTransferListComponent_Conditional_7_Template, 2, 3, "div", 7)(8, NzTransferListComponent_Conditional_8_Template, 2, 9, "div", 8)(9, NzTransferListComponent_Conditional_9_Template, 2, 1);
          ɵɵelementEnd();
          ɵɵtemplate(10, NzTransferListComponent_Conditional_10_Template, 2, 4, "div", 9);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.showSelectAll ? 1 : -1);
          ɵɵadvance(3);
          ɵɵtextInterpolate2(" ", (ctx.stat.checkCount > 0 ? ctx.stat.checkCount + "/" : "") + ctx.stat.shownCount, " ", ctx.validData.length > 1 ? ctx.itemsUnit : ctx.itemUnit, " ");
          ɵɵadvance();
          ɵɵconditional(ctx.titleText ? 5 : -1);
          ɵɵadvance();
          ɵɵclassMap(ctx.showSearch ? "ant-transfer-list-body ant-transfer-list-body-with-search" : "ant-transfer-list-body");
          ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c4, ctx.stat.shownCount === 0));
          ɵɵadvance();
          ɵɵconditional(ctx.showSearch ? 7 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.renderList ? 8 : 9);
          ɵɵadvance(2);
          ɵɵconditional(ctx.footer ? 10 : -1);
        }
      },
      dependencies: [NgClass, NzCheckboxModule, NzCheckboxComponent, NgTemplateOutlet, NzEmptyModule, NzEmbedEmptyComponent, NzTransferSearchComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransferListComponent, [{
    type: Component,
    args: [{
      selector: "nz-transfer-list",
      exportAs: "nzTransferList",
      preserveWhitespaces: false,
      template: `
    <div class="ant-transfer-list-header">
      @if (showSelectAll) {
        <label
          class="ant-transfer-list-checkbox"
          nz-checkbox
          #headerCheckbox
          [nzChecked]="stat.checkAll"
          (nzCheckedChange)="onItemSelectAll($event)"
          [nzIndeterminate]="stat.checkHalf"
          [nzDisabled]="stat.availableCount === 0 || disabled"
        ></label>
      }
      <span class="ant-transfer-list-header-selected">
        <span>
          {{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }}
          {{ validData.length > 1 ? itemsUnit : itemUnit }}
        </span>
      </span>
      @if (titleText) {
        <span class="ant-transfer-list-header-title">{{ titleText }}</span>
      }
    </div>
    <div
      class="{{ showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body' }}"
      [ngClass]="{ 'ant-transfer__nodata': stat.shownCount === 0 }"
    >
      @if (showSearch) {
        <div class="ant-transfer-list-body-search-wrapper">
          <span
            nz-transfer-search
            class="ant-input-affix-wrapper ant-transfer-list-search"
            (valueChanged)="handleFilter($event)"
            (valueClear)="handleClear()"
            [placeholder]="searchPlaceholder"
            [disabled]="disabled"
            [value]="filter"
          ></span>
        </div>
      }
      @if (renderList) {
        <div class="ant-transfer-list-body-customize-wrapper">
          <ng-container
            *ngTemplateOutlet="
              renderList;
              context: {
                $implicit: validData,
                direction: direction,
                disabled: disabled,
                onItemSelectAll: onItemSelectAll,
                onItemSelect: onItemSelect,
                stat: stat
              }
            "
          ></ng-container>
        </div>
      } @else {
        @if (stat.shownCount > 0) {
          <ul class="ant-transfer-list-content">
            @for (item of validData; track item) {
              <li
                (click)="onItemSelect(item)"
                class="ant-transfer-list-content-item"
                [ngClass]="{ 'ant-transfer-list-content-item-disabled': disabled || item.disabled }"
              >
                <label
                  #checkboxes
                  nz-checkbox
                  [nzChecked]="item.checked"
                  (nzCheckedChange)="onItemSelect(item)"
                  [nzDisabled]="disabled || item.disabled"
                >
                  @if (!render) {
                    {{ item.title }}
                  } @else {
                    <ng-template
                      [ngTemplateOutlet]="render"
                      [ngTemplateOutletContext]="{ $implicit: item }"
                    ></ng-template>
                  }
                </label>
              </li>
            }
          </ul>
        } @else {
          <div class="ant-transfer-list-body-not-found">
            <nz-embed-empty [nzComponentName]="'transfer'" [specificContent]="notFoundContent"></nz-embed-empty>
          </div>
        }
      }
    </div>
    @if (footer) {
      <div class="ant-transfer-list-footer">
        <ng-template [ngTemplateOutlet]="footer" [ngTemplateOutletContext]="{ $implicit: direction }"></ng-template>
      </div>
    }
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-transfer-list",
        "[class.ant-transfer-list-with-footer]": "!!footer"
      },
      imports: [NgClass, NzCheckboxModule, NgTemplateOutlet, NzEmptyModule, NzTransferSearchComponent],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }], {
    direction: [{
      type: Input
    }],
    titleText: [{
      type: Input
    }],
    showSelectAll: [{
      type: Input
    }],
    dataSource: [{
      type: Input
    }],
    itemUnit: [{
      type: Input
    }],
    itemsUnit: [{
      type: Input
    }],
    filter: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showSearch: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    searchPlaceholder: [{
      type: Input
    }],
    notFoundContent: [{
      type: Input
    }],
    filterOption: [{
      type: Input
    }],
    renderList: [{
      type: Input
    }],
    render: [{
      type: Input
    }],
    footer: [{
      type: Input
    }],
    handleSelectAll: [{
      type: Output
    }],
    handleSelect: [{
      type: Output
    }],
    filterChange: [{
      type: Output
    }],
    headerCheckbox: [{
      type: ViewChild,
      args: ["headerCheckbox", {
        read: NzCheckboxComponent
      }]
    }],
    checkboxes: [{
      type: ViewChildren,
      args: ["checkboxes", {
        read: ElementRef
      }]
    }]
  });
})();
var NzTransferComponent = class _NzTransferComponent {
  splitDataSource() {
    this.leftDataSource = [];
    this.rightDataSource = [];
    this.nzDataSource.forEach((record) => {
      if (record.direction === "right") {
        record.direction = "right";
        this.rightDataSource.push(record);
      } else {
        record.direction = "left";
        this.leftDataSource.push(record);
      }
    });
  }
  getCheckedData(direction) {
    return this[direction === "left" ? "leftDataSource" : "rightDataSource"].filter((w) => w.checked);
  }
  handleSelect(direction, checked, item) {
    const list = this.getCheckedData(direction);
    const count = list.filter((i) => !i.disabled).length;
    this.updateOperationStatus(direction, count);
    this.nzSelectChange.emit({
      direction,
      checked,
      list,
      item
    });
  }
  handleFilterChange(ret) {
    this.nzSearchChange.emit(ret);
  }
  updateOperationStatus(direction, count) {
    this[direction === "right" ? "leftActive" : "rightActive"] = (typeof count === "undefined" ? this.getCheckedData(direction).filter((w) => !w.disabled).length : count) > 0;
  }
  moveTo(direction) {
    const oppositeDirection = direction === "left" ? "right" : "left";
    this.updateOperationStatus(oppositeDirection, 0);
    const datasource = direction === "left" ? this.rightDataSource : this.leftDataSource;
    const moveList = datasource.filter((item) => item.checked === true && !item.disabled);
    this.nzCanMove({
      direction,
      list: moveList
    }).subscribe((newMoveList) => this.truthMoveTo(direction, newMoveList.filter((i) => !!i)), () => moveList.forEach((i) => i.checked = false));
  }
  truthMoveTo(direction, list) {
    const oppositeDirection = direction === "left" ? "right" : "left";
    const datasource = direction === "left" ? this.rightDataSource : this.leftDataSource;
    const targetDatasource = direction === "left" ? this.leftDataSource : this.rightDataSource;
    for (const item of list) {
      item.checked = false;
      item.hide = false;
      item.direction = direction;
      datasource.splice(datasource.indexOf(item), 1);
    }
    targetDatasource.splice(0, 0, ...list);
    this.updateOperationStatus(oppositeDirection);
    this.nzChange.emit({
      from: oppositeDirection,
      to: direction,
      list
    });
    this.markForCheckAllList();
  }
  // #endregion
  constructor(cdr, i18n, elementRef, renderer, directionality) {
    this.cdr = cdr;
    this.i18n = i18n;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
    this.unsubscribe$ = new Subject();
    this.leftFilter = "";
    this.rightFilter = "";
    this.dir = "ltr";
    this.prefixCls = "ant-transfer";
    this.statusCls = {};
    this.hasFeedback = false;
    this.nzDisabled = false;
    this.nzDataSource = [];
    this.nzTitles = ["", ""];
    this.nzOperations = [];
    this.nzListStyle = {};
    this.nzShowSelectAll = true;
    this.nzCanMove = (arg) => of(arg.list);
    this.nzRenderList = null;
    this.nzRender = null;
    this.nzFooter = null;
    this.nzShowSearch = false;
    this.nzTargetKeys = [];
    this.nzSelectedKeys = [];
    this.nzStatus = "";
    this.nzChange = new EventEmitter();
    this.nzSearchChange = new EventEmitter();
    this.nzSelectChange = new EventEmitter();
    this.leftDataSource = [];
    this.rightDataSource = [];
    this.handleLeftSelectAll = (checked) => this.handleSelect("left", checked);
    this.handleRightSelectAll = (checked) => this.handleSelect("right", checked);
    this.handleLeftSelect = (item) => this.handleSelect("left", !!item.checked, item);
    this.handleRightSelect = (item) => this.handleSelect("right", !!item.checked, item);
    this.leftActive = false;
    this.rightActive = false;
    this.moveToLeft = () => this.moveTo("left");
    this.moveToRight = () => this.moveTo("right");
    this.nzFormStatusService = inject(NzFormStatusService, {
      optional: true
    });
    this.nzFormNoStatusService = inject(NzFormNoStatusService, {
      optional: true
    });
  }
  markForCheckAllList() {
    if (!this.lists) {
      return;
    }
    this.lists.forEach((i) => i.markForCheck());
  }
  handleNzTargetKeys() {
    const keys = toArray(this.nzTargetKeys);
    const hasOwnKey = (e) => e.hasOwnProperty("key");
    this.leftDataSource.forEach((e) => {
      if (hasOwnKey(e) && keys.indexOf(e.key) !== -1 && !e.disabled) {
        e.checked = true;
      }
    });
    this.moveToRight();
  }
  handleNzSelectedKeys() {
    const keys = toArray(this.nzSelectedKeys);
    this.nzDataSource.forEach((e) => {
      if (keys.indexOf(e.key) !== -1) {
        e.checked = true;
      }
    });
    const term = (ld) => ld.disabled === false && ld.checked === true;
    this.rightActive = this.leftDataSource.some(term);
    this.leftActive = this.rightDataSource.some(term);
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
      status,
      hasFeedback
    }, noStatus]) => ({
      status: noStatus ? "" : status,
      hasFeedback
    })), takeUntil(this.unsubscribe$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Transfer");
      this.markForCheckAllList();
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.unsubscribe$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnChanges(changes) {
    const {
      nzStatus,
      nzDataSource,
      nzTargetKeys,
      nzSelectedKeys
    } = changes;
    if (nzDataSource) {
      this.splitDataSource();
      this.updateOperationStatus("left");
      this.updateOperationStatus("right");
      this.cdr.detectChanges();
      this.markForCheckAllList();
    }
    if (nzTargetKeys) {
      this.handleNzTargetKeys();
    }
    if (nzSelectedKeys) {
      this.handleNzSelectedKeys();
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  setStatusStyles(status, hasFeedback) {
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
    this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach((status2) => {
      if (this.statusCls[status2]) {
        this.renderer.addClass(this.elementRef.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status2);
      }
    });
  }
  static {
    this.ɵfac = function NzTransferComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTransferComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTransferComponent,
      selectors: [["nz-transfer"]],
      viewQuery: function NzTransferComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(NzTransferListComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lists = _t);
        }
      },
      hostAttrs: [1, "ant-transfer"],
      hostVars: 6,
      hostBindings: function NzTransferComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-transfer-rtl", ctx.dir === "rtl")("ant-transfer-disabled", ctx.nzDisabled)("ant-transfer-customize-list", ctx.nzRenderList);
        }
      },
      inputs: {
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzDataSource: "nzDataSource",
        nzTitles: "nzTitles",
        nzOperations: "nzOperations",
        nzListStyle: "nzListStyle",
        nzShowSelectAll: [2, "nzShowSelectAll", "nzShowSelectAll", booleanAttribute],
        nzItemUnit: "nzItemUnit",
        nzItemsUnit: "nzItemsUnit",
        nzCanMove: "nzCanMove",
        nzRenderList: "nzRenderList",
        nzRender: "nzRender",
        nzFooter: "nzFooter",
        nzShowSearch: [2, "nzShowSearch", "nzShowSearch", booleanAttribute],
        nzFilterOption: "nzFilterOption",
        nzSearchPlaceholder: "nzSearchPlaceholder",
        nzNotFoundContent: "nzNotFoundContent",
        nzTargetKeys: "nzTargetKeys",
        nzSelectedKeys: "nzSelectedKeys",
        nzStatus: "nzStatus"
      },
      outputs: {
        nzChange: "nzChange",
        nzSearchChange: "nzSearchChange",
        nzSelectChange: "nzSelectChange"
      },
      exportAs: ["nzTransfer"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 4,
      vars: 31,
      consts: [["data-direction", "left", "direction", "left", 1, "ant-transfer-list", 3, "filterChange", "handleSelect", "handleSelectAll", "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer"], [1, "ant-transfer-operation"], ["data-direction", "right", "direction", "right", 1, "ant-transfer-list", 3, "filterChange", "handleSelect", "handleSelectAll", "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer"], ["nz-button", "", "type", "button", 3, "click", "disabled", "nzType", "nzSize"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "right"]],
      template: function NzTransferComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "nz-transfer-list", 0);
          ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_0_listener($event) {
            return ctx.handleFilterChange($event);
          })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_0_listener($event) {
            return ctx.handleLeftSelect($event);
          })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_0_listener($event) {
            return ctx.handleLeftSelectAll($event);
          });
          ɵɵelementEnd();
          ɵɵtemplate(1, NzTransferComponent_Conditional_1_Template, 7, 8, "div", 1)(2, NzTransferComponent_Conditional_2_Template, 7, 8, "div", 1);
          ɵɵelementStart(3, "nz-transfer-list", 2);
          ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_3_listener($event) {
            return ctx.handleFilterChange($event);
          })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_3_listener($event) {
            return ctx.handleRightSelect($event);
          })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_3_listener($event) {
            return ctx.handleRightSelectAll($event);
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[0])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.leftDataSource)("filter", ctx.leftFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList && ctx.nzRenderList[0])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || (ctx.locale == null ? null : ctx.locale.searchPlaceholder))("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || (ctx.locale == null ? null : ctx.locale.itemUnit))("itemsUnit", ctx.nzItemsUnit || (ctx.locale == null ? null : ctx.locale.itemsUnit))("footer", ctx.nzFooter);
          ɵɵadvance();
          ɵɵconditional(ctx.dir !== "rtl" ? 1 : 2);
          ɵɵadvance(2);
          ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[1])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.rightDataSource)("filter", ctx.rightFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList && ctx.nzRenderList[1])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || (ctx.locale == null ? null : ctx.locale.searchPlaceholder))("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || (ctx.locale == null ? null : ctx.locale.itemUnit))("itemsUnit", ctx.nzItemsUnit || (ctx.locale == null ? null : ctx.locale.itemsUnit))("footer", ctx.nzFooter);
        }
      },
      dependencies: [NzTransferListComponent, NgStyle, NzIconModule, NzIconDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransferComponent, [{
    type: Component,
    args: [{
      selector: "nz-transfer",
      exportAs: "nzTransfer",
      preserveWhitespaces: false,
      template: `
    <nz-transfer-list
      class="ant-transfer-list"
      [ngStyle]="nzListStyle"
      data-direction="left"
      direction="left"
      [titleText]="nzTitles[0]"
      [showSelectAll]="nzShowSelectAll"
      [dataSource]="leftDataSource"
      [filter]="leftFilter"
      [filterOption]="nzFilterOption"
      (filterChange)="handleFilterChange($event)"
      [renderList]="nzRenderList && nzRenderList[0]"
      [render]="nzRender"
      [disabled]="nzDisabled"
      [showSearch]="nzShowSearch"
      [searchPlaceholder]="nzSearchPlaceholder || locale?.searchPlaceholder"
      [notFoundContent]="nzNotFoundContent"
      [itemUnit]="nzItemUnit || locale?.itemUnit"
      [itemsUnit]="nzItemsUnit || locale?.itemsUnit"
      [footer]="nzFooter"
      (handleSelect)="handleLeftSelect($event)"
      (handleSelectAll)="handleLeftSelectAll($event)"
    ></nz-transfer-list>
    @if (dir !== 'rtl') {
      <div class="ant-transfer-operation">
        <button
          nz-button
          type="button"
          (click)="moveToLeft()"
          [disabled]="nzDisabled || !leftActive"
          [nzType]="'primary'"
          [nzSize]="'small'"
        >
          <span nz-icon nzType="left"></span>
          @if (nzOperations[1]) {
            <span>{{ nzOperations[1] }}</span>
          }
        </button>
        <button
          nz-button
          type="button"
          (click)="moveToRight()"
          [disabled]="nzDisabled || !rightActive"
          [nzType]="'primary'"
          [nzSize]="'small'"
        >
          <span nz-icon nzType="right"></span>
          @if (nzOperations[0]) {
            <span>{{ nzOperations[0] }}</span>
          }
        </button>
      </div>
    } @else {
      <div class="ant-transfer-operation">
        <button
          nz-button
          type="button"
          (click)="moveToRight()"
          [disabled]="nzDisabled || !rightActive"
          [nzType]="'primary'"
          [nzSize]="'small'"
        >
          <span nz-icon nzType="left"></span>
          @if (nzOperations[0]) {
            <span>{{ nzOperations[0] }}</span>
          }
        </button>
        <button
          nz-button
          type="button"
          (click)="moveToLeft()"
          [disabled]="nzDisabled || !leftActive"
          [nzType]="'primary'"
          [nzSize]="'small'"
        >
          <span nz-icon nzType="right"></span>
          @if (nzOperations[1]) {
            <span>{{ nzOperations[1] }}</span>
          }
        </button>
      </div>
    }
    <nz-transfer-list
      class="ant-transfer-list"
      [ngStyle]="nzListStyle"
      data-direction="right"
      direction="right"
      [titleText]="nzTitles[1]"
      [showSelectAll]="nzShowSelectAll"
      [dataSource]="rightDataSource"
      [filter]="rightFilter"
      [filterOption]="nzFilterOption"
      (filterChange)="handleFilterChange($event)"
      [renderList]="nzRenderList && nzRenderList[1]"
      [render]="nzRender"
      [disabled]="nzDisabled"
      [showSearch]="nzShowSearch"
      [searchPlaceholder]="nzSearchPlaceholder || locale?.searchPlaceholder"
      [notFoundContent]="nzNotFoundContent"
      [itemUnit]="nzItemUnit || locale?.itemUnit"
      [itemsUnit]="nzItemsUnit || locale?.itemsUnit"
      [footer]="nzFooter"
      (handleSelect)="handleRightSelect($event)"
      (handleSelectAll)="handleRightSelectAll($event)"
    ></nz-transfer-list>
  `,
      host: {
        class: "ant-transfer",
        "[class.ant-transfer-rtl]": `dir === 'rtl'`,
        "[class.ant-transfer-disabled]": `nzDisabled`,
        "[class.ant-transfer-customize-list]": `nzRenderList`
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzTransferListComponent, NgStyle, NzIconModule, NzButtonModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality
  }], {
    lists: [{
      type: ViewChildren,
      args: [NzTransferListComponent]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDataSource: [{
      type: Input
    }],
    nzTitles: [{
      type: Input
    }],
    nzOperations: [{
      type: Input
    }],
    nzListStyle: [{
      type: Input
    }],
    nzShowSelectAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzItemUnit: [{
      type: Input
    }],
    nzItemsUnit: [{
      type: Input
    }],
    nzCanMove: [{
      type: Input
    }],
    nzRenderList: [{
      type: Input
    }],
    nzRender: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzShowSearch: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzFilterOption: [{
      type: Input
    }],
    nzSearchPlaceholder: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzTargetKeys: [{
      type: Input
    }],
    nzSelectedKeys: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzChange: [{
      type: Output
    }],
    nzSearchChange: [{
      type: Output
    }],
    nzSelectChange: [{
      type: Output
    }]
  });
})();
var NzTransferModule = class _NzTransferModule {
  static {
    this.ɵfac = function NzTransferModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTransferModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzTransferModule,
      imports: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
      exports: [NzTransferComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransferModule, [{
    type: NgModule,
    args: [{
      imports: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
      exports: [NzTransferComponent]
    }]
  }], null, null);
})();
export {
  NzTransferComponent,
  NzTransferListComponent,
  NzTransferModule,
  NzTransferSearchComponent
};
//# sourceMappingURL=ng-zorro-antd_transfer.js.map
