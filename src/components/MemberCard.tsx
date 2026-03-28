import { Member } from "@/data/members";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="card-cartoon bg-cream p-6 flex flex-col items-center text-center group">
      <div className="w-24 h-24 bg-gradient-to-br from-eggshell to-pearl blob-shape flex items-center justify-center text-4xl mb-4 border-[3px] border-charcoal group-hover:animate-wobble">
        {member.emoji}
      </div>
      <h3 className="font-display font-bold text-xl text-charcoal">{member.name}</h3>
      <p className="font-display text-sm text-beige font-bold mb-1">&ldquo;{member.nickname}&rdquo;</p>
      <p className="text-xs text-warmgray font-bold uppercase tracking-wider mb-3">{member.role}</p>
      <div className="w-12 h-1 bg-drip rounded-full mb-3 relative">
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-drip rounded-full" />
      </div>
      <p className="text-slategray text-sm leading-relaxed">{member.blurb}</p>
      <p className="mt-4 text-xs text-warmgray">Member since {member.joinDate}</p>
    </div>
  );
}
