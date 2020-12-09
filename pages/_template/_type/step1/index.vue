<template>
  <div v-if="form">
    <PagesBody :title="'お名前'">
      <template v-slot:body>
        <FormProfile v-model="form" @input="inputForm" />
        <div class="text-center mb-20 ml-32">
          <ButtonLink :link="`/${template}/${type}/step2`" :text="`次へ`" />
        </div>
        <div class="text-center mb-4">
          <ButtonPreview :link="`/${template}/${type}/preview`" />
        </div>
        <div class="text-center">
          <nuxt-link
            :to="`/${template}`"
            class="inline-block bg-white w-10/12 lg:w-1/2 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded"
          >
            デザイン選択へ戻る
          </nuxt-link>
        </div>
      </template>
    </PagesBody>
  </div>
</template>

<script>
import { formMapper } from "@/store/form"
import ButtonPreview from "@/components/button/ButtonPreview"
import ButtonLink from "@/components/button/ButtonLink"
import unloadMixin from "@/service/beforeunload/beforeunloadMixin"

export default {
  components: { ButtonLink, ButtonPreview },
  mixins: [unloadMixin],
  data() {
    return {
      form: null,
    }
  },
  computed: {
    ...formMapper.mapState(["step1"]),
    template() {
      return this.$route.params.template
    },
    type() {
      return this.$route.params.type
    },
  },
  mounted() {
    this.form = { ...this.step1 }
  },

  methods: {
    ...formMapper.mapMutations(["SET_PROFILE"]),
    inputForm() {
      this.SET_PROFILE(this.form)
    },
  },
}
</script>

<style scoped></style>
