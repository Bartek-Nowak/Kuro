# IconToggle

Toggles between two icons using smooth transitions. Useful for actions like "like/unlike", "show/hide", or "expand/collapse".

```vue
<script setup lang="ts">
import { IconToggle } from '@/components/ui/icon-toggle';
import { Eye, EyeOff } from 'lucide-vue-next'
</script>

<IconToggle variant="info" mode="click">
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

| Prop      | Type                                                                 | Default     | Description                                                                  |
|-----------|----------------------------------------------------------------------|-------------|------------------------------------------------------------------------------|
| `v-model` | `boolean`                                                            | `false`     | Two-way binding for toggle state. Controls which icon is currently visible. |
| `variant` | `'default'` \| `'info'` \| `'success'` \| `'warning'` \| `'danger'` | `'default'` | Sets icon color using Tailwind utility classes.                             |
| `mode`    | `'click'` \| `'hover'`                                               | `'click'`   | Determines whether toggle happens on click or hover.                        |
| `class`   | `string`                                                             | `''`        | Additional classes to apply to both icons.                                  |

## Notes

- The `mode` prop determines how the toggle is triggered:
  - `'click'`: toggles on click.
  - `'hover'`: toggles on mouseover/mouseout.
- Uses Vue's `v-model` to control the active state.
- `variant` is used to apply contextual color using Tailwind (e.g. `text-blue-600`, `text-red-600`).
