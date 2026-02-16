import {
  NzMNComponent,
  NzMNContainerComponent,
  NzMNService
} from "./chunk-OKRYQEFP.js";
import {
  Overlay
} from "./chunk-TDWUPWIH.js";
import "./chunk-PBM4W3SG.js";
import "./chunk-3YLFXDIK.js";
import "./chunk-CAI4R2EN.js";
import {
  notificationMotion
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
import {
  NzSingletonService
} from "./chunk-YBPL5W6X.js";
import "./chunk-4MSGGSW7.js";
import "./chunk-R6IJAHEZ.js";
import "./chunk-CGJQYKLH.js";
import {
  NzConfigService
} from "./chunk-XRYSGYAF.js";
import {
  toCssPixel
} from "./chunk-WKKYJIDN.js";
import "./chunk-HHQ7MW3F.js";
import "./chunk-FADEYHXQ.js";
import {
  NgClass,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-VFHRQ4OU.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  NgModule,
  Output,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-ZREUISJD.js";
import "./chunk-IC62NIWK.js";
import "./chunk-ISM5WLAM.js";
import {
  Subject,
  takeUntil
} from "./chunk-ZZ67MR3E.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-notification.mjs
var _c0 = (a0, a1) => ({
  $implicit: a0,
  data: a1
});
var _c1 = (a0) => ({
  $implicit: a0
});
function NzNotificationComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzNotificationComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzNotificationComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.instance.template)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c0, ctx_r0, ctx_r0.instance.options == null ? null : ctx_r0.instance.options.nzData));
  }
}
function NzNotificationComponent_Conditional_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
}
function NzNotificationComponent_Conditional_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
}
function NzNotificationComponent_Conditional_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
}
function NzNotificationComponent_Conditional_2_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 9);
  }
}
function NzNotificationComponent_Conditional_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("innerHTML", ctx_r0.instance.title, ɵɵsanitizeHtml);
  }
}
function NzNotificationComponent_Conditional_2_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("innerHTML", ctx_r0.instance.content, ɵɵsanitizeHtml);
  }
}
function NzNotificationComponent_Conditional_2_Conditional_11_ng_template_1_Template(rf, ctx) {
}
function NzNotificationComponent_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtemplate(1, NzNotificationComponent_Conditional_2_Conditional_11_ng_template_1_Template, 0, 0, "ng-template", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r0));
  }
}
function NzNotificationComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 2)(2, "div");
    ɵɵtemplate(3, NzNotificationComponent_Conditional_2_Case_3_Template, 1, 0, "span", 6)(4, NzNotificationComponent_Conditional_2_Case_4_Template, 1, 0, "span", 7)(5, NzNotificationComponent_Conditional_2_Case_5_Template, 1, 0, "span", 8)(6, NzNotificationComponent_Conditional_2_Case_6_Template, 1, 0, "span", 9);
    ɵɵelementStart(7, "div", 10);
    ɵɵtemplate(8, NzNotificationComponent_Conditional_2_ng_container_8_Template, 2, 1, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 12);
    ɵɵtemplate(10, NzNotificationComponent_Conditional_2_ng_container_10_Template, 2, 1, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵtemplate(11, NzNotificationComponent_Conditional_2_Conditional_11_Template, 2, 4, "span", 13);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassProp("ant-notification-notice-with-icon", ctx_r0.instance.type !== "blank");
    ɵɵadvance();
    ɵɵconditional((tmp_2_0 = ctx_r0.instance.type) === "success" ? 3 : tmp_2_0 === "info" ? 4 : tmp_2_0 === "warning" ? 5 : tmp_2_0 === "error" ? 6 : -1);
    ɵɵadvance(5);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.instance.title);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.instance.content);
    ɵɵadvance();
    ɵɵconditional((tmp_5_0 = ctx_r0.instance.options == null ? null : ctx_r0.instance.options.nzButton) ? 11 : -1, tmp_5_0);
  }
}
function NzNotificationComponent_Conditional_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const closeIcon_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("nzType", closeIcon_r2);
  }
}
function NzNotificationComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzNotificationComponent_Conditional_5_ng_container_0_Template, 2, 1, "ng-container", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.instance.options == null ? null : ctx_r0.instance.options.nzCloseIcon);
  }
}
function NzNotificationComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 5);
  }
}
function NzNotificationContainerComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-notification", 7);
    ɵɵlistener("destroyed", function NzNotificationContainerComponent_For_2_Template_nz_notification_destroyed_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.remove($event.id, $event.userAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const instance_r3 = ctx.$implicit;
    ɵɵproperty("instance", instance_r3)("placement", "topLeft");
  }
}
function NzNotificationContainerComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-notification", 7);
    ɵɵlistener("destroyed", function NzNotificationContainerComponent_For_5_Template_nz_notification_destroyed_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.remove($event.id, $event.userAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const instance_r5 = ctx.$implicit;
    ɵɵproperty("instance", instance_r5)("placement", "topRight");
  }
}
function NzNotificationContainerComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-notification", 7);
    ɵɵlistener("destroyed", function NzNotificationContainerComponent_For_8_Template_nz_notification_destroyed_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.remove($event.id, $event.userAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const instance_r7 = ctx.$implicit;
    ɵɵproperty("instance", instance_r7)("placement", "bottomLeft");
  }
}
function NzNotificationContainerComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-notification", 7);
    ɵɵlistener("destroyed", function NzNotificationContainerComponent_For_11_Template_nz_notification_destroyed_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.remove($event.id, $event.userAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const instance_r9 = ctx.$implicit;
    ɵɵproperty("instance", instance_r9)("placement", "bottomRight");
  }
}
function NzNotificationContainerComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-notification", 7);
    ɵɵlistener("destroyed", function NzNotificationContainerComponent_For_14_Template_nz_notification_destroyed_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.remove($event.id, $event.userAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const instance_r11 = ctx.$implicit;
    ɵɵproperty("instance", instance_r11)("placement", "top");
  }
}
function NzNotificationContainerComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-notification", 7);
    ɵɵlistener("destroyed", function NzNotificationContainerComponent_For_17_Template_nz_notification_destroyed_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.remove($event.id, $event.userAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const instance_r13 = ctx.$implicit;
    ɵɵproperty("instance", instance_r13)("placement", "bottom");
  }
}
var NzNotificationComponent = class _NzNotificationComponent extends NzMNComponent {
  constructor(cdr) {
    super(cdr);
    this.destroyed = new EventEmitter();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.instance.onClick.complete();
  }
  onClick(event) {
    this.instance.onClick.next(event);
  }
  close() {
    this.destroy(true);
  }
  get state() {
    if (this.instance.state === "enter") {
      switch (this.placement) {
        case "topLeft":
        case "bottomLeft":
          return "enterLeft";
        case "topRight":
        case "bottomRight":
          return "enterRight";
        case "top":
          return "enterTop";
        case "bottom":
          return "enterBottom";
        default:
          return "enterRight";
      }
    } else {
      return this.instance.state;
    }
  }
  static {
    this.ɵfac = function NzNotificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzNotificationComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzNotificationComponent,
      selectors: [["nz-notification"]],
      inputs: {
        instance: "instance",
        index: "index",
        placement: "placement"
      },
      outputs: {
        destroyed: "destroyed"
      },
      exportAs: ["nzNotification"],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 7,
      vars: 5,
      consts: [[1, "ant-notification-notice", "ant-notification-notice-closable", 3, "click", "mouseenter", "mouseleave", "ngStyle", "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-notification-notice-content"], ["tabindex", "0", 1, "ant-notification-notice-close", 3, "click"], [1, "ant-notification-notice-close-x"], ["nz-icon", "", "nzType", "close", 1, "ant-notification-close-icon"], ["nz-icon", "", "nzType", "check-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-success"], ["nz-icon", "", "nzType", "info-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-info"], ["nz-icon", "", "nzType", "exclamation-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-warning"], ["nz-icon", "", "nzType", "close-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-error"], [1, "ant-notification-notice-message"], [4, "nzStringTemplateOutlet"], [1, "ant-notification-notice-description"], [1, "ant-notification-notice-btn"], [3, "innerHTML"], ["nz-icon", "", 3, "nzType"]],
      template: function NzNotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("@notificationMotion.done", function NzNotificationComponent_Template_div_animation_notificationMotion_done_0_listener($event) {
            return ctx.animationStateChanged.next($event);
          })("click", function NzNotificationComponent_Template_div_click_0_listener($event) {
            return ctx.onClick($event);
          })("mouseenter", function NzNotificationComponent_Template_div_mouseenter_0_listener() {
            return ctx.onEnter();
          })("mouseleave", function NzNotificationComponent_Template_div_mouseleave_0_listener() {
            return ctx.onLeave();
          });
          ɵɵtemplate(1, NzNotificationComponent_Conditional_1_Template, 1, 5, null, 1)(2, NzNotificationComponent_Conditional_2_Template, 12, 6, "div", 2);
          ɵɵelementStart(3, "a", 3);
          ɵɵlistener("click", function NzNotificationComponent_Template_a_click_3_listener() {
            return ctx.close();
          });
          ɵɵelementStart(4, "span", 4);
          ɵɵtemplate(5, NzNotificationComponent_Conditional_5_Template, 1, 1, "ng-container")(6, NzNotificationComponent_Conditional_6_Template, 1, 0, "span", 5);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("ngStyle", (ctx.instance.options == null ? null : ctx.instance.options.nzStyle) || null)("ngClass", (ctx.instance.options == null ? null : ctx.instance.options.nzClass) || "")("@notificationMotion", ctx.state);
          ɵɵadvance();
          ɵɵconditional(ctx.instance.template ? 1 : 2);
          ɵɵadvance(4);
          ɵɵconditional((ctx.instance.options == null ? null : ctx.instance.options.nzCloseIcon) ? 5 : 6);
        }
      },
      dependencies: [NgStyle, NgClass, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective, NgTemplateOutlet],
      encapsulation: 2,
      data: {
        animation: [notificationMotion]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNotificationComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-notification",
      exportAs: "nzNotification",
      preserveWhitespaces: false,
      animations: [notificationMotion],
      template: `
    <div
      class="ant-notification-notice ant-notification-notice-closable"
      [ngStyle]="instance.options?.nzStyle || null"
      [ngClass]="instance.options?.nzClass || ''"
      [@notificationMotion]="state"
      (@notificationMotion.done)="animationStateChanged.next($event)"
      (click)="onClick($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      @if (instance.template) {
        <ng-template
          [ngTemplateOutlet]="instance.template!"
          [ngTemplateOutletContext]="{ $implicit: this, data: instance.options?.nzData }"
        />
      } @else {
        <div class="ant-notification-notice-content">
          <div class="ant-notification-notice-content">
            <div [class.ant-notification-notice-with-icon]="instance.type !== 'blank'">
              @switch (instance.type) {
                @case ('success') {
                  <span
                    nz-icon
                    nzType="check-circle"
                    class="ant-notification-notice-icon ant-notification-notice-icon-success"
                  ></span>
                }
                @case ('info') {
                  <span
                    nz-icon
                    nzType="info-circle"
                    class="ant-notification-notice-icon ant-notification-notice-icon-info"
                  ></span>
                }
                @case ('warning') {
                  <span
                    nz-icon
                    nzType="exclamation-circle"
                    class="ant-notification-notice-icon ant-notification-notice-icon-warning"
                  ></span>
                }
                @case ('error') {
                  <span
                    nz-icon
                    nzType="close-circle"
                    class="ant-notification-notice-icon ant-notification-notice-icon-error"
                  ></span>
                }
              }
              <div class="ant-notification-notice-message">
                <ng-container *nzStringTemplateOutlet="instance.title">
                  <div [innerHTML]="instance.title"></div>
                </ng-container>
              </div>
              <div class="ant-notification-notice-description">
                <ng-container *nzStringTemplateOutlet="instance.content">
                  <div [innerHTML]="instance.content"></div>
                </ng-container>
              </div>
              @if (instance.options?.nzButton; as btn) {
                <span class="ant-notification-notice-btn">
                  <ng-template [ngTemplateOutlet]="btn" [ngTemplateOutletContext]="{ $implicit: this }" />
                </span>
              }
            </div>
          </div>
        </div>
      }
      <a tabindex="0" class="ant-notification-notice-close" (click)="close()">
        <span class="ant-notification-notice-close-x">
          @if (instance.options?.nzCloseIcon) {
            <ng-container *nzStringTemplateOutlet="instance.options?.nzCloseIcon; let closeIcon">
              <span nz-icon [nzType]="closeIcon"></span>
            </ng-container>
          } @else {
            <span nz-icon nzType="close" class="ant-notification-close-icon"></span>
          }
        </span>
      </a>
    </div>
  `,
      imports: [NgStyle, NgClass, NzIconModule, NzOutletModule, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    instance: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    destroyed: [{
      type: Output
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "notification";
var NZ_NOTIFICATION_DEFAULT_CONFIG = {
  nzTop: "24px",
  nzBottom: "24px",
  nzPlacement: "topRight",
  nzDuration: 4500,
  nzMaxStack: 8,
  nzPauseOnHover: true,
  nzAnimate: true,
  nzDirection: "ltr"
};
var NzNotificationContainerComponent = class _NzNotificationContainerComponent extends NzMNContainerComponent {
  constructor(cdr, nzConfigService) {
    super(cdr, nzConfigService);
    this.dir = "ltr";
    this.instances = [];
    this.topLeftInstances = [];
    this.topRightInstances = [];
    this.bottomLeftInstances = [];
    this.bottomRightInstances = [];
    this.topInstances = [];
    this.bottomInstances = [];
    const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
    this.dir = config?.nzDirection || "ltr";
  }
  create(notification) {
    const noti = this.onCreate(notification);
    const key = noti.options.nzKey;
    const notificationWithSameKey = this.instances.find((msg) => msg.options.nzKey === notification.options.nzKey);
    if (key && notificationWithSameKey) {
      this.replaceNotification(notificationWithSameKey, noti);
    } else {
      if (this.instances.length >= this.config.nzMaxStack) {
        this.instances = this.instances.slice(1);
      }
      this.instances = [...this.instances, noti];
    }
    this.readyInstances();
    return noti;
  }
  onCreate(instance) {
    instance.options = this.mergeOptions(instance.options);
    instance.onClose = new Subject();
    instance.onClick = new Subject();
    return instance;
  }
  subscribeConfigChange() {
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateConfig();
      const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME);
      if (config) {
        const {
          nzDirection
        } = config;
        this.dir = nzDirection || this.dir;
      }
    });
  }
  updateConfig() {
    this.config = __spreadValues(__spreadValues(__spreadValues({}, NZ_NOTIFICATION_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME));
    this.top = toCssPixel(this.config.nzTop);
    this.bottom = toCssPixel(this.config.nzBottom);
    this.cdr.markForCheck();
  }
  replaceNotification(old, _new) {
    old.title = _new.title;
    old.content = _new.content;
    old.template = _new.template;
    old.type = _new.type;
    old.options = _new.options;
  }
  readyInstances() {
    const instancesMap = {
      topLeft: [],
      topRight: [],
      bottomLeft: [],
      bottomRight: [],
      top: [],
      bottom: []
    };
    this.instances.forEach((m) => {
      const placement = m.options.nzPlacement;
      switch (placement) {
        case "topLeft":
          instancesMap.topLeft.unshift(m);
          break;
        case "topRight":
          instancesMap.topRight.unshift(m);
          break;
        case "bottomLeft":
          instancesMap.bottomLeft.unshift(m);
          break;
        case "bottomRight":
          instancesMap.bottomRight.unshift(m);
          break;
        case "top":
          instancesMap.top.unshift(m);
          break;
        case "bottom":
          instancesMap.bottom.unshift(m);
          break;
        default:
          instancesMap.topRight.unshift(m);
      }
    });
    this.topLeftInstances = instancesMap.topLeft;
    this.topRightInstances = instancesMap.topRight;
    this.bottomLeftInstances = instancesMap.bottomLeft;
    this.bottomRightInstances = instancesMap.bottomRight;
    this.topInstances = instancesMap.top;
    this.bottomInstances = instancesMap.bottom;
    this.cdr.detectChanges();
  }
  mergeOptions(options) {
    const {
      nzDuration,
      nzAnimate,
      nzPauseOnHover,
      nzPlacement
    } = this.config;
    return __spreadValues({
      nzDuration,
      nzAnimate,
      nzPauseOnHover,
      nzPlacement
    }, options);
  }
  static {
    this.ɵfac = function NzNotificationContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzNotificationContainerComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzNotificationContainerComponent,
      selectors: [["nz-notification-container"]],
      exportAs: ["nzNotificationContainer"],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 18,
      vars: 40,
      consts: [[1, "ant-notification", "ant-notification-topLeft"], [3, "instance", "placement"], [1, "ant-notification", "ant-notification-topRight"], [1, "ant-notification", "ant-notification-bottomLeft"], [1, "ant-notification", "ant-notification-bottomRight"], [1, "ant-notification", "ant-notification-top"], [1, "ant-notification", "ant-notification-bottom"], [3, "destroyed", "instance", "placement"]],
      template: function NzNotificationContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵrepeaterCreate(1, NzNotificationContainerComponent_For_2_Template, 1, 2, "nz-notification", 1, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
          ɵɵelementStart(3, "div", 2);
          ɵɵrepeaterCreate(4, NzNotificationContainerComponent_For_5_Template, 1, 2, "nz-notification", 1, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
          ɵɵelementStart(6, "div", 3);
          ɵɵrepeaterCreate(7, NzNotificationContainerComponent_For_8_Template, 1, 2, "nz-notification", 1, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
          ɵɵelementStart(9, "div", 4);
          ɵɵrepeaterCreate(10, NzNotificationContainerComponent_For_11_Template, 1, 2, "nz-notification", 1, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
          ɵɵelementStart(12, "div", 5);
          ɵɵrepeaterCreate(13, NzNotificationContainerComponent_For_14_Template, 1, 2, "nz-notification", 1, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
          ɵɵelementStart(15, "div", 6);
          ɵɵrepeaterCreate(16, NzNotificationContainerComponent_For_17_Template, 1, 2, "nz-notification", 1, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵstyleProp("top", ctx.top)("left", "0px");
          ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
          ɵɵadvance();
          ɵɵrepeater(ctx.topLeftInstances);
          ɵɵadvance(2);
          ɵɵstyleProp("top", ctx.top)("right", "0px");
          ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
          ɵɵadvance();
          ɵɵrepeater(ctx.topRightInstances);
          ɵɵadvance(2);
          ɵɵstyleProp("bottom", ctx.bottom)("left", "0px");
          ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
          ɵɵadvance();
          ɵɵrepeater(ctx.bottomLeftInstances);
          ɵɵadvance(2);
          ɵɵstyleProp("bottom", ctx.bottom)("right", "0px");
          ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
          ɵɵadvance();
          ɵɵrepeater(ctx.bottomRightInstances);
          ɵɵadvance(2);
          ɵɵstyleProp("top", ctx.top)("left", "50%")("transform", "translateX(-50%)");
          ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
          ɵɵadvance();
          ɵɵrepeater(ctx.topInstances);
          ɵɵadvance(2);
          ɵɵstyleProp("bottom", ctx.bottom)("left", "50%")("transform", "translateX(-50%)");
          ɵɵclassProp("ant-notification-rtl", ctx.dir === "rtl");
          ɵɵadvance();
          ɵɵrepeater(ctx.bottomInstances);
        }
      },
      dependencies: [NzNotificationComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNotificationContainerComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-notification-container",
      exportAs: "nzNotificationContainer",
      preserveWhitespaces: false,
      template: `
    <div
      class="ant-notification ant-notification-topLeft"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.left]="'0px'"
    >
      @for (instance of topLeftInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'topLeft'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
    <div
      class="ant-notification ant-notification-topRight"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.right]="'0px'"
    >
      @for (instance of topRightInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'topRight'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
    <div
      class="ant-notification ant-notification-bottomLeft"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.left]="'0px'"
    >
      @for (instance of bottomLeftInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'bottomLeft'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
    <div
      class="ant-notification ant-notification-bottomRight"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.right]="'0px'"
    >
      @for (instance of bottomRightInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'bottomRight'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
    <div
      class="ant-notification ant-notification-top"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.top]="top"
      [style.left]="'50%'"
      [style.transform]="'translateX(-50%)'"
    >
      @for (instance of topInstances; track instance) {
        <nz-notification [instance]="instance" [placement]="'top'" (destroyed)="remove($event.id, $event.userAction)" />
      }
    </div>
    <div
      class="ant-notification ant-notification-bottom"
      [class.ant-notification-rtl]="dir === 'rtl'"
      [style.bottom]="bottom"
      [style.left]="'50%'"
      [style.transform]="'translateX(-50%)'"
    >
      @for (instance of bottomInstances; track instance) {
        <nz-notification
          [instance]="instance"
          [placement]="'bottom'"
          (destroyed)="remove($event.id, $event.userAction)"
        />
      }
    </div>
  `,
      imports: [NzNotificationComponent],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }], null);
})();
var NzNotificationModule = class _NzNotificationModule {
  static {
    this.ɵfac = function NzNotificationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzNotificationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzNotificationModule,
      imports: [NzNotificationComponent, NzNotificationContainerComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzNotificationComponent, NzNotificationContainerComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNotificationModule, [{
    type: NgModule,
    args: [{
      imports: [NzNotificationComponent, NzNotificationContainerComponent]
    }]
  }], null, null);
})();
var notificationId = 0;
var NzNotificationService = class _NzNotificationService extends NzMNService {
  constructor(nzSingletonService, overlay, injector) {
    super(nzSingletonService, overlay, injector);
    this.componentPrefix = "notification-";
  }
  success(title, content, options) {
    return this.create("success", title, content, options);
  }
  error(title, content, options) {
    return this.create("error", title, content, options);
  }
  info(title, content, options) {
    return this.create("info", title, content, options);
  }
  warning(title, content, options) {
    return this.create("warning", title, content, options);
  }
  blank(title, content, options) {
    return this.create("blank", title, content, options);
  }
  create(type, title, content, options) {
    return this.createInstance({
      type,
      title,
      content
    }, options);
  }
  template(template, options) {
    return this.createInstance({
      template
    }, options);
  }
  generateMessageId() {
    return `${this.componentPrefix}-${notificationId++}`;
  }
  createInstance(message, options) {
    this.container = this.withContainer(NzNotificationContainerComponent);
    return this.container.create(__spreadValues(__spreadValues({}, message), {
      createdAt: /* @__PURE__ */ new Date(),
      messageId: options?.nzKey || this.generateMessageId(),
      options
    }));
  }
  static {
    this.ɵfac = function NzNotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzNotificationService)(ɵɵinject(NzSingletonService), ɵɵinject(Overlay), ɵɵinject(Injector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NzNotificationService,
      factory: _NzNotificationService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NzSingletonService
  }, {
    type: Overlay
  }, {
    type: Injector
  }], null);
})();
var NzNotificationServiceModule = class _NzNotificationServiceModule {
  static {
    this.ɵfac = function NzNotificationServiceModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzNotificationServiceModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzNotificationServiceModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNotificationServiceModule, [{
    type: NgModule
  }], null, null);
})();
export {
  NzNotificationComponent,
  NzNotificationContainerComponent,
  NzNotificationModule,
  NzNotificationService,
  NzNotificationServiceModule
};
//# sourceMappingURL=ng-zorro-antd_notification.js.map
