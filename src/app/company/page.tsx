import CompanyImage from "@/components/CompanyImage";
import AboutCompany from "@/components/AboutCompany";
import MeAbout from "@/components/MeAbout";

const Company = () => {
    return (
        <div className="flex flex-col items-center py-50">
        <CompanyImage/>
        <br />
        <AboutCompany/>
        <br />
        <MeAbout/>
        </div>
        
    )
}
export default Company;