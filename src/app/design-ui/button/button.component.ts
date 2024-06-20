import { Component, HostBinding, computed, input } from "@angular/core";

// สร้าง type
export type ButtonColor = "primary" | "secondary" | "success";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonRounded = boolean;

// สร้าง Constant Data
const BASE = "btn";
const ROUNDED = "rounded";
const BUTTON_COLORS: Record<ButtonColor, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  success: "btn-success",
};
const BUTTON_SIZES: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

@Component({
  selector: "my-button",
  standalone: true,
  imports: [],
  template: `<button [class]="classes()"><ng-content></ng-content></button>`,
  styles: [
    `
      .btn {
        padding: 10px 20px;
        font-weight: bold;
        cursor: pointer;
      }
      .btn-primary {
        color: white;
        background: blue;
        border: 1px solid blue;
      }
      .btn-secondary {
        color: white;
        background: darkorange;
        border: 1px solid darkorange;;
      }
      .btn-success {
        color: white;
        background: green;
        border: 1px solid green;
      }
      .btn-sm {
        font-size: 12px;
      }
      .btn-md {
        font-size: 16px;
      }
      .btn-lg {
        font-size: 20px;
      }
      .rounded {
        border-radius: 99999px;
      }
    `,
  ],
})
export class ButtonComponent {
  // set default value และ รับ input value ที่ส่งมา จาก parent
  color = input<ButtonColor>("primary");
  size = input<ButtonSize>("md");
  rounded = input<ButtonRounded>(false);

  // get classes
  classes = computed(() => {
    return [
      BASE,
      BUTTON_COLORS[this.color()],
      BUTTON_SIZES[this.size()],
      this.rounded() ? ROUNDED : "",
    ].join(" ");
  });
}
