import { AfterViewInit, Component, HostBinding, OnDestroy, } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime, } from "rxjs/operators";
import { toggleOpacity, VisibilityState } from "../../animations";
enum Direction { Hide = "Hide", Show = "Show", }

@Component({
  selector: "app-scroll-top",
  templateUrl: "./scroll-top.component.html",
  styleUrls: ["./scroll-top.component.scss"],
  animations: [toggleOpacity],
})
export class ScrollTopComponent implements AfterViewInit, OnDestroy {
  private visibility: boolean = false;

  private s1: Subscription;
  private s2: Subscription;
  windowScrolled = false;

  @HostBinding("@toggleOpacity")
  get toggleOpacity(): VisibilityState {
    return this.visibility ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  constructor() { }

  ngAfterViewInit(): void { this.toggleComponentOnScroll(); }

  ngOnDestroy(): void { }

  onScrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  private toggleComponentOnScroll(): void {
    // if (GlobalUtils.isBrowser()) {
      const componentInvisibleUntil = innerHeight;

      const scroll$ = fromEvent(window, "scroll").pipe(
        throttleTime(10),
        map(() => window.pageYOffset),
        pairwise(),
        map(
          ([y1, y2]): Direction => {
            return y2 >= componentInvisibleUntil
              ? Direction.Hide
              : Direction.Show;
          }
        ),
        distinctUntilChanged(),
        share()
      );

      const scrollHide$ = scroll$.pipe(
        filter((direction) => direction === Direction.Hide)
      );

      const scrollShow$ = scroll$.pipe(
        filter((direction) => direction === Direction.Show)
      );

      this.s1 = scrollHide$.subscribe(() => (this.visibility = true));
      this.s2 = scrollShow$.subscribe(() => (this.visibility = false));
    // }
  }

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset >= 500;
    });
  }
}
