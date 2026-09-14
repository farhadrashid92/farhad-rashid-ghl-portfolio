---
name: Motion performance
description: Performance constraints for future portfolio animation work.
---
Prefer transform/opacity animation over animated filtered SVG strokes or page-wide noise and backdrop filters.

**Why:** The user reported page lag after successive visual enhancements combined continuous carousels, filtered paths, and large screenshot assets. Preserve visible hero motion without reintroducing those cumulative rendering costs.

**How to apply:** Keep moving-card surfaces inexpensive, pause animation outside the viewport or hidden tabs, and serve small gallery thumbnails separately from original full-size previews. Do not interpret requests for stronger animation as permission to restore expensive full-page filters.