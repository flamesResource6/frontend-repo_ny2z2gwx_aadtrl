import React from 'react'

const Hero = () => {
  return (
    <section id="top" className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              用 AI，讓健康管理更簡單、更清楚、更能堅持
            </h1>
            <p className="mt-6 text-lg text-slate-700">
              Bite AI 透過拍照與簡單紀錄，智慧分析你的每日營養與熱量，並給出個人化建議，讓你不再猜該怎麼吃。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#download" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                立即下載
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-50 transition-colors">
                了解更多
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              iOS 版本提供中，Android 敬請期待
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl">
              <img src="/phone-mock.svg" alt="Bite AI App" className="rounded-[1.5rem] w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
