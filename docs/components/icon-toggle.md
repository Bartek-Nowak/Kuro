# IconToggle

Toggles between two icons using smooth transitions. Useful for actions like "like/unlike", "show/hide", or "expand/collapse".

```vue
<script setup lang="ts">
import { IconToggle } from '@/components/ui/icon-toggle';
import { Eye, EyeOff } from 'lucide-vue-next'
</script>

<IconToggle variant="info" :active="isToggled">
  <Eye />
  <template #alt>
    <EyeOff />
  </template>
</IconToggle>
```

## Installation

::: code-group
```bash
npx github:Bartek-Nowak/Kuro add icon-toggle
```
:::

## Props

| Prop     | Type                                                     | Default   | Description                                 |
|----------|----------------------------------------------------------|-----------|---------------------------------------------|
| `active` | `boolean`                                                | `false`   | Determines which icon is currently shown    |
| `variant`| `'default'` \| `'info'` \| `'success'` \| `'warning'` \| `'danger'` | `'default'` | Controls icon color via Tailwind classes    |
| `class`  | `string`                                                 | `''`      | Additional classes to apply                 |
