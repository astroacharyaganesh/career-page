import React from 'react';
import { Tv, Users, Calendar, Award } from 'lucide-react';
import { HOME_STATS } from '../../data/homePageData';

export const StatsBarSection: React.FC = () => {
  const renderIcon = (key: (typeof HOME_STATS)[number]['iconKey']) => {
    switch (key) {
      case 'tv':
        return <Tv className="h-6 w-6" />;
      case 'clients':
        return <Users className="h-6 w-6" />;
      case 'years':
        return <Calendar className="h-6 w-6" />;
      case 'accuracy':
        return <Award className="h-6 w-6" />;
    }
  };

  return (
    <section className="w-full bg-background py-4 sm:py-6">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            {/* Left 4 Stat Metrics */}
            <div className="grid flex-1 grid-cols-1 gap-y-4 px-4 py-6 sm:grid-cols-2 sm:gap-y-6 sm:px-6 lg:flex lg:gap-0 lg:py-8">
              {HOME_STATS.map((stat, idx) => (
                <React.Fragment key={stat.label}>
                  {idx > 0 && (
                    <div
                      className="hidden w-px shrink-0 self-stretch bg-border lg:block"
                      aria-hidden="true"
                    />
                  )}
                  <div className="lg:flex lg:flex-1 lg:items-center">
                    <div className="flex flex-1 items-center gap-3 px-3 py-2 sm:gap-4 sm:px-5 lg:px-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary via-hero-via to-hero-from text-primary-foreground shadow-sm ring-1 ring-border/60 sm:h-14 sm:w-14">
                        {renderIcon(stat.iconKey)}
                      </div>
                      <div className="min-w-0 text-left">
                        <p className="font-sans text-2xl font-semibold tabular-nums tracking-tight text-heading sm:text-3xl">
                          {stat.value}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Right Featured Google Reviews Card */}
            <div className="px-4 pb-4 sm:px-6 sm:pb-6 lg:flex lg:items-stretch lg:px-0 lg:py-4 lg:pr-4">
              <a
                href="https://share.google/7gikOHGBTsHSc20De"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-1 flex-col rounded-2xl bg-gradient-to-br from-hero-from via-hero-via to-hero-to px-4 py-5 shadow-md transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:px-6 lg:min-w-[280px] lg:max-w-[360px]"
                aria-label="Google Reviews, 5 out of 5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-card shadow-sm ring-1 ring-border sm:h-16 sm:w-16">
                    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0 text-left">
                    <p className="font-display text-xl font-bold text-primary-foreground sm:text-2xl">
                      Google Reviews
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-0.5 text-accent" aria-hidden="true">
                        {[...Array(5)].map((_, s) => (
                          <svg
                            key={s}
                            className="h-4 w-4 sm:h-5 sm:w-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.7544 2.19093C11.7872 2.08071 11.8888 2.00464 12.004 2.00464C12.1193 2.00464 12.2208 2.08071 12.2536 2.19093C12.2536 2.19093 12.7105 3.72224 13.2001 5.36469C13.9803 7.98141 16.0273 10.0283 18.644 10.8086C20.2864 11.2982 21.8177 11.755 21.8177 11.755C21.928 11.7878 22.004 11.8894 22.004 12.0046C22.004 12.1199 21.928 12.2215 21.8177 12.2542C21.8177 12.2542 20.2864 12.7111 18.644 13.2007C16.0273 13.981 13.9803 16.0279 13.2001 18.6446C12.7105 20.287 12.2536 21.8183 12.2536 21.8183C12.2208 21.9286 12.1193 22.0046 12.004 22.0046C11.8888 22.0046 11.7872 21.9286 11.7544 21.8183C11.7544 21.8183 11.2976 20.287 10.8079 18.6446C10.0277 16.0279 7.98079 13.981 5.36408 13.2007C3.72163 12.7111 2.19032 12.2542 2.19032 12.2542C2.08009 12.2215 2.00403 12.1199 2.00403 12.0046C2.00403 11.8894 2.08009 11.7878 2.19032 11.755C2.19032 11.755 3.72163 11.2982 5.36408 10.8086C7.98079 10.0283 10.0277 7.98141 10.8079 5.36469C11.2976 3.72224 11.7544 2.19093 11.7544 2.19093Z"
                            />
                          </svg>
                        ))}
                      </div>
                      <span className="font-sans text-lg font-semibold tabular-nums tracking-tight text-primary-foreground sm:text-xl">
                        5/5
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm font-medium text-primary-foreground/90">
                  Trusted by 50,000+ happy clients across India
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
