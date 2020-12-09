<template>
  <div v-if="form">
    <PagesBody :title="'SNS'">
      <template v-slot:body>
        <FormSocialmedia v-model="form" @input="inputForm" />
        <div class="text-center mb-20">
          <ButtonLink :link="`/${template}/${type}/step1`" :text="`戻る`" />
          <ButtonLink :link="`/${template}/${type}/step3`" :text="`次へ`" />
        </div>
        <div class="text-center">
          <ButtonPreview :link="`/${template}/${type}/preview`" />
        </div>
      </template>
    </PagesBody>
  </div>
</template>

<script>
import unloadMixin from "@/service/beforeunload/beforeunloadMixin"
import { formMapper } from "@/store/form"
export default {
  mixins: [unloadMixin],
  data() {
    return {
      form: null,
    }
  },
  mounted() {
    this.form = { ...this.step2 }
  },
  computed: {
    ...formMapper.mapState(["step2"]),
    template() {
      return this.$route.params.template
    },
    type() {
      return this.$route.params.type
    },
  },
  methods: {
    ...formMapper.mapMutations(["SET_SNS"]),
    inputForm() {
      this.SET_SNS(this.form)
    },
  },
}
</script>

<style scoped></style>
