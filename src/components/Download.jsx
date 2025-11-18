import React from 'react'
import { Apple } from 'lucide-react'

const Download = () => {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">立即下載 Bite AI</h2>
        <p className="mt-3 text-slate-600">開啟你的聰明健康生活，先從一次拍照紀錄開始。</p>
        <div className="mt-8 flex items-center justify-center">
          <a
            href="https://apps.apple.com/app/id6753001888"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
          >
            <Apple className="w-5 h-5" />
            在 App Store 下載
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-500">Android 版本開發中，敬請期待。</p>
      </div>
    </section>
  )
}

export default Download
