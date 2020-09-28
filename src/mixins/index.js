import NProgress from "nprogress";

const nprogressMixin = {
  mounted() {
    this.$nextTick(() => {
      NProgress.done();
    });
  }
};

export { nprogressMixin };
