<script lang="ts">
import {defineComponent, h, VNode} from 'vue';

function getChildrenTextContent(children: VNode[]): string {
  return children
    .map((node) =>
      typeof node.children === 'string'
        ? node.children
        : Array.isArray(node.children)
        ? getChildrenTextContent(node.children as VNode[])
        : ''
    )
    .join('');
}

export default defineComponent({
  name: 'anchored-heading',
  data() {
    return {
      modelValue: 'Hello'
    };
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render() {
    const tag = `h${this.level}`;
    const slot = this.$slots.default!({message: '333'});

    const headingId = getChildrenTextContent(slot)
      .toLowerCase()
      .replace(/\W+/g, '-') // replace non-word characters with dash
      .replace(/(^-|-$)/g, ''); // remove leading and trailing dashes

    return h(tag, {name: headingId, href: `#${headingId}`}, slot);
  }
});
</script>
