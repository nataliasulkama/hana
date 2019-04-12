<template>
<f7-app :params="f7params">
  <f7-statusbar></f7-statusbar>
  <f7-view main class="safe-areas main-view-body" url="/"></f7-view>
</f7-app>
</template>
<script>
  import routes from '../js/routes.js';

  export default {
    data() {
      return {
        f7params: {
          name: 'hana',
          theme: 'auto',
          routes: routes,
          panel: {
            leftBreakpoint: 960,
          },
          serviceWorker: {
            path: '/service-worker.js',
          },
        },
      }
    },
  }
</script>
