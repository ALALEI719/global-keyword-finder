import type { BlogBlock } from "@/lib/blog"

export default function BlogPostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="relative text-2xl md:text-[1.7rem] font-bold text-white tracking-tight leading-snug pl-5 mt-12 first:mt-0 before:content-[''] before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-1 before:rounded-full before:bg-gradient-to-b before:from-indigo-400 before:to-violet-500"
            >
              {block.text}
            </h2>
          )
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-3 my-3">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="relative pl-7 text-slate-300 text-[15px] md:text-base leading-relaxed"
                >
                  <span className="absolute left-1 top-[0.65em] w-1.5 h-1.5 rounded-full bg-indigo-400 ring-2 ring-indigo-400/20" />
                  {item}
                </li>
              ))}
            </ul>
          )
        }
        return (
          <p
            key={i}
            className="text-slate-300 text-[15px] md:text-base leading-[1.8]"
          >
            {block.text}
          </p>
        )
      })}
    </div>
  )
}
