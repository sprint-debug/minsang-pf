import Layout from "../Organisms/Layout/Layout";
import ListContainer from "../Molecules/ListContainer/ListContainer";
import Section from "../Organisms/Section/Section";
import Gallery from "../Molecules/Gallery/Gallery";
import Polygon from "../Polygon/Polygon";
const PageMain = () => {
  /* data 예시 */
  const dataSkill = {
    skill: {
      icon: "icon-development",
      title: "Development SKill",
      skills: [
        "HTML/CSS",
        "Javascript/React",
        "Version Management",
        "Developement Optimized / QA"
      ]
    },
    communication: {
      icon: "ico-design",
      title: "Communication Design",
      skills: [
        "Commnuication",
        "Project Experience",
        "Collaborate Tools",
        "Creative Front-end"
      ]
    }
  };
  const dataExperience = {
    subtitle:
      "개발팀에서 프론트 개발 담당 팀원으로 근무하며 개발한 서비스 목록입니다.",
    gallery: [
      {
        id: 1,
        albumId: 1,
        title: "aaaaaa",
        url: "https://via.placeholder.com/600/f66b97"
      },
      {
        id: 2,
        albumId: 2,
        title: "bbbbbb",
        url: "https://via.placeholder.com/600/56a8c2"
      },
      {
        id: 3,
        albumId: 3,
        title: "bbbbbb",
        url: "https://via.placeholder.com/600/24f355"
      }
    ]
  };

  return (
    <div className="page-main">
      <Section title="hero">
        <Polygon backgroundColor={0xffffff} lineColor={0xff00ff} />
      </Section>
      <Section title="about" innerWrapper={true}>
        <Layout split="horizontal">
          <ListContainer data={dataSkill.skill} />
          <ListContainer data={dataSkill.communication} />
        </Layout>
      </Section>
      <Section
        title="experience"
        data={dataExperience.subtitle}
        innerWrapper={true}>
        <Layout>
          <Gallery data={dataExperience.gallery} />
        </Layout>
      </Section>
    </div>
  );
};

export default PageMain;
