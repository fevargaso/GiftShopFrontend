import {
  NzTreeBase,
  NzTreeBaseService,
  NzTreeComponent,
  NzTreeHigherOrderServiceToken,
  NzTreeModule
} from "./chunk-IPPZ6VE2.js";
import {
  NzSelectArrowComponent,
  NzSelectClearComponent,
  NzSelectItemComponent,
  NzSelectModule,
  NzSelectPlaceholderComponent,
  NzSelectSearchComponent
} from "./chunk-QKQHB4PB.js";
import "./chunk-RKSLPQTA.js";
import {
  NzEmbedEmptyComponent,
  NzEmptyModule
} from "./chunk-WKB25I6L.js";
import "./chunk-3FEXQASO.js";
import "./chunk-LMELZ4CC.js";
import {
  NzConnectedOverlayDirective,
  NzOverlayModule,
  POSITION_MAP
} from "./chunk-VK6IKY7V.js";
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin
} from "./chunk-PO6E6Y3J.js";
import "./chunk-AEUXLSPP.js";
import {
  FocusMonitor
} from "./chunk-I4EIQSMV.js";
import {
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormPatchModule,
  NzFormStatusService
} from "./chunk-LJRWQYAH.js";
import {
  BACKSPACE,
  ESCAPE,
  TAB
} from "./chunk-L6TDEO2O.js";
import "./chunk-566VGUUV.js";
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
import "./chunk-I4HQEHIX.js";
import {
  reqAnimFrame
} from "./chunk-U3FXVSFW.js";
import "./chunk-VJ6EFMY2.js";
import {
  _getEventTarget
} from "./chunk-UUWMY3QI.js";
import {
  Directionality
} from "./chunk-7DIMPZVY.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-FNQVWW6X.js";
import {
  getStatusClassNames,
  isNotNil
} from "./chunk-CEGLWSSJ.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-EWEKPUBL.js";
import "./chunk-SN4CB355.js";
import "./chunk-IGUNWB7S.js";
import {
  NgClass,
  NgStyle,
  SlicePipe
} from "./chunk-P5AJ7EIU.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  Renderer2,
  ViewChild,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-IJAPRJ4V.js";
import {
  merge
} from "./chunk-TAJAR57M.js";
import "./chunk-IBPEAIWH.js";
import {
  Subject,
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  of,
  startWith,
  takeUntil,
  tap,
  withLatestFrom
} from "./chunk-LY5LHBYX.js";
import {
  __decorate
} from "./chunk-4JLIZ3DY.js";
import "./chunk-TXDUYLVM.js";

