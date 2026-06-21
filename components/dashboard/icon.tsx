import { AiOutlineAudit } from "react-icons/ai";
import { CiReceipt } from "react-icons/ci";
import {
  IoDocumentTextOutline,
  IoLocationOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { PiCertificate } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { SlLock } from "react-icons/sl";

export const IconPin = () => <IoLocationOutline />;

export const IconDoc = () => <IoDocumentTextOutline />;

export const IconReceipt = () => <CiReceipt strokeWidth={0.6} />;

export const IconPermit = () => <SlLock />;

export const IconCertificate = () => <PiCertificate />;

export const IconNGO = () => <IoPeopleOutline />;

export const IconAudit = () => <AiOutlineAudit />;

export const IconImpact = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
    />
  </svg>
);

export const IconDashboard = () => <RxDashboard strokeWidth={0.6} />;
