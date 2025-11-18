import React from 'react'

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Bite AI 的理念</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          我們的理念很簡單：幫你把健康變成更容易、更清楚、更能堅持的習慣。
        </p>
        <div className="mt-8 space-y-4 text-slate-700">
          <p>我們的 AI 建議不是模板化，而是根據你每天的紀錄調整，包含：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>你今天吃得是否均衡</li>
            <li>你的熱量是否偏高或偏低</li>
            <li>哪些營養素不足、哪些過量</li>
            <li>今晚或明天應該怎麼吃會更好</li>
            <li>你這週的趨勢代表什麼（上升、下降、停滯）</li>
            <li>根據你的目標（減脂／增肌／健康維持）提出具體行動</li>
          </ul>
          <p>
            我們希望使用者不只是「紀錄」，而是能夠透過 AI 真正知道該怎麼做才會更接近目標。
            Bite AI 的使命就是讓你每天都不需要猜，只要打開 App，就能：
          </p>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">
              清楚知道自己的狀態
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">理解原因</div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-center">獲得下一步具體建議</div>
          </div>
          <p className="mt-6 text-slate-600">用 AI，把健康變成更聰明、更自然的生活方式。</p>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
