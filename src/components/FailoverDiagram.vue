<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Simplified, generic illustration of sensor-led failover.
// Sites are listed in priority order; the sensor uses the first healthy one.
const sites = ref([
  { id: 'a', name: 'Site A', y: 56, up: true },
  { id: 'b', name: 'Site B', y: 150, up: true },
  { id: 'c', name: 'Site C', y: 244, up: true },
])

const serving = computed(() => sites.value.find((s) => s.up)?.id ?? null)
const pathFor = (y) => `M 96 150 C 220 150, 250 ${y}, 372 ${y}`

const status = computed(() => {
  const down = sites.value.filter((s) => !s.up).map((s) => s.name)
  const srv = sites.value.find((s) => s.id === serving.value)
  if (!srv) return 'All sites are down. The sensor keeps retrying every cycle.'
  if (!down.length) return `All sites healthy. The sensor is served by ${srv.name}.`
  return `${down.join(' and ')} down. The sensor switched to ${srv.name} on its own.`
})

let timer = null
let step = 0
const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function autoplay() {
  // A short loop: A fails, traffic moves to B, A recovers.
  const script = [() => (sites.value[0].up = false), () => (sites.value[0].up = true)]
  timer = setInterval(() => {
    script[step % script.length]()
    step++
  }, 3200)
}

function toggle(site) {
  // Once someone interacts, hand control to them.
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  site.up = !site.up
}

onMounted(() => {
  if (!reduced) autoplay()
})
onBeforeUnmount(() => timer && clearInterval(timer))
</script>

<template>
  <figure class="diagram">
    <svg viewBox="0 0 524 300" role="img" aria-labelledby="diag-title diag-desc">
      <title id="diag-title">Sensor-led failover</title>
      <desc id="diag-desc">A sensor sends keepalives to three sites and uses the highest-priority healthy site.</desc>

      <g v-for="s in sites" :key="s.id">
        <path :id="`p-${s.id}`" :d="pathFor(s.y)" class="link" :class="{ serving: serving === s.id, down: !s.up }" />
        <circle v-if="s.up && !reduced" r="3.2" class="pulse">
          <animateMotion :dur="serving === s.id ? '1.4s' : '2.2s'" repeatCount="indefinite">
            <mpath :href="`#p-${s.id}`" />
          </animateMotion>
        </circle>
      </g>

      <g class="sensor">
        <rect x="20" y="122" width="76" height="56" rx="10" />
        <text x="58" y="146" text-anchor="middle" class="node-title">Sensor</text>
        <text x="58" y="164" text-anchor="middle" class="node-sub">hotspot</text>
      </g>

      <g
        v-for="(s, i) in sites"
        :key="`n-${s.id}`"
        class="site"
        :class="{ serving: serving === s.id, down: !s.up }"
        tabindex="0"
        role="button"
        :aria-label="`${s.name}, ${s.up ? 'up' : 'down'}. Press to ${s.up ? 'take it down' : 'bring it back'}.`"
        @click="toggle(s)"
        @keydown.enter.prevent="toggle(s)"
        @keydown.space.prevent="toggle(s)"
      >
        <rect x="372" :y="s.y - 30" width="140" height="60" rx="10" />
        <text x="388" :y="s.y - 6" class="node-title">{{ s.name }}</text>
        <text x="388" :y="s.y + 14" class="node-sub">
          {{ !s.up ? 'down' : serving === s.id ? 'serving' : `backup, priority ${i + 1}` }}
        </text>
      </g>
    </svg>
    <figcaption>
      <span aria-live="polite">{{ status }}</span>
      <span class="hint">Select a site to take it down.</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.diagram {
  margin: 0;
}
svg {
  width: 100%;
  height: auto;
  display: block;
  overflow: visible;
}
.link {
  fill: none;
  stroke: var(--line);
  stroke-width: 1.5;
  transition: stroke 0.4s, stroke-width 0.4s;
}
.link.serving {
  stroke: var(--signal);
  stroke-width: 3;
}
.link.down {
  stroke: var(--fault);
  stroke-dasharray: 4 6;
  opacity: 0.6;
}
.pulse {
  fill: var(--signal);
}
.sensor rect {
  fill: var(--ink);
}
.sensor .node-title,
.sensor .node-sub {
  fill: var(--paper);
}
.site {
  cursor: pointer;
  outline: none;
}
.site rect {
  fill: var(--panel);
  stroke: var(--line);
  stroke-width: 1.5;
  transition: fill 0.4s, stroke 0.4s;
}
.site.serving rect {
  stroke: var(--signal);
  stroke-width: 2.5;
}
.site.down rect {
  fill: var(--fault-soft);
  stroke: var(--fault);
}
.site:hover rect,
.site:focus-visible rect {
  stroke-width: 3;
}
.site:focus-visible rect {
  stroke: var(--focus);
}
.node-title {
  font: 600 15px var(--sans);
  fill: var(--ink);
}
.node-sub {
  font: 400 11px var(--mono);
  fill: var(--muted);
}
.site.down .node-sub {
  fill: var(--fault);
}
figcaption {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px 16px;
  margin-top: 12px;
  font-size: 0.9rem;
  color: var(--muted);
}
.hint {
  color: var(--ink);
}
</style>
