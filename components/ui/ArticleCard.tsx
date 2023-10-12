import Image from "next/image";

const ArticleCard = ({
  isActive,
  artikel,
}: {
  isActive: boolean;
  artikel: any;
}) => {
  return (
    <div
      className={`cursor-pointer group transition-all duration-1000 lg:border-l border-black ${
        isActive ? "lg:w-[40%]" : "lg:w-[30%]"
      } flex-shrink-0`}
    >
      <div
        className={`relative w-full ${
          isActive ? "lg:h-[35vh]" : "lg:h-[30vh]"
        } h-[35vh] border flex items-center overflow-hidden transition-all`}
      >
        <Image
          src={artikel.imageUrl}
          alt="artikel-img"
          className="object-cover hover:scale-110 transition-all"
          fill
        />
      </div>

      <div className="p-6 pb-12 lg:p-16  space-y-4 flex-1">
        <h3 className="h4 md:h3">{artikel.title}</h3>
        <p className="bodytext-3 md:bodytext-2">{artikel.description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
