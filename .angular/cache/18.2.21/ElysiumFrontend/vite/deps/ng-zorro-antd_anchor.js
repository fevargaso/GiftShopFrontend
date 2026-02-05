import {
  NzAffixComponent,
  NzAffixModule
} from "./chunk-E4BZIFGH.js";
import "./chunk-YGNPLH3G.js";
import {
  NzScrollService
} from "./chunk-6NFOWM63.js";
import "./chunk-XECNEXJM.js";
import "./chunk-JWXJAX4E.js";
import {
  Platform,
  normalizePassiveListenerOptions
} from "./chunk-NT2VFEI2.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-VBRHEHWF.js";
import {
  numberAttributeWithZeroFallback
} from "./chunk-45PTXMFP.js";
import {
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-P7XZQWMR.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
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
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-E2LL2ENA.js";
import {
  fromEvent
} from "./chunk-XSUPIODI.js";
import "./chunk-RRANXKLR.js";
import {
  Subject,
  __decorate,
  takeUntil,
  throttleTime
} from "./chunk-V7EGFIMY.js";
import "./chunk-TXDUYLVM.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-anchor.mjs
var _c0 = ["ink"];
var _c1 = ["*"];
var _c2 = (a0) => ({
  "ant-anchor-wrapper-horizontal": a0
});
var _c3 = (a0) => ({
  "ant-anchor-fixed": a0
});
function NzAnchorComponent_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzAnchorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-affix", 2);
    ɵɵtemplate(1, NzAnchorComponent_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const content_r2 = ɵɵreference(3);
    ɵɵproperty("nzOffsetTop", ctx_r0.nzOffsetTop)("nzTarget", ctx_r0.container);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", content_r2);
  }
}
function NzAnchorComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzAnchorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzAnchorComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const content_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", content_r2);
  }
}
function NzAnchorComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    ɵɵelement(3, "div", 7, 1);
    ɵɵelementEnd();
    ɵɵprojection(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c2, ctx_r0.nzDirection === "horizontal"))("ngStyle", ctx_r0.wrapperStyle);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c3, !ctx_r0.nzAffix && !ctx_r0.nzShowInkInFixed));
  }
}
var _c4 = ["nzTemplate"];
var _c5 = ["linkTitle"];
function NzAnchorLinkComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.titleStr);
  }
}
function NzAnchorLinkComponent_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function NzAnchorLinkComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzAnchorLinkComponent_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.titleTpl || ctx_r1.nzTemplate);
  }
}
function NzAnchorLinkComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function getOffsetTop(element, container) {
  if (!element || !element.getClientRects().length) {
    return 0;
  }
  const rect = element.getBoundingClientRect();
  if (rect.width || rect.height) {
    if (container === window) {
      const documentElement = element.ownerDocument.documentElement;
      return rect.top - documentElement.clientTop;
    }
    return rect.top - container.getBoundingClientRect().top;
  }
  return rect.top;
}
var VISIBLE_CLASSNAME = "ant-anchor-ink-ball-visible";
var NZ_CONFIG_MODULE_NAME = "anchor";
var sharpMatcherRegx = /#([^#]+)$/;
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var NzAnchorComponent = class _NzAnchorComponent {
  constructor(nzConfigService, scrollSrv, cdr, platform, zone, renderer) {
    this.nzConfigService = nzConfigService;
    this.scrollSrv = scrollSrv;
    this.cdr = cdr;
    this.platform = platform;
    this.zone = zone;
    this.renderer = renderer;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzAffix = true;
    this.nzShowInkInFixed = false;
    this.nzBounds = 5;
    this.nzOffsetTop = void 0;
    this.nzTargetOffset = void 0;
    this.nzDirection = "vertical";
    this.nzClick = new EventEmitter();
    this.nzChange = new EventEmitter();
    this.nzScroll = new EventEmitter();
    this.visible = false;
    this.wrapperStyle = {
      "max-height": "100vh"
    };
    this.links = [];
    this.animating = false;
    this.destroy$ = new Subject();
    this.doc = inject(DOCUMENT);
  }
  registerLink(link) {
    this.links.push(link);
  }
  unregisterLink(link) {
    this.links.splice(this.links.indexOf(link), 1);
  }
  getContainer() {
    return this.container || window;
  }
  ngAfterViewInit() {
    this.registerScrollEvent();
  }
  ngOnDestroy() {
    clearTimeout(this.handleScrollTimeoutID);
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  registerScrollEvent() {
    if (!this.platform.isBrowser) {
      return;
    }
    this.destroy$.next(true);
    this.zone.runOutsideAngular(() => {
      fromEvent(this.getContainer(), "scroll", passiveEventListenerOptions).pipe(throttleTime(50), takeUntil(this.destroy$)).subscribe(() => this.handleScroll());
    });
    this.handleScrollTimeoutID = setTimeout(() => this.handleScroll());
  }
  handleScroll() {
    if (typeof document === "undefined" || this.animating) {
      return;
    }
    const sections = [];
    const offsetTop = this.nzTargetOffset ? this.nzTargetOffset : this.nzOffsetTop || 0;
    const scope = offsetTop + this.nzBounds;
    this.links.forEach((comp) => {
      const sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
      if (!sharpLinkMatch) {
        return;
      }
      const target = this.doc.getElementById(sharpLinkMatch[1]);
      if (target) {
        const top = getOffsetTop(target, this.getContainer());
        if (top < scope) {
          sections.push({
            top,
            comp
          });
        }
      }
    });
    this.visible = !!sections.length;
    if (!this.visible) {
      this.clearActive();
      this.cdr.detectChanges();
    } else {
      const maxSection = sections.reduce((prev, curr) => curr.top > prev.top ? curr : prev);
      this.handleActive(maxSection.comp);
    }
    this.setVisible();
  }
  clearActive() {
    this.links.forEach((i) => {
      i.unsetActive();
    });
  }
  setActive(comp) {
    const originalActiveLink = this.activeLink;
    const targetComp = this.nzCurrentAnchor && this.links.find((n) => n.nzHref === this.nzCurrentAnchor) || comp;
    if (!targetComp) return;
    targetComp.setActive();
    const linkNode = targetComp.getLinkTitleElement();
    if (this.nzDirection === "vertical") {
      this.ink.nativeElement.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
    } else {
      this.ink.nativeElement.style.left = `${linkNode.offsetLeft + linkNode.clientWidth / 2}px`;
    }
    this.activeLink = (comp || targetComp).nzHref;
    if (originalActiveLink !== this.activeLink) {
      this.nzChange.emit(this.activeLink);
    }
  }
  handleActive(comp) {
    this.clearActive();
    this.setActive(comp);
    this.visible = true;
    this.setVisible();
    this.nzScroll.emit(comp);
  }
  setVisible() {
    if (this.ink) {
      const visible = this.visible;
      if (visible) {
        this.renderer.addClass(this.ink.nativeElement, VISIBLE_CLASSNAME);
      } else {
        this.renderer.removeClass(this.ink.nativeElement, VISIBLE_CLASSNAME);
      }
    }
  }
  handleScrollTo(linkComp) {
    const el = this.doc.querySelector(linkComp.nzHref);
    if (!el) {
      return;
    }
    this.animating = true;
    const containerScrollTop = this.scrollSrv.getScroll(this.getContainer());
    const elOffsetTop = getOffsetTop(el, this.getContainer());
    let targetScrollTop = containerScrollTop + elOffsetTop;
    targetScrollTop -= this.nzTargetOffset !== void 0 ? this.nzTargetOffset : this.nzOffsetTop || 0;
    this.scrollSrv.scrollTo(this.getContainer(), targetScrollTop, {
      callback: () => {
        this.animating = false;
        this.handleActive(linkComp);
      }
    });
    this.nzClick.emit(linkComp.nzHref);
  }
  ngOnChanges(changes) {
    const {
      nzOffsetTop,
      nzContainer,
      nzCurrentAnchor
    } = changes;
    if (nzOffsetTop) {
      this.wrapperStyle = {
        "max-height": `calc(100vh - ${this.nzOffsetTop}px)`
      };
    }
    if (nzContainer) {
      const container = this.nzContainer;
      this.container = typeof container === "string" ? this.doc.querySelector(container) : container;
      this.registerScrollEvent();
    }
    if (nzCurrentAnchor) {
      this.setActive();
    }
  }
  static {
    this.ɵfac = function NzAnchorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzAnchorComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzScrollService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzAnchorComponent,
      selectors: [["nz-anchor"]],
      viewQuery: function NzAnchorComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ink = _t.first);
        }
      },
      inputs: {
        nzAffix: [2, "nzAffix", "nzAffix", booleanAttribute],
        nzShowInkInFixed: [2, "nzShowInkInFixed", "nzShowInkInFixed", booleanAttribute],
        nzBounds: [2, "nzBounds", "nzBounds", numberAttribute],
        nzOffsetTop: [2, "nzOffsetTop", "nzOffsetTop", numberAttributeWithZeroFallback],
        nzTargetOffset: [2, "nzTargetOffset", "nzTargetOffset", numberAttributeWithZeroFallback],
        nzContainer: "nzContainer",
        nzCurrentAnchor: "nzCurrentAnchor",
        nzDirection: "nzDirection"
      },
      outputs: {
        nzClick: "nzClick",
        nzChange: "nzChange",
        nzScroll: "nzScroll"
      },
      exportAs: ["nzAnchor"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 1,
      consts: [["content", ""], ["ink", ""], [3, "nzOffsetTop", "nzTarget"], [3, "ngTemplateOutlet"], [1, "ant-anchor-wrapper", 3, "ngClass", "ngStyle"], [1, "ant-anchor", 3, "ngClass"], [1, "ant-anchor-ink"], [1, "ant-anchor-ink-ball"]],
      template: function NzAnchorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NzAnchorComponent_Conditional_0_Template, 2, 3, "nz-affix", 2)(1, NzAnchorComponent_Conditional_1_Template, 1, 1, null, 3)(2, NzAnchorComponent_ng_template_2_Template, 6, 7, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.nzAffix ? 0 : 1);
        }
      },
      dependencies: [NgClass, NgStyle, NgTemplateOutlet, NzAffixModule, NzAffixComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
__decorate([WithConfig()], NzAnchorComponent.prototype, "nzShowInkInFixed", void 0);
__decorate([WithConfig()], NzAnchorComponent.prototype, "nzBounds", void 0);
__decorate([WithConfig()], NzAnchorComponent.prototype, "nzOffsetTop", void 0);
__decorate([WithConfig()], NzAnchorComponent.prototype, "nzTargetOffset", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAnchorComponent, [{
    type: Component,
    args: [{
      selector: "nz-anchor",
      exportAs: "nzAnchor",
      preserveWhitespaces: false,
      standalone: true,
      imports: [NgClass, NgIf, NgStyle, NgTemplateOutlet, NzAffixModule],
      template: `
    @if (nzAffix) {
      <nz-affix [nzOffsetTop]="nzOffsetTop" [nzTarget]="container">
        <ng-template [ngTemplateOutlet]="content"></ng-template>
      </nz-affix>
    } @else {
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    }

    <ng-template #content>
      <div
        class="ant-anchor-wrapper"
        [ngClass]="{ 'ant-anchor-wrapper-horizontal': nzDirection === 'horizontal' }"
        [ngStyle]="wrapperStyle"
      >
        <div class="ant-anchor" [ngClass]="{ 'ant-anchor-fixed': !nzAffix && !nzShowInkInFixed }">
          <div class="ant-anchor-ink">
            <div class="ant-anchor-ink-ball" #ink></div>
          </div>
          <ng-content></ng-content>
        </div>
      </div>
    </ng-template>
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: NzScrollService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }], {
    ink: [{
      type: ViewChild,
      args: ["ink", {
        static: false
      }]
    }],
    nzAffix: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowInkInFixed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBounds: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzOffsetTop: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzTargetOffset: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzContainer: [{
      type: Input
    }],
    nzCurrentAnchor: [{
      type: Input
    }],
    nzDirection: [{
      type: Input
    }],
    nzClick: [{
      type: Output
    }],
    nzChange: [{
      type: Output
    }],
    nzScroll: [{
      type: Output
    }]
  });
})();
var NzAnchorLinkComponent = class _NzAnchorLinkComponent {
  set nzTitle(value) {
    if (value instanceof TemplateRef) {
      this.titleStr = null;
      this.titleTpl = value;
    } else {
      this.titleStr = value;
    }
  }
  constructor(elementRef, anchorComp, platform, renderer) {
    this.elementRef = elementRef;
    this.anchorComp = anchorComp;
    this.platform = platform;
    this.renderer = renderer;
    this.nzHref = "#";
    this.titleStr = "";
    this.nzDirection = "vertical";
  }
  ngOnInit() {
    this.anchorComp.registerLink(this);
    this.nzDirection = this.anchorComp.nzDirection;
  }
  getLinkTitleElement() {
    return this.linkTitle.nativeElement;
  }
  setActive() {
    this.renderer.addClass(this.elementRef.nativeElement, "ant-anchor-link-active");
  }
  unsetActive() {
    this.renderer.removeClass(this.elementRef.nativeElement, "ant-anchor-link-active");
  }
  goToClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.platform.isBrowser) {
      this.anchorComp.handleScrollTo(this);
    }
  }
  ngOnDestroy() {
    this.anchorComp.unregisterLink(this);
  }
  static {
    this.ɵfac = function NzAnchorLinkComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzAnchorLinkComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzAnchorComponent), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzAnchorLinkComponent,
      selectors: [["nz-link"]],
      contentQueries: function NzAnchorLinkComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, _c4, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTemplate = _t.first);
        }
      },
      viewQuery: function NzAnchorLinkComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c5, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.linkTitle = _t.first);
        }
      },
      hostAttrs: [1, "ant-anchor-link"],
      inputs: {
        nzHref: "nzHref",
        nzTarget: "nzTarget",
        nzTitle: "nzTitle"
      },
      exportAs: ["nzLink"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 5,
      vars: 5,
      consts: [["linkTitle", ""], [1, "ant-anchor-link-title", 3, "click", "href", "target"], [3, "ngTemplateOutlet"]],
      template: function NzAnchorLinkComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "a", 1, 0);
          ɵɵlistener("click", function NzAnchorLinkComponent_Template_a_click_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.goToClick($event));
          });
          ɵɵtemplate(2, NzAnchorLinkComponent_Conditional_2_Template, 2, 1, "span")(3, NzAnchorLinkComponent_Conditional_3_Template, 1, 1, null, 2);
          ɵɵelementEnd();
          ɵɵtemplate(4, NzAnchorLinkComponent_Conditional_4_Template, 1, 0);
        }
        if (rf & 2) {
          ɵɵproperty("href", ctx.nzHref, ɵɵsanitizeUrl)("target", ctx.nzTarget);
          ɵɵattribute("title", ctx.titleStr);
          ɵɵadvance(2);
          ɵɵconditional(ctx.titleStr ? 2 : 3);
          ɵɵadvance(2);
          ɵɵconditional(ctx.nzDirection === "vertical" ? 4 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAnchorLinkComponent, [{
    type: Component,
    args: [{
      selector: "nz-link",
      exportAs: "nzLink",
      preserveWhitespaces: false,
      standalone: true,
      imports: [NgTemplateOutlet],
      template: `
    <a
      #linkTitle
      class="ant-anchor-link-title"
      [href]="nzHref"
      [attr.title]="titleStr"
      [target]="nzTarget"
      (click)="goToClick($event)"
    >
      @if (titleStr) {
        <span>{{ titleStr }}</span>
      } @else {
        <ng-template [ngTemplateOutlet]="titleTpl || nzTemplate" />
      }
    </a>
    @if (nzDirection === 'vertical') {
      <ng-content></ng-content>
    }
  `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-anchor-link"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NzAnchorComponent
  }, {
    type: Platform
  }, {
    type: Renderer2
  }], {
    nzHref: [{
      type: Input
    }],
    nzTarget: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzTemplate: [{
      type: ContentChild,
      args: ["nzTemplate", {
        static: false
      }]
    }],
    linkTitle: [{
      type: ViewChild,
      args: ["linkTitle"]
    }]
  });
})();
var NzAnchorModule = class _NzAnchorModule {
  static {
    this.ɵfac = function NzAnchorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzAnchorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzAnchorModule,
      imports: [NzAnchorComponent, NzAnchorLinkComponent],
      exports: [NzAnchorComponent, NzAnchorLinkComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzAnchorComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAnchorModule, [{
    type: NgModule,
    args: [{
      exports: [NzAnchorComponent, NzAnchorLinkComponent],
      imports: [NzAnchorComponent, NzAnchorLinkComponent]
    }]
  }], null, null);
})();
export {
  NzAnchorComponent,
  NzAnchorLinkComponent,
  NzAnchorModule
};
//# sourceMappingURL=ng-zorro-antd_anchor.js.map
