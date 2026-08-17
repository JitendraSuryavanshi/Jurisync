import React, { useState } from 'react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogData';
import { BlogPost } from '../types';
import {
  BookOpen,
  Search,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Share2,
  CheckCircle2,
  Calendar,
  X,
} from 'lucide-react';
import { LeadCaptureBanner } from '../components/LeadCaptureBanner';

interface BlogViewProps {
  initialPostId?: string;
  onNavigate: (path: string, param?: string) => void;
  onOpenConsultation: (servicePreselect?: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  initialPostId,
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(
    initialPostId ? BLOG_POSTS.find((p) => p.id === initialPostId) || null : null
  );

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10 pb-16 sm:pb-24">
      {/* Article Detail View / Reader Modal */}
      {activeArticle ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Back button */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setActiveArticle(null)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              <span>Back to all articles</span>
            </button>

            <span className="text-xs text-slate-400">Published: {activeArticle.date}</span>
          </div>

          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold">
                {activeArticle.category}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{activeArticle.readTime}</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {activeArticle.title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 py-3 border-y border-slate-200">
              {activeArticle.author.name === 'Hannu Goyal' ? (
                <img
                  src="https://instagram.fdel42-1.fna.fbcdn.net/v/t51.82787-19/671112866_18440075656184226_764077122720833930_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fdel42-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2gE5Jl5G5b40efoSHZo_ghLp7DObsUaNRN1LCrikA9VXlaWI-caAyKAgo-a9h_4ggyU&_nc_ohc=jfPNh4niHW0Q7kNvwEMf6Jv&_nc_gid=RHDy9AgPOaHfzcJoUbpAzQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AQFf_512JHiIbqVTruc_KFY_DCqZyUu6CtLFdSeVrv9N9g&oe=6A88F58B&_nc_sid=7a9f4b"
                  alt="CS Hannu Goyal"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-500 shadow-sm"
                />
              ) : (
                <div className="w-11 h-11 rounded-full bg-slate-900 text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm">
                  {activeArticle.author.name.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div>
                <p className="text-xs font-bold text-slate-900">{activeArticle.author.name}</p>
                <p className="text-[11px] text-slate-500">{activeArticle.author.role}</p>
              </div>
            </div>
          </div>

          {/* Article Full Body */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed bg-amber-50/50 p-4 rounded-2xl border border-amber-200/60">
              {activeArticle.summary}
            </p>

            <div className="whitespace-pre-line space-y-4 font-sans text-slate-700">
              {activeArticle.content}
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Related Topics:</span>
              {activeArticle.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Consultation Prompt */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-serif text-xl font-bold">Have questions about this compliance?</h3>
              <p className="text-xs text-slate-300">
                Speak directly with CS Hannu Goyal or Chartered Accountants.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation(activeArticle.title)}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0"
            >
              Get Free Advisory
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Main Blog Hub Header */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-12 text-white shadow-xl border border-slate-800 text-center max-w-4xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Knowledge & Compliance Hub</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
                Legal & Corporate Insights for Indian Founders
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Practical, actionable guides on MCA compliance, SPICe+ company registration, GST regulations, and trademark enforcement in India.
              </p>
            </div>
          </section>

          {/* Search & Category Filter Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  All Guides ({BLOG_POSTS.length})
                </button>
                {BLOG_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-amber-600 text-white'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles & MCA circulars..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-amber-600 shadow-xs"
                />
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setActiveArticle(post)}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 font-semibold text-[11px]">
                        {post.category}
                      </span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-slate-900">{post.author.name}</p>
                      <p className="text-[11px] text-slate-400">{post.date}</p>
                    </div>

                    <span className="text-amber-700 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lead Capture Banner */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadCaptureBanner />
          </section>
        </>
      )}
    </div>
  );
};
