<template>
  <EventPagesBody :title="'ヒトコト'">
    <template v-slot:body>
      <EventFormContent v-model="form" @input="inputForm" />
      <div class="text-center mb-20">
        <ButtonLink :link="`/events/geekexpo2020/step2`" :text="`戻る`" />
        <ButtonLink :link="`/events/geekexpo2020/step4`" :text="`次へ`" />
      </div>
      <div class="text-center">
        <ButtonPreview :link="`/events/geekexpo2020/preview`" />
      </div>
    </template>
  </EventPagesBody>
</template>

<script>
import { geekexpoMapper } from "@/store/events/geekexpo2020/form"
import unloadMixin from "@/service/beforeunload/beforeunloadMixin"

export default {
  mixins: [unloadMixin],
  data() {
    return {
      form: {},
    }
  },
  computed: {
    ...geekexpoMapper.mapState(["step3"]),
  },
  mounted() {
    this.form = { ...this.step3 }
  },
  methods: {
    ...geekexpoMapper.mapMutations(["SET_CONTENT"]),
    inputForm() {
      this.SET_CONTENT(this.form)
    },
  },
}
</script>

<style scoped></style>
