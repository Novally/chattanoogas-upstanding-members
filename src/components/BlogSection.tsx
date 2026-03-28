import { blogPosts } from "@/data/blogPosts";

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-off-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">The Drip Feed 📝</h2>
          <p className="section-subheading">Dispatches, recaps, and musings from our most vocal members.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="card-cartoon bg-cream p-6 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-bold uppercase tracking-wider bg-eggshell text-warmgray px-2 py-1 rounded-full border border-warmgray/30">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal mb-2 leading-snug">{post.title}</h3>
              <p className="text-xs text-warmgray mb-3">
                By <span className="font-bold">{post.author}</span> • {post.date}
              </p>
              <p className="text-slategray text-sm leading-relaxed flex-1">{post.excerpt}</p>
              <button className="mt-4 font-display font-bold text-sm text-charcoal hover:text-beige transition-colors self-start">
                Read More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
