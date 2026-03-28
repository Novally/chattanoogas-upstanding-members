import { members } from "@/data/members";
import MemberCard from "./MemberCard";

export default function MembersSection() {
  return (
    <section id="members" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Upstanding Members</h2>
          <p className="section-subheading">11 dedicated individuals who consistently show up and deliver.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
