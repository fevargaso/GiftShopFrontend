import {
  NzInputGroupWhitSuffixOrPrefixDirective
<<<<<<< HEAD
} from "./chunk-KRAEMMBK.js";
=======
} from "./chunk-AYXSZECH.js";
import "./chunk-XWVFFAIR.js";
import "./chunk-LNYH634O.js";
>>>>>>> Dev
import {
  ConnectionPositionPair,
  Overlay,
  OverlayConfig
<<<<<<< HEAD
} from "./chunk-PO6E6Y3J.js";
import "./chunk-AEUXLSPP.js";
import "./chunk-I4EIQSMV.js";
import "./chunk-LJRWQYAH.js";
=======
} from "./chunk-LDS4HVDD.js";
import "./chunk-WTI5C2VR.js";
import {
  TemplatePortal
} from "./chunk-7S7FNE45.js";
>>>>>>> Dev
import {
  DOWN_ARROW,
  ENTER,
  ESCAPE,
  TAB,
  UP_ARROW
} from "./chunk-L6TDEO2O.js";
<<<<<<< HEAD
import {
  TemplatePortal
} from "./chunk-566VGUUV.js";
import {
  NzNoAnimationDirective
} from "./chunk-EDWEZ7BQ.js";
import "./chunk-JLQKZ77O.js";
import "./chunk-LO2Q6FY3.js";
import {
  slideMotion
} from "./chunk-KBDOH27Z.js";
import "./chunk-BTWL6VBQ.js";
import "./chunk-FF3CGWPP.js";
import "./chunk-EURECYGD.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-I4HQEHIX.js";
import "./chunk-U3FXVSFW.js";
import "./chunk-VJ6EFMY2.js";
import "./chunk-UUWMY3QI.js";
import {
  Directionality
} from "./chunk-7DIMPZVY.js";
import "./chunk-FNQVWW6X.js";
import {
  numberAttributeWithZeroFallback,
  scrollIntoView
} from "./chunk-CEGLWSSJ.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-EWEKPUBL.js";
import "./chunk-SN4CB355.js";
import "./chunk-IGUNWB7S.js";
=======
import {
  NzNoAnimationDirective
} from "./chunk-EBJHMG7D.js";
import "./chunk-C2E3BLEZ.js";
import "./chunk-WKX643AZ.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-KFN5IZYX.js";
import {
  slideMotion
} from "./chunk-7UJESBFV.js";
import "./chunk-X7ZJCC2O.js";
import "./chunk-FF3CGWPP.js";
import "./chunk-BDNBJ7MQ.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-IHV2MBCH.js";
import "./chunk-XHVUBTOU.js";
import "./chunk-22ZON5OQ.js";
import "./chunk-KKAJIRPV.js";
import {
  Directionality
} from "./chunk-ZKBJSJEE.js";
import "./chunk-DXJSDFBE.js";
import {
  numberAttributeWithZeroFallback,
  scrollIntoView
} from "./chunk-IVFCXUEV.js";
import "./chunk-G2DTOTJO.js";
import "./chunk-EKMOTXNM.js";
>>>>>>> Dev
import {
  DOCUMENT,
  NgClass,
  NgStyle,
  NgTemplateOutlet
<<<<<<< HEAD
} from "./chunk-P5AJ7EIU.js";
=======
} from "./chunk-AFWQCB6S.js";
>>>>>>> Dev
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  afterNextRender,
  booleanAttribute,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
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
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
<<<<<<< HEAD
} from "./chunk-IJAPRJ4V.js";
=======
} from "./chunk-BD52RYQU.js";
import "./chunk-HIQUU2WY.js";
>>>>>>> Dev
import {
  defer,
  fromEvent,
  merge
<<<<<<< HEAD
} from "./chunk-TAJAR57M.js";
import "./chunk-IBPEAIWH.js";
=======
} from "./chunk-NHVCTQM5.js";
>>>>>>> Dev
import {
  Observable,
  Subject,
  Subscription,
  delay,
  filter,
  switchMap,
  takeUntil,
  tap
<<<<<<< HEAD
} from "./chunk-LY5LHBYX.js";
import "./chunk-4JLIZ3DY.js";
=======
} from "./chunk-4FM7L5J3.js";
>>>>>>> Dev
import "./chunk-TXDUYLVM.js";

