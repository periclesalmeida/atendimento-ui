import { animate, animation, keyframes, style } from "@angular/animations";

export const flash = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({ opacity: 1 }),
      style({ opacity: 0 }),
      style({ opacity: 1 }),
      style({ opacity: 0 }),
      style({ opacity: 1 }),
      style({ opacity: 0 }),
      style({ opacity: 1 }),
    ])
  ),
  { params: { timing: 3, delay: 0 } }
);
