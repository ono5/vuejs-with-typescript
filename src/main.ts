import { createApp } from 'vue'
import axios from 'axios'
import * as mockData from './mocks'

import { router } from './router'

import 'highlight.js/styles/solarized-dark.css'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

// @ts-ignore
axios.get = async (url: string) => {
    if (url === '/posts') {
        await delay(1000)
        return Promise.resolve({
            data: [mockData.thisWeek, mockData.todayPost, mockData.thisMonth]
        })
    }
}

import App from './App.vue'
console.log(App)

const app = createApp(App)
app.use(router)
app.mount('#app')