// ../node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-render.mjs
var NZ_AFTER_NEXT_RENDER$ = new InjectionToken("nz-after-next-render", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return new Observable((subscriber) => {
      const ref = afterNextRender(() => {
        subscriber.next();
        subscriber.complete();
      }, {
        injector
      });
      return () => ref.destroy();
    });
  }
});

// ../node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-auto-complete.mjs
var _c0 = [[["nz-auto-option"]]];
var _c1 = ["nz-auto-option"];
function NzAutocompleteOptgroupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzLabel);
  }
}
var _c2 = ["*"];
var _c3 = ["panel"];
var _c4 = ["content"];
var _forTrack0 = ($index, $item) => $item.value;
function NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template(rf, ctx) {
}
function NzAutocompleteComponent_ng_template_0_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function NzAutocompleteComponent_ng_template_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzAutocompleteComponent_ng_template_0_ng_template_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-auto-option", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    ɵɵproperty("nzValue", option_r3.value)("nzLabel", option_r3.label);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", option_r3.label, " ");
  }
}
function NzAutocompleteComponent_ng_template_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzAutocompleteComponent_ng_template_0_ng_template_7_For_1_Template, 2, 3, "nz-auto-option", 7, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵrepeater(ctx_r1.normalizedDataSource);
  }
}
function NzAutocompleteComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3, 0);
    ɵɵlistener("@slideMotion.done", function NzAutocompleteComponent_ng_template_0_Template_div_animation_slideMotion_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEvent($event));
    });
    ɵɵelementStart(2, "div", 4)(3, "div", 5);
    ɵɵtemplate(4, NzAutocompleteComponent_ng_template_0_4_Template, 1, 0, null, 6);
    ɵɵelementEnd()()();
    ɵɵtemplate(5, NzAutocompleteComponent_ng_template_0_ng_template_5_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(7, NzAutocompleteComponent_ng_template_0_ng_template_7_Template, 2, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const contentTemplate_r4 = ɵɵreference(6);
    const optionsTemplate_r5 = ɵɵreference(8);
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-select-dropdown-hidden", !ctx_r1.showPanel)("ant-select-dropdown-rtl", ctx_r1.dir === "rtl");
    ɵɵproperty("ngClass", ctx_r1.nzOverlayClassName)("ngStyle", ctx_r1.nzOverlayStyle)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@slideMotion", void 0)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation));
    ɵɵadvance(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.nzDataSource ? optionsTemplate_r5 : contentTemplate_r4);
  }
}
var NzAutocompleteOptgroupComponent = class _NzAutocompleteOptgroupComponent {
  constructor() {
  }
  static {
    this.ɵfac = function NzAutocompleteOptgroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzAutocompleteOptgroupComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzAutocompleteOptgroupComponent,
      selectors: [["nz-auto-optgroup"]],
      inputs: {
        nzLabel: "nzLabel"
      },
      exportAs: ["nzAutoOptgroup"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 1,
      consts: [[1, "ant-select-item", "ant-select-item-group"], [4, "nzStringTemplateOutlet"]],
      template: function NzAutocompleteOptgroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c0);
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, NzAutocompleteOptgroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          ɵɵelementEnd();
          ɵɵprojection(2);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("nzStringTemplateOutlet", ctx.nzLabel);
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteOptgroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-auto-optgroup",
      exportAs: "nzAutoOptgroup",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [NzOutletModule],
      template: `
    <div class="ant-select-item ant-select-item-group">
      <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container>
    </div>
    <ng-content select="nz-auto-option"></ng-content>
  `
    }]
  }], () => [], {
    nzLabel: [{
      type: Input
    }]
  });
})();
var NzOptionSelectionChange = class {
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
};
var NzAutocompleteOptionComponent = class _NzAutocompleteOptionComponent {
  constructor(ngZone, changeDetectorRef, element) {
    this.ngZone = ngZone;
    this.changeDetectorRef = changeDetectorRef;
    this.element = element;
    this.nzDisabled = false;
    this.selectionChange = new EventEmitter();
    this.mouseEntered = new EventEmitter();
    this.active = false;
    this.selected = false;
    this.nzAutocompleteOptgroupComponent = inject(NzAutocompleteOptgroupComponent, {
      optional: true
    });
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.element.nativeElement, "mouseenter").pipe(filter(() => this.mouseEntered.observers.length > 0), takeUntil(this.destroy$)).subscribe(() => {
        this.ngZone.run(() => this.mouseEntered.emit(this));
      });
      fromEvent(this.element.nativeElement, "mousedown").pipe(takeUntil(this.destroy$)).subscribe((event) => event.preventDefault());
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  select(emit = true) {
    this.selected = true;
    this.changeDetectorRef.markForCheck();
    if (emit) {
      this.emitSelectionChangeEvent();
    }
  }
  deselect() {
    this.selected = false;
    this.changeDetectorRef.markForCheck();
    this.emitSelectionChangeEvent();
  }
  /** Git display label */
  getLabel() {
    return this.nzLabel || this.nzValue.toString();
  }
  /** Set active (only styles) */
  setActiveStyles() {
    if (!this.active) {
      this.active = true;
      this.changeDetectorRef.markForCheck();
    }
  }
  /** Unset active (only styles) */
  setInactiveStyles() {
    if (this.active) {
      this.active = false;
      this.changeDetectorRef.markForCheck();
    }
  }
  scrollIntoViewIfNeeded() {
    scrollIntoView(this.element.nativeElement);
  }
  selectViaInteraction() {
    if (!this.nzDisabled) {
      this.selected = !this.selected;
      if (this.selected) {
        this.setActiveStyles();
      } else {
        this.setInactiveStyles();
      }
      this.emitSelectionChangeEvent(true);
      this.changeDetectorRef.markForCheck();
    }
  }
  emitSelectionChangeEvent(isUserInput = false) {
    this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
  }
  static {
    this.ɵfac = function NzAutocompleteOptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzAutocompleteOptionComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzAutocompleteOptionComponent,
      selectors: [["nz-auto-option"]],
      hostAttrs: ["role", "menuitem", 1, "ant-select-item", "ant-select-item-option"],
      hostVars: 10,
      hostBindings: function NzAutocompleteOptionComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NzAutocompleteOptionComponent_click_HostBindingHandler() {
            return ctx.selectViaInteraction();
          });
        }
        if (rf & 2) {
          ɵɵattribute("aria-selected", ctx.selected.toString())("aria-disabled", ctx.nzDisabled.toString());
          ɵɵclassProp("ant-select-item-option-grouped", ctx.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected", ctx.selected)("ant-select-item-option-active", ctx.active)("ant-select-item-option-disabled", ctx.nzDisabled);
        }
      },
      inputs: {
        nzValue: "nzValue",
        nzLabel: "nzLabel",
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute]
      },
      outputs: {
        selectionChange: "selectionChange",
        mouseEntered: "mouseEntered"
      },
      exportAs: ["nzAutoOption"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c2,
      decls: 2,
      vars: 0,
      consts: [[1, "ant-select-item-option-content"]],
      template: function NzAutocompleteOptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteOptionComponent, [{
    type: Component,
    args: [{
      selector: "nz-auto-option",
      exportAs: "nzAutoOption",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      template: `
    <div class="ant-select-item-option-content">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        role: "menuitem",
        class: "ant-select-item ant-select-item-option",
        "[class.ant-select-item-option-grouped]": "nzAutocompleteOptgroupComponent",
        "[class.ant-select-item-option-selected]": "selected",
        "[class.ant-select-item-option-active]": "active",
        "[class.ant-select-item-option-disabled]": "nzDisabled",
        "[attr.aria-selected]": "selected.toString()",
        "[attr.aria-disabled]": "nzDisabled.toString()",
        "(click)": "selectViaInteraction()"
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    nzValue: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectionChange: [{
      type: Output
    }],
    mouseEntered: [{
      type: Output
    }]
  });
})();
var NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NzAutocompleteTriggerDirective),
  multi: true
};
function getNzAutocompleteMissingPanelError() {
  return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");
}
var NzAutocompleteTriggerDirective = class _NzAutocompleteTriggerDirective {
  /** Current active option */
  get activeOption() {
    if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
      return this.nzAutocomplete.activeItem;
    } else {
      return null;
    }
  }
  constructor(ngZone, elementRef, overlay, viewContainerRef) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.overlay = overlay;
    this.viewContainerRef = viewContainerRef;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.panelOpen = false;
    this.destroy$ = new Subject();
    this.overlayRef = null;
    this.portal = null;
    this.previousValue = null;
    this.document = inject(DOCUMENT);
    this.nzInputGroupWhitSuffixOrPrefixDirective = inject(NzInputGroupWhitSuffixOrPrefixDirective, {
      optional: true
    });
  }
  ngAfterViewInit() {
    if (this.nzAutocomplete) {
      this.nzAutocomplete.animationStateChange.pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event.toState === "void") {
          if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
          }
        }
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroyPanel();
  }
  writeValue(value) {
    this.ngZone.runOutsideAngular(() => Promise.resolve(null).then(() => this.setTriggerValue(value)));
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    const element = this.elementRef.nativeElement;
    element.disabled = isDisabled;
    this.closePanel();
  }
  openPanel() {
    this.previousValue = this.elementRef.nativeElement.value;
    this.attachOverlay();
    this.updateStatus();
  }
  closePanel() {
    if (this.panelOpen) {
      this.nzAutocomplete.isOpen = this.panelOpen = false;
      if (this.overlayRef && this.overlayRef.hasAttached()) {
        this.overlayRef.detach();
        this.selectionChangeSubscription.unsubscribe();
        this.overlayOutsideClickSubscription.unsubscribe();
        this.optionsChangeSubscription.unsubscribe();
        this.portal = null;
      }
    }
  }
  handleKeydown(event) {
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
    if (keyCode === ESCAPE) {
      event.preventDefault();
    }
    if (this.panelOpen && (keyCode === ESCAPE || keyCode === TAB)) {
      if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
        this.setTriggerValue(this.previousValue);
      }
      this.closePanel();
    } else if (this.panelOpen && keyCode === ENTER) {
      if (this.nzAutocomplete.showPanel) {
        event.preventDefault();
        if (this.activeOption) {
          this.activeOption.selectViaInteraction();
        } else {
          this.closePanel();
        }
      }
    } else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
      event.stopPropagation();
      event.preventDefault();
      if (keyCode === UP_ARROW) {
        this.nzAutocomplete.setPreviousItemActive();
      } else {
        this.nzAutocomplete.setNextItemActive();
      }
      if (this.activeOption) {
        this.activeOption.scrollIntoViewIfNeeded();
      }
      this.doBackfill();
    }
  }
  handleInput(event) {
    const target = event.target;
    const document = this.document;
    let value = target.value;
    if (target.type === "number") {
      value = value === "" ? null : parseFloat(value);
    }
    if (this.previousValue !== value) {
      this.previousValue = value;
      this.onChange(value);
      if (this.canOpen() && document.activeElement === event.target) {
        this.openPanel();
      }
    }
  }
  handleFocus() {
    if (this.canOpen()) {
      this.openPanel();
    }
  }
  handleBlur() {
    this.onTouched();
  }
  /**
   * Subscription data source changes event
   */
  subscribeOptionsChange() {
    const optionChanges = this.nzAutocomplete.options.changes.pipe(tap(() => this.positionStrategy.reapplyLastPosition()), delay(0));
    return optionChanges.subscribe(() => {
      this.resetActiveItem();
      if (this.panelOpen) {
        this.overlayRef.updatePosition();
      }
    });
  }
  /**
   * Subscription option changes event and set the value
   */
  subscribeSelectionChange() {
    return this.nzAutocomplete.selectionChange.subscribe((option) => {
      this.setValueAndClose(option);
    });
  }
  subscribeOverlayOutsideClick() {
    return this.overlayRef.outsidePointerEvents().pipe(filter((e) => !this.elementRef.nativeElement.contains(e.target))).subscribe(() => {
      this.closePanel();
    });
  }
  attachOverlay() {
    if (!this.nzAutocomplete) {
      throw getNzAutocompleteMissingPanelError();
    }
    if (!this.portal && this.nzAutocomplete.template) {
      this.portal = new TemplatePortal(this.nzAutocomplete.template, this.viewContainerRef);
    }
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create(this.getOverlayConfig());
    }
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.portal);
      this.selectionChangeSubscription = this.subscribeSelectionChange();
      this.optionsChangeSubscription = this.subscribeOptionsChange();
      this.overlayOutsideClickSubscription = this.subscribeOverlayOutsideClick();
      this.overlayRef.detachments().pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.closePanel();
      });
    }
    this.nzAutocomplete.isOpen = this.panelOpen = true;
  }
  updateStatus() {
    if (this.overlayRef) {
      this.overlayRef.updateSize({
        width: this.nzAutocomplete.nzWidth || this.getHostWidth()
      });
    }
    this.nzAutocomplete.setVisibility();
    this.resetActiveItem();
    if (this.activeOption) {
      this.activeOption.scrollIntoViewIfNeeded();
    }
  }
  destroyPanel() {
    if (this.overlayRef) {
      this.closePanel();
    }
  }
  getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this.getOverlayPosition(),
      disposeOnNavigation: true,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      // default host element width
      width: this.nzAutocomplete.nzWidth || this.getHostWidth()
    });
  }
  getConnectedElement() {
    return this.nzInputGroupWhitSuffixOrPrefixDirective ? this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef : this.elementRef;
  }
  getHostWidth() {
    return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
  }
  getOverlayPosition() {
    const positions = [new ConnectionPositionPair({
      originX: "start",
      originY: "bottom"
    }, {
      overlayX: "start",
      overlayY: "top"
    }), new ConnectionPositionPair({
      originX: "start",
      originY: "top"
    }, {
      overlayX: "start",
      overlayY: "bottom"
    })];
    this.positionStrategy = this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(false).withPush(false).withPositions(positions).withTransformOriginOn(".ant-select-dropdown");
    return this.positionStrategy;
  }
  resetActiveItem() {
    const index = this.nzAutocomplete.getOptionIndex(this.previousValue);
    this.nzAutocomplete.clearSelectedOptions(null, true);
    if (index !== -1) {
      this.nzAutocomplete.setActiveItem(index);
      this.nzAutocomplete.activeItem.select(false);
    } else {
      this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
    }
  }
  setValueAndClose(option) {
    const value = option.nzValue;
    this.setTriggerValue(option.getLabel());
    this.onChange(value);
    this.elementRef.nativeElement.focus();
    this.closePanel();
  }
  setTriggerValue(value) {
    const option = this.nzAutocomplete.getOption(value);
    const displayValue = option ? option.getLabel() : value;
    this.elementRef.nativeElement.value = displayValue != null ? displayValue : "";
    if (!this.nzAutocomplete.nzBackfill) {
      this.previousValue = displayValue;
    }
  }
  doBackfill() {
    if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
      this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
    }
  }
  canOpen() {
    const element = this.elementRef.nativeElement;
    return !element.readOnly && !element.disabled;
  }
  static {
    this.ɵfac = function NzAutocompleteTriggerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzAutocompleteTriggerDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzAutocompleteTriggerDirective,
      selectors: [["input", "nzAutocomplete", ""], ["textarea", "nzAutocomplete", ""]],
      hostAttrs: ["autocomplete", "off", "aria-autocomplete", "list"],
      hostBindings: function NzAutocompleteTriggerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin", function NzAutocompleteTriggerDirective_focusin_HostBindingHandler() {
            return ctx.handleFocus();
          })("blur", function NzAutocompleteTriggerDirective_blur_HostBindingHandler() {
            return ctx.handleBlur();
          })("input", function NzAutocompleteTriggerDirective_input_HostBindingHandler($event) {
            return ctx.handleInput($event);
          })("keydown", function NzAutocompleteTriggerDirective_keydown_HostBindingHandler($event) {
            return ctx.handleKeydown($event);
          });
        }
      },
      inputs: {
        nzAutocomplete: "nzAutocomplete"
      },
      exportAs: ["nzAutocompleteTrigger"],
      standalone: true,
      features: [ɵɵProvidersFeature([NZ_AUTOCOMPLETE_VALUE_ACCESSOR])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteTriggerDirective, [{
    type: Directive,
    args: [{
      selector: `input[nzAutocomplete], textarea[nzAutocomplete]`,
      exportAs: "nzAutocompleteTrigger",
      providers: [NZ_AUTOCOMPLETE_VALUE_ACCESSOR],
      standalone: true,
      host: {
        autocomplete: "off",
        "aria-autocomplete": "list",
        "(focusin)": "handleFocus()",
        "(blur)": "handleBlur()",
        "(input)": "handleInput($event)",
        "(keydown)": "handleKeydown($event)"
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: Overlay
  }, {
    type: ViewContainerRef
  }], {
    nzAutocomplete: [{
      type: Input
    }]
  });
})();
function normalizeDataSource(value) {
  return value?.map((item) => {
    if (typeof item === "number" || typeof item === "string") {
      return {
        label: item.toString(),
        value: item.toString()
      };
    }
    return item;
  });
}
var NzAutocompleteComponent = class _NzAutocompleteComponent {
  /**
   * Options accessor, its source may be content or dataSource
   */
  get options() {
    if (this.nzDataSource) {
      return this.fromDataSourceOptions;
    } else {
      return this.fromContentOptions;
    }
  }
  constructor(changeDetectorRef, directionality) {
    this.changeDetectorRef = changeDetectorRef;
    this.directionality = directionality;
    this.nzOverlayClassName = "";
    this.nzOverlayStyle = {};
    this.nzDefaultActiveFirstOption = true;
    this.nzBackfill = false;
    this.compareWith = (o1, o2) => o1 === o2;
    this.selectionChange = new EventEmitter();
    this.showPanel = true;
    this.isOpen = false;
    this.activeItem = null;
    this.dir = "ltr";
    this.normalizedDataSource = [];
    this.destroy$ = new Subject();
    this.animationStateChange = new EventEmitter();
    this.activeItemIndex = -1;
    this.selectionChangeSubscription = Subscription.EMPTY;
    this.optionMouseEnterSubscription = Subscription.EMPTY;
    this.dataSourceChangeSubscription = Subscription.EMPTY;
    this.optionSelectionChanges = defer(() => {
      if (this.options) {
        return merge(...this.options.map((option) => option.selectionChange));
      }
      return this.afterNextRender$.pipe(switchMap(() => this.optionSelectionChanges));
    });
    this.optionMouseEnter = defer(() => {
      if (this.options) {
        return merge(...this.options.map((option) => option.mouseEntered));
      }
      return this.afterNextRender$.pipe(switchMap(() => this.optionMouseEnter));
    });
    this.afterNextRender$ = inject(NZ_AFTER_NEXT_RENDER$);
    this.noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.changeDetectorRef.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzDataSource
    } = changes;
    if (nzDataSource) {
      this.normalizedDataSource = normalizeDataSource(nzDataSource.currentValue);
    }
  }
  onAnimationEvent(event) {
    this.animationStateChange.emit(event);
  }
  ngAfterContentInit() {
    if (!this.nzDataSource) {
      this.optionsInit();
    }
  }
  ngAfterViewInit() {
    if (this.nzDataSource) {
      this.optionsInit();
    }
  }
  ngOnDestroy() {
    this.dataSourceChangeSubscription.unsubscribe();
    this.selectionChangeSubscription.unsubscribe();
    this.optionMouseEnterSubscription.unsubscribe();
    this.dataSourceChangeSubscription = this.selectionChangeSubscription = this.optionMouseEnterSubscription = null;
    this.destroy$.next();
    this.destroy$.complete();
  }
  setVisibility() {
    this.showPanel = !!this.options.length;
    this.changeDetectorRef.markForCheck();
  }
  setActiveItem(index) {
    const activeItem = this.options.get(index);
    if (activeItem && !activeItem.active) {
      this.activeItem = activeItem;
      this.activeItemIndex = index;
      this.clearSelectedOptions(this.activeItem);
      this.activeItem.setActiveStyles();
    } else {
      this.activeItem = null;
      this.activeItemIndex = -1;
      this.clearSelectedOptions();
    }
    this.changeDetectorRef.markForCheck();
  }
  setNextItemActive() {
    const nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
    this.setActiveItem(nextIndex);
  }
  setPreviousItemActive() {
    const previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
    this.setActiveItem(previousIndex);
  }
  getOptionIndex(value) {
    return this.options.reduce((result, current, index) => result === -1 ? this.compareWith(value, current.nzValue) ? index : -1 : result, -1);
  }
  getOption(value) {
    return this.options.find((item) => this.compareWith(value, item.nzValue)) || null;
  }
  optionsInit() {
    this.setVisibility();
    this.subscribeOptionChanges();
    const changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
    this.dataSourceChangeSubscription = changes.subscribe((e) => {
      if (!e.dirty && this.isOpen) {
        setTimeout(() => this.setVisibility());
      }
      this.subscribeOptionChanges();
    });
  }
  /**
   * Clear the status of options
   */
  clearSelectedOptions(skip, deselect = false) {
    this.options.forEach((option) => {
      if (option !== skip) {
        if (deselect) {
          option.deselect();
        }
        option.setInactiveStyles();
      }
    });
  }
  subscribeOptionChanges() {
    this.selectionChangeSubscription.unsubscribe();
    this.selectionChangeSubscription = this.optionSelectionChanges.pipe(filter((event) => event.isUserInput)).subscribe((event) => {
      event.source.select();
      event.source.setActiveStyles();
      this.activeItem = event.source;
      this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
      this.clearSelectedOptions(event.source, true);
      this.selectionChange.emit(event.source);
    });
    this.optionMouseEnterSubscription.unsubscribe();
    this.optionMouseEnterSubscription = this.optionMouseEnter.subscribe((event) => {
      event.setActiveStyles();
      this.activeItem = event;
      this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
      this.clearSelectedOptions(event);
    });
  }
  static {
    this.ɵfac = function NzAutocompleteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzAutocompleteComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzAutocompleteComponent,
      selectors: [["nz-autocomplete"]],
      contentQueries: function NzAutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NzAutocompleteOptionComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fromContentOptions = _t);
        }
      },
      viewQuery: function NzAutocompleteComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TemplateRef, 5);
          ɵɵviewQuery(_c3, 5);
          ɵɵviewQuery(_c4, 5);
          ɵɵviewQuery(NzAutocompleteOptionComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panel = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fromDataSourceOptions = _t);
        }
      },
      inputs: {
        nzWidth: [2, "nzWidth", "nzWidth", numberAttributeWithZeroFallback],
        nzOverlayClassName: "nzOverlayClassName",
        nzOverlayStyle: "nzOverlayStyle",
        nzDefaultActiveFirstOption: [2, "nzDefaultActiveFirstOption", "nzDefaultActiveFirstOption", booleanAttribute],
        nzBackfill: [2, "nzBackfill", "nzBackfill", booleanAttribute],
        compareWith: "compareWith",
        nzDataSource: "nzDataSource"
      },
      outputs: {
        selectionChange: "selectionChange"
      },
      exportAs: ["nzAutocomplete"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c2,
      decls: 1,
      vars: 0,
      consts: [["panel", ""], ["contentTemplate", ""], ["optionsTemplate", ""], [1, "ant-select-dropdown", "ant-select-dropdown-placement-bottomLeft", 3, "ngClass", "ngStyle", "nzNoAnimation"], [2, "max-height", "256px", "overflow-y", "auto", "overflow-anchor", "none"], [2, "display", "flex", "flex-direction", "column"], [4, "ngTemplateOutlet"], [3, "nzValue", "nzLabel"]],
      template: function NzAutocompleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_Template, 9, 10, "ng-template");
        }
      },
      dependencies: [NgClass, NgStyle, NgTemplateOutlet, NzAutocompleteOptionComponent, NzNoAnimationDirective],
      encapsulation: 2,
      data: {
        animation: [slideMotion]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteComponent, [{
    type: Component,
    args: [{
      selector: "nz-autocomplete",
      exportAs: "nzAutocomplete",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [NgClass, NgStyle, NgTemplateOutlet, NzAutocompleteOptionComponent, NzNoAnimationDirective],
      template: `
    <ng-template>
      <div
        #panel
        class="ant-select-dropdown ant-select-dropdown-placement-bottomLeft"
        [class.ant-select-dropdown-hidden]="!showPanel"
        [class.ant-select-dropdown-rtl]="dir === 'rtl'"
        [ngClass]="nzOverlayClassName"
        [ngStyle]="nzOverlayStyle"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        @slideMotion
        (@slideMotion.done)="onAnimationEvent($event)"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
      >
        <div style="max-height: 256px; overflow-y: auto; overflow-anchor: none;">
          <div style="display: flex; flex-direction: column;">
            <ng-template *ngTemplateOutlet="nzDataSource ? optionsTemplate : contentTemplate"></ng-template>
          </div>
        </div>
      </div>
      <ng-template #contentTemplate>
        <ng-content></ng-content>
      </ng-template>
      <ng-template #optionsTemplate>
        @for (option of normalizedDataSource; track option.value) {
          <nz-auto-option [nzValue]="option.value" [nzLabel]="option.label">
            {{ option.label }}
          </nz-auto-option>
        }
      </ng-template>
    </ng-template>
  `,
      animations: [slideMotion]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    nzWidth: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzOverlayClassName: [{
      type: Input
    }],
    nzOverlayStyle: [{
      type: Input
    }],
    nzDefaultActiveFirstOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBackfill: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareWith: [{
      type: Input
    }],
    nzDataSource: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    fromContentOptions: [{
      type: ContentChildren,
      args: [NzAutocompleteOptionComponent, {
        descendants: true
      }]
    }],
    fromDataSourceOptions: [{
      type: ViewChildren,
      args: [NzAutocompleteOptionComponent]
    }],
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: false
      }]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel", {
        static: false
      }]
    }],
    content: [{
      type: ViewChild,
      args: ["content", {
        static: false
      }]
    }]
  });
})();
var NzAutocompleteModule = class _NzAutocompleteModule {
  static {
    this.ɵfac = function NzAutocompleteModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzAutocompleteModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzAutocompleteModule,
      imports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
      exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzAutocompleteOptgroupComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteModule, [{
    type: NgModule,
    args: [{
      exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
      imports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent]
    }]
  }], null, null);
})();
export {
  NZ_AUTOCOMPLETE_VALUE_ACCESSOR,
  NzAutocompleteComponent,
  NzAutocompleteModule,
  NzAutocompleteOptgroupComponent,
  NzAutocompleteOptionComponent,
  NzAutocompleteTriggerDirective,
  NzOptionSelectionChange,
  getNzAutocompleteMissingPanelError
};
//# sourceMappingURL=ng-zorro-antd_auto-complete.js.map
