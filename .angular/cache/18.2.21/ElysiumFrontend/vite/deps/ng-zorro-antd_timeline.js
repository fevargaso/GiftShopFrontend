import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-O2KJ4HO4.js";
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
import "./chunk-45PTXMFP.js";
import "./chunk-TAIIUZZD.js";
import "./chunk-6HQWDNO4.js";
import {
  NgTemplateOutlet
} from "./chunk-P7XZQWMR.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Injectable,
  Input,
  NgModule,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
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
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-E2LL2ENA.js";
import "./chunk-XSUPIODI.js";
import "./chunk-RRANXKLR.js";
import {
  ReplaySubject,
  Subject,
  takeUntil
} from "./chunk-V7EGFIMY.js";
import "./chunk-TXDUYLVM.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-timeline.mjs
var _c0 = ["template"];
var _c1 = ["*"];
function NzTimelineItemComponent_ng_template_0_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzLabel);
  }
}
function NzTimelineItemComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, NzTimelineItemComponent_ng_template_0_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzLabel);
  }
}
function NzTimelineItemComponent_ng_template_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzDot);
  }
}
function NzTimelineItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 1);
    ɵɵtemplate(1, NzTimelineItemComponent_ng_template_0_Conditional_1_Template, 2, 1, "div", 2);
    ɵɵelement(2, "div", 3);
    ɵɵelementStart(3, "div", 4);
    ɵɵtemplate(4, NzTimelineItemComponent_ng_template_0_ng_container_4_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 6);
    ɵɵprojection(6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("ant-timeline-item-right", (ctx_r0.nzPosition || ctx_r0.position) === "right")("ant-timeline-item-left", (ctx_r0.nzPosition || ctx_r0.position) === "left")("ant-timeline-item-last", ctx_r0.isLast);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzLabel ? 1 : -1);
    ɵɵadvance(2);
    ɵɵstyleProp("border-color", ctx_r0.borderColor);
    ɵɵclassProp("ant-timeline-item-head-red", ctx_r0.nzColor === "red")("ant-timeline-item-head-blue", ctx_r0.nzColor === "blue")("ant-timeline-item-head-green", ctx_r0.nzColor === "green")("ant-timeline-item-head-gray", ctx_r0.nzColor === "gray")("ant-timeline-item-head-custom", !!ctx_r0.nzDot);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzDot);
  }
}
function NzTimelineComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const pendingTemplate_r1 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", pendingTemplate_r1);
  }
}
function NzTimelineComponent_For_3_ng_template_0_Template(rf, ctx) {
}
function NzTimelineComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTimelineComponent_For_3_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵproperty("ngTemplateOutlet", item_r2.template);
  }
}
function NzTimelineComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const pendingTemplate_r1 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", pendingTemplate_r1);
  }
}
function NzTimelineComponent_ng_template_5_Conditional_0_ng_container_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
}
function NzTimelineComponent_ng_template_5_Conditional_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵtemplate(2, NzTimelineComponent_ng_template_5_Conditional_0_ng_container_3_Conditional_2_Template, 1, 0, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.nzPendingDot, " ");
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.nzPendingDot ? 2 : -1);
  }
}
function NzTimelineComponent_ng_template_5_Conditional_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.isPendingBoolean ? "" : ctx_r2.nzPending, " ");
  }
}
function NzTimelineComponent_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 3);
    ɵɵelement(1, "div", 4);
    ɵɵelementStart(2, "div", 5);
    ɵɵtemplate(3, NzTimelineComponent_ng_template_5_Conditional_0_ng_container_3_Template, 3, 2, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 7);
    ɵɵtemplate(5, NzTimelineComponent_ng_template_5_Conditional_0_ng_container_5_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzPendingDot);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzPending);
  }
}
function NzTimelineComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTimelineComponent_ng_template_5_Conditional_0_Template, 6, 2, "li", 3);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(ctx_r2.nzPending ? 0 : -1);
  }
}
var TimelineTimeDefaultColors = ["red", "blue", "green", "grey", "gray"];
var TimelineService = class _TimelineService {
  constructor() {
    this.check$ = new ReplaySubject(1);
  }
  markForCheck() {
    this.check$.next();
  }
  static {
    this.ɵfac = function TimelineService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimelineService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TimelineService,
      factory: _TimelineService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineService, [{
    type: Injectable
  }], null, null);
})();
function isDefaultColor(color) {
  return TimelineTimeDefaultColors.findIndex((i) => i === color) !== -1;
}
var NzTimelineItemComponent = class _NzTimelineItemComponent {
  constructor(cdr, timelineService) {
    this.cdr = cdr;
    this.timelineService = timelineService;
    this.nzColor = "blue";
    this.isLast = false;
    this.borderColor = null;
  }
  ngOnChanges(changes) {
    this.timelineService.markForCheck();
    if (changes.nzColor) {
      this.updateCustomColor();
    }
  }
  detectChanges() {
    this.cdr.detectChanges();
  }
  updateCustomColor() {
    this.borderColor = isDefaultColor(this.nzColor) ? null : this.nzColor;
  }
  static {
    this.ɵfac = function NzTimelineItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTimelineItemComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TimelineService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTimelineItemComponent,
      selectors: [["nz-timeline-item"], ["", "nz-timeline-item", ""]],
      viewQuery: function NzTimelineItemComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        }
      },
      inputs: {
        nzPosition: "nzPosition",
        nzColor: "nzColor",
        nzDot: "nzDot",
        nzLabel: "nzLabel"
      },
      exportAs: ["nzTimelineItem"],
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 0,
      consts: [["template", ""], [1, "ant-timeline-item"], [1, "ant-timeline-item-label"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"]],
      template: function NzTimelineItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NzTimelineItemComponent_ng_template_0_Template, 7, 20, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimelineItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      selector: "nz-timeline-item, [nz-timeline-item]",
      exportAs: "nzTimelineItem",
      template: `
    <ng-template #template>
      <li
        class="ant-timeline-item"
        [class.ant-timeline-item-right]="(nzPosition || position) === 'right'"
        [class.ant-timeline-item-left]="(nzPosition || position) === 'left'"
        [class.ant-timeline-item-last]="isLast"
      >
        @if (nzLabel) {
          <div class="ant-timeline-item-label">
            <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container>
          </div>
        }
        <div class="ant-timeline-item-tail"></div>
        <div
          class="ant-timeline-item-head"
          [class.ant-timeline-item-head-red]="nzColor === 'red'"
          [class.ant-timeline-item-head-blue]="nzColor === 'blue'"
          [class.ant-timeline-item-head-green]="nzColor === 'green'"
          [class.ant-timeline-item-head-gray]="nzColor === 'gray'"
          [class.ant-timeline-item-head-custom]="!!nzDot"
          [style.border-color]="borderColor"
        >
          <ng-container *nzStringTemplateOutlet="nzDot">{{ nzDot }}</ng-container>
        </div>
        <div class="ant-timeline-item-content">
          <ng-content></ng-content>
        </div>
      </li>
    </ng-template>
  `,
      imports: [NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: TimelineService
  }], {
    template: [{
      type: ViewChild,
      args: ["template", {
        static: false
      }]
    }],
    nzPosition: [{
      type: Input
    }],
    nzColor: [{
      type: Input
    }],
    nzDot: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }]
  });
})();
var NzTimelineComponent = class _NzTimelineComponent {
  constructor(cdr, timelineService, directionality) {
    this.cdr = cdr;
    this.timelineService = timelineService;
    this.directionality = directionality;
    this.nzMode = "left";
    this.nzReverse = false;
    this.isPendingBoolean = false;
    this.timelineItems = [];
    this.dir = "ltr";
    this.hasLabelItem = false;
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    const {
      nzMode,
      nzReverse,
      nzPending
    } = changes;
    if (simpleChangeActivated(nzMode) || simpleChangeActivated(nzReverse)) {
      this.updateChildren();
    }
    if (nzPending) {
      this.isPendingBoolean = nzPending.currentValue === true;
    }
  }
  ngOnInit() {
    this.timelineService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterContentInit() {
    this.updateChildren();
    this.listOfItems.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateChildren();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  updateChildren() {
    if (this.listOfItems && this.listOfItems.length) {
      const length = this.listOfItems.length;
      let hasLabelItem = false;
      this.listOfItems.forEach((item, index) => {
        item.isLast = !this.nzReverse ? index === length - 1 : index === 0;
        item.position = getInferredTimelineItemPosition(index, this.nzMode);
        if (!hasLabelItem && item.nzLabel) {
          hasLabelItem = true;
        }
        item.detectChanges();
      });
      this.timelineItems = this.nzReverse ? this.listOfItems.toArray().reverse() : this.listOfItems.toArray();
      this.hasLabelItem = hasLabelItem;
    } else {
      this.timelineItems = [];
      this.hasLabelItem = false;
    }
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function NzTimelineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTimelineComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TimelineService), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTimelineComponent,
      selectors: [["nz-timeline"]],
      contentQueries: function NzTimelineComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NzTimelineItemComponent, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfItems = _t);
        }
      },
      inputs: {
        nzMode: "nzMode",
        nzPending: "nzPending",
        nzPendingDot: "nzPendingDot",
        nzReverse: [2, "nzReverse", "nzReverse", booleanAttribute]
      },
      exportAs: ["nzTimeline"],
      standalone: true,
      features: [ɵɵProvidersFeature([TimelineService]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 14,
      consts: [["pendingTemplate", ""], [1, "ant-timeline"], [3, "ngTemplateOutlet"], [1, "ant-timeline-item", "ant-timeline-item-pending"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head", "ant-timeline-item-head-custom", "ant-timeline-item-head-blue"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"], ["nz-icon", "", "nzType", "loading"]],
      template: function NzTimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "ul", 1);
          ɵɵtemplate(1, NzTimelineComponent_Conditional_1_Template, 1, 1, "ng-container", 2);
          ɵɵrepeaterCreate(2, NzTimelineComponent_For_3_Template, 1, 1, null, 2, ɵɵrepeaterTrackByIdentity);
          ɵɵtemplate(4, NzTimelineComponent_Conditional_4_Template, 1, 1, "ng-container", 2);
          ɵɵelementEnd();
          ɵɵtemplate(5, NzTimelineComponent_ng_template_5_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵprojection(7);
        }
        if (rf & 2) {
          ɵɵclassProp("ant-timeline-label", ctx.hasLabelItem)("ant-timeline-right", !ctx.hasLabelItem && ctx.nzMode === "right")("ant-timeline-alternate", ctx.nzMode === "alternate" || ctx.nzMode === "custom")("ant-timeline-pending", !!ctx.nzPending)("ant-timeline-reverse", ctx.nzReverse)("ant-timeline-rtl", ctx.dir === "rtl");
          ɵɵadvance();
          ɵɵconditional(ctx.nzReverse ? 1 : -1);
          ɵɵadvance();
          ɵɵrepeater(ctx.timelineItems);
          ɵɵadvance(2);
          ɵɵconditional(!ctx.nzReverse ? 4 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimelineComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      selector: "nz-timeline",
      providers: [TimelineService],
      exportAs: "nzTimeline",
      template: `
    <ul
      class="ant-timeline"
      [class.ant-timeline-label]="hasLabelItem"
      [class.ant-timeline-right]="!hasLabelItem && nzMode === 'right'"
      [class.ant-timeline-alternate]="nzMode === 'alternate' || nzMode === 'custom'"
      [class.ant-timeline-pending]="!!nzPending"
      [class.ant-timeline-reverse]="nzReverse"
      [class.ant-timeline-rtl]="dir === 'rtl'"
    >
      <!-- pending dot (reversed) -->
      @if (nzReverse) {
        <ng-container [ngTemplateOutlet]="pendingTemplate"></ng-container>
      }
      <!-- timeline items -->
      @for (item of timelineItems; track item) {
        <ng-template [ngTemplateOutlet]="item.template"></ng-template>
      }
      @if (!nzReverse) {
        <ng-container [ngTemplateOutlet]="pendingTemplate"></ng-container>
      }
      <!-- pending dot -->
    </ul>
    <ng-template #pendingTemplate>
      @if (nzPending) {
        <li class="ant-timeline-item ant-timeline-item-pending">
          <div class="ant-timeline-item-tail"></div>
          <div class="ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue">
            <ng-container *nzStringTemplateOutlet="nzPendingDot">
              {{ nzPendingDot }}
              @if (!nzPendingDot) {
                <span nz-icon nzType="loading"></span>
              }
            </ng-container>
          </div>
          <div class="ant-timeline-item-content">
            <ng-container *nzStringTemplateOutlet="nzPending">
              {{ isPendingBoolean ? '' : nzPending }}
            </ng-container>
          </div>
        </li>
      }
    </ng-template>
    <!-- Grasp items -->
    <ng-content></ng-content>
  `,
      imports: [NgTemplateOutlet, NzOutletModule, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: TimelineService
  }, {
    type: Directionality
  }], {
    listOfItems: [{
      type: ContentChildren,
      args: [NzTimelineItemComponent]
    }],
    nzMode: [{
      type: Input
    }],
    nzPending: [{
      type: Input
    }],
    nzPendingDot: [{
      type: Input
    }],
    nzReverse: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function simpleChangeActivated(simpleChange) {
  return !!(simpleChange && (simpleChange.previousValue !== simpleChange.currentValue || simpleChange.isFirstChange()));
}
function getInferredTimelineItemPosition(index, mode) {
  return mode === "custom" ? void 0 : mode === "left" ? "left" : mode === "right" ? "right" : mode === "alternate" && index % 2 === 0 ? "left" : "right";
}
var NzTimelineModule = class _NzTimelineModule {
  static {
    this.ɵfac = function NzTimelineModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTimelineModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzTimelineModule,
      imports: [NzTimelineItemComponent, NzTimelineComponent],
      exports: [NzTimelineItemComponent, NzTimelineComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzTimelineItemComponent, NzTimelineComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimelineModule, [{
    type: NgModule,
    args: [{
      imports: [NzTimelineItemComponent, NzTimelineComponent],
      exports: [NzTimelineItemComponent, NzTimelineComponent]
    }]
  }], null, null);
})();
export {
  NzTimelineComponent,
  NzTimelineItemComponent,
  NzTimelineModule,
  TimelineService
};
//# sourceMappingURL=ng-zorro-antd_timeline.js.map
