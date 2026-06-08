import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  Gauge,
  Menu,
  MessageSquare,
  Mic2,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";
import { FlowArrow, Reveal, Section, SectionHeading, TechCard } from "./components";
import {
  flowNodes,
  metrics,
  navItems,
  offlineSteps,
  onlineSteps,
  painPoints,
  pipelineSteps,
  productModules,
  publicStats,
  revenueStreams,
  roadmap,
  scenarios,
  soundEvents,
  thresholds,
  values,
} from "./data/siteData";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#home" aria-label="返回首页">
          <span className="brand-mark">
            <AudioMark />
          </span>
          <span>
            <strong>SoundSafe</strong>
            <small>AI ACOUSTIC SAFETY</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="主导航">
          {navItems.map(([label, id]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta desktop-only" href="#contact">
          联系团队 <ArrowUpRight size={15} />
        </a>
        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={open ? "关闭导航" : "打开导航"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {navItems.map(([label, id]) => (
              <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
                {label} <ChevronRight size={18} />
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              联系项目团队 <ArrowUpRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function AudioMark() {
  return (
    <span className="audio-mark" aria-hidden="true">
      {[8, 14, 21, 12, 18].map((height, index) => (
        <i key={index} style={{ height }} />
      ))}
    </span>
  );
}

function SoundFlowVisual() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="flow-visual">
      <div className="visual-grid" />
      <div className="visual-topline">
        <span><CircleDot size={13} /> EDGE NODE 01</span>
        <span className="online"><i /> ONLINE</span>
      </div>
      <div className="wave-monitor">
        <div className="monitor-label">
          <span>LIVE ACOUSTIC SIGNAL</span>
          <strong>-18.4 dB</strong>
        </div>
        <div className="wave-bars" aria-hidden="true">
          {Array.from({ length: 41 }, (_, index) => (
            <motion.i
              key={index}
              animate={
                reduceMotion
                  ? {}
                  : {
                      scaleY: [0.25, 0.5 + ((index * 7) % 10) / 12, 0.25],
                    }
              }
              transition={{
                duration: 1.2 + (index % 5) * 0.12,
                repeat: Infinity,
                delay: index * 0.025,
              }}
            />
          ))}
        </div>
      </div>
      <div className="flow-row">
        {flowNodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <div className="flow-node-wrap" key={node.label}>
              <motion.div
                className={`flow-node ${index === 3 ? "warning-node" : ""}`}
                animate={reduceMotion ? {} : { y: [0, -4, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <Icon size={20} />
                <span>{node.label}</span>
              </motion.div>
              {index < flowNodes.length - 1 && <FlowArrow />}
            </div>
          );
        })}
      </div>
      <div className="inference-panel">
        <div>
          <span>当前识别</span>
          <strong>环境声分析中</strong>
        </div>
        <div className="confidence">
          <span>CONFIDENCE</span>
          <strong>86.5%</strong>
        </div>
      </div>
      <div className="visual-footnote">
        <span>16 kHz / 16 bit / Mono</span>
        <span>2.0s window</span>
        <span>项目素材演示</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="hero-kicker">
            <span className="pulse-dot" />
            低成本边缘 AI · 环境安全感知
          </div>
          <h1>
            <span>SoundSafe</span>
            基于声音智能感知的
            <br />
            环境安全预警系统
          </h1>
          <p className="hero-slogan">先听见风险，再触发可信预警</p>
          <p className="hero-description">
            低成本声学感知终端 + AI 异常声音识别 + 多端预警闭环。
            在不依赖持续视频监控的前提下，为隐私敏感、点位分散的轻安防场景补足感知盲区。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#technology">
              查看技术路线 <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#scenarios">
              了解应用场景 <ArrowDown size={18} />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="hero-visual-wrap"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <SoundFlowVisual />
        </motion.div>
      </div>
      <div className="container metrics-grid">
        {metrics.map((metric, index) => (
          <motion.div
            className="metric-card"
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 + index * 0.08 }}
          >
            <span className="metric-index">0{index + 1}</span>
            <strong>{metric.value}</strong>
            <p>{metric.label}</p>
            <small>{metric.note}</small>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PainPoints() {
  return (
    <Section id="opportunity" className="opportunity">
      <Reveal>
        <SectionHeading
          eyebrow="WHY SOUND SAFE"
          title="为什么需要 SoundSafe？"
          description="传统方案各有所长，但在隐私敏感区域、夜间低频事件和主动声音判断方面仍有空白。"
        />
      </Reveal>
      <div className="pain-layout">
        <div className="pain-grid">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <TechCard className="pain-card">
                  <div className="card-icon"><Icon /></div>
                  <h3>{item.title}</h3>
                  <div className="comparison-line positive">
                    <Check size={15} /> {item.strength}
                  </div>
                  <div className="comparison-line negative">
                    <X size={15} /> {item.weakness}
                  </div>
                </TechCard>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="stats-panel" delay={0.15}>
          <div className="stats-header">
            <span>目标场景基础数据</span>
            <Target size={20} />
          </div>
          <div className="stats-list">
            {publicStats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <p className="data-note">数据来源为公开统计资料，页面仅作项目展示使用。</p>
        </Reveal>
      </div>
    </Section>
  );
}

function ProductSolution() {
  return (
    <Section id="solution" className="solution section-band">
      <Reveal>
        <SectionHeading
          eyebrow="PRODUCT ARCHITECTURE"
          title="从“采集声音”升级为“识别—判断—预警—留痕”"
          description="将低成本声学终端、AI 模型与事件化决策组合为可部署的安全感知闭环。"
        />
      </Reveal>
      <div className="module-flow">
        {productModules.map((module, index) => {
          const Icon = module.icon;
          return (
            <Reveal className="module-flow-item" key={module.title} delay={index * 0.07}>
              <TechCard className="module-card">
                <span className="module-index">{module.index}</span>
                <div className="card-icon"><Icon /></div>
                <h3>{module.title}</h3>
                <p>{module.text}</p>
              </TechCard>
              {index < productModules.length - 1 && <FlowArrow />}
            </Reveal>
          );
        })}
      </div>
      <div className="value-strip">
        {values.map(([title, text], index) => (
          <Reveal key={title} delay={index * 0.05}>
            <span>{title}</span>
            <strong>{text}</strong>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function TechnologyRoute() {
  return (
    <Section id="technology" className="technology">
      <Reveal>
        <SectionHeading
          eyebrow="TECHNOLOGY PIPELINE"
          title="技术路线：从环境声音到安全预警事件"
          description="每一步都保留明确的输入、处理和输出，让模型结果最终成为可解释、可追溯的安全事件。"
        />
      </Reveal>
      <div className="pipeline-overview">
        <span>真实环境声音</span><ArrowRight />
        <span>2秒音频窗口</span><ArrowRight />
        <span>MFCC / 时频特征</span><ArrowRight />
        <span>六类概率向量</span><ArrowRight />
        <span className="highlight">Event</span><ArrowRight />
        <span>多端预警</span>
      </div>
      <div className="pipeline-grid">
        {pipelineSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Reveal className="pipeline-item" key={step.title} delay={index * 0.07}>
              <TechCard className="pipeline-card">
                <div className="pipeline-card-head">
                  <span>{step.index}</span>
                  <div className="card-icon"><Icon /></div>
                </div>
                <h3>{step.title}</h3>
                <code>{step.code}</code>
                <dl>
                  <div><dt>输入</dt><dd>{step.input}</dd></div>
                  <div><dt>处理</dt><dd>{step.process}</dd></div>
                  <div><dt>输出</dt><dd>{step.output}</dd></div>
                </dl>
              </TechCard>
              {index < pipelineSteps.length - 1 && <FlowArrow />}
            </Reveal>
          );
        })}
      </div>
      <div className="target-metrics">
        <div><Gauge /><span>识别准确率</span><strong>约 86.5%</strong><small>项目素材口径</small></div>
        <div><Target /><span>准确率目标</span><strong>≥ 90%</strong><small>目标指标</small></div>
        <div><Zap /><span>端到端响应</span><strong>&lt; 2 秒</strong><small>目标指标</small></div>
        <div><Mic2 /><span>终端功耗</span><strong>&lt; 2W</strong><small>目标指标</small></div>
      </div>
    </Section>
  );
}

function SoundEvents() {
  return (
    <Section id="events" className="events section-band">
      <Reveal>
        <SectionHeading
          eyebrow="EVENT TAXONOMY"
          title="识别六类高价值声音事件"
          description="围绕轻安防中可行动、可确认的异常声音建立首期分类体系。"
        />
      </Reveal>
      <div className="event-grid">
        {soundEvents.map((event, index) => {
          const Icon = event.icon;
          return (
            <Reveal key={event.code} delay={index * 0.05}>
              <TechCard className={`event-card ${event.high ? "high" : ""}`}>
                <div className="event-card-top">
                  <div className="card-icon"><Icon /></div>
                  <span>{event.level}</span>
                </div>
                <code>{event.code}</code>
                <h3>{event.name}</h3>
                <p>{event.text}</p>
                <div className="scene-tag">{event.scene}</div>
              </TechCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function SmartDecision() {
  const eventFields = [
    "event_id", "type", "confidence", "level", "timestamp",
    "device_id", "audio_path", "status", "feedback",
  ];
  return (
    <Section id="decision" className="decision">
      <Reveal>
        <SectionHeading
          eyebrow="TRUSTED DECISION"
          title="模型概率不是报警，Event 才是安全事件"
          description="通过三道工程保险抑制瞬时噪声和重复提醒，让预警更接近真实处置需求。"
        />
      </Reveal>
      <div className="insurance-grid">
        {[
          ["01", "类别阈值", "不同类别采用不同置信度门槛，匹配风险等级与误报成本。"],
          ["02", "连续确认", "要求连续窗口结果一致，过滤单次瞬时噪声。"],
          ["03", "事件合并", "短时间内同类结果合并，避免重复告警和信息轰炸。"],
        ].map(([index, title, text], itemIndex) => (
          <Reveal key={title} delay={itemIndex * 0.08}>
            <TechCard className="insurance-card">
              <span>{index}</span>
              <ShieldCheck />
              <h3>{title}</h3>
              <p>{text}</p>
            </TechCard>
          </Reveal>
        ))}
      </div>
      <div className="decision-layout">
        <Reveal className="threshold-panel">
          <div className="panel-title">
            <div><span className="eyebrow">INITIAL CONFIG</span><h3>初始阈值表</h3></div>
            <span className="config-badge">工程初始配置</span>
          </div>
          <div className="threshold-table">
            <div className="table-row table-head">
              <span>事件类别</span><span>阈值</span><span>确认规则</span><span>等级</span>
            </div>
            {thresholds.map((row) => (
              <div className="table-row" key={row[0]}>
                <strong>{row[0]}</strong>
                <code>{row[1]}</code>
                <span>{row[2]}</span>
                <b>{row[3]}</b>
              </div>
            ))}
          </div>
          <p className="data-note">
            阈值为初始工程配置，实际部署需根据场景噪声水平、误报成本和用户容忍度调优。
          </p>
        </Reveal>
        <Reveal className="event-object" delay={0.1}>
          <div className="code-title">
            <span><CircleDot size={13} /> EVENT OBJECT</span>
            <code>JSON</code>
          </div>
          <pre>
            <span className="brace">{"{"}</span>
            {eventFields.map((field, index) => (
              <span className="code-line" key={field}>
                <i>{field}</i>
                <b>:</b>
                <em>
                  {field === "confidence"
                    ? "0.91"
                    : field === "level"
                      ? '"HIGH"'
                      : field === "type"
                        ? '"help_call"'
                        : `"${field}_value"`}
                </em>
                {index < eventFields.length - 1 ? "," : ""}
              </span>
            ))}
            <span className="brace">{"}"}</span>
          </pre>
          <div className="event-status">
            <span><i /> 已生成可信事件</span>
            <strong>READY TO ALERT</strong>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Scenarios() {
  return (
    <Section id="scenarios" className="scenarios section-band">
      <Reveal>
        <SectionHeading
          eyebrow="APPLICATION SCENARIOS"
          title="适用于隐私敏感、点位分散、预算有限的轻安防场景"
          description="SoundSafe 不是替代所有传统安防，而是在声音信息更关键的位置提供低成本补充。"
        />
      </Reveal>
      <div className="scenario-grid">
        {scenarios.map((scenario, index) => {
          const Icon = scenario.icon;
          return (
            <Reveal key={scenario.title} delay={index * 0.05}>
              <TechCard className="scenario-card">
                <div className="scenario-title">
                  <div className="card-icon"><Icon /></div>
                  <h3>{scenario.title}</h3>
                </div>
                <div className="scenario-row">
                  <span>场景痛点</span><p>{scenario.pain}</p>
                </div>
                <div className="scenario-row value">
                  <span>项目价值</span><p>{scenario.value}</p>
                </div>
              </TechCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function BusinessModel() {
  return (
    <Section id="business" className="business">
      <Reveal>
        <SectionHeading
          eyebrow="BUSINESS MODEL"
          title="硬件入口 + 软件订阅 + 行业定制 + 平台服务"
          description="以低成本终端降低试点门槛，以软件与平台能力承接持续服务价值。"
          align="center"
        />
      </Reveal>
      <div className="business-map">
        <div className="business-core">
          <div className="core-rings" />
          <ShieldCheck />
          <strong>SoundSafe</strong>
          <span>环境安全感知平台</span>
        </div>
        {revenueStreams.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal className={`revenue-node node-${index + 1}`} key={item.title} delay={index * 0.08}>
              <div className="card-icon"><Icon /></div>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function ResearchLoop() {
  const Track = ({ title, label, steps, className }) => (
    <div className={`research-track ${className}`}>
      <div className="track-label"><span>{label}</span><h3>{title}</h3></div>
      <div className="track-steps">
        {steps.map((step, index) => (
          <div key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
            {index < steps.length - 1 && <ArrowRight />}
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <Section id="research" className="research section-band">
      <Reveal>
        <SectionHeading
          eyebrow="DATA FLYWHEEL"
          title="离线训练线 + 在线运行线，形成越用越准的数据闭环"
          description="让误报、漏报与人工确认结果回流样本库，支持下一轮模型训练和阈值优化。"
        />
      </Reveal>
      <Reveal className="research-board">
        <Track title="离线训练线" label="OFFLINE" steps={offlineSteps} className="offline" />
        <div className="feedback-loop">
          <ArrowDown /><span>误报 · 漏报 · 人工确认结果回流样本库</span><ArrowDown />
        </div>
        <Track title="在线运行线" label="ONLINE" steps={onlineSteps} className="online" />
      </Reveal>
    </Section>
  );
}

function Roadmap() {
  return (
    <Section id="roadmap" className="roadmap">
      <Reveal>
        <SectionHeading
          eyebrow="DEVELOPMENT ROADMAP"
          title="从演示闭环到平台化环境安全感知服务"
          description="沿着原型验证、场景试点、规模复制和平台演进逐步降低技术与商业风险。"
        />
      </Reveal>
      <div className="roadmap-line">
        {roadmap.map((item, index) => (
          <Reveal className="roadmap-item" key={item.stage} delay={index * 0.08}>
            <div className="roadmap-marker"><span>{index + 1}</span></div>
            <span className="roadmap-stage">{item.stage}</span>
            <h3>{item.title}</h3>
            <code>{item.device}</code>
            <p>{item.text}</p>
            <small>{item.status}</small>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ContactCTA() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    scene: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setError("");
  };

  const submit = (event) => {
    event.preventDefault();
    if (!form.name || !form.scene || !form.contact) {
      setError("请填写姓名、应用场景和联系方式。");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 700);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-grid-bg" aria-hidden="true" />
      <div className="container contact-layout">
        <Reveal className="contact-copy">
          <span className="eyebrow">LET SAFETY BE HEARD</span>
          <h2>让环境安全被“听见”</h2>
          <p>SoundSafe 用声音感知补足传统安防盲区。</p>
          <div className="contact-points">
            <div><ShieldCheck /><span><strong>隐私友好</strong>无需持续视频监控</span></div>
            <div><Zap /><span><strong>快速响应</strong>目标端到端响应小于 2 秒</span></div>
            <div><Sparkles /><span><strong>持续进化</strong>反馈数据驱动模型迭代</span></div>
          </div>
          <div className="hero-actions">
            <a className="button secondary" href="#technology">技术路线</a>
            <a className="button secondary" href="#scenarios">应用场景</a>
          </div>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.1}>
          {status === "success" ? (
            <div className="success-state">
              <span><Check /></span>
              <h3>需求已记录</h3>
              <p>感谢关注 SoundSafe，项目团队将尽快联系。</p>
              <button className="button secondary" onClick={() => setStatus("idle")}>
                继续留言
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-title">
                <div><span>PROJECT CONTACT</span><h3>联系项目团队</h3></div>
                <MessageSquare />
              </div>
              <div className="form-grid">
                <label>姓名 *<input name="name" value={form.name} onChange={update} placeholder="您的姓名" /></label>
                <label>单位<input name="organization" value={form.organization} onChange={update} placeholder="学校 / 企业 / 机构" /></label>
                <label>应用场景 *<select name="scene" value={form.scene} onChange={update}>
                  <option value="">请选择场景</option>
                  <option>校园宿舍</option><option>养老看护</option><option>小型商铺</option>
                  <option>出租屋 / 公寓</option><option>社区治理</option><option>机房运维</option><option>其他</option>
                </select></label>
                <label>联系方式 *<input name="contact" value={form.contact} onChange={update} placeholder="电话 / 微信 / 邮箱" /></label>
              </div>
              <label>留言<textarea name="message" value={form.message} onChange={update} placeholder="请简要描述您的试点需求或合作想法" /></label>
              {error && <p className="form-error">{error}</p>}
              <button className="button primary submit-button" disabled={status === "loading"}>
                {status === "loading" ? "正在记录..." : "提交联系信息"} <Send size={17} />
              </button>
              <small className="form-note">演示表单，不会向真实服务器发送数据。</small>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <a className="brand" href="#home">
          <span className="brand-mark"><AudioMark /></span>
          <span><strong>SoundSafe</strong><small>先听见风险，再触发可信预警</small></span>
        </a>
        <p>基于声音智能感知的环境安全预警系统</p>
        <span>互联网+创新创业项目展示</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <ProductSolution />
        <TechnologyRoute />
        <SoundEvents />
        <SmartDecision />
        <Scenarios />
        <BusinessModel />
        <ResearchLoop />
        <Roadmap />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
