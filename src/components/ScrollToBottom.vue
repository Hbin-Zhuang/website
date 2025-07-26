<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

const { y: scroll } = useWindowScroll()

// 计算是否已到达底部
const isAtBottom = computed(() => {
  if (typeof window === 'undefined') return false
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollPosition = scroll.value
  
  // 如果距离底部小于 100px，认为已到达底部
  return documentHeight - scrollPosition - windowHeight < 100
})

function toBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  })
}
</script>

<template>
  <button
    aria-label="Scroll to bottom"
    fixed
    right-5
    sm:right-30
    bottom-16
    w-12
    h-12
    text-lg
    hover:op100
    rounded-full
    flex="~ items-center justify-center"
    bg-hex-8883
    transition
    duration-300
    z-100
    print:hidden
    :class="!isAtBottom && scroll > 300 ? 'op75' : 'op0 pointer-events-none'"
    @click="toBottom()"
  >
    <i i-ri-arrow-down-line />
  </button>
</template>