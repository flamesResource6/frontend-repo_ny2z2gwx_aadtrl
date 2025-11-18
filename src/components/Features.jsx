import React from 'react'
import { CheckCircle2, Camera, Salad, Flame, TrendingUp, ClipboardList, BrainCircuit, CalendarClock } from 'lucide-react'

const FeatureItem = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-2xl border border-slate-200 bg-white/80 hover:bg-white transition-colors shadow-sm">
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600/10 to-indigo-600/10 text-blue-700">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
)

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">功能亮點</h2>
          <p className="mt-3 text-slate-600">Bite AI 利用人工智慧讓你更聰明地管理飲食與健康，從紀錄到建議，一切都更簡單。</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureItem icon={Camera} title="拍照即紀錄" desc="拍下餐點，系統自動辨識與分析，免去繁瑣輸入。也支援手動輸入食物與份量。" />
          <FeatureItem icon={Salad} title="營養拆解" desc="每日蛋白質、碳水、脂肪與關鍵微量營養素，一目瞭然。" />
          <FeatureItem icon={Flame} title="熱量追蹤" desc="自動計算熱量攝取與消耗，協助你維持熱量赤字或盈餘。" />
          <FeatureItem icon={TrendingUp} title="趨勢洞察" desc="每週趨勢分析，了解上升、下降或停滯的原因。" />
          <FeatureItem icon={ClipboardList} title="目標導向" desc="依照減脂、增肌或健康維持目標，動態調整建議。" />
          <FeatureItem icon={BrainCircuit} title="個人化建議" desc="不是制式模板，會根據你每天的紀錄調整內容。" />
          <FeatureItem icon={CalendarClock} title="下一步行動" desc="今晚或明天怎麼吃更好？提供具體可執行的建議。" />
          <FeatureItem icon={CheckCircle2} title="體態紀錄" desc="記錄體重與體脂，搭配照片追蹤變化，更有感。" />
        </div>
      </div>
    </section>
  )
}

export default Features
