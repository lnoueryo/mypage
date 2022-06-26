<template>
  <div id="languages-tools" class="rel">
    <section-wrapper :wrapper="wrapper">
      <section-container>
        <template #title>
          <transition name="bottom">
            <section-title titleNum="03" title="LANGUAGES TOOLS" />
          </transition>
        </template>
        <template #sub-title>
          <transition name="bottom">
            <div class="message tra">
              <div>MANY EXPERIENCES<br class="pc-only"></div>
              <div class="adjust">MAKE YOU GROW UP</div>
            </div>
          </transition>
        </template>
        <template #content>
          <div class="pc-only">
            <div class="mb-8" style="overflow: hidden;opacity: 1">
              <CarouselLoop :src="languages" direction="left"></CarouselLoop>
              <CarouselLoop :src="environments" direction="right"></CarouselLoop>
              <CarouselLoop :src="infrastructures" direction="left"></CarouselLoop>
            </div>
            <p class="tra link rel z-1">
              <a target="_blank" href="https://docs.google.com/spreadsheets/d/1_ArB3lBxJ12s6uigQRcqyz8yCp15cwNzoGkc2RLIXgA/edit#gid=0">CURRICULUMVITAE→</a>
            </p>
          </div>
        </template>
      </section-container>
      <div class="sp-only">
        <CarouselLoop :src="languages" direction="left"></CarouselLoop>
        <CarouselLoop :src="environments" direction="right"></CarouselLoop>
        <CarouselLoop :src="infrastructures" direction="left"></CarouselLoop>
        <section-container>
          <template #content>
            <div>
              <p class="tra link rel z-1">
                <a target="_blank" href="https://docs.google.com/spreadsheets/d/1_ArB3lBxJ12s6uigQRcqyz8yCp15cwNzoGkc2RLIXgA/edit#gid=0">CURRICULUMVITAE→</a>
              </p>
            </div>
          </template>
        </section-container>
      </div>
      <Grain></Grain>
      <div :style="secWrapper"></div>
    </section-wrapper>
  </div>
</template>

