import type { Metadata } from "next";
import { buildPageMetadata } from "@/app/metadata";
import { ServiceSpecialtyPage } from "@/components/service-specialty-page";
import { getServiceSpecialty } from "../service-specialties";

const specialty = getServiceSpecialty("fraude-tecnologico-trazabilidad");

export const metadata: Metadata = buildPageMetadata({
  title: specialty.metadataTitle,
  description: specialty.metadataDescription,
  path: specialty.href,
});

export default function TechnologyFraudServicePage() {
  return <ServiceSpecialtyPage specialty={specialty} />;
}
