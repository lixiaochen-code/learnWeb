export default function (defaultData = null) {
    return {
        data() {
            return {
                data: defaultData,
                isLoading: true
            }
        },
        async created() {
            this.data = await this.getData();
            this.isLoading = !this.isLoading;
        },
    }
}