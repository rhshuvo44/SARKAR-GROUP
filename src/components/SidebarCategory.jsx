import { HashLink as Link } from "react-router-hash-link";
import ServicesData from "../jsonData/ServicesData.json";

const SidebarCategory = () => {
  return (
    <>
      <ul>
        {ServicesData.map((service) => (
          <li key={service.id}>
            <Link to={service.btnLink}>{service.title}</Link>
          </li>
        ))}
        
      </ul>
    </>
  );
};

export default SidebarCategory;
