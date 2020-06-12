<template>
    <a-layout>
        <dashboard-core-drawer/>
        <dashboard-core-view/>
    </a-layout>
</template>

<script>
    import DashboardCoreDrawer from "./component/core/Drawer";
    // import View from "./component/core/View";
    import DashboardCoreView from "./component/core/View";

    export default {
        name: "AppIndex",
        components: {DashboardCoreView, DashboardCoreDrawer}
    }
</script>

<style scoped>

</style>
