"use client";

import { useMemo } from "react";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import { OpenSourceCard } from "@/components/OpenSourceCard";
import {
  MaintainedProject,
  OpenSourceContribution,
  HostedService,
} from "@/lib/types";
import ExternalLink from "@/components/ExternalLink";
import { SiGithub } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

interface OpenSourceContentProps {
  projects: MaintainedProject[];
  contributions: OpenSourceContribution[];
  services: HostedService[];
}

export function OpenSourceContent({
  projects,
  contributions,
  services,
}: OpenSourceContentProps) {
  // Collect all GitHub repos for stats fetching
  const allRepos = useMemo(() => {
    const repos: string[] = [];

    for (const p of projects) repos.push(p.repo);
    for (const c of contributions) repos.push(c.repo);
    for (const s of services) {
      if (s.repo) repos.push(s.repo);
    }

    return [...new Set(repos)]; // Deduplicate
  }, [projects, contributions, services]);

  const { stats, loading } = useGitHubStats(allRepos);

  // Sort projects: featured first, then by stars
  const sortedProjects = useMemo(() => {
    return projects.toSorted((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      const starsA = stats[a.repo]?.stars || 0;
      const starsB = stats[b.repo]?.stars || 0;
      return starsB - starsA;
    });
  }, [projects, stats]);

  return (
    <div className="mx-5 mt-4 mb-8">
      {/* Page intro */}
      <div className="mb-8">
        <p className="text-zinc-600 dark:text-white/70">
          I believe in open source software. Here are the projects I maintain,
          my contributions to others, and the services I host.
        </p>
      </div>

      {/* Section 1: Maintained Projects */}
      <section className="mb-12">
        <h2
          className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white"
          style={{ fontFamily: "var(--font-balgin)" }}
        >
          Maintained Projects
        </h2>
        <p className="mb-4 text-sm text-zinc-600 dark:text-white/70">
          Projects I actively maintain and develop.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project) => (
            <OpenSourceCard
              key={project.repo}
              name={project.name}
              description={project.description}
              repo={project.repo}
              stats={stats[project.repo]}
              loading={loading}
              featured={project.featured}
            />
          ))}
        </div>
      </section>

      {/* Section 2: Contributions */}
      {contributions.length > 0 && (
        <section className="mb-12">
          <h2
            className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white"
            style={{ fontFamily: "var(--font-balgin)" }}
          >
            Contributions to Other Projects
          </h2>
          <p className="mb-4 text-sm text-zinc-600 dark:text-white/70">
            Open source projects I&apos;ve contributed to.
          </p>
          <div className="space-y-3">
            {contributions.map((contribution) => (
              <ExternalLink
                key={contribution.repo}
                href={`https://github.com/${contribution.repo}`}
                className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-700"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-zinc-900 dark:text-white">
                      {contribution.project}
                    </span>
                    <span
                      className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
                      style={{ fontFamily: "var(--font-balgin)" }}
                    >
                      {contribution.contributionType}
                    </span>
                  </div>
                  {contribution.description && (
                    <p className="mt-1 text-sm text-zinc-600 dark:text-white/70">
                      {contribution.description}
                    </p>
                  )}
                </div>
                <SiGithub className="size-4 text-zinc-400" />
              </ExternalLink>
            ))}
          </div>
        </section>
      )}

      {/* Section 3: Hosted Services */}
      {services.length > 0 && (
        <section>
          <h2
            className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white"
            style={{ fontFamily: "var(--font-balgin)" }}
          >
            Hosted Services
          </h2>
          <p className="mb-4 text-sm text-zinc-600 dark:text-white/70">
            Live services and applications I host and maintain.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="mb-2 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-zinc-900 dark:text-white">
                      {service.name}
                    </h3>
                    {service.status === "alpha" && (
                      <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        Alpha
                      </span>
                    )}
                    {service.status === "beta" && (
                      <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                        Beta
                      </span>
                    )}
                    {service.status === "deprecated" && (
                      <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-800 dark:bg-red-900/30 dark:text-red-300">
                        Deprecated
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <ExternalLink
                      href={service.url}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      aria-label="Visit service"
                    >
                      <ArrowUpRight className="size-4" />
                    </ExternalLink>
                    {service.repo && (
                      <ExternalLink
                        href={`https://github.com/${service.repo}`}
                        className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        aria-label="View source"
                      >
                        <SiGithub className="size-4" />
                      </ExternalLink>
                    )}
                  </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-white/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
