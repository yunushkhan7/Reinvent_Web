import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

export enum VisibilityState {
  Visible = "visible",
  Hidden = "hidden",
}

export const toggleOpacity = trigger("toggleOpacity", [
  state(
    VisibilityState.Hidden,
    style({ display: "none", height: "0px", opacity: "0" })
  ),
  state(VisibilityState.Visible, style({ height: "*", opacity: "1" })),

  transition(`${VisibilityState.Hidden} => ${VisibilityState.Visible}`, [
    style({ display: "block" }),
    animate("200ms ease-in"),
  ]),

  transition("* => *", animate("200ms ease-in")),
]);

export const toggleHeight = trigger("toggleHeight", [
  transition(":enter", [
    style({ height: 0, opacity: 0 }),
    animate("300ms ease-out", style({ height: "*", opacity: 1 })),
  ]),
  transition(":leave", [
    style({ height: "*", opacity: 1 }),
    animate("300ms ease-in", style({ height: 0, opacity: 0 })),
  ]),
]);
