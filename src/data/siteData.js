import {
  Activity,
  AlarmSmoke,
  AudioLines,
  BellRing,
  BrainCircuit,
  Building2,
  CloudCog,
  Cpu,
  Database,
  GraduationCap,
  HeartHandshake,
  House,
  Layers3,
  Mic2,
  Radio,
  School,
  ShieldCheck,
  ShoppingBag,
  Siren,
  Smartphone,
  Store,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";

export const navItems = [
  ["首页", "home"],
  ["产品方案", "solution"],
  ["技术路线", "technology"],
  ["声音事件", "events"],
  ["应用场景", "scenarios"],
  ["商业模式", "business"],
  ["发展规划", "roadmap"],
];

export const metrics = [
  { value: "2秒级", label: "异常识别与响应", note: "目标指标" },
  { value: "约80元", label: "核心硬件成本", note: "项目素材口径" },
  { value: "6类", label: "核心异常声音事件", note: "当前方案范围" },
  { value: "本地优先", label: "隐私友好型预警", note: "产品策略" },
];

export const painPoints = [
  {
    icon: Radio,
    title: "摄像头监控",
    strength: "画面直观",
    weakness: "隐私敏感区域难覆盖，对声音异常不敏感",
  },
  {
    icon: ShieldCheck,
    title: "人工巡检",
    strength: "现场判断灵活",
    weakness: "夜间和低频事件容易漏检，人力成本高",
  },
  {
    icon: BellRing,
    title: "单点报警器",
    strength: "成本低",
    weakness: "只能识别单一事件，无法理解复杂异常声音",
  },
  {
    icon: Mic2,
    title: "普通拾音设备",
    strength: "能够采集声音",
    weakness: "不能主动判断，无法形成实时预警闭环",
  },
];

export const publicStats = [
  ["47.00万所", "全国各级各类学校"],
  ["28646.50万人", "全国学历教育在校生"],
  ["31031万人", "60岁及以上人口"],
  ["40.6万个", "养老机构和设施"],
  ["799.3万张", "养老床位合计"],
];

export const productModules = [
  {
    icon: Mic2,
    index: "01",
    title: "声音采集终端",
    text: "USB 麦克风、MEMS 麦克风、麦克风阵列",
  },
  {
    icon: BrainCircuit,
    index: "02",
    title: "AI 识别模块",
    text: "MFCC 特征提取，SVM / CNN / YAMNet 分类",
  },
  {
    icon: ShieldCheck,
    index: "03",
    title: "决策报警模块",
    text: "阈值判断、连续确认、事件合并",
  },
  {
    icon: Smartphone,
    index: "04",
    title: "应用展示端",
    text: "实时状态、分类结果、历史记录、设备管理",
  },
  {
    icon: CloudCog,
    index: "05",
    title: "云端与平台模块",
    text: "多设备管理、远程推送、数据闭环、模型迭代",
  },
];

export const values = [
  ["用户价值", "减少视频隐私压力"],
  ["管理价值", "降低人工巡查压力"],
  ["商业价值", "低成本试点，软件服务提升收益"],
  ["数据价值", "异常样本回流推动模型迭代"],
  ["社会价值", "服务校园、养老、社区等公共安全场景"],
];

export const pipelineSteps = [
  {
    icon: Waves,
    index: "01",
    title: "声音感知",
    code: "audio_window",
    input: "真实环境连续声音",
    process: "麦克风采样、模数转换、环形缓冲、2秒窗口切片",
    output: "16kHz · 16bit · 单声道 · shape≈(32000,)",
  },
  {
    icon: AudioLines,
    index: "02",
    title: "特征提取",
    code: "mfcc=(13,T)",
    input: "2秒原始波形",
    process: "归一化、预加重、分帧加窗、FFT、Mel滤波、Log、DCT",
    output: "MFCC矩阵 (13,T) 或 SVM向量 (13,)",
  },
  {
    icon: BrainCircuit,
    index: "03",
    title: "模型推理",
    code: "prob=(6,)",
    input: "mfcc_vec 或 mfcc_map",
    process: "SVM / CNN / YAMNet 分类",
    output: "六类概率向量、label、confidence",
  },
  {
    icon: ShieldCheck,
    index: "04",
    title: "智能决策",
    code: "Event | None",
    input: "prob + 历史窗口 + 阈值配置",
    process: "类别阈值、连续两个窗口确认、短时间事件合并",
    output: "结构化 Event 或 None",
  },
  {
    icon: Siren,
    index: "05",
    title: "多端预警",
    code: "UI / MSG / DB / WAV",
    input: "结构化 Event",
    process: "本地报警、APP/微信/企业消息、后台记录、音频保存",
    output: "报警、历史记录、复盘证据与反馈数据",
  },
];

export const soundEvents = [
  {
    icon: Activity,
    code: "normal",
    name: "正常环境声",
    level: "状态类",
    text: "作为基础背景类别，帮助系统区分日常声景并降低误报。",
    scene: "全部场景",
  },
  {
    icon: Zap,
    code: "glass_break",
    name: "玻璃破碎声",
    level: "高优先级",
    text: "可能对应破窗入侵、意外破损或高能量冲击。",
    scene: "商铺 · 宿舍 · 出租屋",
    high: true,
  },
  {
    icon: Radio,
    code: "help_call",
    name: "呼救声",
    level: "高优先级",
    text: "可能对应跌倒、冲突、突发疾病或紧急求助。",
    scene: "养老 · 宿舍 · 社区",
    high: true,
  },
  {
    icon: Layers3,
    code: "collision",
    name: "撞击声",
    level: "中高优先级",
    text: "可能对应跌倒、冲突、重物坠落与设施碰撞。",
    scene: "宿舍 · 养老 · 商铺",
  },
  {
    icon: Wrench,
    code: "machine_noise",
    name: "设备异响",
    level: "中优先级",
    text: "可能对应松动、摩擦、部件磨损或机械故障。",
    scene: "机房 · 设备间",
  },
  {
    icon: AlarmSmoke,
    code: "fire_alarm",
    name: "火警声",
    level: "高优先级",
    text: "识别标准火警音与持续报警节律，辅助快速响应。",
    scene: "全部重点场景",
    high: true,
  },
];

export const thresholds = [
  ["玻璃破碎", "0.85", "连续2窗同类 + 能量突增", "高"],
  ["呼救声", "0.80", "连续2窗同类 + 人声相关特征", "高"],
  ["设备异响", "0.75", "连续2窗同类 + 设备间场景配置", "中"],
  ["撞击声", "0.78", "连续2窗同类 + 时间窗口合并", "中高"],
  ["火警声", "0.85", "单窗高置信或连续2窗", "高"],
];

export const scenarios = [
  {
    icon: School,
    title: "校园宿舍",
    pain: "夜间值守压力大，卧室区域不适合持续视频监控。",
    value: "感知呼救、撞击与火警，形成隐私友好的安全补充。",
  },
  {
    icon: HeartHandshake,
    title: "养老看护",
    pain: "呼救与跌倒撞击不一定能被护理人员及时发现。",
    value: "提前发现异常声音，辅助护理人员快速响应。",
  },
  {
    icon: Store,
    title: "小型商铺",
    pain: "夜间无人值守，专业安防系统成本较高。",
    value: "低成本识别破窗、撞击与夜间异常。",
  },
  {
    icon: House,
    title: "出租屋 / 长租公寓",
    pain: "点位分散，租户对持续视频监控较为敏感。",
    value: "提供非视频、可按点位部署的补充式安全感知。",
  },
  {
    icon: Building2,
    title: "社区治理",
    pain: "点位数量多、预算有限，人工巡查覆盖不足。",
    value: "多设备统一管理，支持远程事件查看与留痕。",
  },
  {
    icon: Cpu,
    title: "机房运维",
    pain: "设备故障往往先以异响或报警声表现。",
    value: "识别设备异响和报警声，辅助提前维护。",
  },
];

export const revenueStreams = [
  {
    icon: Cpu,
    title: "硬件销售",
    text: "声学感知终端，形成试点与批量设备收入",
  },
  {
    icon: CloudCog,
    title: "软件订阅",
    text: "远程推送、事件记录、设备管理与模型更新",
  },
  {
    icon: Wrench,
    title: "行业定制",
    text: "养老、机房、校园的阈值、模型和报表定制",
  },
  {
    icon: Database,
    title: "平台服务",
    text: "多点位管理、数据闭环与持续运维服务",
  },
];

export const offlineSteps = [
  "数据采集",
  "清洗标注",
  "特征提取",
  "模型训练",
  "版本发布",
];

export const onlineSteps = [
  "实时采集",
  "滑窗分析",
  "模型推理",
  "决策预警",
  "用户反馈",
];

export const roadmap = [
  {
    stage: "第一阶段",
    title: "原型验证",
    device: "USB 麦克风 + 电脑",
    text: "完成采集—识别—报警的最小演示闭环。",
    status: "当前基础",
  },
  {
    stage: "第二阶段",
    title: "校园试点",
    device: "树莓派 + MEMS 麦克风",
    text: "完成宿舍与机房的小范围真实环境部署。",
    status: "近期目标",
  },
  {
    stage: "第三阶段",
    title: "场景复制",
    device: "标准化边缘终端",
    text: "拓展社区、商铺、养老与出租屋场景。",
    status: "规模拓展",
  },
  {
    stage: "第四阶段",
    title: "平台演进",
    device: "多设备安全感知平台",
    text: "完善远程推送、模型迭代、设备运维和风险报表。",
    status: "平台目标",
  },
];

export const flowNodes = [
  { icon: Mic2, label: "麦克风采集" },
  { icon: AudioLines, label: "声波特征" },
  { icon: BrainCircuit, label: "AI识别" },
  { icon: ShieldCheck, label: "风险事件" },
  { icon: Smartphone, label: "多端预警" },
];

export const audienceIcons = [GraduationCap, ShoppingBag, House, Building2];
