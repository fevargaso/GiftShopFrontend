import {
  NzEmbedEmptyComponent,
  NzEmptyModule
} from "./chunk-R36OHFK5.js";
import "./chunk-3ZXMSAHE.js";
import "./chunk-U3GRNEXE.js";
import {
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormPatchModule,
  NzFormStatusService
} from "./chunk-LNYH634O.js";
import {
  DEFAULT_MENTION_BOTTOM_POSITIONS,
  DEFAULT_MENTION_TOP_POSITIONS
} from "./chunk-J64M767I.js";
import {
  ConnectionPositionPair,
  Overlay,
  OverlayConfig
} from "./chunk-LDS4HVDD.js";
import "./chunk-WTI5C2VR.js";
import {
  TemplatePortal
} from "./chunk-7S7FNE45.js";
import {
  DOWN_ARROW,
  ENTER,
  ESCAPE,
  LEFT_ARROW,
  RIGHT_ARROW,
  TAB,
  UP_ARROW
} from "./chunk-L6TDEO2O.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-KFN5IZYX.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-X7ZJCC2O.js";
import "./chunk-FF3CGWPP.js";
import "./chunk-IHV2MBCH.js";
import {
  NzDestroyService
} from "./chunk-XHVUBTOU.js";
import "./chunk-22ZON5OQ.js";
import "./chunk-KKAJIRPV.js";
import {
  Directionality
} from "./chunk-ZKBJSJEE.js";
import "./chunk-DXJSDFBE.js";
import {
  getCaretCoordinates,
  getMentions,
  getStatusClassNames
} from "./chunk-IVFCXUEV.js";
import "./chunk-G2DTOTJO.js";
import "./chunk-EKMOTXNM.js";
import {
  DOCUMENT,
  NgTemplateOutlet
} from "./chunk-AFWQCB6S.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  booleanAttribute,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-BD52RYQU.js";
import "./chunk-HIQUU2WY.js";
import {
  fromEvent,
  merge
} from "./chunk-NHVCTQM5.js";
import {
  Observable,
  Subject,
  Subscription,
  distinctUntilChanged,
  map,
  of,
  startWith,
  switchMap,
  takeUntil,
  withLatestFrom
} from "./chunk-4FM7L5J3.js";
import "./chunk-TXDUYLVM.js";

