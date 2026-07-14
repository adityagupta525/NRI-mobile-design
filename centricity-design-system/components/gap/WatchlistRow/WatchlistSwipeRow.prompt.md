WatchlistSwipeRow is a fund row whose left-swipe reveals Invest (copper) + Remove (brick); it spring-snaps open/closed and fires a selection-tick haptic at threshold. Drag with mouse or touch.

Motion: `--easing-spring` snap-back (250ms). Haptic: `selection` at threshold crossing. Voice: n/a.

```jsx
<WatchlistSwipeRow name="Parag Parikh Flexi Cap" meta="FLEXI CAP · NAV" nav="₹78.42" change="+0.74%" up onInvest={buy} onRemove={drop} onHaptic={haptic} />
```
