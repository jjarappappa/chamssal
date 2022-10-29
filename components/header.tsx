import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header>
      <Image src="/images/logo.png" alt="로고" width={94.89} height={54.46} />
    </header>
  );
}

export default Header;
