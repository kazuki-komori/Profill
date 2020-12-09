export default {
  mounted() {
    window.addEventListener("beforeunload", this.confirm)
  },

  destroyed() {
    window.removeEventListener("beforeunload", this.confirm)
  },

  methods: {
    confirm(event) {
      event.preventDefault()
      event.returnValue = ""
    },
  },
}
