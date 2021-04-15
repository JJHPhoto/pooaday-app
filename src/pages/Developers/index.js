import React from "react";
import DeveloperCards from "../../components/DeveloperCards";
import devs from "../../components/devs";

function Developers() {
  return (
    <div>
      {devs.map((dev) => {
        return (
          <DeveloperCards
            key={dev.id}
            name={dev.name}
            image={dev.image}
            role={dev.role}
            github={dev.github}
            linkedin={dev.linkedin}
            description={dev.description}
            title={dev.title}
            portfolio={dev.portfolio}
          />
        );
      })}
    </div>
  );
}

export default Developers;
