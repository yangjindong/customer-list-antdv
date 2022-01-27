import { createApp } from 'vue'
import router from '@/router/index'
import i18n from './plugins/i18n'
import { key, store } from '@/store'
import App from './App.vue'
import styleImport from '@/utils/style-import'

const app = createApp(App)
styleImport(app).use(router).use(store, key).use(i18n).mount('#app')
