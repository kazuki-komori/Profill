<template>
  <PagesBody :title="'ダウンロード'">
    <template v-slot:body>
      <div class="mx-auto mb-4 px-6 py-4">
        <div ref="printMe">
          <card-template :template="template" :type="type" />
        </div>
      </div>
      <div class="text-center mt-16">
        <a
          class="inline-flex items-center justify-center w-1/2 bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border rounded"
          @click.prevent="print"
        >
          <i class="c-icon__download inline-block" />
          <span class="pl-1">ダウンロード</span>
        </a>
      </div>
      <div class="flex space-x-3 justify-center mt-20">
        <button-twitter />
        <button-facebook />
      </div>
    </template>
  </PagesBody>
</template>
<script>
import { formMapper } from "@/store/form"
import unloadMixin from "@/service/beforeunload/beforeunloadMixin"

export default {
  mixins: [unloadMixin],
  data() {
    return {
      componentData: null,
    }
  },
  computed: {
    ...formMapper.mapGetters(["result"]),
    template() {
      return this.$route.params.template
    },
    type() {
      return this.$route.params.type
    },
  },
  mounted() {
    const { templates } = require("@/static/data/templates.json")
    const template = templates.find((item) => item.name === this.template)
    const type = template.types.find((item) => item.name === this.type)
    this.componentData = `${template.name}${type.name}`
  },
  methods: {
    ...formMapper.mapActions(["clearInput"]),
    async print() {
      const el = this.$refs.printMe
      const options = {
        type: "dataURL",
      }
      const imgUrl = await this.$html2canvas(el, options)
      let anchor = document.createElement("a")
      anchor.href = imgUrl
      anchor.download = "output.png"
      anchor.click()
    },
  },
}
</script>

<style scoped>
.c-icon__download {
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url("~assets/images/other/download-icon.svg");
}
</style>
