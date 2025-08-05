<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { X } from 'lucide-vue-next';
import { Button } from '../button'
import { getDialogClasses, type DialogVariants } from '.';

const isOpen = defineModel<boolean>('open', { default: false })

const emit = defineEmits(['confirm'])

const props = defineProps<DialogVariants & { class?: string }>()

const onEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') isOpen.value = false
}

const onConfirm = () => {
  isOpen.value = false
  emit('confirm')
}

onMounted(() => {
  document.addEventListener('keydown', onEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onEscape)
  document.body.style.overflow = 'auto'
})

watch(isOpen, () => {
  document.body.style.overflow = isOpen.value ? 'clip' : 'auto'
})
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="isOpen" :class="getDialogClasses({ variant: variant, size: size }, props.class)">
        <div class="w-3xl space-y-2">
          <Button size="sm" variant="ghost" class="absolute top-3 right-3" aria-label="Close dialog"
            @click="isOpen = false">
            <X class="size-3.5" />
          </Button>
          <slot name="title"></slot>
          <slot />
          <slot name="footer">
            <div class="flex justify-end gap-2 mt-4">
              <Button variant="ghost" @click="isOpen = false">Cancel</Button>
              <Button @click="onConfirm">Confirm</Button>
            </div>
          </slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
