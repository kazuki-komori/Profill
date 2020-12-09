<template>
  <div v-if="form">
    <PagesBody :title="'会社情報'">
      <template v-slot:body>
        <FormCompany v-model="form" @input="inputForm" />
        <div class="text-center mb-20">
          <ButtonLink :link="`/${template}/${type}/step2`" :text="`戻る`" />
          <ButtonLink :link="`/${template}/${type}/step4`" :text="`次へ`" />
        </div>
        <div class="text-center">
          <ButtonPreview :link="`/${template}/${type}/preview`" />
        </div>
      </template>
    </PagesBody>
  </div>
</template>

<script>
import { formMapper } from "@/store/form"
import unloadMixin from "@/service/beforeunload/beforeunloadMixin"

export default {
  mixins: [unloadMixin],
  data() {
    return {
      form: null,
    }
  },
  computed: {
    ...formMapper.mapState(["step3"]),
    template() {
      return this.$route.params.template
    },
    type() {
      return this.$route.params.type
    },
  },
  mounted() {
    this.form = { ...this.step3 }
  },
  methods: {
    ...formMapper.mapMutations(["SET_COMPANY"]),
    inputForm() {
      this.SET_COMPANY(this.form)
    },
  },
}
</script>

<style scoped></style>