<script>
export default {
  computed: {
    wrapper() {
      const path = require('~/assets/image/24.jpg')
      return {
        position: 'relative',
        backgroundImage: 'url("' + path + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'right 75% bottom 50%',
        opacity: 0.9,
      }
    },
    secWrapper() {
      return {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#00000096',
        zIndex: -1
      }
    },
    languages() {
      return [
        {capture: 'HTML5', src: require('~/assets/image/icons/html.png')},
        {capture: 'CSS3', src: require('~/assets/image/icons/css.png')},
        {capture: 'Sass', src: require('~/assets/image/icons/sass.png')},
        {capture: 'JavaScript', src: require('~/assets/image/icons/javascript.png')},
        {capture: 'TypeScript', src: require('~/assets/image/icons/typescript.png')},
        {capture: 'PHP', src: require('~/assets/image/icons/php.png')},
        {capture: 'Python', src: require('~/assets/image/icons/python.png')},
        {capture: 'Go', src: require('~/assets/image/icons/go.png')},
        {capture: 'Bootstrap', src: require('~/assets/image/icons/bootstrap.png')},
        {capture: 'Nuxt.js', src: require('~/assets/image/icons/nuxt.png')},
        {capture: 'Vue.js', src: require('~/assets/image/icons/vue.png')},
        {capture: 'Vuetify.js', src: require('~/assets/image/icons/vuetify.svg')},
        {capture: 'AngularJS', src: require('~/assets/image/icons/angular.png')},
        {capture: 'Laravel', src: require('~/assets/image/icons/laravel.png')},
        {capture: 'Django', src: require('~/assets/image/icons/django.png')},
      ]
    },
    environments() {
      return [
        {capture: 'Windows', src: require('~/assets/image/icons/windows.png')},
        {capture: 'Linux', src: require('~/assets/image/icons/linux.png')},
        {capture: 'Ubuntu', src: require('~/assets/image/icons/ubuntu.png')},
        {capture: 'CentOS', src: require('~/assets/image/icons/centos.svg')},
        {capture: 'Visual Studio Code', src: require('~/assets/image/icons/vscode.svg')},
        {capture: 'Git', src: require('~/assets/image/icons/git.png')},
        {capture: 'GitHub', src: require('~/assets/image/icons/github.png')},
        {capture: 'Node.js', src: require('~/assets/image/icons/node.js.png')},
        {capture: 'NPM', src: require('~/assets/image/icons/npm.png')},
        {capture: 'Yarn', src: require('~/assets/image/icons/yarn.png')},
        {capture: 'Docker', src: require('~/assets/image/icons/docker.png')},
        {capture: 'Apache', src: require('~/assets/image/icons/apache.png')},
        {capture: 'Nginx', src: require('~/assets/image/icons/nginx.png')},
        {capture: 'Mysql', src: require('~/assets/image/icons/mysql.png')},
        {capture: 'Postgres', src: require('~/assets/image/icons/postgres.png')},
        {capture: 'Terraform', src: require('~/assets/image/icons/terraform.png')},
        {capture: 'Cypress', src: require('~/assets/image/icons/cypress.png')},
      ]
    },
    infrastructures() {
      return [
        {capture: 'Firebase', src: require('~/assets/image/icons/firebase.png')},
        {capture: 'Compute Engine', src: require('~/assets/image/icons/compute_engine.png')},
        {capture: 'App Engine', src: require('~/assets/image/icons/app_engine.png')},
        {capture: 'Cloud Run', src: require('~/assets/image/icons/cloud_run.png')},
        {capture: 'Cloud Functions', src: require('~/assets/image/icons/cloud_functions.png')},
        {capture: 'Cloud SQL', src: require('~/assets/image/icons/cloud_sql.png')},
        {capture: 'Cloud Storage', src: require('~/assets/image/icons/cloud_storage.png')},
        {capture: 'Google Maps', src: require('~/assets/image/icons/google_maps_platform.png')},
        {capture: 'Cloud Load \nBalancing', src: require('~/assets/image/icons/cloud_load_balancing.png')},
        {capture: 'Cloud Armoer', src: require('~/assets/image/icons/cloud_armor.png')},
        {capture: 'Cloud Build', src: require('~/assets/image/icons/cloud_build.png')},
        {capture: 'Container Registry', src: require('~/assets/image/icons/container_registry.png')},
        {capture: 'Big Query', src: require('~/assets/image/icons/bigquery.png')},
        {capture: 'Debugger', src: require('~/assets/image/icons/debugger.png')},
        {capture: 'Cloud Logging', src: require('~/assets/image/icons/cloud_logging.png')},
        {capture: 'Cloud Monitoring', src: require('~/assets/image/icons/cloud_monitoring.png')},
        {capture: 'Cloud NAT', src: require('~/assets/image/icons/cloud_nat.png')},
        {capture: 'Cloud Router', src: require('~/assets/image/icons/cloud_router.png')},
        {capture: 'Cloud Scheduler', src: require('~/assets/image/icons/cloud_scheduler.png')},
        {capture: 'PubSub', src: require('~/assets/image/icons/pubsub.png')},
        {capture: 'Cloud Tasks', src: require('~/assets/image/icons/cloud_tasks.png')},
        {capture: 'DataStore', src: require('~/assets/image/icons/datastore.png')},
        {capture: 'IAM', src: require('~/assets/image/icons/identity_and_access_management.png')},
        {capture: 'Secret Manager', src: require('~/assets/image/icons/secret_manager.png')},
      ]
    },
  },
}
</script>


<style lang="scss" scoped>
.sp-only {
  display: none;
}
@media screen and (max-width: 480px) {
  .pc-only {
    display: none;
  }
  .sp-only {
    display: block;
  }
}


</style>