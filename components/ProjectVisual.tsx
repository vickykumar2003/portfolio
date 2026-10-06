import type { CSSProperties, ReactNode } from 'react';
import Image from 'next/image';
import type { Project, ProjectMedia } from '@/data/project';
import { profile } from '@/data/profile';

/**
 * Project artwork. Renders `project.media` when set — a real screenshot/recording in a
 * browser frame, or a stand-in image (`placeholder: true`) in a plain frame, labelled as such.
 * Without media it falls back to an animated, illustrative UI mockup built only from the
 * project's real feature list — also clearly labelled, never presented as a screenshot.
 *
 * Mockups are drawn on a fixed 800×560 canvas (`.mock-canvas`) that scales to fit.
 * `m-*` classes animate once the nearest host is live — see globals.css.
 */

/** Animation start time (ms) + any extra custom properties */
const at = (ms: number, vars: Record<string, string | number> = {}) =>
  ({ '--t': `${ms}ms`, ...vars }) as CSSProperties;

type CountProps = { to: number; from?: number; ms: number; suffix?: string; dur?: string };

function Count({ to, from = 0, ms, suffix = '', dur }: CountProps) {
  return (
    <span
      className="m-count tabular-nums"
      data-suffix={suffix}
      style={at(ms, { '--to': to, '--from': from, ...(dur ? { '--dur': dur } : {}) })}
    />
  );
}

type BrowserProps = {
  url: string;
  light?: boolean;
  className: string;
  children: ReactNode;
};

function Browser({ url, light = false, className, children }: BrowserProps) {
  return (
    <div data-depth={1} className={`absolute ${className}`}>
      <div
        className={`m-window flex h-full flex-col overflow-hidden rounded-xl border ${
          light ? 'border-black/10 bg-white text-[#1d2025]' : 'border-white/10 bg-[#0d0f13] text-white/85'
        }`}
      >
        <div
          className={`flex shrink-0 items-center gap-3 border-b px-3.5 py-2 ${
            light ? 'border-black/6 bg-[#f2f1ee]' : 'border-white/6 bg-[#15171c]'
          }`}
        >
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
          </span>
          <span className={`text-[13px] ${light ? 'text-black/30' : 'text-white/25'}`}>‹ ›</span>
          <span
            className={`mx-auto flex w-[46%] items-center justify-center gap-1.5 rounded-md py-1 text-[11px] ${
              light ? 'bg-white text-black/50' : 'bg-white/6 text-white/45'
            }`}
          >
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-current opacity-70">
              <path d="M3 5V4a3 3 0 0 1 6 0v1h.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5H3Zm1 0h4V4a2 2 0 0 0-4 0v1Z" />
            </svg>
            {url}
          </span>
          <span className="w-[52px]" />
        </div>
        <div className="relative min-h-0 flex-1">{children}</div>
      </div>
    </div>
  );
}

type CursorProps = { ms: number; className: string; from?: [number, number] };

