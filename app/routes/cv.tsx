// eslint-disable-next-line import/no-unresolved
import { Suspense } from "react";
import CVHolder from "~/components/cv/cv-holder";
import Loading from "~/components/loading/loading";

const Cv = () => {
  const pdf_paths = [
    "https://oplyzkzywrzqngstylak.supabase.co/storage/v1/object/public/bendocs_images/cv/CV.pdf",
    "https://oplyzkzywrzqngstylak.supabase.co/storage/v1/object/public/bendocs_images/cv/CV%20English.pdf",
  ];

  const image_paths = [
    "https://oplyzkzywrzqngstylak.supabase.co/storage/v1/object/public/bendocs_images/cv/CV.png",
    "https://oplyzkzywrzqngstylak.supabase.co/storage/v1/object/public/bendocs_images/cv/CV%20English.png?t=2024-01-14T12%3A43%3A24.261Z",
  ];

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col justify-center items-center w-full h-screen max-h-screen ">
        <CVHolder
          image_path={image_paths[0]}
          pdf_path={pdf_paths[0]}
          version={null}
        />
      </div>
    </Suspense>
  );
};

export default Cv;
