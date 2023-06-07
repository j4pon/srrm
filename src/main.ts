import { createVuestic } from 'vuestic-ui'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuesticGlobalConfig from './services/vuestic-ui/global-config'

import '@vuestic/ag-grid-theme'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(createVuestic({ config: vuesticGlobalConfig }))

app.mount('#app')
