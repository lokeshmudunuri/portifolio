'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Users, Flame, GitCommit, Calendar } from 'lucide-react';
import { assetPath } from '@/lib/assets';


interface GithubUser {
  public_repos: number;
  followers: number;
  avatar_url: string;
}

export default function GithubActivity() {
  const [user, setUser] = useState<GithubUser>({
    public_repos: 5,
    followers: 1,
    avatar_url: '/profile.jpg',
  });
  const [streakError, setStreakError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('https://api.github.com/users/lokeshmudunuri')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && data.public_repos !== undefined) {
          setUser({
            public_repos: data.public_repos ?? 5,
            followers: data.followers ?? 1,
            avatar_url: data.avatar_url ?? '/profile.jpg',
          });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const stats = [
    { label: 'Public Repos', value: user.public_repos, icon: FolderGit2 },
    { label: 'Followers', value: user.followers, icon: Users },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-[2rem] md:rounded-[3rem] p-5 sm:p-8 md:p-10 space-y-6 md:space-y-10 overflow-hidden"
    >
      {/* Profile header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-8">
        <div className="flex items-center gap-4 sm:gap-6">
          <img
            src={assetPath(user.avatar_url)}
            alt="Mudunuri Lokesh Varma"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl object-cover ring-1 ring-white/10 shadow-xl shrink-0"
          />

          <div className="space-y-1.5 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">Mudunuri Lokesh Varma</h4>
              <a
                href="https://github.com/lokeshmudunuri"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1 glass rounded-full text-[9px] uppercase font-black tracking-[0.2em] hover:bg-lime-400 hover:text-black text-lime-400 transition-all duration-300 border border-white/10"
              >
                View Profile
              </a>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm md:text-base opacity-80 max-w-md line-clamp-2 sm:line-clamp-none">
              Third-year B.Tech student in AI & ML, developing practical software and intelligent systems.
            </p>
          </div>
        </div>

        {/* Quick stat tiles */}
        <div className="flex justify-around sm:justify-end gap-6 sm:gap-8 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
          {stats.map((s) => (
            <div key={s.label} className="text-center min-w-[64px]">
              <p className="text-2xl md:text-3xl font-black tracking-tight tabular-nums text-white">
                {s.value}
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-neutral-400 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Streak + Profile Views */}
      <div className="flex flex-col lg:flex-row items-center gap-6 pt-2 border-t border-white/10">
        <div className="w-full lg:flex-1 pt-4 sm:pt-6 overflow-hidden flex justify-center">
          {!streakError ? (
            <img
              src="https://github-readme-streak-stats-eight.vercel.app/?user=lokeshmudunuri&background=FFFFFF00&border=FFFFFF00&stroke=00000000&ring=a3e635&fire=a3e635&currStreakLabel=f3f4f6&sideLabels=9ca3af&dates=6b7280&currStreakNum=ffffff&sideNums=ffffff&hide_border=true"
              alt="Mudunuri Lokesh Varma's GitHub streak stats"
              onError={() => setStreakError(true)}
              className="w-full max-w-[495px] h-auto object-contain mx-auto"
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 w-full">
              <div className="glass p-5 rounded-2xl text-center space-y-1 border border-white/10">
                <GitCommit className="w-5 h-5 mx-auto text-lime-400 mb-1" />
                <p className="text-2xl font-black text-white">Active</p>
                <p className="text-[10px] uppercase tracking-wider font-bold text-neutral-400">Contributions</p>
                <p className="text-[10px] text-neutral-500">Academic & Personal</p>
              </div>
              <div className="glass p-5 rounded-2xl text-center space-y-1 ring-1 ring-lime-400/30 border border-white/10">
                <Flame className="w-5 h-5 mx-auto text-lime-400 mb-1" />
                <p className="text-2xl font-black text-lime-400">Active</p>
                <p className="text-[10px] uppercase tracking-wider font-bold text-lime-400">Current Streak</p>
                <p className="text-[10px] text-neutral-500">Continuous Learning</p>
              </div>
              <div className="glass p-5 rounded-2xl text-center space-y-1 border border-white/10">
                <Calendar className="w-5 h-5 mx-auto text-neutral-400 mb-1" />
                <p className="text-2xl font-black text-white">Consistent</p>
                <p className="text-[10px] uppercase tracking-wider font-bold text-neutral-400">Commit Pace</p>
                <p className="text-[10px] text-neutral-500">Project Development</p>
              </div>
            </div>
          )}
        </div>
        <div className="pt-2 lg:pt-0 shrink-0">
          <img
            src="https://komarev.com/ghpvc/?username=lokeshmudunuri&color=a3e635&style=flat&label=PROFILE+VIEWS"
            alt="Mudunuri Lokesh Varma's profile view count"
            className="h-6"
          />
        </div>
      </div>

      {/* Contribution graph */}
      <div className="pt-2 border-t border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.3em] font-black text-neutral-400 pt-3">
            Contribution Graph
          </p>
          <span className="text-[9px] uppercase tracking-wider text-neutral-400 sm:hidden pt-3 font-bold">
            Swipe →
          </span>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar rounded-2xl bg-black/40 p-2 sm:p-4 border border-white/10">
          <img
            src="https://ghchart.rshah.org/a3e635/lokeshmudunuri"
            alt="Mudunuri Lokesh Varma's GitHub contribution graph"
            className="w-full min-w-[550px] sm:min-w-0 h-auto object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}