// ../node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-mention.mjs
var _c0 = ["items"];
var _c1 = ["*"];
var _c2 = (a0) => ({
  $implicit: a0
});
function NzMentionComponent_ng_template_1_For_3_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzMentionComponent_ng_template_1_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzMentionComponent_ng_template_1_For_3_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const suggestion_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.suggestionTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, suggestion_r2));
  }
}
function NzMentionComponent_ng_template_1_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const suggestion_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r2.nzValueWith(suggestion_r2), " ");
  }
}
function NzMentionComponent_ng_template_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 7, 1);
    ɵɵlistener("click", function NzMentionComponent_ng_template_1_For_3_Template_li_click_0_listener() {
      const suggestion_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.selectSuggestion(suggestion_r2));
    });
    ɵɵtemplate(2, NzMentionComponent_ng_template_1_For_3_Conditional_2_Template, 1, 4, "ng-container")(3, NzMentionComponent_ng_template_1_For_3_Conditional_3_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r4 = ctx.$index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("ant-mentions-dropdown-menu-item-active", $index_r4 === ctx_r2.activeIndex)("ant-mentions-dropdown-menu-item-selected", $index_r4 === ctx_r2.activeIndex);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r2.suggestionTemplate ? 2 : 3);
  }
}
function NzMentionComponent_ng_template_1_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelement(1, "span", 9);
    ɵɵelementEnd();
  }
}
function NzMentionComponent_ng_template_1_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelement(1, "nz-embed-empty", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("specificContent", ctx_r2.nzNotFoundContent);
  }
}
function NzMentionComponent_ng_template_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 6);
    ɵɵtemplate(1, NzMentionComponent_ng_template_1_Conditional_4_Conditional_1_Template, 2, 0, "span")(2, NzMentionComponent_ng_template_1_Conditional_4_Conditional_2_Template, 2, 1, "span");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.nzLoading ? 1 : 2);
  }
}
function NzMentionComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "ul", 4);
    ɵɵrepeaterCreate(2, NzMentionComponent_ng_template_1_For_3_Template, 4, 5, "li", 5, ɵɵrepeaterTrackByIdentity);
    ɵɵtemplate(4, NzMentionComponent_ng_template_1_Conditional_4_Template, 3, 1, "li", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r2.filteredSuggestions);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r2.filteredSuggestions.length === 0 ? 4 : -1);
  }
}
function NzMentionComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 2);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("status", ctx_r2.status);
  }
}
var NzMentionSuggestionDirective = class _NzMentionSuggestionDirective {
  static {
    this.ɵfac = function NzMentionSuggestionDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzMentionSuggestionDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzMentionSuggestionDirective,
      selectors: [["", "nzMentionSuggestion", ""]],
      exportAs: ["nzMentionSuggestion"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionSuggestionDirective, [{
    type: Directive,
    args: [{
      selector: "[nzMentionSuggestion]",
      exportAs: "nzMentionSuggestion",
      standalone: true
    }]
  }], null, null);
})();
var NZ_MENTION_CONFIG = {
  split: " "
};
var NzMentionService = class _NzMentionService {
  constructor() {
    this.triggerChange$ = new Subject();
  }
  triggerChanged() {
    return this.triggerChange$.asObservable();
  }
  registerTrigger(trigger) {
    if (this.trigger !== trigger) {
      this.trigger = trigger;
      this.triggerChange$.next(trigger);
    }
  }
  ngOnDestroy() {
    this.triggerChange$.complete();
  }
  static {
    this.ɵfac = function NzMentionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzMentionService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NzMentionService,
      factory: _NzMentionService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionService, [{
    type: Injectable
  }], null, null);
})();
var NZ_MENTION_TRIGGER_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NzMentionTriggerDirective),
  multi: true
};
var NzMentionTriggerDirective = class _NzMentionTriggerDirective {
  constructor(el, ngZone, ref, destroy$, nzMentionService) {
    this.el = el;
    this.ngZone = ngZone;
    this.ref = ref;
    this.destroy$ = destroy$;
    this.nzMentionService = nzMentionService;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.onFocusin = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onInput = new EventEmitter();
    this.onKeydown = new EventEmitter();
    this.onClick = new EventEmitter();
  }
  completeEvents() {
    this.onFocusin.complete();
    this.onBlur.complete();
    this.onInput.complete();
    this.onKeydown.complete();
    this.onClick.complete();
  }
  focus(caretPos = null) {
    this.el.nativeElement.focus();
    this.el.nativeElement.setSelectionRange(caretPos, caretPos);
  }
  insertMention(mention) {
    const value = this.el.nativeElement.value;
    const insertValue = `${mention.mention}${NZ_MENTION_CONFIG.split}`;
    const newValue = [value.slice(0, mention.startPos + 1), insertValue, value.slice(mention.endPos, value.length)].join("");
    this.el.nativeElement.value = newValue;
    this.focus(mention.startPos + insertValue.length + 1);
    this.onChange(newValue);
    this.value = newValue;
  }
  writeValue(value) {
    this.value = value;
    if (typeof value === "string") {
      this.el.nativeElement.value = value;
    } else {
      this.el.nativeElement.value = "";
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  ngAfterViewInit() {
    this.nzMentionService.registerTrigger(this);
    this.setupEventListener("blur", this.onBlur);
    this.setupEventListener("focusin", this.onFocusin);
    this.setupEventListener("input", this.onInput, true);
    this.setupEventListener("click", this.onClick, true);
    this.setupEventListener("keydown", this.onKeydown, true);
  }
  ngOnDestroy() {
    this.completeEvents();
  }
  setupEventListener(eventName, eventEmitter, shouldPassEvent = false) {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.el.nativeElement, eventName).pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (eventEmitter.observers.length) {
          this.ngZone.run(() => {
            eventEmitter.emit(shouldPassEvent ? event : void 0);
            this.ref.markForCheck();
          });
        }
      });
    });
  }
  static {
    this.ɵfac = function NzMentionTriggerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzMentionTriggerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(NzMentionService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzMentionTriggerDirective,
      selectors: [["input", "nzMentionTrigger", ""], ["textarea", "nzMentionTrigger", ""]],
      hostAttrs: ["autocomplete", "off"],
      outputs: {
        onFocusin: "onFocusin",
        onBlur: "onBlur",
        onInput: "onInput",
        onKeydown: "onKeydown",
        onClick: "onClick"
      },
      exportAs: ["nzMentionTrigger"],
      standalone: true,
      features: [ɵɵProvidersFeature([NzDestroyService, NZ_MENTION_TRIGGER_ACCESSOR])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionTriggerDirective, [{
    type: Directive,
    args: [{
      selector: "input[nzMentionTrigger], textarea[nzMentionTrigger]",
      exportAs: "nzMentionTrigger",
      providers: [NzDestroyService, NZ_MENTION_TRIGGER_ACCESSOR],
      host: {
        autocomplete: "off"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzDestroyService
  }, {
    type: NzMentionService
  }], {
    onFocusin: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onInput: [{
      type: Output
    }],
    onKeydown: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }]
  });
})();
var NzMentionComponent = class _NzMentionComponent {
  set suggestionChild(value) {
    if (value) {
      this.suggestionTemplate = value;
    }
  }
  get triggerNativeElement() {
    return this.trigger.el.nativeElement;
  }
  get focusItemElement() {
    const itemArr = this.items?.toArray();
    if (itemArr && itemArr[this.activeIndex]) {
      return itemArr[this.activeIndex].nativeElement;
    }
    return null;
  }
  constructor(ngZone, directionality, cdr, overlay, viewContainerRef, elementRef, renderer, nzMentionService, destroy$) {
    this.ngZone = ngZone;
    this.directionality = directionality;
    this.cdr = cdr;
    this.overlay = overlay;
    this.viewContainerRef = viewContainerRef;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.nzMentionService = nzMentionService;
    this.destroy$ = destroy$;
    this.nzValueWith = (value) => value;
    this.nzPrefix = "@";
    this.nzLoading = false;
    this.nzNotFoundContent = "无匹配结果，轻敲空格完成输入";
    this.nzPlacement = "bottom";
    this.nzSuggestions = [];
    this.nzStatus = "";
    this.nzOnSelect = new EventEmitter();
    this.nzOnSearchChange = new EventEmitter();
    this.isOpen = false;
    this.filteredSuggestions = [];
    this.suggestionTemplate = null;
    this.activeIndex = -1;
    this.dir = "ltr";
    this.prefixCls = "ant-mentions";
    this.statusCls = {};
    this.status = "";
    this.hasFeedback = false;
    this.previousValue = null;
    this.cursorMention = null;
    this.overlayRef = null;
    this.document = inject(DOCUMENT);
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
    this.nzMentionService.triggerChanged().subscribe((trigger) => {
      this.trigger = trigger;
      this.bindTriggerEvents();
      this.closeDropdown();
      this.overlayRef = null;
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    const {
      nzSuggestions,
      nzStatus
    } = changes;
    if (nzSuggestions) {
      if (this.isOpen) {
        this.previousValue = null;
        this.activeIndex = -1;
        this.resetDropdown(false);
      }
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  ngAfterViewInit() {
    this.items.changes.pipe(startWith(this.items), switchMap(() => {
      const items = this.items.toArray();
      return new Observable((subscriber) => this.ngZone.runOutsideAngular(() => merge(...items.map((item) => fromEvent(item.nativeElement, "mousedown"))).subscribe(subscriber)));
    })).subscribe((event) => {
      event.preventDefault();
    });
  }
  ngOnDestroy() {
    this.closeDropdown();
  }
  closeDropdown() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
      this.overlayOutsideClickSubscription.unsubscribe();
      this.isOpen = false;
      this.cdr.markForCheck();
    }
  }
  openDropdown() {
    this.attachOverlay();
    this.isOpen = true;
    this.cdr.markForCheck();
  }
  getMentions() {
    return this.trigger ? getMentions(this.trigger.value, this.nzPrefix) : [];
  }
  selectSuggestion(suggestion) {
    const value = this.nzValueWith(suggestion);
    this.trigger.insertMention({
      mention: value,
      startPos: this.cursorMentionStart,
      endPos: this.cursorMentionEnd
    });
    this.nzOnSelect.emit(suggestion);
    this.closeDropdown();
    this.activeIndex = -1;
  }
  handleInput(event) {
    const target = event.target;
    this.trigger.onChange(target.value);
    this.trigger.value = target.value;
    this.resetDropdown();
  }
  handleKeydown(event) {
    const keyCode = event.keyCode;
    if (this.isOpen && keyCode === ENTER && this.activeIndex !== -1 && this.filteredSuggestions.length) {
      this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
      event.preventDefault();
    } else if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      this.resetDropdown();
      event.stopPropagation();
    } else {
      if (this.isOpen && (keyCode === TAB || keyCode === ESCAPE)) {
        this.closeDropdown();
        return;
      }
      if (this.isOpen && keyCode === UP_ARROW) {
        this.setPreviousItemActive();
        event.preventDefault();
        event.stopPropagation();
      }
      if (this.isOpen && keyCode === DOWN_ARROW) {
        this.setNextItemActive();
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }
  handleClick() {
    this.resetDropdown();
  }
  bindTriggerEvents() {
    this.trigger.onInput.subscribe((e) => this.handleInput(e));
    this.trigger.onKeydown.subscribe((e) => this.handleKeydown(e));
    this.trigger.onClick.subscribe(() => this.handleClick());
  }
  suggestionsFilter(value, emit) {
    const suggestions = value.substring(1);
    if (this.previousValue === value && value !== this.cursorMention[0]) {
      return;
    }
    this.previousValue = value;
    if (emit) {
      this.nzOnSearchChange.emit({
        value: this.cursorMention.substring(1),
        prefix: this.cursorMention[0]
      });
    }
    const searchValue = suggestions.toLowerCase();
    this.filteredSuggestions = this.nzSuggestions.filter((suggestion) => this.nzValueWith(suggestion).toLowerCase().includes(searchValue));
  }
  resetDropdown(emit = true) {
    this.resetCursorMention();
    if (typeof this.cursorMention !== "string" || !this.canOpen()) {
      this.closeDropdown();
      return;
    }
    this.suggestionsFilter(this.cursorMention, emit);
    const activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
    this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
    this.openDropdown();
  }
  setNextItemActive() {
    this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
    this.cdr.markForCheck();
    this.scrollToFocusItem();
  }
  setPreviousItemActive() {
    this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
    this.cdr.markForCheck();
    this.scrollToFocusItem();
  }
  scrollToFocusItem() {
    if (this.focusItemElement) {
      this.focusItemElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  }
  canOpen() {
    const element = this.triggerNativeElement;
    return !element.readOnly && !element.disabled;
  }
  resetCursorMention() {
    const value = this.triggerNativeElement.value.replace(/[\r\n]/g, NZ_MENTION_CONFIG.split) || "";
    const selectionStart = this.triggerNativeElement.selectionStart;
    const prefix = typeof this.nzPrefix === "string" ? [this.nzPrefix] : this.nzPrefix;
    let i = prefix.length;
    while (i >= 0) {
      const startPos = value.lastIndexOf(prefix[i], selectionStart);
      const endPos = value.indexOf(NZ_MENTION_CONFIG.split, selectionStart) > -1 ? value.indexOf(NZ_MENTION_CONFIG.split, selectionStart) : value.length;
      const mention = value.substring(startPos, endPos);
      if (startPos > 0 && value[startPos - 1] !== NZ_MENTION_CONFIG.split || startPos < 0 || mention.includes(prefix[i], 1) || mention.includes(NZ_MENTION_CONFIG.split)) {
        this.cursorMention = null;
        this.cursorMentionStart = -1;
        this.cursorMentionEnd = -1;
      } else {
        this.cursorMention = mention;
        this.cursorMentionStart = startPos;
        this.cursorMentionEnd = endPos;
        return;
      }
      i--;
    }
  }
  updatePositions() {
    const coordinates = getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
    const top = coordinates.top - this.triggerNativeElement.getBoundingClientRect().height - this.triggerNativeElement.scrollTop + (this.nzPlacement === "bottom" ? coordinates.height - 6 : -6);
    const left = coordinates.left - this.triggerNativeElement.scrollLeft;
    this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
    if (this.nzPlacement === "bottom") {
      this.positionStrategy.withPositions([...DEFAULT_MENTION_BOTTOM_POSITIONS]);
    }
    if (this.nzPlacement === "top") {
      this.positionStrategy.withPositions([...DEFAULT_MENTION_TOP_POSITIONS]);
    }
    this.positionStrategy.apply();
  }
  subscribeOverlayOutsideClick() {
    const canCloseDropdown = (event) => {
      const clickTarget = event.target;
      return this.isOpen && clickTarget !== this.trigger.el.nativeElement && !this.overlayRef?.overlayElement.contains(clickTarget);
    };
    const subscription = new Subscription();
    subscription.add(this.overlayRef.outsidePointerEvents().subscribe((event) => canCloseDropdown(event) && this.closeDropdown()));
    subscription.add(this.ngZone.runOutsideAngular(() => fromEvent(this.document, "touchend").subscribe((event) => canCloseDropdown(event) && this.ngZone.run(() => this.closeDropdown()))));
    return subscription;
  }
  attachOverlay() {
    if (!this.overlayRef) {
      this.portal = new TemplatePortal(this.suggestionsTemp, this.viewContainerRef);
      this.overlayRef = this.overlay.create(this.getOverlayConfig());
    }
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.portal);
      this.overlayOutsideClickSubscription = this.subscribeOverlayOutsideClick();
    }
    this.updatePositions();
  }
  getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this.getOverlayPosition(),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      disposeOnNavigation: true
    });
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
    this.positionStrategy = this.overlay.position().flexibleConnectedTo(this.trigger.el).withPositions(positions).withFlexibleDimensions(false).withPush(false);
    return this.positionStrategy;
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
  static {
    this.ɵfac = function NzMentionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzMentionComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzMentionService), ɵɵdirectiveInject(NzDestroyService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzMentionComponent,
      selectors: [["nz-mention"]],
      contentQueries: function NzMentionComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NzMentionSuggestionDirective, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suggestionChild = _t.first);
        }
      },
      viewQuery: function NzMentionComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TemplateRef, 5);
          ɵɵviewQuery(_c0, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suggestionsTemp = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        }
      },
      hostAttrs: [1, "ant-mentions"],
      hostVars: 2,
      hostBindings: function NzMentionComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-mentions-rtl", ctx.dir === "rtl");
        }
      },
      inputs: {
        nzValueWith: "nzValueWith",
        nzPrefix: "nzPrefix",
        nzLoading: [2, "nzLoading", "nzLoading", booleanAttribute],
        nzNotFoundContent: "nzNotFoundContent",
        nzPlacement: "nzPlacement",
        nzSuggestions: "nzSuggestions",
        nzStatus: "nzStatus"
      },
      outputs: {
        nzOnSelect: "nzOnSelect",
        nzOnSearchChange: "nzOnSearchChange"
      },
      exportAs: ["nzMention"],
      standalone: true,
      features: [ɵɵProvidersFeature([NzMentionService, NzDestroyService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 1,
      consts: [["suggestions", ""], ["items", ""], [1, "ant-mentions-suffix", 3, "status"], [1, "ant-mentions-dropdown"], ["role", "menu", "tabindex", "0", 1, "ant-mentions-dropdown-menu"], ["role", "menuitem", "tabindex", "-1", 1, "ant-mentions-dropdown-menu-item", 3, "ant-mentions-dropdown-menu-item-active", "ant-mentions-dropdown-menu-item-selected"], [1, "ant-mentions-dropdown-menu-item", "ant-mentions-dropdown-menu-item-disabled"], ["role", "menuitem", "tabindex", "-1", 1, "ant-mentions-dropdown-menu-item", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-icon", "", "nzType", "loading"], ["nzComponentName", "select", 3, "specificContent"]],
      template: function NzMentionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, NzMentionComponent_ng_template_1_Template, 5, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, NzMentionComponent_Conditional_3_Template, 1, 1, "nz-form-item-feedback-icon", 2);
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵconditional(ctx.hasFeedback && !!ctx.status ? 3 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective, NzEmptyModule, NzEmbedEmptyComponent, NzFormPatchModule, NzFormItemFeedbackIconComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionComponent, [{
    type: Component,
    args: [{
      selector: "nz-mention",
      exportAs: "nzMention",
      template: `
    <ng-content></ng-content>
    <ng-template #suggestions>
      <div class="ant-mentions-dropdown">
        <ul class="ant-mentions-dropdown-menu" role="menu" tabindex="0">
          @for (suggestion of filteredSuggestions; track suggestion) {
            <li
              #items
              class="ant-mentions-dropdown-menu-item"
              role="menuitem"
              tabindex="-1"
              [class.ant-mentions-dropdown-menu-item-active]="$index === activeIndex"
              [class.ant-mentions-dropdown-menu-item-selected]="$index === activeIndex"
              (click)="selectSuggestion(suggestion)"
            >
              @if (suggestionTemplate) {
                <ng-container *ngTemplateOutlet="suggestionTemplate; context: { $implicit: suggestion }" />
              } @else {
                {{ nzValueWith(suggestion) }}
              }
            </li>
          }

          @if (filteredSuggestions.length === 0) {
            <li class="ant-mentions-dropdown-menu-item ant-mentions-dropdown-menu-item-disabled">
              @if (nzLoading) {
                <span><span nz-icon nzType="loading"></span></span>
              } @else {
                <span>
                  <nz-embed-empty nzComponentName="select" [specificContent]="nzNotFoundContent!" />
                </span>
              }
            </li>
          }
        </ul>
      </div>
    </ng-template>
    @if (hasFeedback && !!status) {
      <nz-form-item-feedback-icon class="ant-mentions-suffix" [status]="status" />
    }
  `,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NzMentionService, NzDestroyService],
      host: {
        class: "ant-mentions",
        "[class.ant-mentions-rtl]": `dir === 'rtl'`
      },
      imports: [NgTemplateOutlet, NzIconModule, NzEmptyModule, NzFormPatchModule],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Directionality
  }, {
    type: ChangeDetectorRef
  }, {
    type: Overlay
  }, {
    type: ViewContainerRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NzMentionService
  }, {
    type: NzDestroyService
  }], {
    nzValueWith: [{
      type: Input
    }],
    nzPrefix: [{
      type: Input
    }],
    nzLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzSuggestions: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzOnSelect: [{
      type: Output
    }],
    nzOnSearchChange: [{
      type: Output
    }],
    suggestionsTemp: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: false
      }]
    }],
    items: [{
      type: ViewChildren,
      args: ["items", {
        read: ElementRef
      }]
    }],
    suggestionChild: [{
      type: ContentChild,
      args: [NzMentionSuggestionDirective, {
        static: false,
        read: TemplateRef
      }]
    }]
  });
})();
var COMPONENTS = [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective];
var NzMentionModule = class _NzMentionModule {
  static {
    this.ɵfac = function NzMentionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzMentionModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzMentionModule,
      imports: [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective],
      exports: [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzMentionComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionModule, [{
    type: NgModule,
    args: [{
      imports: [...COMPONENTS],
      exports: [...COMPONENTS]
    }]
  }], null, null);
})();
export {
  NZ_MENTION_TRIGGER_ACCESSOR,
  NzMentionComponent,
  NzMentionModule,
  NzMentionService,
  NzMentionSuggestionDirective,
  NzMentionTriggerDirective
};
//# sourceMappingURL=ng-zorro-antd_mention.js.map
