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
            console.log(this.data)
            this.isLoading = !this.isLoading;
        },
    }
}