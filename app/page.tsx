"use client";

const services = [
  {
    title: "조직문화 및 직원 경험 설계",
    description:
      "구성원 모두가 몰입하고 성장할 수 있는 조직문화를 설계하고, 입사부터 퇴사까지 최적의 직원 경험을 만들어갑니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "온보딩 및 오프보딩",
    description:
      "새 구성원이 빠르게 적응하고 역량을 발휘할 수 있도록 체계적인 온보딩 프로그램을 운영하고, 원활한 오프보딩을 지원합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
    ),
  },
  {
    title: "평가 및 보상",
    description:
      "공정하고 투명한 성과 평가 체계를 운영하고, 구성원의 기여에 합당한 보상이 이루어질 수 있도록 제도를 설계·개선합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "인재 채용",
    description:
      "회사의 성장에 필요한 인재를 발굴하고 유치합니다. 채용 브랜딩부터 면접 프로세스 설계까지 최고의 후보자 경험을 제공합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
      </svg>
    ),
  },
  {
    title: "교육 및 커리어 개발",
    description:
      "구성원이 지속적으로 성장할 수 있도록 학습 기회를 제공하고, 개인의 커리어 목표와 회사의 방향이 함께 성장하는 환경을 만듭니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "복리후생 운영",
    description:
      "구성원의 삶의 질 향상을 위한 다양한 복리후생 제도를 기획하고 운영합니다. 일과 삶의 균형을 지원하는 혜택을 지속적으로 발전시킵니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--color-background-base)" }}>

      {/* Top Navigation — 50px, #18181b, Twitch spec */}
      <header
        className="w-full flex items-center px-5 gap-5 z-[200] sticky top-0"
        style={{
          height: "var(--nav-height)",
          background: "var(--color-background-alt)",
          borderBottom: "1px solid var(--color-background-alt-2)",
        }}
      >
        {/* Logo area */}
        <div className="flex items-center gap-2">
          {/* Twitch-style logo mark */}
          <svg className="w-6 h-7 shrink-0" viewBox="0 0 24 28" fill="none">
            <rect width="24" height="28" rx="4" fill="#9146FF" />
            <rect x="5" y="6" width="3" height="9" rx="1.5" fill="white" />
            <rect x="13" y="6" width="3" height="9" rx="1.5" fill="white" />
          </svg>
          <span
            className="text-base font-semibold tracking-tight"
            style={{ color: "var(--color-text-base)" }}
          >
            피플팀
          </span>
        </div>

        {/* Nav links */}
        <nav className="hidden sm:flex gap-1 ml-2">
          {["주요 업무", "문의"].map((label, i) => (
            <a
              key={label}
              href={i === 0 ? "#services" : "#contact"}
              className="px-3 py-2 rounded text-sm font-semibold transition-colors"
              style={{ color: "var(--color-text-base)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-twitch-purple-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-base)")
              }
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA button — Twitch primary button spec */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 text-white font-semibold transition-colors"
          style={{
            background: "var(--color-twitch-purple)",
            fontSize: "13px",
            padding: "8px 16px",
            height: "30px",
            borderRadius: "var(--radius-sm)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--color-twitch-purple-hover)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--color-twitch-purple)")
          }
        >
          문의하기
        </a>
      </header>

      {/* Hero */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 py-28"
        style={{
          background: `linear-gradient(180deg, var(--color-background-alt) 0%, var(--color-background-base) 100%)`,
        }}
      >
        {/* Live-style badge */}
        <div
          className="inline-flex items-center gap-1.5 mb-8 px-3 py-1 font-bold uppercase tracking-widest"
          style={{
            background: "var(--color-live)",
            color: "#ffffff",
            fontSize: "var(--font-size-small)",
            borderRadius: "var(--radius-sm)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-white"
            style={{ animation: "twitch-pulse 2s infinite" }}
          />
          People Team
        </div>

        <h1
          className="font-bold leading-tight tracking-tight mb-5"
          style={{
            fontSize: "clamp(2rem, 5vw, 2.5rem)",
            color: "var(--color-text-base)",
            letterSpacing: "-0.02em",
          }}
        >
          사람이 중심인<br />조직을 만듭니다
        </h1>

        <p
          className="max-w-xl leading-relaxed"
          style={{
            fontSize: "16px",
            color: "var(--color-text-alt)",
          }}
        >
          피플팀은 구성원 모두가 최고의 역량을 발휘할 수 있도록<br className="hidden sm:block" />
          최적의 환경과 경험을 설계합니다.
        </p>

        <div className="flex gap-3 mt-10">
          <a
            href="#services"
            className="font-semibold transition-colors"
            style={{
              background: "var(--color-twitch-purple)",
              color: "#ffffff",
              fontSize: "13px",
              padding: "8px 16px",
              height: "30px",
              borderRadius: "var(--radius-sm)",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--color-twitch-purple-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--color-twitch-purple)")
            }
          >
            주요 업무 보기
          </a>
          <a
            href="#contact"
            className="font-semibold transition-colors"
            style={{
              background: "transparent",
              color: "var(--color-twitch-purple-light)",
              fontSize: "13px",
              padding: "8px 16px",
              height: "30px",
              borderRadius: "var(--radius-sm)",
              border: "2px solid var(--color-twitch-purple)",
              display: "inline-flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(145, 70, 255, 0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            문의하기
          </a>
        </div>
      </section>

      {/* Services — stream-grid pattern */}
      <section
        id="services"
        className="py-20 px-5"
        style={{ background: "var(--color-background-base)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2
              className="font-bold mb-2"
              style={{
                fontSize: "24px",
                letterSpacing: "-0.01em",
                color: "var(--color-text-base)",
              }}
            >
              피플팀이 하는 일
            </h2>
            <p style={{ fontSize: "14px", color: "var(--color-text-alt)" }}>
              구성원의 성장과 행복을 위해 다양한 영역에서 일합니다.
            </p>
          </div>

          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col gap-4 p-5 transition-all duration-100"
                style={{
                  background: "var(--color-background-alt)",
                  borderRadius: "var(--radius-lg)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.background = "var(--color-background-interactable-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.background = "var(--color-background-alt)";
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center rounded"
                  style={{
                    background: "rgba(145, 70, 255, 0.2)",
                    color: "var(--color-twitch-purple-light)",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="font-semibold leading-snug"
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--color-text-base)",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: "13px",
                    color: "var(--color-text-alt)",
                    lineHeight: "18px",
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — raid notification gradient style */}
      <section
        id="contact"
        className="py-24 px-6"
        style={{ background: "var(--color-background-alt-2)" }}
      >
        <div
          className="max-w-xl mx-auto text-center rounded-lg p-10"
          style={{
            background: "linear-gradient(135deg, var(--color-twitch-purple-dark) 0%, var(--color-twitch-purple) 100%)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <h2
            className="font-bold mb-3"
            style={{
              fontSize: "24px",
              color: "#ffffff",
              letterSpacing: "-0.01em",
            }}
          >
            피플팀에 문의하세요
          </h2>
          <p
            className="mb-8 leading-relaxed"
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            채용, 복리후생, 조직문화 등 궁금한 점이 있으시면<br className="hidden sm:block" />
            언제든지 연락 주세요.
          </p>
          <a
            href="mailto:yrchoi@vivawave.co.kr"
            className="inline-flex items-center gap-2 font-semibold text-white transition-colors"
            style={{
              background: "rgba(255,255,255,0.15)",
              fontSize: "13px",
              padding: "8px 20px",
              height: "36px",
              borderRadius: "var(--radius-sm)",
              border: "2px solid rgba(255,255,255,0.4)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.25)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
            }
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            문의하기
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-6 px-5"
        style={{
          background: "var(--color-background-alt)",
          borderTop: "1px solid var(--color-background-alt-2)",
        }}
      >
        <div
          className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ fontSize: "13px", color: "var(--color-text-alt-2)" }}
        >
          <span className="font-semibold" style={{ color: "var(--color-text-alt)" }}>
            피플팀
          </span>
          <span>© 2026 Vivawave People Team. All rights reserved.</span>
        </div>
      </footer>

      {/* Twitch pulse animation */}
      <style>{`
        @keyframes twitch-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </main>
  );
}
