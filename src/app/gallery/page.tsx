import CodingSoon from "../components/CodingSoon";

export default function GalleryPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center relative overflow-hidden">
      <CodingSoon text="Coding soon" className="mb-12" style={{ color: "var(--foreground)" }} />
    </div>
  );
}