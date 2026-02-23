import vietImg from "../pic/việt.png";
import thienImg from "../pic/thiện.png";
import phatImg from "../pic/phát.png";
import nhatImg from "../pic/nhật.png";

const members = [
  { name: "Nguyễn Quốc Việt", role: "Thành viên", image: vietImg },
  { name: "Nguyễn Minh Thiện", role: "Thành viên", image: thienImg },
  { name: "Nguyễn Tấn Phát", role: "Thành viên", image: phatImg },
  { name: "Nguyễn Minh Nhật", role: "Thành viên", image: nhatImg },
  { name: "Trương Thiên Phú Tài Lộc", role: "Thành viên", image: null },
];

export default function MembersSection() {
  return (
    <section className="members-section" id="section-members">
      <p className="members-section__eyebrow">Nhóm thực hiện</p>
      <h2 className="members-section__title">Thành Viên</h2>
      <p className="members-section__subtitle">
        Những con người đứng sau dự án chuyên đề MLN-111
      </p>

      <ul className="members-grid">
        {members.map((member, i) => (
          <li className="member-card" key={member.name}>
            <div className="member-card__avatar" data-index={i}>
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <span>{member.name.split(" ").pop().charAt(0)}</span>
              )}
            </div>
            <h3 className="member-card__name">{member.name}</h3>
            <p className="member-card__role">{member.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
