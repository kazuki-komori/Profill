<template>
  <div class="w-full c-accordion">
    <a
      href="#"
      class="flex justify-between bg-white c-accordion__container px-5 py-2"
      @click.prevent="toggle"
    >
      <p class="text-sm font-bold text-gray-700">{{ title }}</p>
      <img
        src="@/assets/images/other/chevrondown-icon.svg"
        alt="下向きのシェブロン"
        :class="activeIconClass"
      />
    </a>
    <div v-if="show" class="text-xs c-accordion__body">
      <p class="py-2 px-8 text-gray-700">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    activeIconClass() {
      return {
        "c-accordion__icon": true,
        "c-accordion__iconActive": this.show,
      }
    },
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
  },
}
</script>

<style lang="scss" scoped>
.c-accordion {
  color: #474747;
  &__container {
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
      transition: 0.3s;
    }
  }
  &__icon {
    transition: 0.1s ease-in;
  }
  &__iconActive {
    transition: 0.3s ease-out;
    transform: rotate(180deg);
  }
}
</style>