// ../node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tree-select.mjs
var _c0 = ["nzTreeTemplate"];
var _c1 = ["treeRef"];
var _forTrack0 = ($index, $item) => $item.key;
var _c2 = () => [];
function NzTreeSelectComponent_ng_template_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵelement(1, "nz-embed-empty", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzComponentName", "tree-select")("specificContent", ctx_r1.nzNotFoundContent);
  }
}
function NzTreeSelectComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8)(1, "nz-tree", 9, 0);
    ɵɵlistener("nzExpandChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzExpandChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onExpandedKeysChange($event));
    })("nzClick", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nzTreeClick.emit($event));
    })("nzCheckedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckedKeysChange_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateSelectedNodes());
    })("nzSelectedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSelectedKeysChange_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateSelectedNodes());
    })("nzCheckBoxChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckBoxChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nzTreeCheckBoxChange.emit($event));
    })("nzSearchValueChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSearchValueChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setSearchValues($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, NzTreeSelectComponent_ng_template_0_Conditional_3_Template, 2, 2, "span", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-select-dropdown-placement-bottomLeft", ctx_r1.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r1.dropDownPosition === "top")("ant-tree-select-dropdown-rtl", ctx_r1.dir === "rtl");
    ɵɵproperty("@slideMotion", "enter")("ngClass", ctx_r1.dropdownClassName)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("dir", ctx_r1.dir)("ngStyle", ctx_r1.nzDropdownStyle);
    ɵɵadvance();
    ɵɵproperty("hidden", ctx_r1.isNotFound)("nzData", ctx_r1.nzNodes)("nzMultiple", ctx_r1.nzMultiple)("nzSearchValue", ctx_r1.inputValue)("nzHideUnMatched", ctx_r1.nzHideUnMatched)("nzShowIcon", ctx_r1.nzShowIcon)("nzCheckable", ctx_r1.nzCheckable)("nzAsyncData", ctx_r1.nzAsyncData)("nzShowExpand", ctx_r1.nzShowExpand)("nzShowLine", ctx_r1.nzShowLine)("nzExpandedIcon", ctx_r1.nzExpandedIcon)("nzExpandAll", ctx_r1.nzDefaultExpandAll)("nzExpandedKeys", ctx_r1.expandedKeys)("nzCheckedKeys", ctx_r1.nzCheckable ? ctx_r1.value : ɵɵpureFunction0(34, _c2))("nzSelectedKeys", !ctx_r1.nzCheckable ? ctx_r1.value : ɵɵpureFunction0(35, _c2))("nzTreeTemplate", ctx_r1.treeTemplate)("nzCheckStrictly", ctx_r1.nzCheckStrictly)("nzVirtualItemSize", ctx_r1.nzVirtualItemSize)("nzVirtualMaxBufferPx", ctx_r1.nzVirtualMaxBufferPx)("nzVirtualMinBufferPx", ctx_r1.nzVirtualMinBufferPx)("nzVirtualHeight", ctx_r1.nzVirtualHeight);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.nzNodes.length === 0 || ctx_r1.isNotFound ? 3 : -1);
  }
}
function NzTreeSelectComponent_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select-item", 13);
    ɵɵlistener("delete", function NzTreeSelectComponent_Conditional_2_For_1_Template_nz_select_item_delete_0_listener() {
      const node_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.removeSelected(node_r4, true));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const node_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("deletable", true)("disabled", node_r4.isDisabled || ctx_r1.nzDisabled)("label", ctx_r1.nzDisplayWith(node_r4));
  }
}
function NzTreeSelectComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-select-item", 12);
    ɵɵpipe(1, "slice");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("contentTemplateOutlet", ctx_r1.nzMaxTagPlaceholder)("contentTemplateOutletContext", ɵɵpipeBind2(1, 5, ctx_r1.selectedNodes, ctx_r1.nzMaxTagCount))("deletable", false)("disabled", false)("label", "+ " + (ctx_r1.selectedNodes.length - ctx_r1.nzMaxTagCount) + " ...");
  }
}
function NzTreeSelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzTreeSelectComponent_Conditional_2_For_1_Template, 1, 3, "nz-select-item", 6, _forTrack0);
    ɵɵpipe(2, "slice");
    ɵɵtemplate(3, NzTreeSelectComponent_Conditional_2_Conditional_3_Template, 2, 8, "nz-select-item", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵrepeater(ɵɵpipeBind3(2, 1, ctx_r1.selectedNodes, 0, ctx_r1.nzMaxTagCount));
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.selectedNodes.length > ctx_r1.nzMaxTagCount ? 3 : -1);
  }
}
function NzTreeSelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-select-placeholder", 14);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("display", ctx_r1.placeHolderDisplay);
    ɵɵproperty("placeholder", ctx_r1.nzPlaceHolder);
  }
}
function NzTreeSelectComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-select-item", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("deletable", false)("disabled", false)("label", ctx_r1.nzDisplayWith(ctx_r1.selectedNodes[0]));
  }
}
function NzTreeSelectComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-select-arrow");
  }
}
function NzTreeSelectComponent_Conditional_7_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("status", ctx_r1.status);
  }
}
function NzTreeSelectComponent_Conditional_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTreeSelectComponent_Conditional_7_ng_template_1_Conditional_0_Template, 1, 1, "nz-form-item-feedback-icon", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r1.hasFeedback && !!ctx_r1.status ? 0 : -1);
  }
}
function NzTreeSelectComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-select-arrow", 7);
    ɵɵtemplate(1, NzTreeSelectComponent_Conditional_7_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const feedbackIconTpl_r5 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("showArrow", !ctx_r1.isMultiple)("feedbackIcon", feedbackIconTpl_r5);
  }
}
function NzTreeSelectComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select-clear", 16);
    ɵɵlistener("clear", function NzTreeSelectComponent_Conditional_8_Template_nz_select_clear_clear_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClearSelection());
    });
    ɵɵelementEnd();
  }
}
var NzTreeSelectService = class _NzTreeSelectService extends NzTreeBaseService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNzTreeSelectService_BaseFactory;
      return function NzTreeSelectService_Factory(__ngFactoryType__) {
        return (ɵNzTreeSelectService_BaseFactory || (ɵNzTreeSelectService_BaseFactory = ɵɵgetInheritedFactory(_NzTreeSelectService)))(__ngFactoryType__ || _NzTreeSelectService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NzTreeSelectService,
      factory: _NzTreeSelectService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeSelectService, [{
    type: Injectable
  }], null, null);
})();
var NZ_CONFIG_MODULE_NAME = "treeSelect";
var TREE_SELECT_DEFAULT_CLASS = "ant-select-dropdown ant-select-tree-dropdown";
var listOfPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
var NzTreeSelectComponent = class _NzTreeSelectComponent extends NzTreeBase {
  set nzExpandedKeys(value) {
    this.expandedKeys = value;
  }
  get nzExpandedKeys() {
    return this.expandedKeys;
  }
  get treeTemplate() {
    return this.nzTreeTemplate || this.nzTreeTemplateChild;
  }
  get placeHolderDisplay() {
    return this.inputValue || this.isComposing || this.selectedNodes.length ? "none" : "block";
  }
  get isMultiple() {
    return this.nzMultiple || this.nzCheckable;
  }
  constructor(nzTreeService, nzConfigService, renderer, cdr, elementRef, directionality, focusMonitor) {
    super(nzTreeService);
    this.nzConfigService = nzConfigService;
    this.renderer = renderer;
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.focusMonitor = focusMonitor;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzId = null;
    this.nzAllowClear = true;
    this.nzShowExpand = true;
    this.nzShowLine = false;
    this.nzDropdownMatchSelectWidth = true;
    this.nzCheckable = false;
    this.nzHideUnMatched = false;
    this.nzShowIcon = false;
    this.nzShowSearch = false;
    this.nzDisabled = false;
    this.nzAsyncData = false;
    this.nzMultiple = false;
    this.nzDefaultExpandAll = false;
    this.nzCheckStrictly = false;
    this.nzVirtualItemSize = 28;
    this.nzVirtualMaxBufferPx = 500;
    this.nzVirtualMinBufferPx = 28;
    this.nzVirtualHeight = null;
    this.nzNodes = [];
    this.nzOpen = false;
    this.nzSize = "default";
    this.nzPlaceHolder = "";
    this.nzDropdownStyle = null;
    this.nzBackdrop = false;
    this.nzStatus = "";
    this.nzPlacement = "";
    this.nzDisplayWith = (node) => node.title;
    this.nzMaxTagPlaceholder = null;
    this.nzOpenChange = new EventEmitter();
    this.nzCleared = new EventEmitter();
    this.nzRemoved = new EventEmitter();
    this.nzExpandChange = new EventEmitter();
    this.nzTreeClick = new EventEmitter();
    this.nzTreeCheckBoxChange = new EventEmitter();
    this.prefixCls = "ant-select";
    this.statusCls = {};
    this.status = "";
    this.hasFeedback = false;
    this.dropdownClassName = TREE_SELECT_DEFAULT_CLASS;
    this.isComposing = false;
    this.isDestroy = true;
    this.isNotFound = false;
    this.focused = false;
    this.inputValue = "";
    this.dropDownPosition = "bottom";
    this.selectedNodes = [];
    this.expandedKeys = [];
    this.value = [];
    this.dir = "ltr";
    this.positions = [];
    this.destroy$ = new Subject();
    this.isNzDisableFirstChange = true;
    this.isComposingChange$ = new Subject();
    this.searchValueChange$ = new Subject();
    this.onChange = (_value) => {
    };
    this.onTouched = () => {
    };
    this.noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
    this.nzFormStatusService = inject(NzFormStatusService, {
      optional: true
    });
    this.nzFormNoStatusService = inject(NzFormNoStatusService, {
      optional: true
    });
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
    })), takeUntil(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.isDestroy = false;
    this.subscribeSelectionChange();
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        this.focused = false;
        this.cdr.markForCheck();
        Promise.resolve().then(() => {
          this.onTouched();
        });
      } else {
        this.focused = true;
        this.cdr.markForCheck();
      }
    });
    combineLatest([this.searchValueChange$, this.isComposingChange$.pipe(startWith(false))]).pipe(takeUntil(this.destroy$)).subscribe(([searchValue, isComposing]) => {
      this.isComposing = isComposing;
      if (!isComposing) {
        this.inputValue = searchValue;
        this.updatePosition();
      }
    });
  }
  ngOnDestroy() {
    this.isDestroy = true;
    this.closeDropDown();
    this.destroy$.next();
    this.destroy$.complete();
  }
  isComposingChange(isComposing) {
    this.isComposingChange$.next(isComposing);
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.closeDropDown();
    this.isNzDisableFirstChange = false;
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
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
  ngOnChanges(changes) {
    const {
      nzNodes,
      nzDropdownClassName,
      nzStatus,
      nzPlacement
    } = changes;
    if (nzNodes) {
      this.updateSelectedNodes(true);
    }
    if (nzDropdownClassName) {
      const className = this.nzDropdownClassName && this.nzDropdownClassName.trim();
      this.dropdownClassName = className ? `${TREE_SELECT_DEFAULT_CLASS} ${className}` : TREE_SELECT_DEFAULT_CLASS;
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
    if (nzPlacement && this.nzPlacement) {
      if (POSITION_MAP[this.nzPlacement]) {
        this.positions = [POSITION_MAP[this.nzPlacement]];
      }
    }
  }
  writeValue(value) {
    if (isNotNil(value)) {
      if (this.isMultiple && Array.isArray(value)) {
        this.value = value;
      } else {
        this.value = [value];
      }
      this.clearSelectedNodes();
      this.updateSelectedNodes(true);
    } else {
      this.value = [];
      this.clearSelectedNodes();
      this.selectedNodes = [];
    }
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  onKeydown(event) {
    if (this.nzDisabled) {
      return;
    }
    switch (event.keyCode) {
      case ESCAPE:
        break;
      case TAB:
        this.closeDropDown();
        break;
      default:
        if (!this.nzOpen) {
          this.openDropdown();
        }
    }
  }
  trigger() {
    if (this.nzDisabled || !this.nzDisabled && this.nzOpen) {
      this.closeDropDown();
    } else {
      this.openDropdown();
    }
  }
  openDropdown() {
    if (!this.nzDisabled) {
      this.nzOpen = true;
      this.nzOpenChange.emit(this.nzOpen);
      this.updateCdkConnectedOverlayStatus();
      if (this.nzShowSearch || this.isMultiple) {
        this.focusOnInput();
      }
    }
  }
  closeDropDown() {
    this.onTouched();
    this.nzOpen = false;
    this.inputValue = "";
    this.isNotFound = false;
    this.nzOpenChange.emit(this.nzOpen);
    this.cdr.markForCheck();
  }
  onKeyDownInput(e) {
    const keyCode = e.keyCode;
    const eventTarget = e.target;
    if (this.isMultiple && !eventTarget.value && keyCode === BACKSPACE) {
      e.preventDefault();
      if (this.selectedNodes.length) {
        const removeNode = this.selectedNodes[this.selectedNodes.length - 1];
        if (removeNode && !removeNode.isDisabled) {
          this.removeSelected(removeNode);
        }
      }
    }
  }
  onExpandedKeysChange(value) {
    this.nzExpandChange.emit(value);
    this.expandedKeys = [...value.keys];
  }
  setInputValue(value) {
    this.searchValueChange$.next(value);
  }
  removeSelected(node, emit = true) {
    node.isSelected = false;
    node.isChecked = false;
    if (this.nzCheckable) {
      this.nzTreeService.conduct(node, this.nzCheckStrictly);
    } else {
      this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
    }
    if (emit) {
      this.nzRemoved.emit(node);
    }
  }
  focusOnInput() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.focus();
    }
  }
  subscribeSelectionChange() {
    merge(this.nzTreeClick.pipe(tap((event) => {
      const node = event.node;
      if (this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
        node.isChecked = !node.isChecked;
        node.isHalfChecked = false;
        if (!this.nzCheckStrictly) {
          this.nzTreeService.conduct(node);
        }
      }
      if (this.nzCheckable) {
        node.isSelected = false;
      }
    }), filter((event) => {
      const node = event.node;
      return this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
    })), this.nzCheckable ? this.nzTreeCheckBoxChange.asObservable() : of(), this.nzCleared, this.nzRemoved).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateSelectedNodes();
      const value = this.selectedNodes.map((node) => node.key);
      this.value = [...value];
      if (this.nzShowSearch || this.isMultiple) {
        this.inputValue = "";
        this.isNotFound = false;
      }
      if (this.isMultiple) {
        this.onChange(value);
        this.focusOnInput();
        this.updatePosition();
      } else {
        this.closeDropDown();
        this.onChange(value.length ? value[0] : null);
      }
    });
  }
  updateSelectedNodes(init = false) {
    if (init) {
      const nodes = this.coerceTreeNodes(this.nzNodes);
      this.nzTreeService.isMultiple = this.isMultiple;
      this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
      this.nzTreeService.initTree(nodes);
      if (this.nzCheckable) {
        this.nzTreeService.conductCheck(this.value, this.nzCheckStrictly);
      } else {
        this.nzTreeService.conductSelectedKeys(this.value, this.isMultiple);
      }
    }
    this.selectedNodes = [...this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList()].sort((a, b) => {
      const indexA = this.value.indexOf(a.key);
      const indexB = this.value.indexOf(b.key);
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }
      if (indexA !== -1) {
        return -1;
      }
      if (indexB !== -1) {
        return 1;
      }
      return 0;
    });
  }
  updatePosition() {
    reqAnimFrame(() => {
      this.cdkConnectedOverlay?.overlayRef?.updatePosition();
    });
  }
  onPositionChange(position) {
    this.dropDownPosition = position.connectionPair.originY;
  }
  onClearSelection() {
    this.selectedNodes.forEach((node) => {
      this.removeSelected(node, false);
    });
    this.nzCleared.emit();
  }
  onClickOutside(event) {
    const target = _getEventTarget(event);
    if (!this.elementRef.nativeElement.contains(target)) {
      this.closeDropDown();
    }
  }
  setSearchValues($event) {
    Promise.resolve().then(() => {
      this.isNotFound = (this.nzShowSearch || this.isMultiple) && !!this.inputValue && $event.matchedKeys.length === 0;
    });
  }
  updateCdkConnectedOverlayStatus() {
    if (!this.nzPlacement || !listOfPositions.includes(POSITION_MAP[this.nzPlacement])) {
      this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    }
  }
  clearSelectedNodes() {
    this.selectedNodes.forEach((node) => {
      this.removeSelected(node, false);
    });
  }
  static {
    this.ɵfac = function NzTreeSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeSelectComponent)(ɵɵdirectiveInject(NzTreeSelectService), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality), ɵɵdirectiveInject(FocusMonitor));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTreeSelectComponent,
      selectors: [["nz-tree-select"]],
      contentQueries: function NzTreeSelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, _c0, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
        }
      },
      viewQuery: function NzTreeSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(NzSelectSearchComponent, 5);
          ɵɵviewQuery(_c1, 5);
          ɵɵviewQuery(CdkOverlayOrigin, 7);
          ɵɵviewQuery(CdkConnectedOverlay, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzSelectSearchComponent = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.treeRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
        }
      },
      hostAttrs: [1, "ant-select", "ant-tree-select"],
      hostVars: 24,
      hostBindings: function NzTreeSelectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NzTreeSelectComponent_click_HostBindingHandler() {
            return ctx.trigger();
          })("keydown", function NzTreeSelectComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeydown($event);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("ant-select-in-form-item", !!ctx.nzFormStatusService)("ant-select-lg", ctx.nzSize === "large")("ant-select-rtl", ctx.dir === "rtl")("ant-select-sm", ctx.nzSize === "small")("ant-select-disabled", ctx.nzDisabled)("ant-select-single", !ctx.isMultiple)("ant-select-show-arrow", !ctx.isMultiple)("ant-select-show-search", !ctx.isMultiple)("ant-select-multiple", ctx.isMultiple)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused);
        }
      },
      inputs: {
        nzId: "nzId",
        nzAllowClear: [2, "nzAllowClear", "nzAllowClear", booleanAttribute],
        nzShowExpand: [2, "nzShowExpand", "nzShowExpand", booleanAttribute],
        nzShowLine: [2, "nzShowLine", "nzShowLine", booleanAttribute],
        nzDropdownMatchSelectWidth: [2, "nzDropdownMatchSelectWidth", "nzDropdownMatchSelectWidth", booleanAttribute],
        nzCheckable: [2, "nzCheckable", "nzCheckable", booleanAttribute],
        nzHideUnMatched: [2, "nzHideUnMatched", "nzHideUnMatched", booleanAttribute],
        nzShowIcon: [2, "nzShowIcon", "nzShowIcon", booleanAttribute],
        nzShowSearch: [2, "nzShowSearch", "nzShowSearch", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzAsyncData: [2, "nzAsyncData", "nzAsyncData", booleanAttribute],
        nzMultiple: [2, "nzMultiple", "nzMultiple", booleanAttribute],
        nzDefaultExpandAll: [2, "nzDefaultExpandAll", "nzDefaultExpandAll", booleanAttribute],
        nzCheckStrictly: [2, "nzCheckStrictly", "nzCheckStrictly", booleanAttribute],
        nzVirtualItemSize: "nzVirtualItemSize",
        nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
        nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
        nzVirtualHeight: "nzVirtualHeight",
        nzExpandedIcon: "nzExpandedIcon",
        nzNotFoundContent: "nzNotFoundContent",
        nzNodes: "nzNodes",
        nzOpen: "nzOpen",
        nzSize: "nzSize",
        nzPlaceHolder: "nzPlaceHolder",
        nzDropdownStyle: "nzDropdownStyle",
        nzDropdownClassName: "nzDropdownClassName",
        nzBackdrop: "nzBackdrop",
        nzStatus: "nzStatus",
        nzPlacement: "nzPlacement",
        nzExpandedKeys: "nzExpandedKeys",
        nzDisplayWith: "nzDisplayWith",
        nzMaxTagCount: [2, "nzMaxTagCount", "nzMaxTagCount", numberAttribute],
        nzMaxTagPlaceholder: "nzMaxTagPlaceholder",
        nzTreeTemplate: "nzTreeTemplate"
      },
      outputs: {
        nzOpenChange: "nzOpenChange",
        nzCleared: "nzCleared",
        nzRemoved: "nzRemoved",
        nzExpandChange: "nzExpandChange",
        nzTreeClick: "nzTreeClick",
        nzTreeCheckBoxChange: "nzTreeCheckBoxChange"
      },
      exportAs: ["nzTreeSelect"],
      standalone: true,
      features: [ɵɵProvidersFeature([NzTreeSelectService, {
        provide: NzTreeHigherOrderServiceToken,
        useExisting: NzTreeSelectService
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NzTreeSelectComponent),
        multi: true
      }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 9,
      vars: 20,
      consts: [["treeRef", ""], ["feedbackIconTpl", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth"], ["cdkOverlayOrigin", "", 1, "ant-select-selector"], [3, "keydown", "isComposingChange", "valueChange", "nzId", "showInput", "value", "mirrorSync", "disabled", "focusTrigger"], [3, "placeholder", "display"], [3, "deletable", "disabled", "label"], [3, "showArrow", "feedbackIcon"], [3, "ngClass", "nzNoAnimation", "dir", "ngStyle"], ["nzNoAnimation", "", "nzSelectMode", "", "nzBlockNode", "", 3, "nzExpandChange", "nzClick", "nzCheckedKeysChange", "nzSelectedKeysChange", "nzCheckBoxChange", "nzSearchValueChange", "hidden", "nzData", "nzMultiple", "nzSearchValue", "nzHideUnMatched", "nzShowIcon", "nzCheckable", "nzAsyncData", "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzExpandAll", "nzExpandedKeys", "nzCheckedKeys", "nzSelectedKeys", "nzTreeTemplate", "nzCheckStrictly", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualHeight"], [1, "ant-select-not-found"], [3, "nzComponentName", "specificContent"], [3, "contentTemplateOutlet", "contentTemplateOutletContext", "deletable", "disabled", "label"], [3, "delete", "deletable", "disabled", "label"], [3, "placeholder"], [3, "status"], [3, "clear"]],
      template: function NzTreeSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzTreeSelectComponent_ng_template_0_Template, 4, 36, "ng-template", 2);
          ɵɵlistener("overlayOutsideClick", function NzTreeSelectComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
            return ctx.onClickOutside($event);
          })("detach", function NzTreeSelectComponent_Template_ng_template_detach_0_listener() {
            return ctx.closeDropDown();
          })("positionChange", function NzTreeSelectComponent_Template_ng_template_positionChange_0_listener($event) {
            return ctx.onPositionChange($event);
          });
          ɵɵelementStart(1, "div", 3);
          ɵɵtemplate(2, NzTreeSelectComponent_Conditional_2_Template, 4, 5);
          ɵɵelementStart(3, "nz-select-search", 4);
          ɵɵlistener("keydown", function NzTreeSelectComponent_Template_nz_select_search_keydown_3_listener($event) {
            return ctx.onKeyDownInput($event);
          })("isComposingChange", function NzTreeSelectComponent_Template_nz_select_search_isComposingChange_3_listener($event) {
            return ctx.isComposingChange($event);
          })("valueChange", function NzTreeSelectComponent_Template_nz_select_search_valueChange_3_listener($event) {
            return ctx.setInputValue($event);
          });
          ɵɵelementEnd();
          ɵɵtemplate(4, NzTreeSelectComponent_Conditional_4_Template, 1, 3, "nz-select-placeholder", 5)(5, NzTreeSelectComponent_Conditional_5_Template, 1, 3, "nz-select-item", 6)(6, NzTreeSelectComponent_Conditional_6_Template, 1, 0, "nz-select-arrow")(7, NzTreeSelectComponent_Conditional_7_Template, 3, 2, "nz-select-arrow", 7)(8, NzTreeSelectComponent_Conditional_8_Template, 1, 0, "nz-select-clear");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayPositions", ctx.nzPlacement ? ctx.positions : ɵɵpureFunction0(19, _c2))("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-select-tree-dropdown")("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null);
          ɵɵadvance(2);
          ɵɵconditional(ctx.isMultiple ? 2 : -1);
          ɵɵadvance();
          ɵɵproperty("nzId", ctx.nzId)("showInput", ctx.nzShowSearch)("value", ctx.inputValue)("mirrorSync", ctx.isMultiple)("disabled", ctx.nzDisabled)("focusTrigger", ctx.nzOpen);
          ɵɵadvance();
          ɵɵconditional(ctx.nzPlaceHolder && ctx.selectedNodes.length === 0 ? 4 : -1);
          ɵɵadvance();
          ɵɵconditional(!ctx.isMultiple && ctx.selectedNodes.length === 1 && !ctx.isComposing && ctx.inputValue === "" ? 5 : -1);
          ɵɵadvance();
          ɵɵconditional(!ctx.isMultiple ? 6 : -1);
          ɵɵadvance();
          ɵɵconditional(!ctx.isMultiple || ctx.hasFeedback && !!ctx.status ? 7 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.nzAllowClear && !ctx.nzDisabled && ctx.selectedNodes.length ? 8 : -1);
        }
      },
      dependencies: [NzOverlayModule, NzConnectedOverlayDirective, CdkConnectedOverlay, NgClass, NzNoAnimationDirective, NgStyle, NzTreeModule, NzTreeComponent, NzEmptyModule, NzEmbedEmptyComponent, CdkOverlayOrigin, SlicePipe, NzSelectModule, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent, NzFormPatchModule, NzFormItemFeedbackIconComponent],
      encapsulation: 2,
      data: {
        animation: [slideMotion]
      }
    });
  }
};
__decorate([WithConfig()], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
__decorate([WithConfig()], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
__decorate([WithConfig()], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
__decorate([WithConfig()], NzTreeSelectComponent.prototype, "nzSize", void 0);
__decorate([WithConfig()], NzTreeSelectComponent.prototype, "nzBackdrop", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeSelectComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-select",
      exportAs: "nzTreeSelect",
      animations: [slideMotion],
      template: `
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="cdkOverlayOrigin"
      [cdkConnectedOverlayPositions]="nzPlacement ? positions : []"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-tree-dropdown'"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="closeDropDown()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        [@slideMotion]="'enter'"
        [ngClass]="dropdownClassName"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottom'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'top'"
        [class.ant-tree-select-dropdown-rtl]="dir === 'rtl'"
        [dir]="dir"
        [ngStyle]="nzDropdownStyle"
      >
        <nz-tree
          #treeRef
          [hidden]="isNotFound"
          nzNoAnimation
          nzSelectMode
          nzBlockNode
          [nzData]="nzNodes"
          [nzMultiple]="nzMultiple"
          [nzSearchValue]="inputValue"
          [nzHideUnMatched]="nzHideUnMatched"
          [nzShowIcon]="nzShowIcon"
          [nzCheckable]="nzCheckable"
          [nzAsyncData]="nzAsyncData"
          [nzShowExpand]="nzShowExpand"
          [nzShowLine]="nzShowLine"
          [nzExpandedIcon]="nzExpandedIcon"
          [nzExpandAll]="nzDefaultExpandAll"
          [nzExpandedKeys]="expandedKeys"
          [nzCheckedKeys]="nzCheckable ? value : []"
          [nzSelectedKeys]="!nzCheckable ? value : []"
          [nzTreeTemplate]="treeTemplate"
          [nzCheckStrictly]="nzCheckStrictly"
          [nzVirtualItemSize]="nzVirtualItemSize"
          [nzVirtualMaxBufferPx]="nzVirtualMaxBufferPx"
          [nzVirtualMinBufferPx]="nzVirtualMinBufferPx"
          [nzVirtualHeight]="nzVirtualHeight"
          (nzExpandChange)="onExpandedKeysChange($event)"
          (nzClick)="nzTreeClick.emit($event)"
          (nzCheckedKeysChange)="updateSelectedNodes()"
          (nzSelectedKeysChange)="updateSelectedNodes()"
          (nzCheckBoxChange)="nzTreeCheckBoxChange.emit($event)"
          (nzSearchValueChange)="setSearchValues($event)"
        ></nz-tree>
        @if (nzNodes.length === 0 || isNotFound) {
          <span class="ant-select-not-found">
            <nz-embed-empty [nzComponentName]="'tree-select'" [specificContent]="nzNotFoundContent"></nz-embed-empty>
          </span>
        }
      </div>
    </ng-template>

    <div cdkOverlayOrigin class="ant-select-selector">
      @if (isMultiple) {
        @for (node of selectedNodes | slice: 0 : nzMaxTagCount; track node.key) {
          <nz-select-item
            [deletable]="true"
            [disabled]="node.isDisabled || nzDisabled"
            [label]="nzDisplayWith(node)"
            (delete)="removeSelected(node, true)"
          ></nz-select-item>
        }
        @if (selectedNodes.length > nzMaxTagCount) {
          <nz-select-item
            [contentTemplateOutlet]="nzMaxTagPlaceholder"
            [contentTemplateOutletContext]="selectedNodes | slice: nzMaxTagCount"
            [deletable]="false"
            [disabled]="false"
            [label]="'+ ' + (selectedNodes.length - nzMaxTagCount) + ' ...'"
          ></nz-select-item>
        }
      }

      <nz-select-search
        [nzId]="nzId"
        [showInput]="nzShowSearch"
        (keydown)="onKeyDownInput($event)"
        (isComposingChange)="isComposingChange($event)"
        (valueChange)="setInputValue($event)"
        [value]="inputValue"
        [mirrorSync]="isMultiple"
        [disabled]="nzDisabled"
        [focusTrigger]="nzOpen"
      ></nz-select-search>

      @if (nzPlaceHolder && selectedNodes.length === 0) {
        <nz-select-placeholder
          [placeholder]="nzPlaceHolder"
          [style.display]="placeHolderDisplay"
        ></nz-select-placeholder>
      }

      @if (!isMultiple && selectedNodes.length === 1 && !isComposing && inputValue === '') {
        <nz-select-item
          [deletable]="false"
          [disabled]="false"
          [label]="nzDisplayWith(selectedNodes[0])"
        ></nz-select-item>
      }

      @if (!isMultiple) {
        <nz-select-arrow></nz-select-arrow>
      }
      @if (!isMultiple || (hasFeedback && !!status)) {
        <nz-select-arrow [showArrow]="!isMultiple" [feedbackIcon]="feedbackIconTpl">
          <ng-template #feedbackIconTpl>
            @if (hasFeedback && !!status) {
              <nz-form-item-feedback-icon [status]="status"></nz-form-item-feedback-icon>
            }
          </ng-template>
        </nz-select-arrow>
      }
      @if (nzAllowClear && !nzDisabled && selectedNodes.length) {
        <nz-select-clear (clear)="onClearSelection()"></nz-select-clear>
      }
    </div>
  `,
      providers: [NzTreeSelectService, {
        provide: NzTreeHigherOrderServiceToken,
        useExisting: NzTreeSelectService
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzTreeSelectComponent),
        multi: true
      }],
      host: {
        class: "ant-select ant-tree-select",
        "[class.ant-select-in-form-item]": "!!nzFormStatusService",
        "[class.ant-select-lg]": 'nzSize==="large"',
        "[class.ant-select-rtl]": 'dir==="rtl"',
        "[class.ant-select-sm]": 'nzSize==="small"',
        "[class.ant-select-disabled]": "nzDisabled",
        "[class.ant-select-single]": "!isMultiple",
        "[class.ant-select-show-arrow]": "!isMultiple",
        "[class.ant-select-show-search]": "!isMultiple",
        "[class.ant-select-multiple]": "isMultiple",
        "[class.ant-select-allow-clear]": "nzAllowClear",
        "[class.ant-select-open]": "nzOpen",
        "[class.ant-select-focused]": "nzOpen || focused",
        "(click)": "trigger()",
        "(keydown)": "onKeydown($event)"
      },
      imports: [NzOverlayModule, CdkConnectedOverlay, NgClass, NzNoAnimationDirective, NgStyle, NzTreeModule, NzEmptyModule, CdkOverlayOrigin, SlicePipe, NzSelectModule, NzFormPatchModule],
      standalone: true
    }]
  }], () => [{
    type: NzTreeSelectService
  }, {
    type: NzConfigService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Directionality
  }, {
    type: FocusMonitor
  }], {
    nzId: [{
      type: Input
    }],
    nzAllowClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowExpand: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowLine: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDropdownMatchSelectWidth: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCheckable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHideUnMatched: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowSearch: [{
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
    nzAsyncData: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzMultiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDefaultExpandAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCheckStrictly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzVirtualItemSize: [{
      type: Input
    }],
    nzVirtualMaxBufferPx: [{
      type: Input
    }],
    nzVirtualMinBufferPx: [{
      type: Input
    }],
    nzVirtualHeight: [{
      type: Input
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzNodes: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzDropdownStyle: [{
      type: Input
    }],
    nzDropdownClassName: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzExpandedKeys: [{
      type: Input
    }],
    nzDisplayWith: [{
      type: Input
    }],
    nzMaxTagCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzMaxTagPlaceholder: [{
      type: Input
    }],
    nzOpenChange: [{
      type: Output
    }],
    nzCleared: [{
      type: Output
    }],
    nzRemoved: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }],
    nzTreeClick: [{
      type: Output
    }],
    nzTreeCheckBoxChange: [{
      type: Output
    }],
    nzSelectSearchComponent: [{
      type: ViewChild,
      args: [NzSelectSearchComponent, {
        static: false
      }]
    }],
    treeRef: [{
      type: ViewChild,
      args: ["treeRef", {
        static: false
      }]
    }],
    cdkOverlayOrigin: [{
      type: ViewChild,
      args: [CdkOverlayOrigin, {
        static: true
      }]
    }],
    cdkConnectedOverlay: [{
      type: ViewChild,
      args: [CdkConnectedOverlay, {
        static: false
      }]
    }],
    nzTreeTemplate: [{
      type: Input
    }],
    nzTreeTemplateChild: [{
      type: ContentChild,
      args: ["nzTreeTemplate", {
        static: true
      }]
    }]
  });
})();
var NzTreeSelectModule = class _NzTreeSelectModule {
  static {
    this.ɵfac = function NzTreeSelectModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeSelectModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzTreeSelectModule,
      imports: [NzTreeSelectComponent],
      exports: [NzTreeSelectComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzTreeSelectComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeSelectModule, [{
    type: NgModule,
    args: [{
      imports: [NzTreeSelectComponent],
      exports: [NzTreeSelectComponent]
    }]
  }], null, null);
})();
export {
  NzTreeSelectComponent,
  NzTreeSelectModule,
  NzTreeSelectService
};
//# sourceMappingURL=ng-zorro-antd_tree-select.js.map
