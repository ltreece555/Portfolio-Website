import React from "react";
import Skill from "./Skill";

const SkillsList = () => {
  return (
    <>
      <Skill language="HTML" percentage={90} />
      <Skill language="CSS" percentage={90} />
      <Skill language="JavaScript" percentage={80} />
      <Skill language="React" percentage={65} />
      <Skill language="SQL" percentage={70} />
      <Skill language="UI Design" percentage={60} />
      <Skill language="UX Design" percentage={55} />
      <Skill language="Photoshop" percentage={60} />
      <Skill language="Illustrator" percentage={75} />
      <Skill language="Figma" percentage={50} />
    </>
  );
};

export default SkillsList;
