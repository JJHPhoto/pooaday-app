import React from "react";
import DeveloperCards from "../../components/DeveloperCards";
import devs from "../../components/devs";
import Wrapper from "../../components/Wrapper";

function Developers() {
  return (
    <div>
      <Wrapper>
        {devs.map((dev) => {
          return (
            <DeveloperCards
              name={dev.name}
              image={dev.image}
              github={dev.github}
              linkedin={dev.linkedin}
              description={dev.description}
              role={dev.role}
              portfolio={dev.portfolio}
              title={dev.title}
            />
          );
        })}
      </Wrapper>
    </div>
  );
}

export default Developers;
