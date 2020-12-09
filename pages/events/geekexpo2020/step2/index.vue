<template>
  <div v-if="form">
    <EventPagesBody :title="`リンク`">
      <template v-slot:body>
        <EventFormLink v-model="form" @input="inputForm" />
        <div class="text-center mb-20">
          <ButtonLink :link="`/events/geekexpo2020/step1`" :text="`戻る`" />
          <ButtonLink :link="`/events/geekexpo2020/step3`" :text="`次へ`" />
        </div>
        <div class="text-center">
          <ButtonPreview :link="`/events/geekexpo2020/preview`" />
        </div>
      </template>
    </EventPagesBody>
  </div>
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
    ...geekexpoMapper.mapState(["step2"]),
  },
  mounted() {
    this.form = { ...this.step2 }
  },
  methods: {
    ...geekexpoMapper.mapMutations(["SET_SNS"]),
    inputForm() {
      this.SET_SNS(this.form)
    },
  },
}
</script>

<style scoped></style>