/** Pointer that glides in and "clicks" at its final position */
function Cursor({ ms, className, from = [60, 50] }: CursorProps) {
  return (
    <span
      className={`m-cursor absolute z-20 ${className}`}
      style={at(ms, { '--cx': `${from[0]}px`, '--cy': `${from[1]}px` })}
    >
      <span className="m-ripple absolute -left-3 -top-3 h-6 w-6 rounded-full border-2 border-current" style={at(ms + 900)} />
      <svg viewBox="0 0 16 20" className="relative h-5 w-4 drop-shadow-[0_2px_4px_rgb(0_0_0/0.4)]">
        <path d="M1 1v15l4-4 3 7 3-1.4-3-6.6h6L1 1Z" fill="#fff" stroke="#111" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/* ---------------------------------- SkillPat ---------------------------------- */

function SkillPatMock() {
  const nav = ['Onboarding', 'Interviews', 'Assessments', 'Evaluations', 'Proctoring'];
  const criteria: [string, number][] = [
    ['Technical depth', 86],
    ['Communication', 78],
    ['Problem solving', 74],
  ];
  const pipeline = ['Answer recorded', 'Queued for AI evaluation', 'Evaluation report ready'];
  const corners = [
    'left-0 top-0 border-l-2 border-t-2',
    'right-0 top-0 border-r-2 border-t-2',
    'bottom-0 left-0 border-b-2 border-l-2',
    'bottom-0 right-0 border-b-2 border-r-2',
  ];

  return (
    <>
      <Browser url="skillpat / interview-room" className="left-[24px] top-[30px] h-[490px] w-[752px]">
        <div className="grid h-full grid-cols-[150px_1fr] bg-[#0b0b12] text-[11px]">
          <aside className="border-r border-white/5 p-3.5">
            <p className="mb-6 flex items-center gap-2 text-[13px] font-semibold text-white">
              <span className="h-5 w-5 rounded-md bg-linear-to-br from-[#a99dff] to-[#5b4bff]" />
              SkillPat
            </p>
            <ul className="relative flex flex-col gap-1">
              <span
                className="m-move absolute inset-x-0 top-[32px] h-[28px] rounded-md bg-[#8b7bff]/15 ring-1 ring-[#8b7bff]/30"
                style={at(300, { '--from-y': '-32px' })}
              />
              {nav.map((item, i) => (
                <li
                  key={item}
                  className={`relative flex h-[28px] items-center gap-2 rounded-md px-2 ${i === 1 ? 'text-white' : 'text-white/45'}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${i === 1 ? 'bg-[#a99dff]' : 'bg-white/20'}`} />
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <div className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[16px] font-semibold text-white">Interview room</p>
                <p className="mt-0.5 text-white/45">Candidate 01 · Frontend Developer role</p>
              </div>
              <span className="flex items-center gap-2 rounded-full bg-red-500/10 px-2.5 py-1 text-red-300 ring-1 ring-red-400/20">
                <span className="status-dot" style={{ background: '#f87171' }} />
                Proctoring live
              </span>
            </div>

            <div className="mt-4 grid grid-cols-[1.12fr_1fr] gap-3">
              <div className="space-y-3">
                <div className="relative h-[156px] overflow-hidden rounded-lg bg-linear-to-b from-[#1c1934] to-[#0f0e19] ring-1 ring-white/5">
                  <span className="absolute left-1/2 top-[30px] h-[54px] w-[54px] -translate-x-1/2 rounded-full bg-white/10" />
                  <span className="absolute bottom-[-30px] left-1/2 h-[90px] w-[130px] -translate-x-1/2 rounded-t-full bg-white/10" />
                  <span className="m-fade absolute left-[calc(50%-37px)] top-[20px] h-[74px] w-[74px]" style={at(700)}>
                    {corners.map((corner) => (
                      <span key={corner} className={`absolute h-3 w-3 border-[#a99dff] ${corner}`} />
                    ))}
                  </span>
                  <span className="absolute bottom-2 left-2 rounded bg-black/40 px-1.5 py-0.5 text-[10px] text-white/70">Camera</span>
                  <span
                    className="m-in absolute bottom-2 right-2 rounded bg-emerald-400/15 px-1.5 py-0.5 text-[10px] text-emerald-300"
                    style={at(900)}
                  >
                    ✓ Face detected
                  </span>
                </div>

                <div className="rounded-lg bg-white/3 p-3 ring-1 ring-white/5">
                  <p className="text-white/40">Question 3 of 8</p>
                  <p className="mt-1 text-[12.5px] leading-[1.45] text-white">
                    Explain how you would debounce a search input in React.
                  </p>
                  <div className="mt-3 space-y-1.5">
                    <span className="m-type block h-1.5 w-[92%] rounded-full bg-white/20" style={at(500)} />
                    <span className="m-type block h-1.5 w-[80%] rounded-full bg-white/20" style={at(1100)} />
                    <span className="flex items-center gap-1">
                      <span className="m-type block h-1.5 w-[44%] rounded-full bg-white/20" style={at(1700)} />
                      <span className="m-caret h-3 w-px bg-[#a99dff]" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-lg bg-white/3 p-3 ring-1 ring-white/5">
                  <p className="text-white/40">AI evaluation</p>
                  <div className="mt-2 flex items-center gap-4">
                    <span className="relative grid h-[78px] w-[78px] shrink-0 place-items-center">
                      <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90">
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgb(255 255 255 / 0.07)" strokeWidth="3" />
                        <circle
                          className="m-ring"
                          style={at(400)}
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="#a99dff"
                          strokeWidth="3"
                          strokeLinecap="round"
                          pathLength={100}
                          strokeDasharray="100"
                          strokeDashoffset={18}
                        />
                      </svg>
                      <span className="text-[20px] font-semibold text-white">
                        <Count to={82} ms={400} />
                      </span>
                    </span>
                    <div className="flex-1 space-y-2">
                      {criteria.map(([label, value], i) => (
                        <div key={label}>
                          <p className="flex justify-between text-[10.5px] text-white/55">
                            {label}
                            <span className="text-white/80">
                              <Count to={value} ms={600 + i * 150} />
                            </span>
                          </p>
                          <span className="mt-1 block h-1 rounded-full bg-white/6">
                            <span
                              className="m-grow block h-full rounded-full bg-[#a99dff]"
                              style={{ ...at(600 + i * 150), width: `${value}%` }}
                            />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white/3 p-3 ring-1 ring-white/5">
                  <p className="text-white/40">Evaluation pipeline</p>
                  <ul className="mt-2 space-y-2">
                    {pipeline.map((step, i) => (
                      <li key={step} className="m-in flex items-center gap-2 text-white/75" style={at(1000 + i * 450)}>
                        <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-400/15 text-[9px] text-emerald-300">
                          ✓
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Browser>

      <div data-depth={3} className="absolute left-[548px] top-[452px] w-[230px]">
        <div
          className="m-toast flex items-start gap-3 rounded-xl border border-white/10 bg-[#17152a]/95 p-3 text-[11px] shadow-2xl backdrop-blur"
          style={at(2400)}
        >
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#8b7bff]/25 text-[#c4bbff]">✦</span>
          <span>
            <span className="block font-medium text-white">AI evaluation complete</span>
            <span className="text-white/50">Candidate report is ready to review</span>
          </span>
        </div>
      </div>
    </>
  );
}

/* -------------------------------- Hotel booking ------------------------------- */

function HotelMock() {
  const stays = [
    { name: 'Lakeview Suites', price: '3,200', rating: '4.6', art: 'from-[#ffb36b] via-[#f08a5d] to-[#6a4c93]' },
    { name: 'Amber Residency', price: '2,450', rating: '4.4', art: 'from-[#7fd1ff] via-[#5aa9e6] to-[#2a4d69]' },
    { name: 'Courtyard Haveli', price: '4,100', rating: '4.8', art: 'from-[#ffd6a5] via-[#e9a178] to-[#8b5e3c]' },
  ];
  const search = [
    ['Destination', 'Jaipur'],
    ['Check-in', '12 Oct'],
    ['Check-out', '15 Oct'],
    ['Guests', '2 adults'],
  ];
  const rooms: [string, string, boolean][] = [
    ['101', 'Deluxe', true],
    ['102', 'Suite', false],
    ['103', 'Standard', true],
  ];

  return (
    <>
      <Browser light url="hotel-booking / search" className="left-[20px] top-[24px] h-[470px] w-[600px]">
        <div className="h-full bg-[#fbfaf8] p-5 text-[11px]">
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 text-[13px] font-semibold">
              <span className="h-3.5 w-3.5 rotate-45 rounded-[4px] bg-[#e8a33d]" />
              Hotel Booking
            </p>
            <p className="flex items-center gap-3 text-black/50">
              My bookings
              <span className="flex items-center gap-1.5 rounded-full bg-black/4 py-0.5 pl-0.5 pr-2 text-black/70">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#e8a33d] text-[10px] font-semibold text-white">U</span>
                User
              </span>
            </p>
          </div>

          <div className="mt-5 grid grid-cols-[1.3fr_1fr_1fr_0.9fr_auto] items-center rounded-xl bg-white p-1.5 shadow-[0_6px_24px_-8px_rgb(0_0_0/0.18)] ring-1 ring-black/5">
            {search.map(([label, value], i) => (
              <div key={label} className={`px-3 py-1.5 ${i ? 'border-l border-black/5' : ''}`}>
                <p className="text-[9.5px] uppercase tracking-wide text-black/40">{label}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
            <span className="m-press rounded-lg bg-[#e8a33d] px-4 py-2.5 font-semibold text-white" style={at(250)}>
              Search
            </span>
          </div>

          <div className="mt-5 flex items-baseline justify-between">
            <p className="text-[14px] font-semibold">Available stays in Jaipur</p>
            <p className="text-black/40">3 nights · 12–15 Oct</p>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-3">
            {stays.map((stay, i) => (
              <div key={stay.name} className="m-in overflow-hidden rounded-xl bg-white ring-1 ring-black/5" style={at(500 + i * 160)}>
                <div className={`relative h-[104px] bg-linear-to-br ${stay.art}`}>
                  <span className="absolute bottom-0 left-[12%] h-[46%] w-[30%] rounded-t-md bg-black/15" />
                  <span className="absolute bottom-0 left-[46%] h-[64%] w-[22%] rounded-t-md bg-black/20" />
                  <span className="absolute right-[16%] top-[18%] h-5 w-5 rounded-full bg-white/60" />
                  <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-white/85 text-[10px] text-[#e05d5d]">
                    ♥
                  </span>
                </div>
                <div className="p-2.5">
                  <p className="flex justify-between gap-1 font-medium">
                    <span className="truncate">{stay.name}</span>
                    <span className="shrink-0 text-black/50">★ {stay.rating}</span>
                  </p>
                  <p className="mt-1 text-black/45">
                    <span className="font-semibold text-black/80">₹{stay.price}</span> / night
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Browser>

      <div data-depth={3} className="absolute left-[466px] top-[196px] w-[316px]">
        <div
          className="m-toast rounded-2xl bg-white p-4 text-[11px] text-[#1d2025] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.65)] ring-1 ring-black/5"
          style={at(900)}
        >
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-semibold">Manage rooms</p>
            <span className="rounded-full bg-[#e8a33d]/15 px-2 py-0.5 font-medium text-[#b9771a]">Admin</span>
          </div>
          <table className="mt-3 w-full text-left">
            <thead className="text-[9.5px] uppercase tracking-wide text-black/40">
              <tr>
                <th className="pb-1.5 font-normal">Room</th>
                <th className="pb-1.5 font-normal">Type</th>
                <th className="pb-1.5 font-normal">Status</th>
                <th className="pb-1.5 text-right font-normal">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map(([room, type, available], i) => (
                <tr key={room} className="m-in border-t border-black/5" style={at(1200 + i * 120)}>
                  <td className="py-1.5 font-medium">{room}</td>
                  <td className="text-black/60">{type}</td>
                  <td>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[9.5px] ${
                        available ? 'bg-emerald-500/10 text-emerald-700' : 'bg-amber-500/15 text-amber-700'
                      }`}
                    >
                      {available ? 'Available' : 'Booked'}
                    </span>
                  </td>
                  <td className="text-right text-black/35">✎ &nbsp;✕</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-3 rounded-lg bg-black/3 p-2.5">
            <p className="flex justify-between text-black/60">
              <span>room-104.jpg → Cloudinary</span>
              <span className="font-medium text-black/80">
                <Count to={100} ms={1600} suffix="%" dur="1.6s" />
              </span>
            </p>
            <span className="mt-1.5 block h-1 rounded-full bg-black/6">
              <span className="m-grow block h-full w-full rounded-full bg-[#e8a33d]" style={at(1600, { '--dur': '1.6s' })} />
            </span>
          </div>
          <span className="mt-3 inline-block rounded-lg bg-[#1d2025] px-3 py-1.5 font-medium text-white">+ Add room</span>
        </div>
      </div>

      <div data-depth={2} className="absolute left-[150px] top-[486px]">
        <div
          className="m-toast flex items-center gap-2.5 rounded-xl bg-[#1d2025] px-3.5 py-2.5 text-[11px] text-white shadow-2xl"
          style={at(2300)}
        >
          <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-400 text-[10px] text-black">✓</span>
          Booking confirmed · Lakeview Suites · 3 nights
        </div>
      </div>
    </>
  );
}

/* -------------------------------- Code reviewer ------------------------------- */

function CodeReviewerMock() {
  const k = 'text-[#c792ea]';
  const f = 'text-[#82aaff]';
  const s = 'text-[#c3e88d]';
  const code: ReactNode[] = [
    <>
      <span className={k}>const</span> <span className={f}>login</span> = <span className={k}>async</span> (req, res) =&gt; {'{'}
    </>,
    <>
      {'  '}
      <span className={k}>const</span> user = <span className={k}>await</span> User.<span className={f}>findOne</span>({'{'} email {'}'});
    </>,
    <>
      {'  '}
      <span className={k}>if</span> (user.password == req.body.password) {'{'}
    </>,
    <>
      {'    '}
      <span className={k}>const</span> token = jwt.<span className={f}>sign</span>({'{'} id: user._id {'}'},{' '}
      <span className={s}>&apos;secret&apos;</span>);
    </>,
    <>
      {'    '}res.<span className={f}>json</span>({'{'} token {'}'});
    </>,
    <>{'  }'}</>,
    <>
      {'  '}res.<span className={f}>status</span>(<span className="text-[#f78c6c]">401</span>).<span className={f}>end</span>();
    </>,
    <>{'};'}</>,
  ];
  const flagged: Record<number, string> = {
    2: 'border-red-400 bg-red-400/8',
    3: 'border-[#4fd1a5] bg-[#4fd1a5]/7',
  };
  const findings = [
    { tag: 'Error', line: 3, tone: 'bg-red-400/15 text-red-300', text: '`user` can be null — check it exists before reading `password`.' },
    { tag: 'Security', line: 3, tone: 'bg-amber-400/15 text-amber-300', text: 'Compare hashed passwords instead of plain-text values.' },
    { tag: 'Optimization', line: 4, tone: 'bg-[#4fd1a5]/15 text-[#7ee8c4]', text: 'Load the JWT secret from an environment variable.' },
  ];
  const history = ['auth.controller.js', 'cart.reducer.js', 'debounce.js', 'db.connect.js'];

  return (
    <>
      <Browser url="code-reviewer / review" className="left-[24px] top-[30px] h-[490px] w-[752px]">
        <div className="grid h-full grid-cols-[116px_1fr_236px] bg-[#0c0e12] text-[11px]">
          <aside className="border-r border-white/5 p-3">
            <p className="mb-3 text-[10px] uppercase tracking-wider text-white/35">Review history</p>
            <ul className="space-y-1 font-mono text-[10.5px]">
              {history.map((file, i) => (
                <li key={file} className={`truncate rounded px-2 py-1.5 ${i === 0 ? 'bg-white/6 text-white' : 'text-white/40'}`}>
                  {file}
                </li>
              ))}
            </ul>
          </aside>

          <div className="relative flex min-w-0 flex-col border-r border-white/5">
            <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
              <span className="rounded-t bg-white/5 px-2.5 py-1 font-mono text-[10.5px] text-white/80">auth.controller.js</span>
              <span className="text-white/35">JavaScript</span>
            </div>
            <div className="flex-1 overflow-hidden py-3 font-mono text-[11px] leading-[24px] text-white/75">
              {code.map((line, i) => (
                <div key={i} className="relative flex whitespace-pre pr-3">
                  {flagged[i] && <span className={`m-fade absolute inset-0 border-l-2 ${flagged[i]}`} style={at(1300)} />}
                  <span className="relative w-9 shrink-0 pr-3 text-right text-white/20">{i + 1}</span>
                  <span className="relative">{line}</span>
                  {i === code.length - 1 && <span className="m-caret relative ml-0.5 mt-[5px] h-3 w-px bg-white/70" />}
                </div>
              ))}
            </div>
            <div className="flex justify-end border-t border-white/5 p-2.5">
              <span className="m-press relative rounded-lg bg-[#4fd1a5] px-3.5 py-1.5 font-semibold text-[#062b1f]" style={at(1050)}>
                ✦ Review code
                <Cursor ms={0} className="-bottom-2 right-3 text-[#4fd1a5]" from={[-140, -120]} />
              </span>
            </div>
          </div>

          <div className="p-3">
            <div className="flex items-center justify-between">
              <p className="text-[12.5px] font-semibold text-white">✦ AI review</p>
              <span className="m-fade rounded-full bg-white/6 px-2 py-0.5 text-white/50" style={at(1300)}>
                3 findings
              </span>
            </div>
            <ul className="mt-3 space-y-2.5">
              {findings.map((item, i) => (
                <li key={item.tag} className="m-in rounded-lg bg-white/3 p-2.5 ring-1 ring-white/5" style={at(1400 + i * 260)}>
                  <p className="flex items-center justify-between">
                    <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${item.tone}`}>{item.tag}</span>
                    <span className="font-mono text-[10px] text-white/30">line {item.line}</span>
                  </p>
                  <p className="mt-1.5 leading-normal text-white/70">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Browser>

      <div data-depth={3} className="absolute left-[580px] top-[6px]">
        <span
          className="m-toast flex items-center gap-2 rounded-full border border-white/10 bg-[#101a17] px-3 py-1.5 text-[11px] text-[#7ee8c4] shadow-xl"
          style={at(600)}
        >
          <span className="status-dot" style={{ background: '#4fd1a5' }} />
          Google Gemini API
        </span>
      </div>
    </>
  );
}

/* --------------------------------- Food ordering ------------------------------ */

const plate = (hue: string): CSSProperties => ({
  background: `radial-gradient(circle, ${hue} 0 36%, #fff3e0 37% 44%, transparent 45%), radial-gradient(circle, #ffffff 0 62%, transparent 63%)`,
});

function FoodMock() {
  const dishes = [
    { name: 'Margherita', price: 249, hue: '#f25c3b' },
    { name: 'Farmhouse', price: 329, hue: '#7cb342' },
    { name: 'Paneer Tikka', price: 349, hue: '#f2a03b' },
    { name: 'Veg Supreme', price: 379, hue: '#d84f7a' },
    { name: 'Cheese Burst', price: 299, hue: '#f6c344' },
    { name: 'Peri Peri', price: 319, hue: '#e0583a' },
  ];
  const cart = dishes.slice(0, 3);

  return (
    <>
      <Browser light url="food-ordering / menu" className="left-[18px] top-[34px] h-[460px] w-[528px]">
        <div className="h-full bg-[#fffaf5] p-4 text-[11px]">
          <div className="flex items-center gap-3">
            <p className="text-[13px] font-semibold">
              <span className="text-[#ff7a59]">●</span> Food Ordering
            </p>
            <span className="flex-1 rounded-full bg-black/4 px-3 py-1.5 text-black/35">Search dishes…</span>
            <span className="relative grid h-8 w-8 place-items-center rounded-full bg-[#1d2025] text-white">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.6">
                <path d="M1.5 2h2l1.6 8.2h7.4L14 4.5H4.4M6 14h.01M12 14h.01" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#ff7a59] px-1 text-[9px] font-semibold">
                <Count to={3} from={2} ms={1550} dur="0.2s" />
              </span>
            </span>
          </div>

          <div className="mt-4 flex gap-1.5">
            {['All', 'Pizza', 'Burgers', 'Biryani', 'Desserts'].map((chip) => (
              <span
                key={chip}
                className={`rounded-full px-3 py-1 ${chip === 'Pizza' ? 'bg-[#ff7a59] font-medium text-white' : 'bg-black/4 text-black/50'}`}
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {dishes.map((dish, i) => (
              <div key={dish.name} className="m-in rounded-xl bg-white p-2.5 ring-1 ring-black/5" style={at(200 + i * 90)}>
                <span className="mx-auto block aspect-square w-[74%]" style={plate(dish.hue)} />
                <p className="mt-1.5 font-medium">{dish.name}</p>
                <p className="mt-1 flex items-center justify-between text-black/50">
                  ₹{dish.price}
                  <span
                    className={`relative rounded-md px-2 py-0.5 font-medium ${
                      i === 2 ? 'm-press bg-[#ff7a59] text-white' : 'bg-[#ff7a59]/10 text-[#e0583a]'
                    }`}
                    style={i === 2 ? at(1450) : undefined}
                  >
                    + Add
                    {i === 2 && <Cursor ms={550} className="-bottom-3 right-0 text-[#ff7a59]" from={[-170, 80]} />}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Browser>

      <div data-depth={3} className="absolute left-[556px] top-[58px] h-[468px] w-[226px]">
        <div className="m-window h-full rounded-[34px] bg-[#16171a] p-[7px] ring-1 ring-white/10">
          <div className="relative h-full overflow-hidden rounded-[28px] bg-[#fffaf5] px-3.5 pt-8 text-[11px] text-[#1d2025]">
            <span className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-[#16171a]" />
            <p className="text-[15px] font-semibold">Your cart</p>
            <p className="text-black/45">
              <Count to={3} from={2} ms={1550} dur="0.2s" /> items
            </p>
            <ul className="mt-3 space-y-2">
              {cart.map((dish, i) => (
                <li
                  key={dish.name}
                  className={`flex items-center gap-2 rounded-xl bg-white p-2 ring-1 ring-black/5 ${i === 2 ? 'm-in' : ''}`}
                  style={i === 2 ? at(1650) : undefined}
                >
                  <span className="h-9 w-9 shrink-0" style={plate(dish.hue)} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium">{dish.name}</span>
                    <span className="text-black/45">₹{dish.price}</span>
                  </span>
                  <span className="rounded-full bg-black/4 px-1.5 py-0.5 text-black/60">− 1 +</span>
                </li>
              ))}
            </ul>
            <div className="absolute inset-x-3.5 bottom-4">
              <p className="flex justify-between border-t border-black/5 pt-3 text-black/50">
                Subtotal
                <span className="font-semibold text-black/80">
                  ₹<Count to={927} from={578} ms={1650} dur="0.9s" />
                </span>
              </p>
              <span className="mt-3 block rounded-xl bg-[#1d2025] py-2.5 text-center font-semibold text-white">Checkout</span>
            </div>
          </div>
        </div>
      </div>

      <div data-depth={2} className="absolute left-[300px] top-[508px]">
        <span
          className="m-toast block rounded-lg border border-white/10 bg-[#121316] px-3 py-2 font-mono text-[11px] text-white/80 shadow-2xl"
          style={at(1600)}
        >
          <span className="text-[#c792ea]">dispatch</span>(<span className="text-[#ffcb6b]">cart/addItem</span>)
          <span className="ml-2 text-white/35">Redux</span>
        </span>
      </div>
    </>
  );
}

/* ---------------------------------- Portfolio --------------------------------- */

function PortfolioMock() {
  const [first, last] = profile.name.split(' ');
  return (
    <Browser url="portfolio" className="left-[40px] top-[40px] h-[480px] w-[720px]">
      <div className="grid h-full grid-cols-[1.3fr_1fr] items-center gap-6 bg-[#08090b] px-10">
        <div>
          <span
            className="m-in inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/60"
            style={at(100)}
          >
            <span className="status-dot" /> Available for opportunities
          </span>
          <p className="m-in mt-5 text-[64px] font-semibold leading-[0.92] tracking-[-0.045em] text-[#eceae5]" style={at(250)}>
            {first}
            <br />
            {last}
            <span className="text-[#6d9bff]">.</span>
          </p>
          <span className="m-type mt-5 block h-2 w-[80%] rounded-full bg-white/15" style={at(600)} />
          <span className="m-type mt-2 block h-2 w-[60%] rounded-full bg-white/15" style={at(900)} />
          <span
            className="m-in mt-6 inline-block rounded-full bg-[#eceae5] px-4 py-2 text-[12px] font-medium text-[#08090b]"
            style={at(1100)}
          >
            View my work →
          </span>
        </div>
        <div className="relative aspect-square">
          <span className="orbit absolute inset-0 rounded-full border border-dashed border-white/15" />
          <span className="absolute inset-[16%] overflow-hidden rounded-full">
            <Image src={profile.photo} alt="" fill sizes="240px" className="object-cover object-[50%_30%]" />
          </span>
        </div>
      </div>
    </Browser>
  );
}

const mockups: Record<string, () => ReactNode> = {
  interview: SkillPatMock,
  'hotel-booking': HotelMock,
  'code-reviewer': CodeReviewerMock,
  'food-delivery': FoodMock,
  portfolio: PortfolioMock,
};

function Media({ media, title }: { media: ProjectMedia; title: string }) {
  // Stand-in images aren't screenshots, so they get no browser chrome / address bar
  if (media.type === 'image' && media.placeholder) {
    return (
      <div data-depth={1} className="absolute inset-[24px]">
        <div className="m-window relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f13]">
          <Image
            src={media.src}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 700px"
            className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
        </div>
      </div>
    );
  }

  return (
    <Browser url={title.toLowerCase()} className="left-[24px] top-[30px] h-[500px] w-[752px]">
      {media.type === 'image' ? (
        <Image src={media.src} alt="" fill sizes="(max-width: 1024px) 100vw, 760px" className="object-cover object-top" />
      ) : (
        <video
          src={media.src}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      )}
    </Browser>
  );
}

type ProjectVisualProps = {
  project: Pick<Project, 'slug' | 'title' | 'accent' | 'media'>;
  className?: string;
};

export default function ProjectVisual({ project, className = '' }: ProjectVisualProps) {
  const Mockup = mockups[project.slug];
  const { media } = project;
  const label = !media ? 'Illustrative mockup' : media.type === 'image' && media.placeholder ? 'Placeholder image' : null;
  const description = !media
    ? `Illustrative UI mockup of ${project.title} (not a real screenshot)`
    : media.type === 'image'
      ? media.alt
      : `${project.title} preview`;

  return (
    <div
      role="img"
      aria-label={description}
      style={{ '--pa': project.accent } as CSSProperties}
      className={`@container relative aspect-[10/7] w-full overflow-hidden bg-surface ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-transform duration-1000 ease-out-expo group-hover:scale-110"
        style={{
          background:
            'radial-gradient(70% 80% at 85% 0%, color-mix(in oklab, var(--pa) 30%, transparent), transparent 70%), radial-gradient(60% 70% at 0% 100%, color-mix(in oklab, var(--pa) 14%, transparent), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50 [background:linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px)_0_0/32px_32px,linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)_0_0/32px_32px] mask-[radial-gradient(ellipse_at_top,black,transparent_75%)]"
      />

      <div aria-hidden="true" className="mock-canvas">
        {media ? <Media media={media} title={project.title} /> : Mockup ? <Mockup /> : null}
      </div>

      {label && (
        <span className="absolute bottom-2 left-2 z-10 rounded-full border border-white/10 bg-black/55 px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-wider text-white/60 backdrop-blur-md sm:bottom-3 sm:left-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
          {label}
        </span>
      )}
    </div>
  );
}
