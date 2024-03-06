import CompanyLogo from "../assets/PeerlistCompanyLogo.svg";
import IconButton from "./smallerComponents/IconButton";
import { FaChevronDown } from "react-icons/fa6";
import {
  BiPencil,
  BiShareAlt,
  BiLinkExternal,
  BiDotsVerticalRounded,
} from "react-icons/bi";
import JobPoster from "../assets/JobPoster.svg";

const JobDetails = () => {
  return (
    <div className="p-10 bg-white" style={{ width: 988 }}>
      <div className="flex items-start justify-start">
        <img className="w-20 -mt-2" src={CompanyLogo} alt="PeerlistLogo" />
        <div className="items-center" style={{ width: "100%" }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="ml-2 font-semibold text-[18px] leading-24">
                Software Engineer, Front End
              </p>
              <FaChevronDown className="ml-2 w-3" />
            </div>
            <div className="flex">
              <IconButton icon={<BiPencil size={12} />} />
              <IconButton icon={<BiShareAlt size={12} />} />
              <IconButton icon={<BiLinkExternal size={12} />} />
              <IconButton icon={<BiDotsVerticalRounded size={12} />} />
            </div>
          </div>
          <div className="ml-2 items-center justify-center">
            <p className="text-[14px] leading-20">
              {"at Peerlist • Full time • Remote (United States, Canada)"}
            </p>
          </div>
          <div className="flex ml-2 mt-8 items-center justify-between">
            <div className="flex space-x-4" style={{ width: "100%" }}>
              <p className="text-[12px] leading-16">
                <strong className="font-medium">78</strong> Candidates
              </p>
              <p className="text-[12px] leading-16">
                <strong className="font-medium">68</strong> Applied w/ Peerlist
              </p>
              <p className="text-[12px] leading-16">
                <strong className="font-medium">2872</strong> Views
              </p>
            </div>
            <div
              className="flex items-center justify-end"
              style={{ width: "100%" }}
            >
              <div>
                <p className="text-[10px] leading-14 text-gray-500">
                  Posted{" "}
                  <strong className="font-medium text-gray-900">1d ago</strong>
                </p>
              </div>
              <div className="flex items-center justify-end ml-2">
                <p className="text-[10px] leading-14 text-gray-500 ">by</p>
                <img className="w-5 h-5" src={JobPoster} alt={"Job Poster"} />
                <p className="text-[10px] leading-14 font-medium">
                  Akash Bhadange
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
