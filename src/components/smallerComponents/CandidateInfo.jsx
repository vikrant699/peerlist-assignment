/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { MdOutlineRemoveCircleOutline, MdCheck } from "react-icons/md";
import Verified from "../../assets/verified.svg";
import PeerlistLogo from "../../assets/PeerlistLogo.svg";

const CandidateInfo = ({
  avatar,
  name,
  referredBy,
  currentPosition,
  experience,
  holdingOffer,
  noticePeriod,
  peerlistMatch,
  applied,
  email,
  phone,
  destination,
}) => {
  const [finalAvatar, setFinalAvatar] = useState(null);
  const [referralAvatar, setReferralAvatar] = useState(null);

  useEffect(() => {
    const loadAvatar = async () => {
      if (avatar) {
        const avatarModule = await avatar;
        setFinalAvatar(avatarModule.default);
      }

      if (referredBy.avatar) {
        const referralAvatarModule = await referredBy.avatar;
        setReferralAvatar(referralAvatarModule.default);
      }
    };
    loadAvatar();
  }, [avatar, referredBy]);

  return (
    <div
      className="border border-solid rounded-[8px] p-[16px] space-y-2 mb-[8px] bg-white"
      style={{ width: "max-content", height: "max-content" }}
    >
      <div
        className="flex items-start justify-between"
        style={{ width: "260px" }}
      >
        {finalAvatar && (
          <img
            className="w-[32px] h-[32px] mr-2 border-1 border-solid rounded-full "
            src={finalAvatar}
            alt={"Avatar"}
          />
        )}
        {finalAvatar && (
          <ApplicationDetails
            applied={applied}
            peerlistMatch={peerlistMatch}
            referralAvatar={referralAvatar}
            referredBy={referredBy}
          />
        )}
      </div>
      <div>
        <div className="flex justify-between">
          <div className="flex">
            <p className="text-[14px] leading-[20px] font-semibold">{name}</p>
            {peerlistMatch ||
              (avatar && (email || phone) && (
                <img className="w-[16px] ml-1" src={Verified} />
              ))}
          </div>
          {!finalAvatar && (
            <ApplicationDetails
              applied={applied}
              peerlistMatch={peerlistMatch}
              referralAvatar={referralAvatar}
              referredBy={referredBy}
            />
          )}
        </div>
        <p className="text-[12px] leading-[16px]">{currentPosition}</p>
      </div>
      {(destination === 1 || destination === 2) && (
        <>
          <div className="flex justify-between" style={{ width: "260px" }}>
            <div>
              <p className="text-[10px] leading-14 text-gray-500">Experience</p>
              <p className="text-[12px] leading-[16px] font-semibold">
                {experience}
              </p>
            </div>
            {holdingOffer && (
              <div>
                <p className="text-[10px] leading-14 text-gray-500">
                  Holding offer?
                </p>
                <p className="text-[12px] leading-[16px] font-semibold">
                  {holdingOffer}
                </p>
              </div>
            )}
            <div>
              <p className="text-[10px] leading-14 text-gray-500">
                Notice Period
              </p>
              <p className="text-[12px] leading-[16px] font-semibold">
                {noticePeriod}
              </p>
            </div>
          </div>
          {destination === 1 && email && phone && (
            <div>
              <p className="text-[10px] leading-14 text-gray-500">Contact</p>
              {email && (
                <p className="text-[12px] leading-[16px] font-semibold">
                  {email}
                </p>
              )}
              {phone && (
                <p className="text-[12px] leading-[16px] font-semibold">
                  {phone}
                </p>
              )}
            </div>
          )}
          {destination === 2 && (
            <div className="flex">
              <MdCheck color={"#00AA45"} className="mr-1" />
              <p className="text-[10px] leading-14 text-gray-500">
                Shortlisted by{" "}
                <strong className="font-medium">Yogini Bende</strong> on 15 Dec
                2023
              </p>
            </div>
          )}
        </>
      )}
      {destination === 0 && (
        <div className="flex">
          <MdOutlineRemoveCircleOutline color={"#EB5757"} className="mr-1" />
          <p className="text-[10px] leading-14 text-gray-500">
            Rejected by <strong className="font-medium">Yogini Bende</strong> on
            15 Dec 2023
          </p>
        </div>
      )}
    </div>
  );
};

const ApplicationDetails = ({
  peerlistMatch,
  referredBy,
  referralAvatar,
  applied,
}) => {
  return (
    <>
      {peerlistMatch ? (
        <div className="flex justify-between items-center rounded-lg bg-[#E2F5EA] p-[2px] pr-[8px]">
          <img
            className="w-[16px] h-[16px] rounded=[24px]"
            src={PeerlistLogo}
          />
          <p className="text-green-400 font-semibold text-[10px] leading-14 ml-1">
            Matched
          </p>
        </div>
      ) : (
        <div className="flex space-x-2">
          {referredBy.avatar && referredBy.name && (
            <div className="flex space-x-1">
              <p className="text-[10px] leading-14 text-gray-500">Ref by</p>
              <img
                className="w-[16px] h-[16px] rounded-full"
                src={referralAvatar}
              />
              <p className="text-[10px] leading-14 text-gray-500 font-semibold">
                {referredBy.name}
              </p>
            </div>
          )}
          {applied && (
            <p className="text-[10px] leading-14 text-gray-500">{`Applied ${applied} ago`}</p>
          )}
        </div>
      )}
    </>
  );
};

export default CandidateInfo;
