import React from "react";
import Styles from "../styles/footer.module.css"; // Import CSS module for component styling
import PrimaryButton from "./primaryButton"; // Assuming PrimaryButton is a custom component
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex flex-col items-start w-[98%] md:w-[90vw] gap-[50px] h-[min-content] justify-between p-10 bg-[linear-gradient(180deg,_rgba(7,_7,_9,_0.60)_10.42%,_rgba(7,_7,_9,_0.60)_100%),_radial-gradient(100%_140%_at_50%_0%,_rgba(7,_7,_9,_0.70)_0%,_rgba(7,_7,_9,_0.70)_39%,_rgba(75,_75,_75,_0.70)_100%),_linear-gradient(180deg,_rgba(5,_5,_5,_0.00)_0%,_#0A0A0A_100%)] rounded-[20px] border-[1px] border-[gray]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-5xl font-[600]">Start Building For Free</h1>
          <br />
          <h3 className="text-[20px] text-[gray]">
            Build and host your site wiht a custom domain free.
          </h3>
          <h3 className="text-[20px] text-[gray]">
            Upgrade anytime for expanded limits
          </h3>
          <br />
          <PrimaryButton text="Build For free"></PrimaryButton>
          <br />
        </div>
        <div></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col gap-5">
          <div className="logo">
            <Image src="/logoo.svg" alt="" width={150} height={150}></Image>
          </div>
          <h5>Build limitless websites. Faster.</h5>
          <div className="social-media flex flex-row items-center justify-start gap-[10px]">
            <Image
              src="/1.svg"
              alt=""
              width={20}
              height={20}
              className="w-[20px]"
            ></Image>
            <Image
              src="/2.svg"
              alt=""
              width={20}
              height={20}
              className="w-[20px]"
            ></Image>
            <Image
              src="/3.svg"
              alt=""
              width={10}
              height={10}
              className="w-[10px]"
            ></Image>
            <Image
              src="/4.svg"
              alt=""
              width={20}
              height={20}
              className="w-[20px]"
            ></Image>
            <Image
              src="/5.svg"
              alt=""
              width={20}
              height={20}
              className="w-[20px]"
            ></Image>
            <Image
              src="/6.svg"
              alt=""
              width={20}
              height={20}
              className="w-[20px]"
            ></Image>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 md:mt-[auto] mt-[50px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            <h2 className="text-[18px]">Features</h2>
            <p className="text-[18px] text-[gray]">Builder</p>
            <p className="text-[18px] text-[gray]">CMS</p>
            <p className="text-[18px] text-[gray]">SEO</p>
            <p className="text-[18px] text-[gray]">RestAPI</p>
            <p className="text-[18px] text-[gray]">Plugins</p>
            <p className="text-[18px] text-[gray]">Localization</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5">
            <h2 className="text-[18px]">Solution</h2>
            <p className="text-[18px] text-[gray]">For Designers</p>
            <p className="text-[18px] text-[gray]">For Developers</p>
            <p className="text-[18px] text-[gray]">For Agencies</p>
            <p className="text-[18px] text-[gray]">For Individuals</p>
            <p className="text-[18px] text-[gray]">For Enterprise</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-5">
            <h2 className="text-[18px]">Compare</h2>
            <p className="text-[18px] text-[gray]">WordPress</p>
            <p className="text-[18px] text-[gray]">WebFlow</p>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-5">
            <h2 className="text-[18px]">Company</h2>
            <p className="text-[18px] text-[gray]">Forum</p>
            <p className="text-[18px] text-[gray]">Pricing</p>
            <p className="text-[18px] text-[gray]">Community</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full gap-5">
        <div>
          <p className="text-[gray]">© 2024 Divhunt. All rights reserved</p>
        </div>
        <div className="flex flex-row gap-5 align-center">
          <span className="text-[gray]">Privacy Policy</span>
          <span className="text-[gray]">Terms and Conditions</span>
          <span className="text-[gray]">Acceptable Use</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
