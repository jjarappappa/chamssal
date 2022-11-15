import React from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { useRecoilState } from "recoil";
import { signUpInputState } from "../../store/auth/signUpInputAtom";
signUpInputState;
export const Postcode = ({ className }: { className: string }) => {
  const [signUpInput, setSignUpInput] = useRecoilState(signUpInputState);
  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  const handleComplete = (data: {
    address: any;
    addressType: string;
    bname: string;
    buildingName: string;
    zonecode: string;
  }) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setSignUpInput({
      ...signUpInput,
      postcode: data.zonecode,
      address: fullAddress,
    });
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      우편번호 찾기
    </button>
  );
};
