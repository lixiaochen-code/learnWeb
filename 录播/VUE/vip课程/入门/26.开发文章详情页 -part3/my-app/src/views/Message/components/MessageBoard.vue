<template>
  <MessageArea title="留言板" :subTitle="`(${data.total})`" :list="data.rows" />
</template>

<script>
import { getComments } from "@/api/blog";
import getDataMixin from "@/mixins/getDataMixin";

import { postComment } from "@/api/blog";
import MessageArea from "@/components/MessageArea";
export default {
  mixins: [getDataMixin({ total: 0, rows: [] })],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  components: {
    MessageArea,
  },
  methods: {
    async getData() {
      return await getComments(this.page, this.limit);
    },
  },
};
</script>

